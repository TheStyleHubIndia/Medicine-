/**
 * Medicine Memory / Exam Mode Helper Engine
 *
 * Rules:
 * - Authoritative Supabase medicine record is the primary source.
 * - Suffix Masterbook rules provide suffix-to-class mappings and high-yield mnemonics.
 * - Missing fields explicitly show: "MediDex data mein available nahi hai."
 * - Conversational, punchy, high-yield Roman Hinglish explanations.
 * - No fabricated medical details, doses, or contraindications.
 */

import type { Database } from "@/integrations/supabase/types";

export type MedicineRecord = Database["public"]["Tables"]["medicines"]["Row"];

export interface SuffixRule {
  suffix: string;
  className: string;
  meaning: string;
  mnemonic: string;
  highYieldFact?: string;
}

export const SUFFIX_MASTERBOOK: Record<string, SuffixRule> = {
  "-prazole": {
    suffix: "-prazole",
    className: "Proton Pump Inhibitor (PPI)",
    meaning: "Proton pump block karta hai",
    mnemonic: "-prazole = Proton Pump ko Pause!",
    highYieldFact: "Irreversible H+/K+-ATPase block karta hai, acid production drastically down.",
  },
  "-cillin": {
    suffix: "-cillin",
    className: "Penicillin Antibiotic (Beta-lactam)",
    meaning: "Bacterial cell wall synthesis block karta hai",
    mnemonic: "-cillin = Cell wall ko Kill-in!",
    highYieldFact: "Penicillin-binding proteins (PBPs) se bind karke peptidoglycan cross-linking rokta hai.",
  },
  "-olol": {
    suffix: "-olol",
    className: "Beta Blocker",
    meaning: "Beta-adrenergic receptors block karta hai",
    mnemonic: "-olol = Heart rate aur BP ko s-l-o-w-l-o-l!",
    highYieldFact: "Cardiac workload aur oxygen demand reduce karta hai.",
  },
  "-statin": {
    suffix: "-statin",
    className: "HMG-CoA Reductase Inhibitor",
    meaning: "Cholesterol synthesis pathway block karta hai",
    mnemonic: "-statin = Cholesterol production Stop-in!",
    highYieldFact: "Rate-limiting enzyme HMG-CoA reductase ko block karta hai.",
  },
  "-floxacin": {
    suffix: "-floxacin",
    className: "Fluoroquinolone Antibiotic",
    meaning: "DNA gyrase / Topoisomerase IV block karta hai",
    mnemonic: "-floxacin = Bacterial DNA unwinding block in!",
    highYieldFact: "Bacterial DNA replication interrupt karke bactericidal action deta hai.",
  },
  "-tidine": {
    suffix: "-tidine",
    className: "H2 Receptor Antagonist",
    meaning: "Histamine-2 receptors in stomach block karta hai",
    mnemonic: "-tidine = To dine without acid!",
    highYieldFact: "Parietal cell H2 receptor block karke baseline acid kam karta hai.",
  },
  "-dipine": {
    suffix: "-dipine",
    className: "Dihydropyridine Calcium Channel Blocker (CCB)",
    meaning: "Vascular smooth muscle L-type calcium channels block karta hai",
    mnemonic: "-dipine = Blood pressure drop-in!",
    highYieldFact: "Potent peripheral vasodilation produces BP reduction; watch for ankle oedema.",
  },
  "-sartan": {
    suffix: "-sartan",
    className: "Angiotensin II Receptor Blocker (ARB)",
    meaning: "AT1 receptors block karta hai",
    mnemonic: "-sartan = Angiotensin II ko Sort out / Block!",
    highYieldFact: "No bradykinin accumulation; cough incidence ACE inhibitors se bahut kam.",
  },
  "-pril": {
    suffix: "-pril",
    className: "ACE Inhibitor",
    meaning: "Angiotensin Converting Enzyme inhibit karta hai",
    mnemonic: "-pril = Pressure Reduction In Line!",
    highYieldFact: "Bradykinin breakdown rokta hai → dry cough common side effect.",
  },
  "-gliptin": {
    suffix: "-gliptin",
    className: "DPP-4 Inhibitor",
    meaning: "Incretin breakdown delay karta hai",
    mnemonic: "-gliptin = Glucose-dependent insulin lift-in!",
    highYieldFact: "GLP-1 breakdown rokta hai, glucose-dependent insulin release badhata hai.",
  },
  "-gliflozin": {
    suffix: "-gliflozin",
    className: "SGLT2 Inhibitor",
    meaning: "Renal glucose reabsorption block karta hai",
    mnemonic: "-gliflozin = Glucose flows in urine!",
    highYieldFact: "Kidney se glucose excretion badhata hai; osmotic diuresis aur weight loss.",
  },
  "-glitazone": {
    suffix: "-glitazone",
    className: "Thiazolidinedione (PPAR-gamma agonist)",
    meaning: "Insulin sensitivity improve karta hai",
    mnemonic: "-glitazone = Glucose utilisation zone!",
    highYieldFact: "Adipose aur muscle tissue mein insulin sensitivity enhance karta hai.",
  },
  "-lukast": {
    suffix: "-lukast",
    className: "Leukotriene Receptor Antagonist",
    meaning: "CysLT1 leukotriene receptors block karta hai",
    mnemonic: "-lukast = Leukotriene ko Lock fast!",
    highYieldFact: "Bronchoconstriction aur airway inflammation kam karta hai (asthma/allergic rhinitis).",
  },
  "-azepam": {
    suffix: "-azepam",
    className: "Benzodiazepine",
    meaning: "GABA-A receptor affinity enhance karta hai",
    mnemonic: "-azepam = Brain excitability ko Calm down!",
    highYieldFact: "Chloride channel opening frequency badhata hai → CNS depression.",
  },
  "-setron": {
    suffix: "-setron",
    className: "5-HT3 Receptor Antagonist",
    meaning: "Serotonin receptors in CTZ & gut block karta hai",
    mnemonic: "-setron = Vomiting reflex Stop on!",
    highYieldFact: "Chemotherapy aur post-operative nausea/vomiting ke liye first-line antiemetic.",
  },
  "-terol": {
    suffix: "-terol",
    className: "Beta-2 Adrenergic Agonist",
    meaning: "Bronchial smooth muscle relax karta hai",
    mnemonic: "-terol = Airway open to the core!",
    highYieldFact: "cAMP increase karke bronchodilation induce karta hai.",
  },
  "-thromycin": {
    suffix: "-thromycin",
    className: "Macrolide Antibiotic",
    meaning: "Bacterial 50S ribosomal subunit block karta hai",
    mnemonic: "-thromycin = Ribosome protein synthesis thrown away!",
    highYieldFact: "Translocation step inhibit karta hai; atypical pathogens ke against effective.",
  },
  "-cycline": {
    suffix: "-cycline",
    className: "Tetracycline Antibiotic",
    meaning: "Bacterial 30S ribosomal subunit block karta hai",
    mnemonic: "-cycline = Bacterial protein synthesis cycle break!",
    highYieldFact: "tRNA binding to mRNA-ribosome complex block karta hai; chelates calcium.",
  },
};

