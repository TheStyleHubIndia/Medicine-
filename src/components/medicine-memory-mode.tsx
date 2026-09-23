import React, { useState } from "react";
import {
  Brain,
  Zap,
  ShieldAlert,
  AlertTriangle,
  Pill,
  BookOpen,
  ArrowRight,
  Flame,
  CheckCircle2,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  detectSuffixRule,
  getDiseaseExplanation,
  buildMoaChain,
  buildSimpleExplanation,
  buildInteractionDetails,
  build5SecRevision,
  buildFinalMemorySentence,
  type MedicineRecord,
} from "@/lib/medicine-memory-engine";
import {
  extractDifficultTermsForMedicine,
  type HinglishTermDefinition,
} from "@/lib/hinglish-terms";

interface Props {
  medicine: MedicineRecord;
  classes?: Array<{ id: string; name: string; slug: string }> | undefined;
}

export function MedicineMemoryMode({ medicine, classes }: Props) {
  const [level, setLevel] = useState<"5s" | "30s" | "exam">("30s");
  const [showDisease, setShowDisease] = useState(true);
  const [showTerms, setShowTerms] = useState(true);

  const suffixRule = detectSuffixRule(medicine);
  const disease = getDiseaseExplanation(medicine);
  const moaData = buildMoaChain(medicine);
  const simple = buildSimpleExplanation(medicine);
  const interactions = buildInteractionDetails(medicine);
  const fiveSecRevision = build5SecRevision(medicine, suffixRule);
  const finalMemorySentence = buildFinalMemorySentence(medicine, suffixRule);

  // Extract difficult terms dynamically for this medicine
  const difficultTerms: HinglishTermDefinition[] = extractDifficultTermsForMedicine({
    category: medicine.category,
    mechanism_of_action: medicine.mechanism_of_action,
    indications: medicine.indications,
    common_adverse_effects: medicine.common_adverse_effects,
    serious_adverse_effects: medicine.serious_adverse_effects,
    contraindications: medicine.contraindications,
    warnings: medicine.warnings,
    drug_interactions: medicine.drug_interactions,
    routes: medicine.routes,
  });

  // Derived class name
  const primaryClass =
    classes?.[0]?.name ||
    suffixRule?.className ||
    medicine.category ||
    "Therapeutic Class on record";

  const missingText = "MediDex data mein available nahi hai.";

  return (
    <div className="rounded-xl border border-primary/20 bg-card p-4 shadow-sm sm:p-6 space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
              <Brain className="size-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold tracking-tight sm:text-xl flex items-center gap-2">
                🧠 EASY MEMORY / EXAM MODE
              </h2>
              <p className="text-xs text-muted-foreground">
                High-yield Hinglish pharmacology memory guide &amp; rapid exam revision
              </p>
            </div>
          </div>
        </div>

        {/* Level Selector */}
        <div className="flex items-center gap-1.5 rounded-lg border bg-muted/40 p-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setLevel("5s")}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
              level === "5s"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ⚡ 5-Sec Recall
          </button>
          <button
            type="button"
            onClick={() => setLevel("30s")}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
              level === "30s"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ⏱️ 30-Sec Summary
          </button>
          <button
            type="button"
            onClick={() => setLevel("exam")}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
              level === "exam"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            📚 Exam Detail
          </button>
        </div>
      </div>

      {/* Primary Pill Banner */}
      <div className="rounded-lg bg-primary/5 p-4 border border-primary/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Pill className="size-5 text-primary" />
            <span className="text-lg font-bold text-foreground">💊 {medicine.display_name}</span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground">
            <span>
              <strong className="text-foreground">Class:</strong> {primaryClass}
            </span>
            {suffixRule ? (
              <span>
                <strong className="text-foreground">Suffix:</strong>{" "}
                <code className="rounded bg-primary/10 px-1 py-0.5 font-semibold text-primary">
                  {suffixRule.suffix} → {suffixRule.className}
                </code>
              </span>
            ) : medicine.key_suffix ? (
              <span>
                <strong className="text-foreground">Suffix:</strong>{" "}
                <code className="rounded bg-primary/10 px-1 py-0.5 font-semibold text-primary">
                  {medicine.key_suffix}
                </code>
              </span>
            ) : null}
            {medicine.pronunciation_en && (
              <span>
                <strong className="text-foreground">Pronunciation:</strong>{" "}
                <span className="italic text-primary">{medicine.pronunciation_en}</span>
                {medicine.pronunciation_hi ? ` (${medicine.pronunciation_hi})` : ""}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* LEVEL 1: 5-SECOND REVISION BANNER (ALWAYS VISIBLE OR HIGHLIGHTED) */}
      <div className="rounded-lg bg-amber-500/10 border border-amber-500/25 p-3.5 space-y-1.5">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Flame className="size-4" /> 📚 5-Second Revision
        </div>
        <p className="text-sm font-semibold text-foreground break-words font-mono">
          {fiveSecRevision}
        </p>
      </div>

      {/* 🧠 Ye kya hai? */}
      {level !== "5s" && (
        <section className="space-y-2.5 rounded-lg border p-4 bg-background">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold">
              1
            </span>
            🧠 Ye kya hai?
          </h3>
          <p className="text-sm leading-relaxed text-foreground/90 font-medium">
            {simple.explanation}
          </p>
          <div className="mt-2 rounded-md bg-muted/60 p-2.5 text-xs sm:text-sm font-mono text-primary flex items-center gap-1.5 overflow-x-auto">
            <span>{simple.simpleChain}</span>
          </div>
        </section>
      )}

      {/* ⚙️ MOA — Kaise kaam karti hai? */}
      {level !== "5s" && (
        <section className="space-y-3 rounded-lg border border-primary/25 p-4 bg-primary/[0.02]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded bg-primary text-primary-foreground text-xs font-bold">
                2
              </span>
              ⚙️ MOA — Kaise kaam karti hai? (Sabse Important) 🧠
            </h3>
            <Badge variant="outline" className="text-2xs font-semibold text-primary">
              High Yield
            </Badge>
          </div>

          <div className="text-xs sm:text-sm space-y-2 text-foreground/90">
            <div>
              <span className="font-semibold text-foreground">Target / Site: </span>
              <span>{moaData.target}</span>
            </div>
            <div>
              <span className="font-semibold text-foreground">Mechanism Details: </span>
              <span>
                {medicine.mechanism_of_action || (
                  <span className="text-muted-foreground italic">{missingText}</span>
                )}
              </span>
            </div>
          </div>

          {/* Visual Step Chain */}
          <div className="rounded-md bg-muted p-2.5 text-xs sm:text-sm font-semibold font-mono text-foreground flex flex-wrap items-center gap-1.5">
            <span className="text-primary">{medicine.generic_name}</span>
            <ArrowRight className="size-3 text-muted-foreground shrink-0" />
            <span className="text-blue-600 dark:text-blue-400">{moaData.target.split(" ")[0]}</span>
            <ArrowRight className="size-3 text-muted-foreground shrink-0" />
            <span className="text-amber-600 dark:text-amber-400">{moaData.action}</span>
            <ArrowRight className="size-3 text-muted-foreground shrink-0" />
            <span className="text-emerald-600 dark:text-emerald-400">{moaData.result}</span>
          </div>

          {/* Memory trick */}
          <div className="rounded-md bg-accent/60 p-3 text-xs sm:text-sm border border-accent">
            <p className="font-semibold text-accent-foreground flex items-center gap-1.5">
              <span>🧠 Easy Memory Trick:</span>
              <span className="font-bold text-primary">
                {suffixRule?.mnemonic || medicine.memory_trick || `"${medicine.generic_name} = Key mechanism recall!"`}
              </span>
            </p>
          </div>
        </section>
      )}

      {/* 🎯 Main Uses */}
      {level !== "5s" && (
        <section className="space-y-3 rounded-lg border p-4 bg-background">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold">
              3
            </span>
            🎯 Main Uses
          </h3>

          {(medicine.indications?.length ?? 0) > 0 ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {medicine.indications!.map((ind, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-1.5 text-xs sm:text-sm font-medium"
                >
                  <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-muted-foreground italic">{missingText}</p>
          )}

          {medicine.indications && medicine.indications.length > 0 && (
            <div className="rounded-md bg-muted/60 p-2.5 text-xs sm:text-sm">
              <span className="font-bold text-foreground">🧠 One-line memory: </span>
              <span className="font-mono text-primary font-semibold">
                "{medicine.indications.slice(0, 4).join(" + ")} = {primaryClass}"
              </span>
            </div>
          )}
        </section>
      )}

      {/* 🩺 Condition Connection (When Strongly Associated) */}
      {disease && level !== "5s" && (
        <section className="rounded-lg border border-blue-500/20 bg-blue-500/[0.03] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm">
              <Stethoscope className="size-4" />
              <span>🩺 Condition Connection: {disease.name} kya hai? ({disease.fullName})</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-muted-foreground"
              onClick={() => setShowDisease(!showDisease)}
            >
              {showDisease ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
            </Button>
          </div>

          {showDisease && (
            <div className="space-y-2.5 text-xs sm:text-sm pt-1">
              <p className="text-foreground/90 leading-relaxed font-medium">
                {disease.simpleExplanation}
              </p>
              <div>
                <span className="font-semibold text-foreground">Common symptoms:</span>
                <ul className="mt-1 list-disc pl-5 space-y-1 text-muted-foreground">
                  {disease.symptoms.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded bg-blue-500/10 p-2.5 text-blue-900 dark:text-blue-200 text-xs sm:text-sm font-medium">
                <span className="font-bold">{medicine.display_name} connection: </span>
                {disease.medicineConnection}
              </div>
            </div>
          )}
        </section>
      )}

      {/* 💊 Dose / Administration */}
      {level !== "5s" && (
        <section className="space-y-2 rounded-lg border p-4 bg-background">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold">
              4
            </span>
            💊 Dose / Administration
          </h3>

          <div className="grid gap-2 text-xs sm:text-sm sm:grid-cols-3">
            <div className="rounded-md border p-2.5 bg-muted/20">
              <span className="text-muted-foreground block text-2xs uppercase font-semibold">Available Strengths</span>
              <span className="font-semibold text-foreground">
                {(medicine.strengths?.length ?? 0) > 0
                  ? medicine.strengths!.join(", ")
                  : missingText}
              </span>
            </div>
            <div className="rounded-md border p-2.5 bg-muted/20">
              <span className="text-muted-foreground block text-2xs uppercase font-semibold">Dosage Forms</span>
              <span className="font-semibold text-foreground">
                {(medicine.dosage_forms?.length ?? 0) > 0
                  ? medicine.dosage_forms!.join(", ")
                  : missingText}
              </span>
            </div>
            <div className="rounded-md border p-2.5 bg-muted/20">
              <span className="text-muted-foreground block text-2xs uppercase font-semibold">Routes of Admin</span>
              <span className="font-semibold text-foreground">
                {(medicine.routes?.length ?? 0) > 0
                  ? medicine.routes!.join(", ")
                  : missingText}
              </span>
            </div>
          </div>
          <p className="text-2xs text-muted-foreground italic pt-1">
            Exact dose patient-specific diagnosis aur condition par depend karti hai. Educational reference only.
          </p>
        </section>
      )}

      {/* ⚠️ Side Effects */}
      {level !== "5s" && (
        <section className="space-y-3 rounded-lg border p-4 bg-background">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold">
              5
            </span>
            ⚠️ Side Effects
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* Common */}
            <div className="space-y-1.5 rounded-md border p-3 bg-muted/10">
              <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <AlertTriangle className="size-3.5 text-amber-500" /> Common Side Effects:
              </span>
              {(medicine.common_adverse_effects?.length ?? 0) > 0 ? (
                <ul className="list-disc pl-4 space-y-0.5 text-xs text-muted-foreground">
                  {medicine.common_adverse_effects!.map((se, idx) => (
                    <li key={idx}>{se}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-muted-foreground italic">{missingText}</p>
              )}
            </div>

            {/* Serious */}
            <div className="space-y-1.5 rounded-md border border-destructive/20 p-3 bg-destructive/[0.03]">
              <span className="text-xs font-bold text-destructive flex items-center gap-1.5">
                <ShieldAlert className="size-3.5" /> Serious / Red Flag Effects:
              </span>
              {(medicine.serious_adverse_effects?.length ?? 0) > 0 ? (
                <ul className="list-disc pl-4 space-y-0.5 text-xs text-destructive/90">
                  {medicine.serious_adverse_effects!.map((se, idx) => (
                    <li key={idx} className="font-medium">{se}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-muted-foreground italic">{missingText}</p>
              )}
            </div>
          </div>

          {/* Grouping Mnemonic */}
          <div className="rounded-md bg-muted/60 p-2.5 text-xs">
            <span className="font-bold text-foreground">🧠 Memory grouping: </span>
            <span className="font-medium text-foreground">
              {(medicine.common_adverse_effects?.length ?? 0) > 0
                ? `${medicine.generic_name} ke common effects primarily ${medicine.common_adverse_effects![0]} aur gut/systemic tolerance se related hain.`
                : "Standard monitoring required."}
            </span>
          </div>
        </section>
      )}

      {/* 🚫 Contraindications / Cautions */}
      {level !== "5s" && (
        <section className="space-y-3 rounded-lg border p-4 bg-background">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold">
              6
            </span>
            🚫 Contraindications / Cautions
          </h3>

          <div className="space-y-2 text-xs sm:text-sm">
            <div>
              <span className="font-bold text-destructive">Contraindications: </span>
              {(medicine.contraindications?.length ?? 0) > 0 ? (
                <span className="text-foreground/90 font-medium">
                  {medicine.contraindications!.join("; ")}
                </span>
              ) : (
                <span className="text-muted-foreground italic">{missingText}</span>
              )}
            </div>

            <div>
              <span className="font-bold text-amber-600 dark:text-amber-400">Important Warnings / Cautions: </span>
              {(medicine.warnings?.length ?? 0) > 0 ? (
                <ul className="mt-1 list-disc pl-5 space-y-0.5 text-muted-foreground">
                  {medicine.warnings!.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-muted-foreground italic">{missingText}</span>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 🔄 Important Drug Interactions */}
      {level !== "5s" && (
        <section className="space-y-3 rounded-lg border p-4 bg-background">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold">
              7
            </span>
            🔄 Important Drug Interactions
          </h3>

          {interactions.length > 0 ? (
            <div className="space-y-2.5">
              {interactions.map((inter, idx) => (
                <div key={idx} className="rounded-md border p-3 bg-muted/20 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-foreground">
                    <span className="text-primary font-mono">{inter.pathway}</span>
                    <Badge variant="outline" className="text-2xs">Interaction</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Clinical concern: </strong>
                    {inter.clinicalConcern}
                  </p>
                  {inter.memoryNote && (
                    <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 pt-0.5">
                      🧠 Memory: «{inter.memoryNote}»
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-muted-foreground italic">{missingText}</p>
          )}
        </section>
      )}

      {/* 📖 Difficult Words — Simple Hinglish Meaning */}
      {level !== "5s" && (
        <section className="rounded-lg border border-purple-500/20 bg-purple-500/[0.02] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold text-sm">
              <BookOpen className="size-4" />
              <span>📖 Difficult Words — Simple Hinglish Meaning ({difficultTerms.length} terms)</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs text-muted-foreground"
              onClick={() => setShowTerms(!showTerms)}
            >
              {showTerms ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
            </Button>
          </div>

          {showTerms && (
            <div className="space-y-2 pt-1">
              {difficultTerms.length > 0 ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {difficultTerms.map((termItem, idx) => (
                    <div
                      key={idx}
                      className="rounded-md border border-purple-500/15 bg-card/60 p-2.5 text-xs space-y-1 shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground text-xs flex items-center gap-1">
                          <HelpCircle className="size-3 text-purple-600 dark:text-purple-400" />
                          {termItem.term}
                        </span>
                        {termItem.category && (
                          <Badge variant="outline" className="text-3xs uppercase tracking-wider">
                            {termItem.category.replace("_", " ")}
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        = {termItem.simpleHinglish}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  Simple Hinglish meaning current database mein available nahi hai.
                </p>
              )}
            </div>
          )}
        </section>
      )}

      {/* Practical Medicine Memory (Compact Recall Cards) */}
      <section className="space-y-3 rounded-lg border border-primary/20 bg-primary/[0.015] p-4">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <span className="grid size-5 place-items-center rounded bg-primary text-primary-foreground text-xs font-bold">
            8
          </span>
          Practical Medicine Memory (20–30s Recall)
        </h3>

        <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
          <div className="rounded-md border bg-card p-2.5">
            <span className="block text-2xs font-semibold text-muted-foreground uppercase">Class</span>
            <span className="font-bold text-foreground line-clamp-2">{primaryClass}</span>
          </div>

          <div className="rounded-md border bg-card p-2.5">
            <span className="block text-2xs font-semibold text-muted-foreground uppercase">Target</span>
            <span className="font-bold text-foreground line-clamp-2">{moaData.target.split(" ")[0]}</span>
          </div>

          <div className="rounded-md border bg-card p-2.5">
            <span className="block text-2xs font-semibold text-muted-foreground uppercase">Main Use</span>
            <span className="font-bold text-foreground line-clamp-2">
              {medicine.indications?.[0] || missingText}
            </span>
          </div>

          <div className="rounded-md border bg-card p-2.5">
            <span className="block text-2xs font-semibold text-muted-foreground uppercase">Suffix</span>
            <span className="font-bold text-primary font-mono">
              {suffixRule?.suffix || medicine.key_suffix || "None"}
            </span>
          </div>

          <div className="rounded-md border bg-card p-2.5 col-span-2">
            <span className="block text-2xs font-semibold text-muted-foreground uppercase">Major Warning</span>
            <span className="font-medium text-foreground line-clamp-2">
              {medicine.warnings?.[0] || missingText}
            </span>
          </div>

          <div className="rounded-md border bg-card p-2.5 col-span-2">
            <span className="block text-2xs font-semibold text-muted-foreground uppercase">Major Interaction</span>
            <span className="font-medium text-foreground line-clamp-2">
              {medicine.drug_interactions?.[0] || missingText}
            </span>
          </div>
        </div>
      </section>

      {/* FINAL MEMORY SENTENCE */}
      <div className="rounded-lg bg-primary/10 border border-primary/25 p-3.5 space-y-1">
        <span className="text-2xs font-bold text-primary uppercase tracking-wider block">
          🧠 Final Memory Sentence
        </span>
        <p className="text-xs sm:text-sm font-bold text-foreground break-words font-mono">
          "{finalMemorySentence}"
        </p>
      </div>
    </div>
  );
}
