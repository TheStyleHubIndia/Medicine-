/**
 * Verified Beginner-Friendly Hinglish Glossary Dictionary
 *
 * Provides medically accurate, clear, and simple Roman Hinglish explanations
 * for difficult medical terms, condition names, symptoms, pharmacology processes,
 * routes, and adverse effects.
 */

export interface HinglishTermDefinition {
  term: string;
  simpleHinglish: string;
  category?: "pharmacology" | "condition" | "symptom" | "adverse_effect" | "route" | "general";
}

export const HINGLISH_TERMS_DICTIONARY: Record<string, HinglishTermDefinition> = {
  // Common symptoms & adverse effects
  flatulence: {
    term: "Flatulence",
    simpleHinglish: "Pet mein gas banna ya gas pass hona.",
    category: "symptom",
  },
  inflammation: {
    term: "Inflammation",
    simpleHinglish: "Body ke kisi part mein sujan/soojan aur irritation ki protective reaction.",
    category: "pharmacology",
  },
  contraindication: {
    term: "Contraindication",
    simpleHinglish: "Aisi specific medical condition ya situation jahan yeh medicine use nahi karni chahiye.",
    category: "pharmacology",
  },
  "drug interaction": {
    term: "Drug Interaction",
    simpleHinglish: "Jab ek medicine doosri medicine, food ya supplement ke effect ko badal de ya adverse reaction kare.",
    category: "pharmacology",
  },
  interaction: {
    term: "Interaction",
    simpleHinglish: "Jab ek medicine doosri medicine ya substance ke effect ko alter (change) kare.",
    category: "pharmacology",
  },
  "adverse effect": {
    term: "Adverse Effect",
    simpleHinglish: "Medicine lene se hone wala unintended (anchaaha) ya harmful side effect.",
    category: "adverse_effect",
  },
  "adverse effects": {
    term: "Adverse Effects",
    simpleHinglish: "Medicine se hone wale unwanted ya harmful side effects.",
    category: "adverse_effect",
  },
  regurgitation: {
    term: "Regurgitation",
    simpleHinglish: "Stomach ka khana ya acidic content bina ulti kiye wapas food pipe ya throat tak aana.",
    category: "symptom",
  },
  heartburn: {
    term: "Heartburn",
    simpleHinglish: "Chest aur food pipe ke area mein teekhi jalan, jo usually stomach acid reflux ki wajah se hoti hai.",
    category: "symptom",
  },
  diarrhea: {
    term: "Diarrhea",
    simpleHinglish: "Baar-baar loose ya watery motion (dast) aana.",
    category: "symptom",
  },
  diarrhoea: {
    term: "Diarrhoea",
    simpleHinglish: "Baar-baar loose ya watery motion (dast) aana.",
    category: "symptom",
  },
  constipation: {
    term: "Constipation",
    simpleHinglish: "Stool hard hona ya pet saaf hone (bowel movement) mein difficulty hona.",
    category: "symptom",
  },
  nausea: {
    term: "Nausea",
    simpleHinglish: "Ulti (vomiting) aane jaisa jee ghabrana ya uncomfortable feel hona.",
    category: "symptom",
  },
  vomiting: {
    term: "Vomiting",
    simpleHinglish: "Stomach ke contents ka mouth ke through force ke saath bahar nikalna (ulti hona).",
    category: "symptom",
  },
  dizziness: {
    term: "Dizziness",
    simpleHinglish: "Chakkar aana ya body balance unstable feel hona.",
    category: "symptom",
  },
  headache: {
    term: "Headache",
    simpleHinglish: "Sir ke kisi hisse mein dard ya heaviness hona.",
    category: "symptom",
  },
  edema: {
    term: "Edema",
    simpleHinglish: "Body ke tissues (jaise pair ya hands) mein extra fluid jama hone se aane wali sujan (swelling).",
    category: "symptom",
  },
  oedema: {
    term: "Oedema",
    simpleHinglish: "Body ke tissues mein abnormal fluid accumulation ki wajah se sujan hona.",
    category: "symptom",
  },
  hypertension: {
    term: "Hypertension",
    simpleHinglish: "Blood vessels mein blood ka pressure normal limit se lagatar zyada (High BP) rehna.",
    category: "condition",
  },
  hypotension: {
    term: "Hypotension",
    simpleHinglish: "Blood pressure ka normal range se kam (Low BP) ho jana, jisse chakkar ya weakness aa sakti hai.",
    category: "condition",
  },
  hyperglycemia: {
    term: "Hyperglycemia",
    simpleHinglish: "Blood mein glucose (sugar) level ka normal se zyada ho jana.",
    category: "condition",
  },
  hypoglycemia: {
    term: "Hypoglycemia",
    simpleHinglish: "Blood mein glucose (sugar) level ka dangerously low ho jana, jisse ghabrahat aur paseena aata hai.",
    category: "condition",
  },
  infection: {
    term: "Infection",
    simpleHinglish: "Harmful germs (bacteria, virus, fungus) ka body mein ghus kar multiply hona aur illness paida karna.",
    category: "condition",
  },
  "bacterial infection": {
    term: "Bacterial Infection",
    simpleHinglish: "Bacteria ki wajah se hone wala infection (jaise pneumonia, UTI, bacterial throat infection).",
    category: "condition",
  },
  "viral infection": {
    term: "Viral Infection",
    simpleHinglish: "Virus ki wajah se hone wali illness (jaise flu, common cold, viral fever).",
    category: "condition",
  },
  "fungal infection": {
    term: "Fungal Infection",
    simpleHinglish: "Fungus ki wajah se skin, nails ya internal organs mein hone wala infection.",
    category: "condition",
  },
  antibacterial: {
    term: "Antibacterial",
    simpleHinglish: "Bacteria ko kill karne ya unki growth ko rokne wali medicine.",
    category: "pharmacology",
  },
  antifungal: {
    term: "Antifungal",
    simpleHinglish: "Fungal infection ko khatam karne ya fungal growth block karne wali medicine.",
    category: "pharmacology",
  },
  "anti-inflammatory": {
    term: "Anti-inflammatory",
    simpleHinglish: "Tissue inflammation, sujan aur irritation ko kam karne wali property ya medicine.",
    category: "pharmacology",
  },
  analgesic: {
    term: "Analgesic",
    simpleHinglish: "Pain (dard) ko kam karne ya relieve karne wali medicine.",
    category: "pharmacology",
  },
  antipyretic: {
    term: "Antipyretic",
    simpleHinglish: "High body temperature (fever/bukhar) ko kam karke normal level par laane wali medicine.",
    category: "pharmacology",
  },
  sedation: {
    term: "Sedation",
    simpleHinglish: "Neend aana, calmness ya relaxed drowsy state induce hona.",
    category: "adverse_effect",
  },
  drowsiness: {
    term: "Drowsiness",
    simpleHinglish: "Aalsi lagna, behoshi jaisi feeling ya din mein neend jaisa mehsoos hona.",
    category: "symptom",
  },
  palpitations: {
    term: "Palpitations",
    simpleHinglish: "Apne hi dil ki dhadkan (heartbeat) ko abnormally fast, pounding ya irregular mehsoos karna.",
    category: "symptom",
  },
  dyspnea: {
    term: "Dyspnea",
    simpleHinglish: "Saans lene mein takleef hona ya saans phoolna (shortness of breath).",
    category: "symptom",
  },
  pruritus: {
    term: "Pruritus",
    simpleHinglish: "Skin par teekhi khujli (itching) hona jisse scratch karne ka mann kare.",
    category: "symptom",
  },
  rash: {
    term: "Rash",
    simpleHinglish: "Skin par achanak laal daane, redness, spots ya irritation nikal aana.",
    category: "symptom",
  },
  hepatotoxicity: {
    term: "Hepatotoxicity",
    simpleHinglish: "Medicine, chemical ya toxic exposure ki wajah se liver cells ko damage hona.",
    category: "adverse_effect",
  },
  nephrotoxicity: {
    term: "Nephrotoxicity",
    simpleHinglish: "Kidneys par harmful ya toxic effect padna jisse kidney function deteriorate ho.",
    category: "adverse_effect",
  },
  hepatic: {
    term: "Hepatic",
    simpleHinglish: "Liver (jigar) se related.",
    category: "general",
  },
  renal: {
    term: "Renal",
    simpleHinglish: "Kidney (gurde) se related.",
    category: "general",
  },
  gastric: {
    term: "Gastric",
    simpleHinglish: "Stomach (pet) se related.",
    category: "general",
  },
  cardiac: {
    term: "Cardiac",
    simpleHinglish: "Heart (dil) se related.",
    category: "general",
  },
  neurological: {
    term: "Neurological",
    simpleHinglish: "Brain, spinal cord, nerves ya nervous system se related.",
    category: "general",
  },
  gastrointestinal: {
    term: "Gastrointestinal",
    simpleHinglish: "Digestive system (stomach, intestines aur food pipe) se related.",
    category: "general",
  },
  oral: {
    term: "Oral",
    simpleHinglish: "Mouth (muh) ke through nigal kar li jane wali medicine.",
    category: "route",
  },
  intravenous: {
    term: "Intravenous (IV)",
    simpleHinglish: "Direct vein (nas) ke andar syringe ya drip ke through di jane wali medicine.",
    category: "route",
  },
  intramuscular: {
    term: "Intramuscular (IM)",
    simpleHinglish: "Muscle tissue (jaise shoulder ya glute) ke andar deep injection lagana.",
    category: "route",
  },
  subcutaneous: {
    term: "Subcutaneous",
    simpleHinglish: "Skin ke theek neeche wali fatty tissue layer mein injection lagana (jaise insulin).",
    category: "route",
  },

  // Disease & Condition terms
  gerd: {
    term: "GERD",
    simpleHinglish: "Gastroesophageal Reflux Disease — stomach acid ka baar-baar food pipe mein upar aana jisse chhati mein jalan hoti hai.",
    category: "condition",
  },
  "peptic ulcer": {
    term: "Peptic Ulcer",
    simpleHinglish: "Stomach ya small intestine ki inner lining mein acid aur pepsin ke kaaran bana hua ghaav ya chhaala.",
    category: "condition",
  },
  "rheumatoid arthritis": {
    term: "Rheumatoid Arthritis",
    simpleHinglish: "Ek autoimmune disease jisme body ka immune system joints par attack karta hai, jisse joints mein inflammation, pain aur stiffness ho sakti hai.",
    category: "condition",
  },
  osteoarthritis: {
    term: "Osteoarthritis",
    simpleHinglish: "Joints ke smooth protective cartilage mein gradual wear-and-tear se hone wali degenerative joint disease.",
    category: "condition",
  },
  diabetes: {
    term: "Diabetes",
    simpleHinglish: "Chronic condition jisme pancreas adequate insulin nahi banata ya cells insulin utilize nahi kar pate, jisse blood sugar high rehta hai.",
    category: "condition",
  },
  asthma: {
    term: "Asthma",
    simpleHinglish: "Airways (saans ki nali) mein chronic inflammation aur narrowing ki wajah se wheezing aur breathing difficulty aana.",
    category: "condition",
  },
  hyperlipidemia: {
    term: "Hyperlipidemia",
    simpleHinglish: "Blood mein cholesterol ya triglycerides jaise fats/lipids ka level normal se zyada ho jana.",
    category: "condition",
  },
  anaphylaxis: {
    term: "Anaphylaxis",
    simpleHinglish: "Achanak hone wala severe, life-threatening allergic reaction jisme saans ruk sakti hai aur BP crash ho sakta hai.",
    category: "adverse_effect",
  },
  "lactic acidosis": {
    term: "Lactic Acidosis",
    simpleHinglish: "Blood mein lactic acid ka dangerously high jama ho jana, jo rare par severe medical emergency hoti hai.",
    category: "adverse_effect",
  },
  hypokalemia: {
    term: "Hypokalemia",
    simpleHinglish: "Blood mein potassium electrolyte ka level normal se kam ho jana.",
    category: "condition",
  },
  hyperkalemia: {
    term: "Hyperkalemia",
    simpleHinglish: "Blood mein potassium level dangerous limit tak badh jana, jo heart rhythm affect kar sakta hai.",
    category: "condition",
  },
  bronchospasm: {
    term: "Bronchospasm",
    simpleHinglish: "Airway muscles ka achanak tight ya constrict ho jana jisse saans lene mein ghur-ghur ya seeti ki aawaz aati hai.",
    category: "symptom",
  },
  tachycardia: {
    term: "Tachycardia",
    simpleHinglish: "Resting heart rate ka abnormally fast (usually > 100 beats/min) chalna.",
    category: "symptom",
  },
  bradycardia: {
    term: "Bradycardia",
    simpleHinglish: "Heart rate ka normal se kaafi dheema (usually < 60 beats/min) chalna.",
    category: "symptom",
  },
  "protein binding": {
    term: "Protein Binding",
    simpleHinglish: "Blood proteins (jaise albumin) ke saath medicine molecules ka temporary chipakna.",
    category: "pharmacology",
  },
  bioavailability: {
    term: "Bioavailability",
    simpleHinglish: "Dawa ka kitna fraction bina kisi change ke bloodstream (blood circulation) tak pahunchta hai.",
    category: "pharmacology",
  },
  "half-life": {
    term: "Half-Life (t½)",
    simpleHinglish: "Body mein dawa ki concentration ko aadha (50%) hone mein lagne wala time.",
    category: "pharmacology",
  },
  clearance: {
    term: "Clearance",
    simpleHinglish: "Body ke organs (kidneys/liver) dwaara per minute blood se medicine ko puri tarah remove karne ki speed.",
    category: "pharmacology",
  },
  "gluconeogenesis": {
    term: "Gluconeogenesis",
    simpleHinglish: "Liver dwara non-carbohydrate sources se naya glucose (sugar) banane ki metabolic process.",
    category: "pharmacology",
  },
  "proton pump": {
    term: "Proton Pump (H+/K+-ATPase)",
    simpleHinglish: "Stomach ke parietal cells mein acid (H+ ions) pump karne wala main engine enzyme.",
    category: "pharmacology",
  },
  "gastric acid": {
    term: "Gastric Acid",
    simpleHinglish: "Stomach mein banne wala concentrated hydrochloric acid jo khana digest karta hai.",
    category: "pharmacology",
  },
  inhibit: {
    term: "Inhibit",
    simpleHinglish: "Kisi biological target, enzyme ya chemical reaction ko rokna ya uski activity ko kam karna.",
    category: "pharmacology",
  },
  inhibition: {
    term: "Inhibition",
    simpleHinglish: "Kisi biological process ya enzyme ko block karne ki kriya.",
    category: "pharmacology",
  },
  bactericidal: {
    term: "Bactericidal",
    simpleHinglish: "Bacteria ko directly jaan se maar dene wali action.",
    category: "pharmacology",
  },
  bacteriostatic: {
    term: "Bacteriostatic",
    simpleHinglish: "Bacteria ki growth aur multiplication ko rokne wali action, jabki immune system unhe clear karta hai.",
    category: "pharmacology",
  },
  vasodilation: {
    term: "Vasodilation",
    simpleHinglish: "Blood vessels (khoon ki naliyon) ka relax hokar chauda (widen) ho jana jisse blood pressure kam hota hai.",
    category: "pharmacology",
  },
  vasoconstriction: {
    term: "Vasoconstriction",
    simpleHinglish: "Blood vessels ka sikudna (narrow hona) jisse blood flow kam aur pressure badh sakta hai.",
    category: "pharmacology",
  },
  hypersensitivity: {
    term: "Hypersensitivity",
    simpleHinglish: "Immune system ka kisi medicine ya substance ke prati exaggerated ya allergic reaction dena.",
    category: "adverse_effect",
  },
  thrombosis: {
    term: "Thrombosis",
    simpleHinglish: "Blood vessels ke andar blood clot (thakka) ban kar khoon ke bahaav ko rokna.",
    category: "condition",
  },
  prophylaxis: {
    term: "Prophylaxis",
    simpleHinglish: "Kisi disease ya complication ko shuru hone se pehle hi rokne ke liye di gayi preventive treatment.",
    category: "pharmacology",
  },
  tolerance: {
    term: "Tolerance",
    simpleHinglish: "Dawa ko baar-baar lene se body ka aadi hona, jisse wahi asar pane ke liye higher dose ki zaroorat padti hai.",
    category: "pharmacology",
  },
  acne: {
    term: "Acne",
    simpleHinglish: "Acne = skin par pimples/daane hone wali common condition jisme hair follicles aur oil glands block ya inflamed hote hain.",
    category: "condition",
  },
  alopecia: {
    term: "Alopecia",
    simpleHinglish: "Alopecia = hair loss ya baalon ka unusual girna.",
    category: "condition",
  },
  dermatitis: {
    term: "Dermatitis",
    simpleHinglish: "Dermatitis = skin ki inflammation/irritation, sujan aur redness.",
    category: "condition",
  },
  dandruff: {
    term: "Dandruff",
    simpleHinglish: "Dandruff = scalp ki dry ya oily flakes aur mild khujli hona.",
    category: "condition",
  },
  psoriasis: {
    term: "Psoriasis",
    simpleHinglish: "Psoriasis = chronic autoimmune skin condition jisme skin cells tezi se multiply hokar silvery scales aur red patches banate hain.",
    category: "condition",
  },
  eczema: {
    term: "Eczema",
    simpleHinglish: "Eczema = skin ki inflammatory condition jisme dry, red patches aur severe itching hoti hai.",
    category: "condition",
  },
  tinea: {
    term: "Tinea",
    simpleHinglish: "Tinea = fungus ki wajah se skin, nails ya scalp par hone wala fungal infection (jaise daad ya ringworm).",
    category: "condition",
  },
  urticaria: {
    term: "Urticaria",
    simpleHinglish: "Urticaria = skin par achanak nikalne wale raised, intensely itchy wheals ya hives.",
    category: "condition",
  },
  cough: {
    term: "Cough",
    simpleHinglish: "Cough = airways ko secretions aur irritants se clear karne ka protective body reflex.",
    category: "symptom",
  },
  wheezing: {
    term: "Wheezing",
    simpleHinglish: "Wheezing = saans lete waqt chhati se aane wali seeti jaisi high-pitched aawaz jo airway narrowing ka sign hai.",
    category: "symptom",
  },
  fever: {
    term: "Fever",
    simpleHinglish: "Fever = body temperature ka badhna jo aksar infection ya inflammation ka response hota hai.",
    category: "symptom",
  },
  fatigue: {
    term: "Fatigue",
    simpleHinglish: "Fatigue = excessive thakan aur energy ki kami feel hona jo aam aaraam se theek na ho.",
    category: "symptom",
  },
  topical: {
    term: "Topical",
    simpleHinglish: "Topical = skin ya mucous membrane par directly lagayi jaane wali medicine (jaise cream, ointment, gel).",
    category: "route",
  },
  autoimmune: {
    term: "Autoimmune",
    simpleHinglish: "Autoimmune = aisi condition jisme body ka apna immune system galti se healthy body tissues par attack karne lagta hai.",
    category: "condition",
  },
};