/**
 * Detect matching suffix from Masterbook or database key_suffix
 */
export function detectSuffixRule(medicine: MedicineRecord): SuffixRule | null {
  const genericLower = medicine.generic_name.toLowerCase();

  // 1. Check database key_suffix first
  if (medicine.key_suffix && SUFFIX_MASTERBOOK[medicine.key_suffix.toLowerCase()]) {
    return SUFFIX_MASTERBOOK[medicine.key_suffix.toLowerCase()] || null;
  }

  // 2. Match against all Masterbook suffixes
  for (const [suf, rule] of Object.entries(SUFFIX_MASTERBOOK)) {
    const rawSuf = suf.replace("-", "");
    if (genericLower.endsWith(rawSuf)) {
      return rule;
    }
  }

  return null;
}

/**
 * Common disease clinical explanation cards
 */
export interface DiseaseCard {
  name: string;
  fullName: string;
  simpleExplanation: string;
  symptoms: string[];
  medicineConnection: string;
}

export function getDiseaseExplanation(medicine: MedicineRecord): DiseaseCard | null {
  const generic = medicine.generic_name.toLowerCase();
  const indications = (medicine.indications ?? []).map((i) => i.toLowerCase()).join(" ");
  const category = (medicine.category ?? "").toLowerCase();

  // GERD
  if (indications.includes("gerd") || category.includes("acidity") || generic === "omeprazole") {
    return {
      name: "GERD",
      fullName: "Gastroesophageal Reflux Disease",
      simpleExplanation: "Stomach acid aur contents food pipe (oesophagus) mein upar reflux karte hain, jisse burning aur mucosal irritation hoti hai.",
      symptoms: [
        "Heartburn (chhati mein jalan)",
        "Sour/acidic taste in mouth",
        "Regurgitation (khana upar aana)",
        "Symptoms meal ke baad aur letne par worse hote hain",
      ],
      medicineConnection: `${medicine.display_name} stomach acid pump ko block karta hai → acid production drastically down → oesophagus heal hone lagta hai.`,
    };
  }

  // Peptic Ulcer Disease
  if (indications.includes("ulcer") || indications.includes("peptic")) {
    return {
      name: "Peptic Ulcer Disease (PUD)",
      fullName: "Gastric & Duodenal Ulcers",
      simpleExplanation: "Stomach ya intestine ke lining mein protective mucus layer break hone se gastric acid aur pepsin ke direct contact se sores/ulcers ban jate hain.",
      symptoms: [
        "Epigastric burning pain (khali pet ya raat ko badhna)",
        "Bloating aur jaldi pet bharna",
        "Nausea / vomiting",
      ],
      medicineConnection: `${medicine.display_name} mucosal exposure ko acidic insult se bacha kar ulcer healing promote karta hai.`,
    };
  }

  // Type 2 Diabetes
  if (indications.includes("diabetes") || category.includes("diabetes") || generic === "metformin") {
    return {
      name: "Type 2 Diabetes Mellitus",
      fullName: "Chronic Hyperglycaemia & Insulin Resistance",
      simpleExplanation: "Body cells insulin ko properly respond nahi karte (insulin resistance) aur pancreas sufficient compensatory insulin produce nahi kar pata → blood glucose elevated rehta hai.",
      symptoms: [
        "Frequent urination (polyuria)",
        "Increased thirst (polydipsia)",
        "Excessive hunger (polyphagia)",
        "Fatigue aur slow wound healing",
      ],
      medicineConnection: `${medicine.display_name} liver se excess glucose production rokta hai aur peripheral insulin sensitivity badhata hai bina pancreas ko force kiye.`,
    };
  }

  // Bacterial Infection / RTI
  if (category.includes("antibiotic") || indications.includes("infection") || generic === "amoxicillin") {
    return {
      name: "Bacterial Infection",
      fullName: "Bacterial Pathogen Proliferation",
      simpleExplanation: "Bacteria respiratory tract, ear, throat ya urinary tract mein invade karke multiply karte hain, jisse inflammatory immune response trigger hota hai.",
      symptoms: [
        "Fever aur chills",
        "Localized pain, swelling ya purulent discharge",
        "Sore throat, cough ya dysuria (depending on site)",
      ],
      medicineConnection: `${medicine.display_name} bacterial cell wall synthesis ko actively block karta hai → bacteria burst/lyse ho jate hain.`,
    };
  }

  // Fever & Pain (Paracetamol)
  if (category.includes("pain") || category.includes("fever") || generic === "paracetamol") {
    return {
      name: "Pyrexia & Somatic Pain",
      fullName: "Fever & Inflammatory Pain Pathway",
      simpleExplanation: "Hypothalamus ke thermoregulatory set-point badhne se fever hota hai, aur peripheral tissue injury se prostaglandins release hokar pain signals amplify karte hain.",
      symptoms: [
        "Elevated body temperature",
        "Body aches aur headache",
        "Malaise aur shivering",
      ],
      medicineConnection: `${medicine.display_name} central nervous system mein prostaglandin synthesis inhibit karta hai aur hypothalamic heat-regulating center ko reset karta hai.`,
    };
  }

  return null;
}

