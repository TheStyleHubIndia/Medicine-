import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Stethoscope,
  Pill,
  Brain,
  BookOpen,
  ArrowRight,
  ShieldAlert,
  ArrowLeft,
  X,
  Sparkles,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Disclaimer } from "@/components/disclaimer";
import { medicinesQuery } from "@/lib/queries";
import {
  VERIFIED_CONDITIONS,
  PROBLEM_CATEGORIES,
  searchConditions,
  findRelatedMedicinesForCondition,
  resolveHinglishMeaning,
  detectSearchIntent,
  findMedicinesForDosageFormSearch,
  findMinoxidilMedicine,
  computeResultCountSemantics,
  HAIR_EDUCATION_GUIDE,
  type VerifiedCondition,
  type ProblemCategory,
  type ResultCountSemantics,
} from "@/lib/problem-search-engine";

interface ConditionsSearchParams {
  q?: string | undefined;
  c?: string | undefined;
  cat?: string | undefined;
}

export const Route = createFileRoute("/conditions")({
  validateSearch: (search: Record<string, unknown>): ConditionsSearchParams => ({
    q: typeof search["q"] === "string" ? search["q"] : undefined,
    c: typeof search["c"] === "string" ? search["c"] : undefined,
    cat: typeof search["cat"] === "string" ? search["cat"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Search by Problem / Condition — MediVault India" },
      {
        name: "description",
        content:
          "Dynamic health problem and symptom search. Find verified database medicines by condition (Acne, Hair fall, Acidity, High BP, Fever) with beginner-friendly Hinglish explanations.",
      },
      { property: "og:title", content: "Search by Problem / Condition — MediVault India" },
      {
        property: "og:description",
        content:
          "Educational condition & symptom search grounded in verified pharmacology database records.",
      },
    ],
  }),
  component: ConditionsPage,
});

const QUICK_EXAMPLES = [
  "hair fall",
  "hair growth",
  "minoxidil",
  "dandruff",
  "hair serum",
  "baal girna",
  "hair ke liye kya important hai",
  "acne",
  "cream",
  "lotion",
  "skin infection",
  "fever",
  "cough",
  "acidity",
  "joint pain",
  "diabetes",
  "high BP",
  "asthma",
];

function ResultCountSemanticsDisplay({
  semantics,
}: {
  semantics: ResultCountSemantics;
}) {
  return (
    <div className="rounded-lg border bg-muted/30 p-2.5 sm:p-3 text-xs space-y-1.5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground font-medium">
        <span className="flex items-center gap-1.5">
          <span className="font-bold text-primary">Unique medicines:</span>
          <Badge variant="secondary" className="font-semibold text-xs px-2 py-0">
            {semantics.uniqueMedicinesCount}
          </Badge>
        </span>
        <span className="text-muted-foreground/60">•</span>
        <span className="flex items-center gap-1.5">
          <span className="font-bold text-primary">Verified dosage forms:</span>
          <Badge variant="secondary" className="font-semibold text-xs px-2 py-0">
            {semantics.verifiedDosageFormsCount}
          </Badge>
        </span>
        <span className="text-muted-foreground/60">•</span>
        <span className="flex items-center gap-1.5">
          <span className="font-bold text-primary">Verified routes:</span>
          <Badge variant="secondary" className="font-semibold text-xs px-2 py-0">
            {semantics.verifiedRoutesCount}
          </Badge>
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-border/50 text-2xs text-muted-foreground">
        <span className="font-semibold text-foreground/80">Form categories:</span>
        {semantics.topicalCount > 0 && (
          <span className="rounded bg-background px-1.5 py-0.5 border">
            🧴 Topical: {semantics.topicalCount}
          </span>
        )}
        {semantics.oralCount > 0 && (
          <span className="rounded bg-background px-1.5 py-0.5 border">
            💊 Oral: {semantics.oralCount}
          </span>
        )}
        {semantics.injectableCount > 0 && (
          <span className="rounded bg-background px-1.5 py-0.5 border">
            💉 Injectable: {semantics.injectableCount}
          </span>
        )}
        {semantics.respiratoryCount > 0 && (
          <span className="rounded bg-background px-1.5 py-0.5 border">
            🌬️ Respiratory: {semantics.respiratoryCount}
          </span>
        )}
        {semantics.dropsCount > 0 && (
          <span className="rounded bg-background px-1.5 py-0.5 border">
            👁️ Drops: {semantics.dropsCount}
          </span>
        )}
        {semantics.otherCount > 0 && (
          <span className="rounded bg-background px-1.5 py-0.5 border">
            ✨ Other: {semantics.otherCount}
          </span>
        )}
      </div>
    </div>
  );
}

