import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Tags } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { brandsDirectoryQuery } from "@/lib/queries";

export const Route = createFileRoute("/brands/")({
  head: () => ({
    meta: [
      { title: "Brand Drug List — MediVault India" },
      {
        name: "description",
        content:
          "Separate list of medicine brands with their pharmaceutical company and linked generic medicine.",
      },
    ],
  }),
  component: BrandsDirectory,
});

function BrandsDirectory() {
  const [search, setSearch] = useState("");
  const [maker, setMaker] = useState("all");
  const { data, isLoading, error } = useQuery(brandsDirectoryQuery());

  const makers = useMemo(
    () =>
      Array.from(
        new Map(
          (data ?? [])
            .filter((b) => b.manufacturers)
            .map((b) => [b.manufacturers!.id, b.manufacturers!.name]),
        ).entries(),
      ).sort((a, b) => a[1].localeCompare(b[1])),
    [data],
  );

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return (data ?? []).filter((b) => {
      const matchesMaker = maker === "all" || b.manufacturers?.id === maker;
      const text = [
        b.brand_name,
        b.composition,
        b.active_ingredient,
        b.manufacturers?.name,
        b.medicines?.display_name,
        b.medicines?.generic_name,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return matchesMaker && (!q || text.includes(q));
    });
  }, [data, maker, search]);

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Tags className="size-6 text-primary" aria-hidden />
          <h1 className="font-display text-2xl font-bold">Brand Drug List</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Brand names ko alag list mein dekho. Brand ek company ka product name hota hai;
          generic medicine uska actual drug/ingredient hota hai.
        </p>
      </header>

      <section className="surface grid gap-3 p-4 sm:grid-cols-[1fr_260px]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search brand, generic, salt or company..."
            className="pl-9"
          />
        </div>
        <select
          value={maker}
          onChange={(e) => setMaker(e.target.value)}
          className="h-10 rounded-md border bg-background px-3 text-sm"
          aria-label="Filter by company"
        >
          <option value="all">All pharma companies</option>
          {makers.map(([id, name]) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </section>

      {isLoading && <p className="text-sm text-muted-foreground">Loading brand list...</p>}
      {error && <p role="alert" className="text-sm text-destructive">{error.message}</p>}

      {!isLoading && !error && (
        <>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              {rows.length} brand records
            </p>
            <Badge variant="secondary">{makers.length} companies</Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {rows.map((b) => (
              <Link
                key={b.id}
                to="/brands/$id"
                params={{ id: b.id }}
                className="surface block p-4 transition-shadow hover:shadow-[var(--shadow-float)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold">{b.brand_name}</h2>
                  <Badge variant={b.verification_status === "verified" ? "secondary" : "outline"}>
                    {b.verification_status === "verified" ? "Verified" : "Needs review"}
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {b.manufacturers?.name ?? "Company not linked"}
                </p>
                <p className="mt-1 text-sm">
                  {b.medicines?.display_name ?? b.active_ingredient ?? b.composition ?? "Generic not linked yet"}
                </p>
                {b.strength && <p className="mt-1 text-xs text-muted-foreground">{b.strength}</p>}
              </Link>
            ))}
          </div>

          {rows.length === 0 && (
            <div className="surface p-6 text-center text-sm text-muted-foreground">
              No brand found. Search spelling ya company filter change karke dekho.
            </div>
          )}
        </>
      )}
    </div>
  );
}