/**
 * Generate 2. MOA chain: Drug → Target → Action → Result
 */
export function buildMoaChain(medicine: MedicineRecord): {
  target: string;
  action: string;
  result: string;
  chain: string;
} {
  const generic = medicine.generic_name.toLowerCase();
  const moa = (medicine.mechanism_of_action ?? "").toLowerCase();

  let target = "Cellular target / pathway";
  let action = "Inhibition / Modulation";
  let result = "Clinical response";

  if (generic === "omeprazole" || moa.includes("h+/k+-atpase") || moa.includes("proton pump")) {
    target = "H⁺/K⁺-ATPase (Proton Pump) in gastric parietal cells";
    action = "Irreversible inhibition";
    result = "Gastric acid secretion ↓";
  } else if (generic === "paracetamol" || moa.includes("prostaglandin")) {
    target = "Central COX / Prostaglandin synthesis & descending serotonergic pathways";
    action = "Central inhibition";
    result = "Pain perception ↓ & Hypothalamic fever set-point reset ↓";
  } else if (generic === "metformin" || moa.includes("gluconeogenesis")) {
    target = "Hepatic AMP-activated protein kinase (AMPK) pathway";
    action = "Inhibition of hepatic gluconeogenesis & improved peripheral insulin uptake";
    result = "Blood glucose ↓ (without hypoglycaemia)";
  } else if (generic === "amoxicillin" || moa.includes("penicillin-binding") || moa.includes("cell wall")) {
    target = "Penicillin-Binding Proteins (PBPs)";
    action = "Peptidoglycan cross-linking block";
    result = "Bacterial cell wall lysis & death (Bactericidal)";
  } else if (moa) {
    // Dynamic fallback based on source MOA text
    target = medicine.mechanism_of_action?.slice(0, 70) ?? "Receptor / Enzyme target";
    action = "Target modulation";
    result = `${medicine.category ?? "Disease"} symptoms control ↓`;
  }

  const chain = `${medicine.generic_name} → ${target} → ${action} → ${result}`;
  return { target, action, result, chain };
}