function ConditionsPage() {
  const navigate = useNavigate();
  const searchParams = Route.useSearch();
  const { data: medicines, isLoading: isMedsLoading } = useQuery(medicinesQuery());

  const [query, setQuery] = useState(searchParams.q || "");
  const [selectedCat, setSelectedCat] = useState<ProblemCategory | "all">(
    (searchParams.cat as ProblemCategory) || "all"
  );
  const [selectedConditionId, setSelectedConditionId] = useState<string | null>(
    searchParams.c || null
  );
  const [productFormFilter, setProductFormFilter] = useState<
    "all" | "topical" | "oral" | "respiratory" | "injectable" | "drops" | "other"
  >("all");

  // Sync state if search params change externally
  useEffect(() => {
    if (searchParams.c) {
      setSelectedConditionId(searchParams.c);
    }
    if (searchParams.q !== undefined && searchParams.q !== query) {
      setQuery(searchParams.q);
    }
  }, [searchParams.c, searchParams.q]);

  // Reset form filter when selected condition or query changes
  useEffect(() => {
    setProductFormFilter("all");
  }, [selectedConditionId, query]);

  // Search intent detection
  const searchIntent = useMemo(() => {
    return detectSearchIntent(query);
  }, [query]);

  // Filter conditions based on search query and category
  const matchingConditions = useMemo(() => {
    let list = searchConditions(query);
    if (selectedCat !== "all") {
      list = list.filter((c) => c.category === selectedCat);
    }
    return list;
  }, [query, selectedCat]);

  // Selected condition object
  const activeCondition: VerifiedCondition | undefined = useMemo(() => {
    if (selectedConditionId) {
      return VERIFIED_CONDITIONS.find((c) => c.id === selectedConditionId);
    }
    // Only auto-open if intent is condition and not dosage form or cosmetic unsupported
    if (
      searchIntent.intent === "condition" &&
      query.trim().length >= 3 &&
      matchingConditions.length === 1
    ) {
      return matchingConditions[0];
    }
    return undefined;
  }, [selectedConditionId, query, matchingConditions, searchIntent.intent]);

  // Medicines matching the active condition
  const relatedMedicines = useMemo(() => {
    if (!activeCondition || !medicines) return [];
    return findRelatedMedicinesForCondition(activeCondition, medicines);
  }, [activeCondition, medicines]);

  // Medicines matching dosage form search if intent is dosage_form and no condition selected
  const dosageFormMedicines = useMemo(() => {
    if (
      selectedConditionId ||
      searchIntent.intent !== "dosage_form" ||
      !searchIntent.dosageDef ||
      !medicines
    ) {
      return [];
    }
    return findMedicinesForDosageFormSearch(searchIntent.dosageDef, medicines);
  }, [selectedConditionId, searchIntent, medicines]);

  // Sub-categorized by verified dosage forms for condition search
  const topicalList = useMemo(
    () => relatedMedicines.filter((m) => m.formClassification.isTopical),
    [relatedMedicines]
  );
  const oralList = useMemo(
    () => relatedMedicines.filter((m) => m.formClassification.isOral),
    [relatedMedicines]
  );
  const respiratoryList = useMemo(
    () => relatedMedicines.filter((m) => m.formClassification.isRespiratory),
    [relatedMedicines]
  );
  const injectableList = useMemo(
    () => relatedMedicines.filter((m) => m.formClassification.isInjectable),
    [relatedMedicines]
  );
  const dropsList = useMemo(
    () => relatedMedicines.filter((m) => m.formClassification.isDrops),
    [relatedMedicines]
  );
  const otherList = useMemo(
    () => relatedMedicines.filter((m) => m.formClassification.isOther),
    [relatedMedicines]
  );

  const displayedMedicines = useMemo(() => {
    if (productFormFilter === "topical") return topicalList;
    if (productFormFilter === "oral") return oralList;
    if (productFormFilter === "respiratory") return respiratoryList;
    if (productFormFilter === "injectable") return injectableList;
    if (productFormFilter === "drops") return dropsList;
    if (productFormFilter === "other") return otherList;
    return relatedMedicines;
  }, [
    productFormFilter,
    topicalList,
    oralList,
    respiratoryList,
    injectableList,
    dropsList,
    otherList,
    relatedMedicines,
  ]);

  // Sub-categorized by verified dosage forms for dosage form search
  const dosageTopicalList = useMemo(
    () => dosageFormMedicines.filter((m) => m.formClassification.isTopical),
    [dosageFormMedicines]
  );
  const dosageOralList = useMemo(
    () => dosageFormMedicines.filter((m) => m.formClassification.isOral),
    [dosageFormMedicines]
  );
  const dosageRespiratoryList = useMemo(
    () => dosageFormMedicines.filter((m) => m.formClassification.isRespiratory),
    [dosageFormMedicines]
  );
  const dosageInjectableList = useMemo(
    () => dosageFormMedicines.filter((m) => m.formClassification.isInjectable),
    [dosageFormMedicines]
  );
  const dosageDropsList = useMemo(
    () => dosageFormMedicines.filter((m) => m.formClassification.isDrops),
    [dosageFormMedicines]
  );
  const dosageOtherList = useMemo(
    () => dosageFormMedicines.filter((m) => m.formClassification.isOther),
    [dosageFormMedicines]
  );

  const displayedDosageMedicines = useMemo(() => {
    if (productFormFilter === "topical") return dosageTopicalList;
    if (productFormFilter === "oral") return dosageOralList;
    if (productFormFilter === "respiratory") return dosageRespiratoryList;
    if (productFormFilter === "injectable") return dosageInjectableList;
    if (productFormFilter === "drops") return dosageDropsList;
    if (productFormFilter === "other") return dosageOtherList;
    return dosageFormMedicines;
  }, [
    productFormFilter,
    dosageTopicalList,
    dosageOralList,
    dosageRespiratoryList,
    dosageInjectableList,
    dosageDropsList,
    dosageOtherList,
    dosageFormMedicines,
  ]);

  // Minoxidil medicine data when intent is medicine_product
  const minoxidilMedicines = useMemo(() => {
    if (searchIntent.intent !== "medicine_product" || !medicines) return [];
    return findMinoxidilMedicine(medicines);
  }, [searchIntent.intent, medicines]);

  const minoxidilTopicalList = useMemo(
    () => minoxidilMedicines.filter((m) => m.formClassification.isTopical),
    [minoxidilMedicines]
  );

  const displayedMinoxidilMedicines = useMemo(() => {
    if (productFormFilter === "topical") return minoxidilTopicalList;
    return minoxidilMedicines;
  }, [productFormFilter, minoxidilTopicalList, minoxidilMedicines]);

  // Hair educational medicines when intent is hair_educational
  const hairEduCondition = useMemo(() => {
    return VERIFIED_CONDITIONS.find((c) => c.id === "hair-fall");
  }, []);

  const hairEducationalMedicines = useMemo(() => {
    if (searchIntent.intent !== "hair_educational" || !hairEduCondition || !medicines) {
      return [];
    }
    return findRelatedMedicinesForCondition(hairEduCondition, medicines);
  }, [searchIntent.intent, hairEduCondition, medicines]);

  const hairEduTopicalList = useMemo(
    () => hairEducationalMedicines.filter((m) => m.formClassification.isTopical),
    [hairEducationalMedicines]
  );
  const hairEduOralList = useMemo(
    () => hairEducationalMedicines.filter((m) => m.formClassification.isOral),
    [hairEducationalMedicines]
  );
  const hairEduRespiratoryList = useMemo(
    () => hairEducationalMedicines.filter((m) => m.formClassification.isRespiratory),
    [hairEducationalMedicines]
  );
  const hairEduInjectableList = useMemo(
    () => hairEducationalMedicines.filter((m) => m.formClassification.isInjectable),
    [hairEducationalMedicines]
  );
  const hairEduDropsList = useMemo(
    () => hairEducationalMedicines.filter((m) => m.formClassification.isDrops),
    [hairEducationalMedicines]
  );
  const hairEduOtherList = useMemo(
    () => hairEducationalMedicines.filter((m) => m.formClassification.isOther),
    [hairEducationalMedicines]
  );

  const displayedHairEduMedicines = useMemo(() => {
    if (productFormFilter === "topical") return hairEduTopicalList;
    if (productFormFilter === "oral") return hairEduOralList;
    if (productFormFilter === "respiratory") return hairEduRespiratoryList;
    if (productFormFilter === "injectable") return hairEduInjectableList;
    if (productFormFilter === "drops") return hairEduDropsList;
    if (productFormFilter === "other") return hairEduOtherList;
    return hairEducationalMedicines;
  }, [
    productFormFilter,
    hairEduTopicalList,
    hairEduOralList,
    hairEduRespiratoryList,
    hairEduInjectableList,
    hairEduDropsList,
    hairEduOtherList,
    hairEducationalMedicines,
  ]);

  // Result count semantics for accurate distinction across all views
  const conditionSemantics = useMemo(
    () => computeResultCountSemantics(relatedMedicines),
    [relatedMedicines]
  );
  const minoxidilSemantics = useMemo(
    () => computeResultCountSemantics(minoxidilMedicines),
    [minoxidilMedicines]
  );
  const hairEduSemantics = useMemo(
    () => computeResultCountSemantics(hairEducationalMedicines),
    [hairEducationalMedicines]
  );
  const dosageSemantics = useMemo(
    () => computeResultCountSemantics(dosageFormMedicines),
    [dosageFormMedicines]
  );

  function handleSelectCondition(cond: VerifiedCondition) {
    setSelectedConditionId(cond.id);
    const searchObj: ConditionsSearchParams = { c: cond.id };
    if (query) searchObj.q = query;
    if (selectedCat !== "all") searchObj.cat = selectedCat;
    void navigate({
      to: "/conditions",
      search: searchObj,
    });
  }

  function handleClearCondition() {
    setSelectedConditionId(null);
    const searchObj: ConditionsSearchParams = {};
    if (query) searchObj.q = query;
    if (selectedCat !== "all") searchObj.cat = selectedCat;
    void navigate({
      to: "/conditions",
      search: searchObj,
    });
  }

  function handleSearchChange(val: string) {
    setQuery(val);
    if (selectedConditionId) {
      setSelectedConditionId(null);
    }
  }

  function handleQuickExample(ex: string) {
    setQuery(ex);
    setSelectedConditionId(null);
    setSelectedCat("all");
    const searchObj: ConditionsSearchParams = { q: ex };
    void navigate({
      to: "/conditions",
      search: searchObj,
    });
  }

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <header className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="gap-1.5 font-medium">
            <Sparkles className="size-3.5 text-primary" />
            Verified Dynamic Learning System
          </Badge>
          <Badge variant="outline">Roman Hinglish + Medical Terms</Badge>
        </div>
        <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl flex items-center gap-2.5">
          <Stethoscope className="size-7 text-primary shrink-0" />
          <span>🔎 Search by Problem / Condition</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Health problem, symptom ya disease condition search karein. Roman Hinglish aur Medical
          terms dono supported hain. Sirf verified database indication records se connected medicines
          dikhenge.
        </p>
      </header>

      {/* Search Input Bar */}
      <div className="surface p-4 rounded-xl space-y-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search health problem, symptom (e.g. acne, pimples, hair fall, acidity, high BP, joint pain, cough)..."
            className="pl-10 pr-10 h-11 text-base shadow-none"
            aria-label="Search problem or condition"
          />
          {query && (
            <button
              type="button"
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Quick Example Searches */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-medium text-muted-foreground mr-1">Quick examples:</span>
          {QUICK_EXAMPLES.map((ex) => (
            <Button
              key={ex}
              type="button"
              variant={query.toLowerCase().trim() === ex.toLowerCase() ? "default" : "outline"}
              size="sm"
              className="h-7 text-xs px-2.5"
              onClick={() => handleQuickExample(ex)}
            >
              {ex}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-1.5 items-center">
        <Button
          size="sm"
          variant={selectedCat === "all" ? "default" : "outline"}
          onClick={() => setSelectedCat("all")}
          className="h-8 text-xs font-medium"
        >
          All Categories
        </Button>
        {PROBLEM_CATEGORIES.map((cat) => (
          <Button
            key={cat.id}
            size="sm"
            variant={selectedCat === cat.id ? "default" : "outline"}
            onClick={() => setSelectedCat(cat.id)}
            className="h-8 text-xs font-medium gap-1"
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </Button>
        ))}
      </div>

      {/* Active Condition View OR Dosage Form Search OR Cosmetic Unsupported OR List of Matching Conditions */}
      {activeCondition ? (
        /* =========================================================================
         * CONDITION DETAIL VIEW (Standardized 8-section layout)
         * ========================================================================= */
        <div className="space-y-6 animate-fade-up">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearCondition}
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span>Back to all conditions</span>
            </Button>
            <Badge variant="outline" className="text-xs capitalize">
              {PROBLEM_CATEGORIES.find((c) => c.id === activeCondition.category)?.name || activeCondition.category}
            </Badge>
          </div>

          <div className="rounded-xl border border-primary/20 bg-card p-5 sm:p-7 shadow-sm space-y-6">
            {/* 🔴 1. Condition Name */}
            <div className="border-b pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">🔴</span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                  {activeCondition.name}
                </h2>
              </div>
              <p className="mt-1 text-sm font-medium text-primary">
                📚 Medical term: {activeCondition.medicalTerm}
              </p>
            </div>

            {/* 🧠 2. Simple Hinglish Meaning */}
            <section className="space-y-2 rounded-lg bg-primary/5 p-4 border border-primary/10">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Brain className="size-4" />
                <span>🧠 Ye kya hai? (Simple Hinglish Meaning)</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-foreground font-medium">
                {activeCondition.simpleHinglish}
              </p>
              {activeCondition.simpleChain && (
                <div className="mt-2 rounded-md bg-muted/60 p-2.5 text-xs sm:text-sm font-mono text-primary flex items-center gap-1.5 overflow-x-auto">
                  <span>{activeCondition.simpleChain}</span>
                </div>
              )}
              <div className="pt-1 text-xs text-muted-foreground flex items-center gap-1.5">
                <BookOpen className="size-3.5 text-primary" />
                <span>
                  <strong>Simple Meaning:</strong> {activeCondition.name.split(" ")[0]} = {activeCondition.simpleHinglish}
                </span>
              </div>
            </section>

            {/* 📖 3. Medical Meaning */}
            <section className="space-y-1.5">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <BookOpen className="size-4 text-primary" />
                <span>📖 Medical / Clinical Meaning</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {activeCondition.medicalMeaning}
              </p>
            </section>

            {/* ⚠️ 4. Common Symptoms */}
            <section className="space-y-2">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <span className="text-base">⚠️</span>
                <span>Common Symptoms (Aam Lakshan)</span>
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                {activeCondition.commonSymptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2 rounded-lg border bg-muted/30 p-2.5">
                    <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 💡 Hair Biology & Scalp Overview for Hair Fall */}
            {activeCondition.id === "hair-fall" && (
              <section className="space-y-3.5 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <div className="border-b pb-2">
                  <h3 className="text-base font-bold flex items-center gap-2 text-foreground">
                    <Sparkles className="size-4 text-primary" />
                    <span>Hair Health Biology &amp; Growth Cycle Guide</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Follicle anatomy, growth cycle, scalp microbiome aur hair fall ke scientifically grounded factors.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pt-1">
                  {HAIR_EDUCATION_GUIDE.map((section, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border bg-card p-3.5 space-y-1.5 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{section.icon}</span>
                          <h4 className="font-bold text-xs text-foreground">
                            {section.hinglishTitle}
                          </h4>
                        </div>
                        <p className="text-2xs text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                      <ul className="space-y-0.5 pt-1 border-t text-[10px] text-muted-foreground/80">
                        {section.bulletPoints.map((bp, bidx) => (
                          <li key={bidx} className="flex items-start gap-1">
                            <span className="size-1 rounded-full bg-primary mt-1 shrink-0" />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 🎯 5. Database-recorded Medicine & Product Connections */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-3">
                <div>
                  <h3 className="text-base font-bold flex items-center gap-2 text-foreground">
                    <Pill className="size-5 text-primary" />
                    <span>💊 Related Medicines &amp; Products in Database</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {relatedMedicines.length} verified
                    </Badge>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Oral medicines, creams, ointments, gels, lotions, shampoos, inhalers, injections aur drops.
                  </p>
                </div>
              </div>

              {/* Task 4: Result count semantics distinguishing unique medicines, verified forms, routes & categories */}
              {relatedMedicines.length > 0 && (
                <ResultCountSemanticsDisplay semantics={conditionSemantics} />
              )}

              {/* Form Filter Pills (Dynamically generated only when verified items exist) */}
              {relatedMedicines.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs font-semibold text-muted-foreground mr-1">Filter by Form:</span>
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "all" ? "default" : "outline"}
                    className="h-7 text-xs font-medium"
                    onClick={() => setProductFormFilter("all")}
                  >
                    All Products ({relatedMedicines.length})
                  </Button>
                  {topicalList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "topical" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("topical")}
                    >
                      <span>🧴</span>
                      <span>Topical ({topicalList.length})</span>
                    </Button>
                  )}
                  {oralList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "oral" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("oral")}
                    >
                      <span>💊</span>
                      <span>Oral ({oralList.length})</span>
                    </Button>
                  )}
                  {respiratoryList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "respiratory" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("respiratory")}
                    >
                      <span>🌬️</span>
                      <span>Respiratory ({respiratoryList.length})</span>
                    </Button>
                  )}
                  {injectableList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "injectable" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("injectable")}
                    >
                      <span>💉</span>
                      <span>Injectable ({injectableList.length})</span>
                    </Button>
                  )}
                  {dropsList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "drops" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("drops")}
                    >
                      <span>👁️</span>
                      <span>Drops ({dropsList.length})</span>
                    </Button>
                  )}
                  {otherList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "other" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("other")}
                    >
                      <span>✨</span>
                      <span>Other ({otherList.length})</span>
                    </Button>
                  )}
                </div>
              )}

              <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-900 dark:text-amber-200">
                <p className="font-semibold flex items-center gap-1.5">
                  <Info className="size-4 shrink-0" />
                  <span>Educational Pharmacology Reference:</span>
                </p>
                <p className="mt-0.5 leading-relaxed">
                  Database mein is condition se sambandhit verified indications wali medicines aur topical
                  products show kiye gaye hain. Yeh automated prescription ya recommendation nahi hai.
                  Medical information verified database records se li gayi hai. Kisi bhi medicine/product
                  ko use karne se pehle registered doctor ya healthcare professional se consult karein.
                </p>
              </div>

              {isMedsLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-20 w-full rounded-lg" />
                  <Skeleton className="h-20 w-full rounded-lg" />
                </div>
              ) : displayedMedicines.length === 0 ? (
                <p className="rounded-lg border p-5 text-center text-sm text-muted-foreground">
                  Current database mein is filter ke liye verified product record available nahi hai.
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {displayedMedicines.map((m) => (
                    <article
                      key={m.medicineId}
                      className="flex flex-col justify-between rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm space-y-3"
                    >
                      <div className="space-y-2.5">
                        {/* Header: Icon, Name, Form Badge, Class */}
                        <div className="flex items-start justify-between gap-2 border-b pb-2.5">
                          <div className="flex items-start gap-2.5">
                            <span className="text-2xl shrink-0 mt-0.5" aria-hidden>
                              {m.formClassification.formIcon}
                            </span>
                            <div>
                              <h4 className="font-bold text-base text-foreground leading-tight">
                                {m.displayName}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                Generic / Active: <strong>{m.genericName}</strong>
                              </p>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-[11px] shrink-0 font-medium">
                            {m.drugClass}
                          </Badge>
                        </div>

                        {/* Dosage Form & Route Visual Identification */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                          <Badge variant="outline" className="font-semibold text-primary border-primary/30 bg-primary/5">
                            Form: {m.dosageForms.length > 0 ? m.dosageForms.join(", ") : m.formClassification.badgeLabel}
                          </Badge>
                          <Badge variant="outline" className="text-muted-foreground">
                            Route: {m.routes.length > 0 ? m.routes.join(", ") : "Current database mein verified route available nahi hai."}
                          </Badge>
                        </div>

                        {/* Verified Indication & Educational Wording */}
                        <div className="rounded-lg bg-muted/60 p-3 text-xs space-y-1.5">
                          <p className="font-semibold text-primary flex items-center gap-1.5">
                            <CheckCircle2 className="size-4 shrink-0" />
                            <span>{m.relationReason}</span>
                          </p>
                          <p className="text-foreground/90 leading-relaxed">
                            <strong className="text-foreground">Verified Indication:</strong> “{m.matchedIndication}”
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                            {m.simpleExplanation}
                          </p>
                        </div>

                        {/* Task 6: Relevant verified form & safety note when multi-form medicine */}
                        {m.relevantFormForIndication && (
                          <div className="rounded-md border border-amber-500/30 bg-amber-500/5 p-2.5 text-xs space-y-1">
                            <p className="font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                              <span>🎯 Verified Form for this Condition:</span>
                              <span className="text-foreground font-medium">{m.relevantFormForIndication}</span>
                            </p>
                            {m.formSafetyNote && (
                              <p className="text-2xs text-muted-foreground leading-relaxed">
                                {m.formSafetyNote}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Difficult Words on Product Card */}
                        {m.difficultTerms.length > 0 && (
                          <div className="rounded-md border border-muted bg-muted/20 p-2.5 text-xs space-y-1">
                            <span className="font-bold text-muted-foreground text-2xs uppercase tracking-wider block">
                              📖 Difficult Terms Meaning:
                            </span>
                            <div className="space-y-1">
                              {m.difficultTerms.map((dt) => (
                                <p key={dt.term} className="text-muted-foreground leading-tight">
                                  <strong className="text-foreground">{dt.term}:</strong> {dt.simpleHinglish}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer: Open Learning Details Button */}
                      <div className="pt-2 border-t flex items-center justify-between">
                        <span className="text-2xs text-muted-foreground italic">
                          Verified database record
                        </span>
                        <Button asChild size="sm" className="gap-1.5 text-xs font-semibold">
                          <Link to="/medicines/$slug" params={{ slug: m.medicineSlug }}>
                            <span>Open Learning Details</span>
                            <ArrowRight className="size-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            {/* 📚 6. Difficult Words — Simple Hinglish Meaning */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2 text-foreground">
                <BookOpen className="size-4 text-primary" />
                <span>📚 Difficult Words — Simple Hinglish Meaning</span>
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {activeCondition.difficultWords.map((word) => {
                  const resolved = resolveHinglishMeaning(word);
                  return (
                    <div key={word} className="rounded-lg border bg-muted/20 p-3 space-y-1 text-xs">
                      <p className="font-bold text-primary capitalize">{resolved.term}</p>
                      <p className="text-muted-foreground leading-relaxed">{resolved.simpleHinglish}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 🧠 7. Easy Memory Trick */}
            <section className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Brain className="size-4" />
                <span>🧠 Easy Memory Trick</span>
              </div>
              <p className="text-sm font-mono font-medium text-foreground bg-background/80 rounded-md p-2 border">
                {activeCondition.memoryTrick}
              </p>
            </section>

            {/* 🚨 8. Important Warning / Red Flags */}
            <section className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-destructive font-semibold text-sm">
                <ShieldAlert className="size-4" />
                <span>🚨 Important Warning / Red Flags</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed font-medium">
                {activeCondition.redFlags || "Verified warning information current database mein available nahi hai."}
              </p>
            </section>
          </div>
        </div>
      ) : !selectedConditionId && searchIntent.intent === "medicine_product" && minoxidilMedicines.length > 0 ? (
        /* =========================================================================
         * MINOXIDIL VERIFIED MEDICINE SEARCH & FORM COMPARISON VIEW
         * ========================================================================= */
        <div className="space-y-6 animate-fade-up">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuery("")}
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span>Back to all conditions</span>
            </Button>
            <Badge variant="outline" className="text-xs capitalize">
              Verified Medicine Search
            </Badge>
          </div>

          <div className="rounded-xl border border-primary/20 bg-card p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧴</span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                  Verified Medicine: Minoxidil (Topical)
                </h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Database mein androgenetic alopecia (pattern hair loss) ke liye verified topical medicine record.
              </p>
            </div>

            {/* Quick Summary Pill Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Badge variant="outline" className="font-semibold text-primary border-primary/30 bg-primary/5">
                Generic: Minoxidil (Topical)
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                Verified Forms: Topical Solution, Topical Foam
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                Verified Route: Topical
              </Badge>
              <Badge variant="secondary">
                Category: Dermatology
              </Badge>
            </div>

            {/* Task 4: Result count semantics */}
            <ResultCountSemanticsDisplay semantics={minoxidilSemantics} />

            {/* Form Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs font-semibold text-muted-foreground mr-1">Filter by Form:</span>
              <Button
                type="button"
                size="sm"
                variant={productFormFilter === "all" ? "default" : "outline"}
                className="h-7 text-xs font-medium"
                onClick={() => setProductFormFilter("all")}
              >
                All Products ({minoxidilMedicines.length})
              </Button>
              {minoxidilTopicalList.length > 0 && (
                <Button
                  type="button"
                  size="sm"
                  variant={productFormFilter === "topical" ? "default" : "outline"}
                  className="h-7 text-xs font-medium gap-1"
                  onClick={() => setProductFormFilter("topical")}
                >
                  <span>🧴</span>
                  <span>Topical ({minoxidilTopicalList.length})</span>
                </Button>
              )}
            </div>

            {/* ⚖️ Available Verified Form Comparison (Requirement 4) */}
            <div className="rounded-xl border border-muted bg-muted/20 p-5 space-y-4">
              <div className="border-b pb-2.5">
                <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                  <span>⚖️</span>
                  <span>Available Verified Form Comparison (Solution vs Foam)</span>
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Clinical pharmacology details based strictly on verified database records. Dono forms mein same active vasodilator molecule hota hai.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Form A: Topical Solution */}
                <div className="rounded-lg border bg-card p-4 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                        <span>💧</span>
                        <span>Topical Solution</span>
                      </h4>
                      <Badge variant="outline" className="text-2xs font-normal">
                        Available verified form
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Verified Route:</strong> Topical (Scalp)
                      </p>
                      <p>
                        <strong className="text-foreground">Database-recorded indication:</strong> Androgenetic alopecia (male &amp; female pattern hair loss)
                      </p>
                      <p className="text-foreground/90 pt-1 leading-relaxed">
                        Dropper ya spray applicator ke dwara direct scalp par apply kiya jata hai jisse liquid scalp tak accurate reach karta hai.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <Button asChild size="sm" variant="outline" className="w-full text-xs font-semibold gap-1">
                      <Link to="/medicines/$slug" params={{ slug: "minoxidil-topical" }}>
                        <span>Open Learning Details</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Form B: Topical Foam */}
                <div className="rounded-lg border bg-card p-4 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                        <span>🫧</span>
                        <span>Topical Foam</span>
                      </h4>
                      <Badge variant="outline" className="text-2xs font-normal">
                        Available verified form
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Verified Route:</strong> Topical (Scalp)
                      </p>
                      <p>
                        <strong className="text-foreground">Database-recorded indication:</strong> Androgenetic alopecia (male &amp; female pattern hair loss)
                      </p>
                      <p className="text-foreground/90 pt-1 leading-relaxed">
                        Mousse/foam format jo quickly dry hota hai aur baalon mein bina dripping ke spread hota hai. Propylene-glycol-sensitive scalp ke liye helpful rehta hai.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <Button asChild size="sm" variant="outline" className="w-full text-xs font-semibold gap-1">
                      <Link to="/medicines/$slug" params={{ slug: "minoxidil-topical" }}>
                        <span>Open Learning Details</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Neutral clinical note */}
              <div className="rounded-md bg-background/80 border p-3 text-xs text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">Clinical Guidance Note:</span> Dono formulations verified Minoxidil contain karti hain aur dono ka database-recorded indication androgenetic alopecia hai. Form preference scalp sensitivity, convenience aur physician advice par depend karti hai. Kisi bhi medicine ya formulation ko unverified 'best' ya 'better' classify nahi kiya gaya hai.
              </div>
            </div>

            {/* Educational pharmacology disclaimer */}
            <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-900 dark:text-amber-200">
              <p className="font-semibold flex items-center gap-1.5">
                <Info className="size-4 shrink-0" />
                <span>Educational Pharmacology Reference:</span>
              </p>
              <p className="mt-0.5 leading-relaxed">
                Minoxidil ka use start karne se pehle qualified dermatologist ya trichologist se scalp evaluation karayein. Minoxidil ko eyes, broken skin ya non-scalp areas par use nahi karna chahiye.
              </p>
            </div>

            {/* Medicine Card Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {displayedMinoxidilMedicines.map((m) => (
                <article
                  key={m.medicineId}
                  className="flex flex-col justify-between rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2 border-b pb-2.5">
                      <div className="flex items-start gap-2.5">
                        <span className="text-2xl shrink-0 mt-0.5" aria-hidden>
                          {m.formClassification.formIcon}
                        </span>
                        <div>
                          <h4 className="font-bold text-base text-foreground leading-tight">
                            {m.displayName}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Generic / Active: <strong>{m.genericName}</strong>
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-[11px] shrink-0 font-medium">
                        {m.drugClass}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 text-xs">
                      <Badge variant="outline" className="font-semibold text-primary border-primary/30 bg-primary/5">
                        Form: {m.dosageForms.length > 0 ? m.dosageForms.join(", ") : m.formClassification.badgeLabel}
                      </Badge>
                      <Badge variant="outline" className="text-muted-foreground">
                        Route: {m.routes.length > 0 ? m.routes.join(", ") : "Current database mein verified route available nahi hai."}
                      </Badge>
                    </div>

                    <div className="rounded-lg bg-muted/60 p-3 text-xs space-y-1.5">
                      <p className="font-semibold text-primary flex items-center gap-1.5">
                        <CheckCircle2 className="size-4 shrink-0" />
                        <span>{m.relationReason}</span>
                      </p>
                      <p className="text-foreground/90 leading-relaxed">
                        <strong className="text-foreground">Verified Indication:</strong> “{m.matchedIndication}”
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                        {m.simpleExplanation}
                      </p>
                    </div>

                    {/* Task 6: Relevant verified form & safety note when multi-form medicine */}
                    {m.relevantFormForIndication && (
                      <div className="rounded-md border border-amber-500/30 bg-amber-500/5 p-2.5 text-xs space-y-1">
                        <p className="font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                          <span>🎯 Verified Form for this Condition:</span>
                          <span className="text-foreground font-medium">{m.relevantFormForIndication}</span>
                        </p>
                        {m.formSafetyNote && (
                          <p className="text-2xs text-muted-foreground leading-relaxed">
                            {m.formSafetyNote}
                          </p>
                        )}
                      </div>
                    )}

                    {m.difficultTerms.length > 0 && (
                      <div className="rounded-md border border-muted bg-muted/20 p-2.5 text-xs space-y-1">
                        <span className="font-bold text-muted-foreground text-2xs uppercase tracking-wider block">
                          📖 Difficult Terms Meaning:
                        </span>
                        <div className="space-y-1">
                          {m.difficultTerms.map((dt) => (
                            <p key={dt.term} className="text-muted-foreground leading-tight">
                              <strong className="text-foreground">{dt.term}:</strong> {dt.simpleHinglish}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t flex items-center justify-between">
                    <span className="text-2xs text-muted-foreground italic">
                      Verified database record
                    </span>
                    <Button asChild size="sm" className="gap-1.5 text-xs font-semibold">
                      <Link to="/medicines/$slug" params={{ slug: m.medicineSlug }}>
                        <span>Open Learning Details</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : !selectedConditionId && searchIntent.intent === "hair_educational" ? (
        /* =========================================================================
         * HAIR HEALTH & HAIR FALL EDUCATIONAL GUIDE VIEW
         * ========================================================================= */
        <div className="space-y-6 animate-fade-up">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuery("")}
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span>Back to all conditions</span>
            </Button>
            <Badge variant="outline" className="text-xs capitalize">
              Educational Overview
            </Badge>
          </div>

          <div className="rounded-xl border border-primary/20 bg-card p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                  Hair Health &amp; Hair Fall Educational Guide
                </h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Baalon ki health, growth cycle, nutrition aur hair loss ke scientifically-grounded factors ka simple Hinglish overview.
              </p>
            </div>

            {/* 9 Educational Dimensions */}
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {HAIR_EDUCATION_GUIDE.map((section, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border bg-muted/20 p-4 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{section.icon}</span>
                      <h4 className="font-bold text-sm text-foreground">
                        {section.hinglishTitle}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                  <ul className="space-y-1 pt-1 border-t text-2xs text-muted-foreground/90">
                    {section.bulletPoints.map((bp, bidx) => (
                      <li key={bidx} className="flex items-start gap-1.5">
                        <span className="size-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Medical Educational Disclaimer */}
            <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3.5 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
              <p className="font-semibold flex items-center gap-1.5">
                <Info className="size-4 shrink-0" />
                <span>Clinical Pharmacology Reference Notice:</span>
              </p>
              <p className="mt-0.5">
                Yeh guide educational information ke liye hai. Yeh koi individual diagnosis ya automatic supplement/medicine prescription nahi hai. Hair fall ke multiple causes ho sakte hain (hormonal, nutritional, inflammatory, hereditary). Sahi cause identify karne ke liye dermatologist se consult karein.
              </p>
            </div>

            {/* Verified Products Section */}
            <div className="space-y-4 pt-4 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold flex items-center gap-2 text-foreground">
                    <Pill className="size-5 text-primary" />
                    <span>Verified Medicines / Products Related to Hair in Database</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {hairEducationalMedicines.length} verified
                    </Badge>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Database mein verified indications wale products jo hair loss ya scalp conditions ke liye recorded hain.
                  </p>
                </div>
              </div>

              {/* Task 4: Result count semantics */}
              {hairEducationalMedicines.length > 0 && (
                <ResultCountSemanticsDisplay semantics={hairEduSemantics} />
              )}

              {/* Form Filter Pills */}
              {hairEducationalMedicines.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs font-semibold text-muted-foreground mr-1">Filter by Form:</span>
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "all" ? "default" : "outline"}
                    className="h-7 text-xs font-medium"
                    onClick={() => setProductFormFilter("all")}
                  >
                    All Products ({hairEducationalMedicines.length})
                  </Button>
                  {hairEduTopicalList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "topical" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("topical")}
                    >
                      <span>🧴</span>
                      <span>Topical ({hairEduTopicalList.length})</span>
                    </Button>
                  )}
                  {hairEduOralList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "oral" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("oral")}
                    >
                      <span>💊</span>
                      <span>Oral ({hairEduOralList.length})</span>
                    </Button>
                  )}
                  {hairEduInjectableList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "injectable" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("injectable")}
                    >
                      <span>💉</span>
                      <span>Injectable ({hairEduInjectableList.length})</span>
                    </Button>
                  )}
                  {hairEduRespiratoryList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "respiratory" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("respiratory")}
                    >
                      <span>🌬️</span>
                      <span>Respiratory ({hairEduRespiratoryList.length})</span>
                    </Button>
                  )}
                  {hairEduDropsList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "drops" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("drops")}
                    >
                      <span>👁️</span>
                      <span>Drops ({hairEduDropsList.length})</span>
                    </Button>
                  )}
                  {hairEduOtherList.length > 0 && (
                    <Button
                      type="button"
                      size="sm"
                      variant={productFormFilter === "other" ? "default" : "outline"}
                      className="h-7 text-xs font-medium gap-1"
                      onClick={() => setProductFormFilter("other")}
                    >
                      <span>✨</span>
                      <span>Other ({hairEduOtherList.length})</span>
                    </Button>
                  )}
                </div>
              )}

              {/* Medicine Cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                {displayedHairEduMedicines.map((m) => (
                  <article
                    key={m.medicineId}
                    className="flex flex-col justify-between rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm space-y-3"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2 border-b pb-2.5">
                        <div className="flex items-start gap-2.5">
                          <span className="text-2xl shrink-0 mt-0.5" aria-hidden>
                            {m.formClassification.formIcon}
                          </span>
                          <div>
                            <h4 className="font-bold text-base text-foreground leading-tight">
                              {m.displayName}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Generic / Active: <strong>{m.genericName}</strong>
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-[11px] shrink-0 font-medium">
                          {m.drugClass}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 text-xs">
                        <Badge variant="outline" className="font-semibold text-primary border-primary/30 bg-primary/5">
                          Form: {m.dosageForms.length > 0 ? m.dosageForms.join(", ") : m.formClassification.badgeLabel}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Route: {m.routes.length > 0 ? m.routes.join(", ") : "Current database mein verified route available nahi hai."}
                        </Badge>
                      </div>

                      <div className="rounded-lg bg-muted/60 p-3 text-xs space-y-1.5">
                        <p className="font-semibold text-primary flex items-center gap-1.5">
                          <CheckCircle2 className="size-4 shrink-0" />
                          <span>{m.relationReason}</span>
                        </p>
                        <p className="text-foreground/90 leading-relaxed">
                          <strong className="text-foreground">Verified Indication:</strong> “{m.matchedIndication}”
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                          {m.simpleExplanation}
                        </p>
                      </div>

                      {/* Task 6: Relevant verified form & safety note when multi-form medicine */}
                      {m.relevantFormForIndication && (
                        <div className="rounded-md border border-amber-500/30 bg-amber-500/5 p-2.5 text-xs space-y-1">
                          <p className="font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                            <span>🎯 Verified Form for this Condition:</span>
                            <span className="text-foreground font-medium">{m.relevantFormForIndication}</span>
                          </p>
                          {m.formSafetyNote && (
                            <p className="text-2xs text-muted-foreground leading-relaxed">
                              {m.formSafetyNote}
                            </p>
                          )}
                        </div>
                      )}

                      {m.difficultTerms.length > 0 && (
                        <div className="rounded-md border border-muted bg-muted/20 p-2.5 text-xs space-y-1">
                          <span className="font-bold text-muted-foreground text-2xs uppercase tracking-wider block">
                            📖 Difficult Terms Meaning:
                          </span>
                          <div className="space-y-1">
                            {m.difficultTerms.map((dt) => (
                              <p key={dt.term} className="text-muted-foreground leading-tight">
                                <strong className="text-foreground">{dt.term}:</strong> {dt.simpleHinglish}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t flex items-center justify-between">
                      <span className="text-2xs text-muted-foreground italic">
                        Verified database record
                      </span>
                      <Button asChild size="sm" className="gap-1.5 text-xs font-semibold">
                        <Link to="/medicines/$slug" params={{ slug: m.medicineSlug }}>
                          <span>Open Learning Details</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : !selectedConditionId && searchIntent.intent === "dosage_form" && searchIntent.dosageDef ? (
        /* =========================================================================
         * DOSAGE FORM PRODUCT SEARCH VIEW (e.g. Cream, Lotion, Serum, Gel)
         * ========================================================================= */
        <div className="space-y-6 animate-fade-up">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuery("")}
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span>Back to all conditions</span>
            </Button>
            <Badge variant="outline" className="text-xs capitalize">
              Product Form Search
            </Badge>
          </div>

          <div className="rounded-xl border border-primary/20 bg-card p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b pb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧴</span>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                  Verified Product Search: {searchIntent.dosageDef.label}
                </h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {searchIntent.dosageDef.educationalNote}
              </p>
            </div>

            {/* Task 4: Result count semantics distinguishing unique medicines, verified forms, routes & categories */}
            {dosageFormMedicines.length > 0 && (
              <ResultCountSemanticsDisplay semantics={dosageSemantics} />
            )}

            {/* Form Filter Pills */}
            {dosageFormMedicines.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs font-semibold text-muted-foreground mr-1">Filter by Form:</span>
                <Button
                  type="button"
                  size="sm"
                  variant={productFormFilter === "all" ? "default" : "outline"}
                  className="h-7 text-xs font-medium"
                  onClick={() => setProductFormFilter("all")}
                >
                  All Products ({dosageFormMedicines.length})
                </Button>
                {dosageTopicalList.length > 0 && (
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "topical" ? "default" : "outline"}
                    className="h-7 text-xs font-medium gap-1"
                    onClick={() => setProductFormFilter("topical")}
                  >
                    <span>🧴</span>
                    <span>Topical ({dosageTopicalList.length})</span>
                  </Button>
                )}
                {dosageOralList.length > 0 && (
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "oral" ? "default" : "outline"}
                    className="h-7 text-xs font-medium gap-1"
                    onClick={() => setProductFormFilter("oral")}
                  >
                    <span>💊</span>
                    <span>Oral ({dosageOralList.length})</span>
                  </Button>
                )}
                {dosageRespiratoryList.length > 0 && (
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "respiratory" ? "default" : "outline"}
                    className="h-7 text-xs font-medium gap-1"
                    onClick={() => setProductFormFilter("respiratory")}
                  >
                    <span>🌬️</span>
                    <span>Respiratory ({dosageRespiratoryList.length})</span>
                  </Button>
                )}
                {dosageInjectableList.length > 0 && (
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "injectable" ? "default" : "outline"}
                    className="h-7 text-xs font-medium gap-1"
                    onClick={() => setProductFormFilter("injectable")}
                  >
                    <span>💉</span>
                    <span>Injectable ({dosageInjectableList.length})</span>
                  </Button>
                )}
                {dosageDropsList.length > 0 && (
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "drops" ? "default" : "outline"}
                    className="h-7 text-xs font-medium gap-1"
                    onClick={() => setProductFormFilter("drops")}
                  >
                    <span>👁️</span>
                    <span>Drops ({dosageDropsList.length})</span>
                  </Button>
                )}
                {dosageOtherList.length > 0 && (
                  <Button
                    type="button"
                    size="sm"
                    variant={productFormFilter === "other" ? "default" : "outline"}
                    className="h-7 text-xs font-medium gap-1"
                    onClick={() => setProductFormFilter("other")}
                  >
                    <span>✨</span>
                    <span>Other ({dosageOtherList.length})</span>
                  </Button>
                )}
              </div>
            )}

            <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-3 text-xs text-amber-900 dark:text-amber-200">
              <p className="font-semibold flex items-center gap-1.5">
                <Info className="size-4 shrink-0" />
                <span>Educational Pharmacology Reference:</span>
              </p>
              <p className="mt-0.5 leading-relaxed">
                Database mein verified "{searchIntent.dosageDef.label}" dosage form wale products show kiye gaye hain. Yeh automated prescription ya cosmetic recommendation nahi hai. Kisi bhi medicine ya dermatological product ko use karne se pehle qualified doctor ya pharmacist se consult karein.
              </p>
            </div>

            {isMedsLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-20 w-full rounded-lg" />
                <Skeleton className="h-20 w-full rounded-lg" />
              </div>
            ) : dosageFormMedicines.length === 0 ? (
              <div className="surface p-8 text-center rounded-xl space-y-3 border">
                <Sparkles className="size-10 text-muted-foreground mx-auto" />
                <h3 className="font-semibold text-lg">
                  Verified {searchIntent.dosageDef.target} records: 0
                </h3>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Current database mein is dosage/form category ka koi verified record available nahi hai.
                  <br />
                  <span className="text-xs text-muted-foreground/80 mt-1 block">
                    (Note: Biochemical references jaise 'serum uric acid' ko dosage form nahi mana gaya hai).
                  </span>
                </p>
                <Button variant="outline" size="sm" onClick={() => setQuery("")}>
                  Reset Search
                </Button>
              </div>
            ) : displayedDosageMedicines.length === 0 ? (
              <p className="rounded-lg border p-5 text-center text-sm text-muted-foreground">
                Current database mein is filter ke liye verified product record available nahi hai.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {displayedDosageMedicines.map((m) => (
                  <article
                    key={m.medicineId}
                    className="flex flex-col justify-between rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm space-y-3"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2 border-b pb-2.5">
                        <div className="flex items-start gap-2.5">
                          <span className="text-2xl shrink-0 mt-0.5" aria-hidden>
                            {m.formClassification.formIcon}
                          </span>
                          <div>
                            <h4 className="font-bold text-base text-foreground leading-tight">
                              {m.displayName}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Generic / Active: <strong>{m.genericName}</strong>
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-[11px] shrink-0 font-medium">
                          {m.drugClass}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 text-xs">
                        <Badge variant="outline" className="font-semibold text-primary border-primary/30 bg-primary/5">
                          Form: {m.dosageForms.length > 0 ? m.dosageForms.join(", ") : m.formClassification.badgeLabel}
                        </Badge>
                        <Badge variant="outline" className="text-muted-foreground">
                          Route: {m.routes.length > 0 ? m.routes.join(", ") : "Current database mein verified route available nahi hai."}
                        </Badge>
                      </div>

                      <div className="rounded-lg bg-muted/60 p-3 text-xs space-y-1.5">
                        <p className="font-semibold text-primary flex items-center gap-1.5">
                          <CheckCircle2 className="size-4 shrink-0" />
                          <span>{m.relationReason}</span>
                        </p>
                        <p className="text-foreground/90 leading-relaxed">
                          <strong className="text-foreground">Verified Indication:</strong> “{m.matchedIndication}”
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                          {m.simpleExplanation}
                        </p>
                      </div>

                      {/* Task 6: Relevant verified form & safety note when multi-form medicine */}
                      {m.relevantFormForIndication && (
                        <div className="rounded-md border border-amber-500/30 bg-amber-500/5 p-2.5 text-xs space-y-1">
                          <p className="font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                            <span>🎯 Verified Form for this Condition:</span>
                            <span className="text-foreground font-medium">{m.relevantFormForIndication}</span>
                          </p>
                          {m.formSafetyNote && (
                            <p className="text-2xs text-muted-foreground leading-relaxed">
                              {m.formSafetyNote}
                            </p>
                          )}
                        </div>
                      )}

                      {m.difficultTerms.length > 0 && (
                        <div className="rounded-md border border-muted bg-muted/20 p-2.5 text-xs space-y-1">
                          <span className="font-bold text-muted-foreground text-2xs uppercase tracking-wider block">
                            📖 Difficult Terms Meaning:
                          </span>
                          <div className="space-y-1">
                            {m.difficultTerms.map((dt) => (
                              <p key={dt.term} className="text-muted-foreground leading-tight">
                                <strong className="text-foreground">{dt.term}:</strong> {dt.simpleHinglish}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-2 border-t flex items-center justify-between">
                      <span className="text-2xs text-muted-foreground italic">
                        Verified database record
                      </span>
                      <Button asChild size="sm" className="gap-1.5 text-xs font-semibold">
                        <Link to="/medicines/$slug" params={{ slug: m.medicineSlug }}>
                          <span>Open Learning Details</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : !selectedConditionId && searchIntent.intent === "cosmetic_unsupported" ? (
        /* =========================================================================
         * COSMETIC / APPEARANCE GOAL NOTICE (e.g. Face Whitening, Melasma, Tanning)
         * ========================================================================= */
        <div className="space-y-6 animate-fade-up">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuery("")}
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              <span>Back to all conditions</span>
            </Button>
            <Badge variant="outline" className="text-xs">
              Cosmetic Query Notice
            </Badge>
          </div>

          <div className="rounded-xl border border-primary/20 bg-card p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl shrink-0">✨</span>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Cosmetic / Appearance Goal vs Medical Indication: “{query}”
                </h2>
                <div className="rounded-lg bg-muted/60 p-4 border text-sm leading-relaxed text-foreground/90 space-y-2">
                  <p className="font-semibold text-primary">
                    Is exact cosmetic concern ke liye verified database indication nahi mila.
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {searchIntent.cosmeticMessage}
                  </p>
                </div>
              </div>
            </div>

            {/* Related verified medical conditions */}
            {searchIntent.suggestedConditions && searchIntent.suggestedConditions.length > 0 && (
              <div className="space-y-3 pt-2 border-t">
                <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <Stethoscope className="size-4 text-primary" />
                  <span>Related Verified Medical Conditions in Database:</span>
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {searchIntent.suggestedConditions.map((cond) => (
                    <div
                      key={cond.id}
                      onClick={() => handleSelectCondition(cond)}
                      className="surface group cursor-pointer p-4 rounded-xl flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-sm"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleSelectCondition(cond);
                      }}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                            {cond.name}
                          </span>
                          <Badge variant="outline" className="text-2xs">
                            Verified
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {cond.simpleHinglish}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t flex items-center justify-between text-xs font-medium text-primary">
                        <span>View verified treatments</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-start">
              <Button variant="outline" size="sm" onClick={() => setQuery("")}>
                Reset Search
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================================
         * CONDITIONS BROWSING LIST VIEW
         * ========================================================================= */
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Showing {matchingConditions.length} verified {matchingConditions.length === 1 ? "condition" : "conditions"}
              {query ? ` for “${query}”` : ""}
            </span>
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-primary hover:underline font-medium"
              >
                Clear filter
              </button>
            )}
          </div>

          {matchingConditions.length === 0 ? (
            <div className="surface p-8 text-center rounded-xl space-y-3">
              <Stethoscope className="size-10 text-muted-foreground mx-auto" />
              <h3 className="font-semibold text-lg">No matching condition found</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                “{query}” ke liye database mein condition record nahi mila. Try terms like “hair
                fall”, “acne”, “cream”, “lotion”, “acidity”, “fever”, “cough”, “high BP”, or “diabetes”.
              </p>
              <Button variant="outline" size="sm" onClick={() => setQuery("")}>
                Reset Search
              </Button>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {matchingConditions.map((cond) => {
                const categoryInfo = PROBLEM_CATEGORIES.find((cat) => cat.id === cond.category);
                return (
                  <div
                    key={cond.id}
                    onClick={() => handleSelectCondition(cond)}
                    className="surface group cursor-pointer p-4 rounded-xl flex flex-col justify-between transition-all hover:border-primary/40 hover:shadow-sm"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") handleSelectCondition(cond);
                    }}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xl">{categoryInfo?.icon || "🩺"}</span>
                        <Badge variant="outline" className="text-[11px] capitalize">
                          {categoryInfo?.name || cond.category}
                        </Badge>
                      </div>

                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                        {cond.name}
                      </h3>

                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {cond.simpleHinglish}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs font-medium text-primary">
                      <span>View details &amp; medicines</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Educational Footer Disclaimer */}
      <Disclaimer compact />
    </div>
  );
}
