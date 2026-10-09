import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VerificationBadge } from "@/components/verification-badge";
import { brandQuery, medicineClassesQuery } from "@/lib/queries";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/brands/$id")({
  head: () => ({
    meta: [
      { title: "Brand Record — Manufacturer & Generic | MediVault India" },
      {
        name: "description",
        content:
          "Brand record showing the manufacturer, generic medicine, composition, strength, dosage form and verification status.",
      },
      { property: "og:title", content: "Brand Record — MediVault India" },
      {
        property: "og:description",
        content: "Manufacturer, generic medicine, composition and verification status.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandPage,
  errorComponent: ({ error }) => (
    <p role="alert" className="p-6 text-sm text-destructive">
      {error.message}
    </p>
  ),
  notFoundComponent: () => <p className="p-6 text-sm">Brand not found.</p>,
});

type BrandMedicineLink = {
  medicine_id: string;
  ingredient_order: number;
  verification_status: string;
  source: string | null;
  medicines: {
    id: string;
    slug: string;
    display_name: string;
    generic_name: string;
    active_ingredient: string | null;
    salt: string | null;
  } | null;
};

function Row({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="grid gap-0.5 border-b py-2 last:border-0 sm:grid-cols-[200px_1fr]">
      <dt className="text-xs font-medium text-muted-foreground">{label}</dt>
      <dd className="text-sm">{value || "Not yet verified"}</dd>
    </div>
  );
}

function BrandPage() {
  const { id } = Route.useParams();
  const { data: b, isLoading } = useQuery(brandQuery(id));
  const { data: classes } = useQuery(medicineClassesQuery(b?.medicines?.id));
  const { data: ingredientLinks = [], error: linkError } = useQuery({
    queryKey: ["brand-medicine-links", id],
    enabled: Boolean(b?.id),
    queryFn: async (): Promise<BrandMedicineLink[]> => {
      const { data, error } = await (supabase as any)
        .from("brand_medicines")
        .select("medicine_id, ingredient_order, verification_status, source, medicines(id, slug, display_name, generic_name, active_ingredient, salt)")
        .eq("brand_id", id)
        .order("ingredient_order");
      if (error) throw error;
      return (data ?? []) as BrandMedicineLink[];
    },
  });

  if (isLoading) return <p className="p-6 text-sm text-muted-foreground">Loading brand...</p>;
  if (!b) return <p className="p-6 text-sm">Brand not found.</p>;

  const therapeutic = (classes ?? []).filter((c) => c.class_type === "therapeutic");
  const pharmacological = (classes ?? []).filter((c) => c.class_type !== "therapeutic");
  const linkedMedicines = ingredientLinks
    .filter((link) => link.medicines)
    .map((link) => link.medicines!);
  const uniqueMedicines = [...new Map(linkedMedicines.map((medicine) => [medicine.id, medicine])).values()];
  const genericNames = uniqueMedicines.map((medicine) => medicine.display_name);
  const hasGenericMapping = uniqueMedicines.length > 0 || Boolean(b.medicines?.display_name);

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <Link to="/brands" className="text-xs text-muted-foreground hover:text-primary">
          ← All Brand Drugs
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="font-display text-2xl font-bold">{b.brand_name}</h1>
          <VerificationBadge status={b.verification_status} />
        </div>
        <p className="text-sm text-muted-foreground">
          Brand record. A brand can contain one generic ingredient or a combination of multiple ingredients.
        </p>
      </header>

      {linkError && (
        <p role="alert" className="text-sm text-destructive">
          Generic-link details could not be loaded: {linkError.message}
        </p>
      )}

      <dl className="surface p-4">
        <Row
          label="Manufacturer"
          value={b.manufacturers?.name ?? "Manufacturer not yet verified"}
        />
        <div className="grid gap-0.5 border-b py-2 sm:grid-cols-[200px_1fr]">
          <dt className="text-xs font-medium text-muted-foreground">Generic medicine(s)</dt>
          <dd className="space-y-1 text-sm">
            {uniqueMedicines.length ? uniqueMedicines.map((medicine) => {
              const mapping = ingredientLinks.find((link) => link.medicine_id === medicine.id);
              return (
                <div key={medicine.id} className="flex flex-wrap items-center gap-2">
                  <Link
                    to="/medicines/$slug"
                    params={{ slug: medicine.slug }}
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {medicine.display_name}
                  </Link>
                  {mapping?.verification_status !== "verified" && (
                    <Badge variant="outline">Link needs review</Badge>
                  )}
                </div>
              );
            }) : b.medicines ? (
              <Link
                to="/medicines/$slug"
                params={{ slug: b.medicines.slug }}
                className="text-primary underline-offset-4 hover:underline"
              >
                {b.medicines.display_name}
              </Link>
            ) : "Generic mapping pending verification"}
          </dd>
        </div>
        <Row
          label="Active ingredient"
          value={b.active_ingredient ?? b.medicines?.active_ingredient ?? uniqueMedicines.map((m) => m.active_ingredient).filter(Boolean).join(" + ")}
        />
        <Row
          label="Salt / composition"
          value={b.composition ?? b.medicines?.salt ?? uniqueMedicines.map((m) => m.salt).filter(Boolean).join(" + ")}
        />
        <Row label="Strength" value={b.strength} />
        <Row label="Dosage form" value={b.dosage_form} />
        <Row label="Route" value={b.route} />
        <Row
          label="Therapeutic classification"
          value={therapeutic.map((c) => c.name).join(", ")}
        />
        <Row
          label="Pharmacological classification"
          value={pharmacological.map((c) => c.name).join(", ")}
        />
        <Row
          label="Source / reference"
          value={b.references?.source_name ?? b.source}
        />
        <Row label="Last verified" value={b.last_verified} />
      </dl>

      <div className="flex flex-wrap gap-2">
        {(b.medicines || uniqueMedicines.length > 0) && (
          <Button asChild>
            <Link
              to="/medicines/$slug"
              params={{ slug: (uniqueMedicines[0] ?? b.medicines!).slug }}
            >
              View generic medicine
            </Link>
          </Button>
        )}
        {b.manufacturers && (
          <Button asChild variant="outline">
            <Link to="/manufacturers/$id" params={{ id: b.manufacturers.id }}>
              View manufacturer
            </Link>
          </Button>
        )}
      </div>

      {!hasGenericMapping && (
        <p className="surface p-4 text-xs text-muted-foreground">
          This brand's generic ingredient has not yet been mapped to a medicine record. The brand
          name alone is not enough to safely infer its composition.
        </p>
      )}

      {b.verification_status !== "verified" && (
        <p className="surface p-4 text-xs text-muted-foreground">
          <Badge variant="outline" className="mr-2">
            Needs verification
          </Badge>
          Parts of this record are not yet confirmed against a reliable source, so it is not shown
          as verified. Nothing here implies this brand is better, safer or recommended.
        </p>
      )}
    </div>
  );
}