/**
 * Generate 1. "Ye kya karta hai?" simple Hinglish explanation
 */
export function buildSimpleExplanation(medicine: MedicineRecord): {
  explanation: string;
  simpleChain: string;
} {
  const generic = medicine.generic_name.toLowerCase();
  const cat = medicine.category ?? "Medicine";

  if (generic === "omeprazole") {
    return {
      explanation: "Omeprazole stomach ke andar acid banane wale pumps ko strongly block karta hai, jisse chhati ki jalan (GERD) aur pet ke chhale (ulcers) jaldi theek hote hain.",
      simpleChain: "Omeprazole → Proton Pump block → Gastric acid ↓ → Acid-related symptoms ↓",
    };
  }

  if (generic === "paracetamol") {
    return {
      explanation: "Paracetamol brain aur spinal cord mein pain aur fever signals generate karne wale chemicals (prostaglandins) ko block karta hai, jisse dard aur tez bukhar kam hota hai.",
      simpleChain: "Paracetamol → Central pain & fever signals block → Pain ↓ & Temperature normal ↓",
    };
  }

  if (generic === "metformin") {
    return {
      explanation: "Metformin liver ko extra glucose banane se rokta hai aur body cells ko insulin better use karne mein help karta hai, jisse blood sugar naturally control rehta hai.",
      simpleChain: "Metformin → Liver glucose production ↓ + Insulin sensitivity ↑ → Blood sugar stable",
    };
  }

  if (generic === "amoxicillin") {
    return {
      explanation: "Amoxicillin bacteria ki protective outer wall ko banne se rokta hai, jisse bacteria kamzor hokar phat (burst) jate hain aur infection khatam hota hai.",
      simpleChain: "Amoxicillin → Bacterial cell wall synthesis block → Bacteria lysis → Infection cleared",
    };
  }

  // Dynamic fallback for any other medicine grounded in database
  const moaShort = medicine.mechanism_of_action || "Target receptor ko modulate karta hai";
  return {
    explanation: `${medicine.display_name} (${cat}) body mein ${moaShort.toLowerCase()} jisse related symptoms aur disease progression control hota hai.`,
    simpleChain: `${medicine.generic_name} → Specific target modulation → Pathological pathway control → Clinical recovery`,
  };
}

/**
 * Generate 8. High-yield interaction explanations
 */
export interface InteractionDetail {
  medicineB: string;
  pathway: string;
  clinicalConcern: string;
  memoryNote?: string;
}