/**
 * Scan medicine fields for difficult terms and retrieve verified simple Hinglish meanings.
 */
export function extractDifficultTermsForMedicine(fields: {
  category?: string | null;
  mechanism_of_action?: string | null;
  indications?: string[] | null;
  common_adverse_effects?: string[] | null;
  serious_adverse_effects?: string[] | null;
  contraindications?: string[] | null;
  warnings?: string[] | null;
  drug_interactions?: string[] | null;
  routes?: string[] | null;
}): HinglishTermDefinition[] {
  // Combine all texts into a unified searchable corpus
  const corpusParts: string[] = [];
  if (fields.category) corpusParts.push(fields.category);
  if (fields.mechanism_of_action) corpusParts.push(fields.mechanism_of_action);
  if (fields.indications) corpusParts.push(...fields.indications);
  if (fields.common_adverse_effects) corpusParts.push(...fields.common_adverse_effects);
  if (fields.serious_adverse_effects) corpusParts.push(...fields.serious_adverse_effects);
  if (fields.contraindications) corpusParts.push(...fields.contraindications);
  if (fields.warnings) corpusParts.push(...fields.warnings);
  if (fields.drug_interactions) corpusParts.push(...fields.drug_interactions);
  if (fields.routes) corpusParts.push(...fields.routes);

  const fullText = corpusParts.join(" ").toLowerCase();

  const foundTerms: HinglishTermDefinition[] = [];
  const seenCanonicalKeys = new Set<string>();

  // Check each dictionary key in the corpus
  for (const [key, def] of Object.entries(HINGLISH_TERMS_DICTIONARY)) {
    // Avoid re-matching synonyms like diarrhoea/diarrhea or plural
    if (seenCanonicalKeys.has(def.term.toLowerCase())) continue;

    // Use boundary or substring match appropriate for medical words
    const regex = new RegExp(`\\b${key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "i");
    if (regex.test(fullText)) {
      foundTerms.push(def);
      seenCanonicalKeys.add(def.term.toLowerCase());
    }
  }

  // Always return prioritized by category: condition -> adverse_effect/symptom -> pharmacology
  return foundTerms.sort((a, b) => {
    const priority = (cat?: string) => {
      switch (cat) {
        case "condition": return 1;
        case "pharmacology": return 2;
        case "adverse_effect": return 3;
        case "symptom": return 4;
        default: return 5;
      }
    };
    return priority(a.category) - priority(b.category);
  });
}