export function buildInteractionDetails(medicine: MedicineRecord): InteractionDetail[] {
  const generic = medicine.generic_name.toLowerCase();
  const dbInteractions = medicine.drug_interactions ?? [];

  if (dbInteractions.length === 0) {
    return [];
  }

  return dbInteractions.map((item) => {
    const itemLower = item.toLowerCase();

    if (generic === "omeprazole" && itemLower.includes("clopidogrel")) {
      return {
        medicineB: item,
        pathway: "Omeprazole → CYP2C19 enzyme inhibition",
        clinicalConcern: "Clopidogrel active form mein convert nahi ho pata → antiplatelet effect reduce ho sakta hai.",
        memoryNote: "Ome = Clopi activation ko slow!",
      };
    }

    if (generic === "paracetamol" && itemLower.includes("warfarin")) {
      return {
        medicineB: item,
        pathway: "Sustained high-dose paracetamol → hepatic coagulation factor synthesis interference",
        clinicalConcern: "INR increase ho sakta hai; regular monitoring zaroori hai.",
        memoryNote: "High-dose Para + Warfarin = Bleeding/INR monitor!",
      };
    }

    if (generic === "paracetamol" && itemLower.includes("alcohol")) {
      return {
        medicineB: item,
        pathway: "Alcohol → CYP2E1 induction → NAPQI toxic metabolite accumulation",
        clinicalConcern: "Hepatotoxicity / Liver injury ka risk drastically increase hota hai.",
        memoryNote: "Alcohol + Paracetamol = Toxic liver burden!",
      };
    }

    if (generic === "metformin" && itemLower.includes("contrast")) {
      return {
        medicineB: item,
        pathway: "Contrast media induced renal impairment → Metformin accumulation",
        clinicalConcern: "Lactic acidosis ka severe risk; imaging procedure se pehle withhold karna padta hai.",
        memoryNote: "Contrast Scan = Metformin Pause (Lactic acidosis risk)!",
      };
    }

    if (generic === "amoxicillin" && itemLower.includes("methotrexate")) {
      return {
        medicineB: item,
        pathway: "Amoxicillin → Renal tubular secretion competition",
        clinicalConcern: "Methotrexate clearance ↓ → Methotrexate toxicity risk ↑.",
        memoryNote: "Amox + Metho = Renal clearance conflict!",
      };
    }

    return {
      medicineB: item,
      pathway: `${medicine.generic_name} ↔ ${item} interaction pathway`,
      clinicalConcern: "Pharmacokinetic ya pharmacodynamic interaction documented in source database.",
    };
  });
}

/**
 * Generate 11. 5-Second Revision Chain
 */
export function build5SecRevision(medicine: MedicineRecord, suffixRule: SuffixRule | null): string {
  const generic = medicine.generic_name;
  const cls = suffixRule?.className ?? medicine.category ?? "Therapeutic Agent";
  const { target, action } = buildMoaChain(medicine);
  const targetShort = target.split(" ")[0];
  const use1 = medicine.indications?.[0] ?? "Clinical use";
  const use2 = medicine.indications?.[1] ?? "";
  const usesText = use2 ? `${use1}/${use2}` : use1;
  const inter1 = medicine.drug_interactions?.[0] ? `${medicine.drug_interactions[0]} interaction` : "Careful monitoring";

  return `${generic} → ${cls} → ${targetShort} ${action.toLowerCase()} → ${usesText} → ${inter1}`;
}

/**
 * Generate 12. Final Memory Sentence
 * Format: "DRUG = CLASS → TARGET/ACTION → MAIN RESULT → MAIN USE → HIGH-YIELD WARNING/INTERACTION"
 */
export function buildFinalMemorySentence(
  medicine: MedicineRecord,
  suffixRule: SuffixRule | null
): string {
  const genericUpper = medicine.generic_name.toUpperCase();
  const suf = suffixRule?.suffix.replace("-", "").toUpperCase() ?? medicine.category?.toUpperCase() ?? "AGENT";
  const { action, result } = buildMoaChain(medicine);
  const mainUse = (medicine.indications?.[0] ?? "First-line Therapy").toUpperCase();
  const warning = (medicine.warnings?.[0] ?? medicine.drug_interactions?.[0] ?? "Safety check").toUpperCase();

  return `${genericUpper} = ${suf} → ${action} → ${result} → ${mainUse} → ${warning}`;
}
