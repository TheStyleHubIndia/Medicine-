/**
 * Dynamic Problem / Condition Search Engine for MediDex Grow
 *
 * Rules:
 * - 100% grounded in verified database indications and authoritative medicine records.
 * - Dynamic matching across medical terms, English common terms, Hinglish terms, synonyms, and symptoms.
 * - Explanations follow the Simple Hinglish Meaning Engine standard.
 * - Strictly educational phrasing: "Database mein is medicine ka [condition]-related use recorded hai."
 * - No rankings, no "best medicine" claims, no prescriptions or personalized diagnosis.
 */

import { HINGLISH_TERMS_DICTIONARY, type HinglishTermDefinition } from "@/lib/hinglish-terms";

export type ProblemCategory =
  | "hair_scalp"
  | "skin"
  | "general"
  | "respiratory"
  | "digestive"
  | "musculoskeletal"
  | "metabolic"
  | "cardiovascular";

export interface ProblemCategoryInfo {
  id: ProblemCategory;
  name: string;
  icon: string;
  description: string;
}

export const PROBLEM_CATEGORIES: ProblemCategoryInfo[] = [
  {
    id: "hair_scalp",
    name: "Hair / Scalp",
    icon: "💇",
    description: "Hair fall, Dandruff, Scalp infections & Alopecia",
  },
  {
    id: "skin",
    name: "Skin",
    icon: "🧴",
    description: "Acne, Pimples, Rash, Itching, Fungal infection, Eczema, Psoriasis & Dermatitis",
  },
  {
    id: "general",
    name: "General",
    icon: "🤒",
    description: "Fever, Headache, Body pain, Fatigue, Nausea & Vomiting",
  },
  {
    id: "respiratory",
    name: "Respiratory",
    icon: "🫁",
    description: "Cough, Asthma, Wheezing & Breathlessness",
  },
  {
    id: "digestive",
    name: "Digestive",
    icon: "🩺",
    description: "Acidity, GERD, Peptic Ulcers, Diarrhea, Constipation & Nausea",
  },
  {
    id: "musculoskeletal",
    name: "Musculoskeletal",
    icon: "🦴",
    description: "Joint pain, Arthritis, Rheumatoid arthritis, Osteoarthritis & Muscle pain",
  },
  {
    id: "metabolic",
    name: "Metabolic",
    icon: "🩸",
    description: "Diabetes, High blood sugar & High cholesterol",
  },
  {
    id: "cardiovascular",
    name: "Cardiovascular",
    icon: "❤️",
    description: "High BP / Hypertension, Low BP / Hypotension & Edema",
  },
];

export interface VerifiedCondition {
  id: string;
  name: string;
  category: ProblemCategory;
  medicalTerm: string;
  simpleHinglish: string;
  simpleChain: string;
  medicalMeaning: string;
  commonSymptoms: string[];
  difficultWords: string[];
  memoryTrick: string;
  redFlags: string;
  searchAliases: string[];
  databaseSearchTerms: string[];
}

export const VERIFIED_CONDITIONS: VerifiedCondition[] = [
  // 💇 Hair / Scalp
  {
    id: "hair-fall",
    name: "Hair Fall & Alopecia",
    category: "hair_scalp",
    medicalTerm: "Alopecia — Hair loss",
    simpleHinglish: "Hair fall ka matlab baalon ka normal se zyada girna ya hair loss hona.",
    simpleChain: "Hair follicle cycle disruption / miniaturization → hair thinning → excess hair fall (alopecia)",
    medicalMeaning:
      "Alopecia refers to the partial or complete loss of hair from areas where it typically grows, encompassing androgenetic alopecia (pattern hair loss) and autoimmune alopecia areata.",
    commonSymptoms: [
      "Thinning of hair on the crown or temple",
      "Widening hair parting or receding hairline",
      "Smooth round patches of sudden hair loss (Alopecia areata)",
      "Excessive hair shed on pillows, clothing or during washing",
    ],
    difficultWords: ["alopecia", "dermatitis", "pruritus", "topical"],
    memoryTrick: "Hair Fall = Alopecia → Hair follicle miniaturisation ya shedding pause!",
    redFlags:
      "🚨 Red Flag: Sudden rapid total hair loss, inflamed/pus-crusted scalp, or loss of eyebrows and body hair requires immediate dermatologist evaluation.",
    searchAliases: [
      "hair fall",
      "hairfall",
      "hair loss",
      "baal girna",
      "baal gir rahe hain",
      "baal jhadna",
      "alopecia",
      "baldness",
      "ganjapan",
      "hair thinning",
      "baal patle hona",
      "receding hairline",
      "baal kam hona",
      "hair breakage",
      "weak hair",
      "baalon ka girna",
    ],
    databaseSearchTerms: ["alopecia", "hair loss", "hair"],
  },
  {
    id: "dandruff",
    name: "Dandruff & Scalp Flakes",
    category: "hair_scalp",
    medicalTerm: "Seborrhoeic Dermatitis (Scalp)",
    simpleHinglish:
      "Dandruff = Scalp ki dead skin cells ka dry ya oily flakes ke roop mein girna aur irritation/khujli hona.",
    simpleChain: "Excess scalp sebum + Malassezia yeast → accelerated epidermal skin turnover → visible white/oily flakes & itching",
    medicalMeaning:
      "A common scalp disorder characterized by accelerated epidermal turnover and white/greasy flakes, linked with Malassezia yeast colonization and sebum production.",
    commonSymptoms: [
      "White, flaky dead skin scales on hair and shoulders",
      "Itchy, irritated scalp",
      "Greasy or scaly patches on hairline and crown",
    ],
    difficultWords: ["dandruff", "dermatitis", "pruritus", "antifungal"],
    memoryTrick: "Dandruff = Scalp Flakes + Malassezia yeast → Antifungal active reduces yeast load!",
    redFlags:
      "🚨 Red Flag: Severe scalp swelling, yellow sticky crusting, bleeding cracks, or pus discharge indicates secondary bacterial infection.",
    searchAliases: [
      "dandruff",
      "roosi",
      "rusi",
      "khushki",
      "scalp flakes",
      "scalp itching",
      "sir mein khujli",
      "itchy scalp",
      "flaky scalp",
      "oily scalp",
      "dry scalp",
      "scalp problem",
      "scalp infection",
      "seborrheic dermatitis",
      "seborrhoeic dermatitis",
      "scalp khujli",
    ],
    databaseSearchTerms: ["dandruff", "seborrhoeic", "seborrheic", "scalp"],
  },
  {
    id: "scalp-infection",
    name: "Scalp Infection (Tinea Capitis)",
    category: "hair_scalp",
    medicalTerm: "Tinea Capitis — Scalp Dermatophytosis",
    simpleHinglish:
      "Scalp aur hair follicles mein hone wala fungal infection jisse circular daad, baal tootna aur sujan ho sakti hai.",
    simpleChain: "Fungal spore invasion of hair shaft → fungal hyphae growth → circular scaling, irritation & hair breakage",
    medicalMeaning:
      "A superficial fungal infection (dermatophytosis) of the scalp skin and hair shafts caused primarily by Trichophyton and Microsporum species.",
    commonSymptoms: [
      "Round, scaly, itchy patches on the scalp",
      "Brittle hair breaking near the scalp leaving black dots",
      "Tender, swollen lymph nodes in neck or behind ears",
    ],
    difficultWords: ["tinea", "antifungal", "inflammation", "infection"],
    memoryTrick: "Scalp Infection = Tinea Capitis → Systemic antifungal therapy eradicates fungal roots!",
    redFlags:
      "🚨 Red Flag: Boggy, raised, pus-leaking swelling (kerion) on the scalp can cause irreversible scarring baldness if not treated with oral antifungals promptly.",
    searchAliases: [
      "scalp infection",
      "tinea capitis",
      "scalp ringworm",
      "scalp daad",
      "scalp fungal",
      "fungal scalp",
    ],
    databaseSearchTerms: ["scalp ringworm", "tinea capitis", "scalp"],
  },

  // 🧴 Skin
  {
    id: "acne",
    name: "Acne & Pimples (Chehre ke Daane)",
    category: "skin",
    medicalTerm: "Acne Vulgaris",
    simpleHinglish:
      "Acne ek common skin condition hai jisme hair follicles/oil glands ke around pimples, blackheads ya whiteheads ho sakte hain.",
    simpleChain: "Skin hair follicles/oil glands block → sebum accumulation → C. acnes proliferation → inflammation & pimples",
    medicalMeaning:
      "Acne vulgaris is a chronic inflammatory disorder of the pilosebaceous unit resulting from follicular hyperkeratinization, excess sebum, and Cutibacterium acnes proliferation.",
    commonSymptoms: [
      "Pimples (inflamed, red tender bumps with or without pus)",
      "Blackheads (open clogged pores / comedones)",
      "Whiteheads (closed clogged pores)",
      "Deep painful cystic nodules under the skin",
    ],
    difficultWords: ["acne", "inflammation", "antibacterial", "rash"],
    memoryTrick: "Acne = Hair follicle clog + Excess Sebum = Pimple pop!",
    redFlags:
      "🚨 Red Flag: Severe nodulocystic acne causing deep scarring, or sudden acne flare with high fever/joint pain (acne fulminans) needs urgent dermatologist intervention.",
    searchAliases: [
      "acne",
      "pimples",
      "pimple",
      "daane",
      "dana",
      "chehre ke daane",
      "blackheads",
      "whiteheads",
      "acne vulgaris",
      "skin bumps",
      "muhase",
      "acne marks",
      "blemishes",
      "dark marks",
      "pimple marks",
    ],
    databaseSearchTerms: ["acne", "pimples", "comedone"],
  },
  {
    id: "rash",
    name: "Skin Rash & Erythema",
    category: "skin",
    medicalTerm: "Cutaneous Eruption / Erythema",
    simpleHinglish:
      "Rash = Skin par unusual redness, spots, chakatte ya irritation achanak ubhar aana.",
    simpleChain: "Allergen, chemical or drug trigger → mast cell histamine release → cutaneous vasodilation & red rash",
    medicalMeaning:
      "A noticeable change in the texture or color of the skin, reflecting epidermal inflammation, dermal vasodilation, or hypersensitivity reactions.",
    commonSymptoms: [
      "Redness, blotches, or hives across skin areas",
      "Itching, tingling, or burning sensation",
      "Raised bumps or flat red macules",
      "Dry, peeling, or cracked skin",
    ],
    difficultWords: ["rash", "hypersensitivity", "pruritus", "anaphylaxis"],
    memoryTrick: "Rash = Skin warning beacon → Identify allergen / drug trigger & cool inflammation!",
    redFlags:
      "🚨 Red Flag: Rapidly spreading rash with fever, target-like lesions, peeling skin, or blistering around lips/eyes (Stevens-Johnson syndrome alert) requires emergency room care.",
    searchAliases: [
      "rash",
      "skin rash",
      "chakatte",
      "skin redness",
      "red spots",
      "laal daane",
      "skin allergy",
      "skin infection",
    ],
    databaseSearchTerms: [
      "rash",
      "dermatoses",
      "urticaria",
      "skin and skin structure",
      "skin infection",
      "impetigo",
      "folliculitis",
      "herpes",
      "shingles",
    ],
  },
  {
    id: "itching-pruritus",
    name: "Itching & Pruritus (Khujli / Urticaria)",
    category: "skin",
    medicalTerm: "Pruritus / Urticaria",
    simpleHinglish:
      "Pruritus = Skin par teekhi khujli hona jisse bar-bar scratch karne ka mann karta hai.",
    simpleChain: "Allergen / irritation trigger → histamine & substance P release → itch-nerve activation → intense urge to scratch",
    medicalMeaning:
      "An unpleasant cutaneous sensory experience triggering the desire to scratch, mediated by histamine, substance P, and peripheral pruritogenic pathways.",
    commonSymptoms: [
      "Intense urge to scratch skin",
      "Raised itchy pink or red welts (hives / urticaria)",
      "Red excoriations and scratches on arms, legs, or torso",
      "Worsening itch at night or after hot baths",
    ],
    difficultWords: ["pruritus", "urticaria", "histamine", "allergy"],
    memoryTrick: "Pruritus = Scratch reflex → Histamine receptor block stops the itch signal!",
    redFlags:
      "🚨 Red Flag: Sudden widespread hives accompanied by lip/tongue swelling or breathing difficulty (anaphylaxis) requires immediate intramuscular adrenaline in ER.",
    searchAliases: [
      "itching",
      "khujli",
      "pruritus",
      "urticaria",
      "hives",
      "khujana",
      "pitti",
      "allergy khujli",
      "scratching",
      "skin itching",
      "skin khujli",
    ],
    databaseSearchTerms: ["pruritus", "urticaria", "itching", "allergic", "scabies", "lice"],
  },
  {
    id: "fungal-skin-infection",
    name: "Fungal Skin Infection (Daad / Tinea)",
    category: "skin",
    medicalTerm: "Tinea / Dermatophytosis / Candidiasis",
    simpleHinglish:
      "Fungal infection = Skin par fungus ki wajah se hone wala infection jisme circular red rings (daad) aur teekhi khujli hoti hai.",
    simpleChain: "Fungal dermatophyte contact → keratin layer invasion → outward-spreading circular red ring (daad) & itching",
    medicalMeaning:
      "Superficial infection of keratinized tissue (stratum corneum) caused by dermatophytes (Trichophyton, Microsporum, Epidermophyton) or yeasts (Candida).",
    commonSymptoms: [
      "Ring-shaped red, scaly rash with clearer center and raised edges (Ringworm)",
      "Burning, peeling skin between toes (Athlete's foot / Tinea pedis)",
      "Itchy red patches in the groin or inner thighs (Jock itch / Tinea cruris)",
      "Moist raw red areas under breasts or in skin folds (Candidal intertrigo)",
    ],
    difficultWords: ["antifungal", "tinea", "pruritus", "infection"],
    memoryTrick: "Fungal = Ring shape + Moisture loving → Ergosterol synthesis blocker clears fungus!",
    redFlags:
      "🚨 Red Flag: In diabetic or immunosuppressed individuals, spreading warm red skin or systemic fever needs urgent medical assessment to rule out cellulitis.",
    searchAliases: [
      "fungal skin infection",
      "fungal",
      "daad",
      "ringworm",
      "tinea",
      "fungus",
      "candidiasis",
      "athletes foot",
      "jock itch",
      "fungal infection",
    ],
    databaseSearchTerms: ["fungal", "tinea", "candidiasis", "dermatophytosis", "ringworm"],
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    category: "skin",
    medicalTerm: "Atopic Dermatitis / Eczema",
    simpleHinglish:
      "Eczema = Skin ki long-term inflammatory condition jisme dry, red patches aur severe khujli hoti hai.",
    simpleChain: "Skin barrier defect + immune hyperreactivity → moisture loss & environmental penetrance → chronic dry, itchy dermatitis",
    medicalMeaning:
      "A chronic relapsing pruritic inflammatory dermatosis characterized by epidermal barrier dysfunction, filaggrin deficiency, and elevated Th2 immune responses.",
    commonSymptoms: [
      "Very dry, sensitive skin easily cracked",
      "Severe nocturnal itching interrupting sleep",
      "Red to brownish-gray patches in crease of elbows, behind knees, and wrists",
      "Small raised bumps that may leak clear fluid when scratched",
    ],
    difficultWords: ["dermatitis", "inflammation", "pruritus", "hypersensitivity"],
    memoryTrick: "Eczema = The itch that rashes → Skin barrier restoration + Topical anti-inflammatory!",
    redFlags:
      "🚨 Red Flag: Sudden widespread painful blisters with high fever (eczema herpeticum) or honey-colored crusts (secondary staph impetigo) requires urgent medical care.",
    searchAliases: [
      "eczema",
      "atopic dermatitis",
      "dry itchy skin",
      "charam rog",
      "skin eczema",
    ],
    databaseSearchTerms: ["eczema", "atopic dermatitis", "dermatoses"],
  },
  {
    id: "psoriasis",
    name: "Psoriasis (Silvery Scales)",
    category: "skin",
    medicalTerm: "Plaque Psoriasis",
    simpleHinglish:
      "Psoriasis = Chronic autoimmune skin disease jisme skin cells abnormally tezi se multiply hokar silvery scales aur thick red patches banate hain.",
    simpleChain: "T-cell autoimmune overactivation → hyper-accelerated keratinocyte growth (3-4 days) → thick silvery plaque buildup",
    medicalMeaning:
      "A systemic immune-mediated inflammatory disorder mediated by the IL-23/IL-17 axis, leading to marked epidermal hyperproliferation and vascular expansion.",
    commonSymptoms: [
      "Raised red skin plaques covered with coarse silvery-white scales",
      "Dry, cracked plaques that may bleed (Auspitz sign)",
      "Itching, soreness, or burning sensations over elbows and knees",
      "Pitted, crumbling, or discolored finger and toe nails",
    ],
    difficultWords: ["psoriasis", "inflammation", "autoimmune", "contraindication"],
    memoryTrick: "Psoriasis = Accelerated keratinocyte cycle → Immune modulation & topical steroidal control!",
    redFlags:
      "🚨 Red Flag: Widespread fiery red skin covering over 80% body surface (erythroderma) or generalized sterile pustules (pustular psoriasis) is an inpatient medical emergency.",
    searchAliases: [
      "psoriasis",
      "silver scales",
      "plaque psoriasis",
      "red skin patches",
      "scales on skin",
    ],
    databaseSearchTerms: ["psoriasis", "plaque psoriasis"],
  },
  {
    id: "dermatitis",
    name: "Dermatitis (Skin Inflammation)",
    category: "skin",
    medicalTerm: "Contact & Seborrhoeic Dermatitis",
    simpleHinglish:
      "Dermatitis = Skin ki inflammation/irritation, sujan aur redness ki common reaction.",
    simpleChain: "External irritant or allergic contact → epidermal inflammatory cascade → redness, edema & skin irritation",
    medicalMeaning:
      "Broad medical term for inflammatory skin conditions including allergic or irritant contact dermatitis, seborrhoeic dermatitis, and stasis dermatitis.",
    commonSymptoms: [
      "Localized redness, swelling, and burning after contacting an irritant",
      "Itchy blisters or weeping watery lesions",
      "Dry, scaling, cracked skin areas",
    ],
    difficultWords: ["dermatitis", "inflammation", "pruritus", "rash"],
    memoryTrick: "Dermatitis = Derma (Skin) + -itis (Inflammation) → Remove offending agent & soothe skin!",
    redFlags:
      "🚨 Red Flag: Swelling around the eyes or mouth, or warm spreading tender redness with high fever indicates deep cellulitis needing immediate medical therapy.",
    searchAliases: [
      "dermatitis",
      "contact dermatitis",
      "skin inflammation",
      "skin allergy",
      "skin irritation",
    ],
    databaseSearchTerms: ["dermatitis", "seborrhoeic", "dermatoses"],
  },

  // 🤒 General
  {
    id: "fever",
    name: "Fever (Bukhar / Pyrexia)",
    category: "general",
    medicalTerm: "Pyrexia / Fever",
    simpleHinglish:
      "Fever = Body temperature ka normal limit se badhna (usually > 98.6°F / 37°C), jo aksar body ke infection se ladne ka natural response hota hai.",
    simpleChain: "Infection / pyrogens enter body → hypothalamus prostaglandin E2 resets thermostat higher → chills & fever (pyrexia)",
    medicalMeaning:
      "A regulated elevation of the hypothalamic thermoregulatory set-point in response to exogenous or endogenous pyrogens during infection or tissue injury.",
    commonSymptoms: [
      "Elevated body temperature measured by thermometer",
      "Chills, shivering, and shaking rigors",
      "Headache, generalized body ache, and fatigue",
      "Sweating, dehydration, and loss of appetite",
    ],
    difficultWords: ["antipyretic", "infection", "analgesic", "inflammation"],
    memoryTrick: "Fever = Hypothalamus set-point high → Antipyretic resets central thermostat!",
    redFlags:
      "🚨 Red Flag: Temperature > 103°F (39.4°C), stiff neck, mental confusion, breathing distress, or fever lasting > 3 days requires immediate physician evaluation.",
    searchAliases: [
      "fever",
      "bukhar",
      "bukhaar",
      "temperature",
      "pyrexia",
      "tez bukhar",
      "chills",
      "tap",
    ],
    databaseSearchTerms: ["fever", "pyrexia", "antipyretic"],
  },
  {
    id: "headache",
    name: "Headache & Migraine (Sir Dard)",
    category: "general",
    medicalTerm: "Cephalalgia / Migraine",
    simpleHinglish:
      "Headache = Sir, mathe ya gardan ke upar dard, pressure ya heaviness mehsoos hona.",
    simpleChain: "Cranial vascular dilation or trigeminal nerve sensitization → pain pathway activation → throbbing headache",
    medicalMeaning:
      "Pain localized to the cranial vault or upper cervical region, originating from pain-sensitive cranial structures through tension, vascular, or neurological mechanisms.",
    commonSymptoms: [
      "Throbbing, pulsating unilateral head pain (Migraine)",
      "Band-like tight pressure across forehead and temples (Tension)",
      "Sensitivity to bright light (photophobia) and loud sound (phonophobia)",
      "Nausea, dizziness, or visual flashing aura",
    ],
    difficultWords: ["analgesic", "neurological", "nausea", "vasodilation"],
    memoryTrick: "Headache = Vascular pulsation or muscle tension → Timely analgesia and dark room rest!",
    redFlags:
      "🚨 Red Flag: Sudden 'thunderclap' maximal intensity headache, headache with speech slurring, arm weakness, or high fever with neck stiffness requires emergency brain scan.",
    searchAliases: [
      "headache",
      "sir dard",
      "sar dard",
      "migraine",
      "adhasisi",
      "head pain",
      "cephalalgia",
      "sir me dard",
    ],
    databaseSearchTerms: ["headache", "migraine", "pain"],
  },
  {
    id: "body-pain",
    name: "Body Pain & Muscle Aches (Badan Dard / Myalgia)",
    category: "general",
    medicalTerm: "Myalgia / Generalized Musculoskeletal Pain",
    simpleHinglish:
      "Body pain = Pure sharir ya muscles mein dard, thakan aur stiffness hona jo viral illness ya over-exertion se ho sakti hai.",
    simpleChain: "Muscle strain, metabolic waste or systemic cytokine release → pain nociceptor stimulation → generalized body ache",
    medicalMeaning:
      "Muscular aches and pains resulting from viral systemic inflammation, strenuous physical exertion, or localized muscle strain.",
    commonSymptoms: [
      "Generalized muscle soreness across back, arms, and legs",
      "Feeling heavy, stiff, or bruised upon moving",
      "Joint and limb fatigue alongside general weakness",
    ],
    difficultWords: ["analgesic", "anti-inflammatory", "inflammation", "oral"],
    memoryTrick: "Body Pain = Systemic inflammatory prostaglandins → Analgesic relief + Rest & rehydration!",
    redFlags:
      "🚨 Red Flag: Muscle pain accompanied by dark tea-colored urine (rhabdomyolysis warning) or rapidly ascending limb paralysis needs immediate ER admission.",
    searchAliases: [
      "body pain",
      "badan dard",
      "muscle pain",
      "myalgia",
      "ang dard",
      "sharir me dard",
      "general pain",
    ],
    databaseSearchTerms: ["musculoskeletal pain", "pain", "myalgia"],
  },
  {
    id: "fatigue",
    name: "Fatigue & Physical Exhaustion (Thakan / Kamzori)",
    category: "general",
    medicalTerm: "Asthenia / Chronic Fatigue",
    simpleHinglish:
      "Fatigue = Lagatar severe thakan aur energy ki kami mehsoos hona jo aam aaraam se theek na ho.",
    simpleChain: "Cellular ATP energy depletion, chronic illness or low hemoglobin → reduced oxygen delivery → physical exhaustion",
    medicalMeaning:
      "Persistent subjective exhaustion and depleted physical/cognitive energy, differing from daytime sleepiness and often reflecting systemic, endocrine, or nutritional etiologies.",
    commonSymptoms: [
      "Persistent lack of physical energy and stamina",
      "Brain fog and trouble concentrating",
      "Feeling exhausted even after long sleep",
      "Heavy limbs and lack of motivation",
    ],
    difficultWords: ["sedation", "drowsiness", "hypoglycemia", "cardiac"],
    memoryTrick: "Fatigue = Depleted mitochondrial fuel → Investigate nutritional, thyroid, or anemia causes!",
    redFlags:
      "🚨 Red Flag: Sudden onset extreme fatigue with chest pressure, breathlessness, fainting, or black stools needs urgent emergency investigation.",
    searchAliases: [
      "fatigue",
      "thakan",
      "thakaan",
      "kamzori",
      "weakness",
      "exhaustion",
      "lethargy",
      "susti",
    ],
    databaseSearchTerms: ["fatigue", "weakness", "nutritional", "deficiency"],
  },
  {
    id: "nausea-vomiting",
    name: "Nausea & Vomiting (Ulti / Jee Michlana)",
    category: "general",
    medicalTerm: "Emesis & Nausea",
    simpleHinglish:
      "Nausea = Ulti jaisa feel hona; Vomiting = Pet ka khana force ke saath mouth se bahar nikalna.",
    simpleChain: "CTZ / GI vagal nerve stimulation → vomiting center activation in medulla → nausea & retching",
    medicalMeaning:
      "Nausea is the prodromal urge to vomit; emesis is the forceful retrograde expulsion of gastroduodenal contents coordinated by the brainstem vomiting center.",
    commonSymptoms: [
      "Sick sensation in stomach and throat",
      "Excess salivation and sweating before vomiting",
      "Retching and active vomiting",
      "Dehydration, dry mouth, and lightheadedness",
    ],
    difficultWords: ["nausea", "vomiting", "gastrointestinal", "regurgitation"],
    memoryTrick: "Nausea/Vomiting = CTZ trigger signal fired → Antiemetic dopamine/serotonin antagonist blocks reflex!",
    redFlags:
      "🚨 Red Flag: Vomiting dark coffee-ground blood, persistent vomiting > 24 hours unable to retain fluids, or severe sharp abdominal pain requires emergency hospital care.",
    searchAliases: [
      "nausea",
      "vomiting",
      "ulti",
      "jee michlana",
      "jeemichlana",
      "nausea and vomiting",
      "emesis",
      "vomit",
    ],
    databaseSearchTerms: ["nausea", "vomiting", "antiemetic", "emesis"],
  },

  // 🫁 Respiratory
  {
    id: "cough",
    name: "Cough (Khansi / Balgam)",
    category: "respiratory",
    medicalTerm: "Tussis / Acute & Chronic Cough",
    simpleHinglish:
      "Cough = Airways ko clear karne ka body reflex jisme gale ya chhati se khansi aati hai (dry ya balgam wali).",
    simpleChain: "Airway irritation, allergen or mucus accumulation → vagus-mediated cough reflex arc → explosive expulsion of air",
    medicalMeaning:
      "A vital defensive primitive reflex of the respiratory tract provoked by mechanical or chemical stimulation of vagal cough receptors in the larynx and tracheobronchial tree.",
    commonSymptoms: [
      "Dry, scratchy throat tickle causing uncontrollable coughing",
      "Chest congestion with yellow, green, or clear phlegm/mucus",
      "Rib cage soreness from frequent coughing fits",
      "Disrupted sleep and throat irritation",
    ],
    difficultWords: ["cough", "dyspnea", "bacterial infection", "antibacterial"],
    memoryTrick: "Cough = Airway chimney cleaner → Suppress dry hack / Loosen viscous mucus!",
    redFlags:
      "🚨 Red Flag: Coughing up fresh red blood (hemoptysis), high fever with severe breathlessness, or cough persisting > 3 weeks warrants urgent chest radiography and medical workup.",
    searchAliases: [
      "cough",
      "khansi",
      "khaansi",
      "balgam",
      "dry cough",
      "wet cough",
      "productive cough",
      "coughing",
      "phlegm",
    ],
    databaseSearchTerms: ["cough", "bronchitis", "mucolysis", "antitussive"],
  },
  {
    id: "asthma",
    name: "Asthma (Dama / Saans ki Bimari)",
    category: "respiratory",
    medicalTerm: "Bronchial Asthma",
    simpleHinglish:
      "Asthma = Airways (saans ki nali) mein swelling aur narrowing jisse saans lene mein seeti (wheezing) aur takleef hoti hai.",
    simpleChain: "Airway hyperresponsiveness + allergen trigger → bronchial smooth muscle spasm + mucus plugging → wheezing & dyspnea",
    medicalMeaning:
      "A chronic inflammatory airway disease characterized by variable expiratory airflow limitation, airway hyperresponsiveness, and recurrent wheezing episodes.",
    commonSymptoms: [
      "Wheezing (high-pitched whistling sound on breathing out)",
      "Shortness of breath (dyspnea) especially with exertion or cold air",
      "Tightness or heavy feeling in the chest",
      "Nocturnal coughing spells waking the patient up",
    ],
    difficultWords: ["asthma", "bronchospasm", "dyspnea", "anti-inflammatory"],
    memoryTrick: "Asthma = Airway bronchospasm + Mucosal edema → Reliever dilates pipes + Controller stops inflammation!",
    redFlags:
      "🚨 Red Flag: Severe breathlessness unable to speak full sentences, blue lips or nails (cyanosis), or no relief from rescue inhaler requires immediate emergency ambulance.",
    searchAliases: [
      "asthma",
      "dama",
      "wheezing",
      "breathlessness",
      "saans phoolna",
      "bronchospasm",
      "saans ki bimari",
      "bronchial asthma",
    ],
    databaseSearchTerms: ["asthma", "bronchospasm", "bronchoconstriction", "copd"],
  },
  {
    id: "wheezing-breathlessness",
    name: "Wheezing & Breathlessness (Dyspnea / Saans Phoolna)",
    category: "respiratory",
    medicalTerm: "Dyspnea & Bronchospasm",
    simpleHinglish:
      "Dyspnea = Saans lene mein takleef hona ya saans phoolna; Wheezing = Chhati se seeti jaisi aawaz nikalna.",
    simpleChain: "Narrowed lower airway diameter → turbulent airflow vibration → whistling wheeze & shortness of breath (dyspnea)",
    medicalMeaning:
      "Dyspnea is the subjective sensation of breathing discomfort; wheezing is a musical adventitious breath sound indicating turbulent airflow through narrowed lower airways.",
    commonSymptoms: [
      "Struggling to draw in enough air (air hunger)",
      "Audible whistling sound during breathing",
      "Rapid shallow respirations",
      "Inability to walk short distances without panting",
    ],
    difficultWords: ["dyspnea", "bronchospasm", "cardiac", "hypotension"],
    memoryTrick: "Wheezing = Tight bronchioles → Open airways with bronchodilators & identify root cardiac/pulmonary cause!",
    redFlags:
      "🚨 Red Flag: Sudden acute breathlessness with crushing chest pain, profuse cold sweating, or coughing up pink frothy sputum requires emergency medical intervention.",
    searchAliases: [
      "wheezing",
      "breathlessness",
      "saans phoolna",
      "dyspnea",
      "shortness of breath",
      "seeti aana",
      "saans lene me dikkat",
    ],
    databaseSearchTerms: ["bronchospasm", "dyspnea", "asthma", "copd"],
  },

  // 🩺 Digestive
  {
    id: "gerd-acidity",
    name: "Acidity, GERD & Heartburn (Chhati mein Jalan / Acid Reflux)",
    category: "digestive",
    medicalTerm: "Gastroesophageal Reflux Disease (GERD)",
    simpleHinglish:
      "GERD = Stomach ka acid/content baar-baar food pipe mein wapas aana, jisse heartburn (chhati mein jalan) aur khatti dakar hoti hai.",
    simpleChain: "Stomach acid/content → food pipe mein reflux → irritation → heartburn / chest burning",
    medicalMeaning:
      "A condition occurring when reflux of acidic gastric content causes troublesome symptoms (heartburn, acid regurgitation) or esophageal mucosal complications.",
    commonSymptoms: [
      "Burning pain in chest behind breastbone, worse after eating or lying down",
      "Acid regurgitation (sour acidic fluid rising into throat / mouth)",
      "Bloating, burning sensation in upper stomach",
      "Dry chronic cough or hoarse voice in the morning",
    ],
    difficultWords: ["gerd", "regurgitation", "heartburn", "gastric"],
    memoryTrick: "GERD = Lower Esophageal Sphincter leak → Proton Pump Inhibitor turns off the acid tap!",
    redFlags:
      "🚨 Red Flag: Food getting stuck when swallowing (dysphagia), unexplained weight loss, vomiting blood, or black sticky stools warrants urgent upper endoscopy.",
    searchAliases: [
      "acidity",
      "gerd",
      "acid reflux",
      "heartburn",
      "chhati mein jalan",
      "pet mein gas",
      "khatti dakar",
      "pet mein jalan",
      "acid",
      "gas problem",
    ],
    databaseSearchTerms: ["gerd", "peptic ulcer", "acid", "oesophagitis", "heartburn"],
  },
  {
    id: "peptic-ulcer",
    name: "Peptic Ulcer (Pet ke Chhale)",
    category: "digestive",
    medicalTerm: "Peptic Ulcer Disease (PUD)",
    simpleHinglish:
      "Peptic ulcer = Stomach ya intestine ki inner lining mein acid ki wajah se bana hua ulcer ya ghaav.",
    simpleChain: "H. pylori infection or NSAID inhibition of protective prostaglandins → acid erosion of mucosal lining → mucosal ulcer",
    medicalMeaning:
      "Defects in the gastrointestinal mucosa extending through the muscularis mucosae, predominantly caused by Helicobacter pylori colonization or NSAID use.",
    commonSymptoms: [
      "Gnawing or burning ache in upper abdomen",
      "Pain relieved temporarily by food or antacids (Duodenal ulcer)",
      "Pain aggravated by eating (Gastric ulcer)",
      "Bloating, belching, and early satiety",
    ],
    difficultWords: ["peptic ulcer", "gastric", "gastrointestinal", "contraindication"],
    memoryTrick: "Peptic Ulcer = Acid eats through protective mucus barrier → Eradicate H. pylori + Suppress acid!",
    redFlags:
      "🚨 Red Flag: Sudden sharp rigid abdominal pain (perforation), vomiting coffee-ground blood, or black tarry stools (melena) is an acute surgical emergency.",
    searchAliases: [
      "ulcer",
      "peptic ulcer",
      "pet ke chhale",
      "stomach ulcer",
      "duodenal ulcer",
      "gastric ulcer",
      "ulcers",
    ],
    databaseSearchTerms: ["peptic ulcer", "ulcer", "gastric ulcer", "duodenal ulcer"],
  },
  {
    id: "diarrhea",
    name: "Diarrhea & Loose Motions (Dast)",
    category: "digestive",
    medicalTerm: "Acute Gastroenteritis / Diarrhea",
    simpleHinglish:
      "Diarrhea = Baar-baar loose ya watery stool (dast) aana, jisse body se tezi se water aur electrolytes loss hote hain.",
    simpleChain: "Intestinal pathogen / irritation → hypermotility & impaired mucosal fluid absorption → loose watery stools (dast)",
    medicalMeaning:
      "The passage of three or more abnormally loose or liquid bowel movements per day, reflecting secretory, osmotic, or inflammatory disruptions in intestinal transport.",
    commonSymptoms: [
      "Frequent liquid or unformed bowel movements",
      "Abdominal cramping, rumbling, and griping pain",
      "Urgency to reach bathroom quickly",
      "Dehydration, dry mouth, weakness, and thirst",
    ],
    difficultWords: ["diarrhea", "diarrhoea", "bacterial infection", "dehydration"],
    memoryTrick: "Diarrhea = Rapid fluid drain → Oral Rehydration Salts (ORS) + Zinc + Specific treatment!",
    redFlags:
      "🚨 Red Flag: Blood or mucus in loose stools, extreme thirst with no urine output for > 8 hours, or high fever with confusion needs urgent hospital IV fluids.",
    searchAliases: [
      "diarrhea",
      "diarrhoea",
      "dast",
      "loose motion",
      "loose stool",
      "watery stool",
      "pet kharab",
      "gastroenteritis",
      "loose motions",
    ],
    databaseSearchTerms: ["diarrhoea", "diarrhea", "gastroenteritis"],
  },
  {
    id: "constipation",
    name: "Constipation (Kabz / Pet Saaf Na Hona)",
    category: "digestive",
    medicalTerm: "Constipation / Obstipation",
    simpleHinglish:
      "Constipation = Stool hard hona ya bowel movement mein difficulty hona jisse pet achhe se saaf na ho.",
    simpleChain: "Slow colonic transit time or low dietary fiber → excessive water reabsorption → hard, dry impacted stool (kabz)",
    medicalMeaning:
      "A functional digestive disorder marked by infrequent defecation (< 3 bowel movements per week), excessive straining, hard lumpy stool, or feeling of incomplete evacuation.",
    commonSymptoms: [
      "Passing fewer than three bowel movements a week",
      "Hard, dry, small pebble-like stools",
      "Straining or pain during bowel movements",
      "Sensation of a blockage in the rectum and abdominal bloating",
    ],
    difficultWords: ["constipation", "gastrointestinal", "oral", "adverse effect"],
    memoryTrick: "Constipation = Colon sluggish transit → Dietary fiber + Plentiful water + Osmotic laxative!",
    redFlags:
      "🚨 Red Flag: Inability to pass stool or gas with severe vomiting and swelling belly (bowel obstruction alert), or blood in stool with sudden weight loss requires urgent evaluation.",
    searchAliases: [
      "constipation",
      "kabz",
      "pet saaf na hona",
      "hard stool",
      "straining",
      "bowel problem",
      "kabzi",
    ],
    databaseSearchTerms: ["constipation", "laxative"],
  },

  // 🦴 Musculoskeletal
  {
    id: "joint-pain",
    name: "Joint Pain & Arthralgia (Jodon ka Dard)",
    category: "musculoskeletal",
    medicalTerm: "Arthralgia / Joint Pain",
    simpleHinglish:
      "Joint pain = Sharir ke jodon (joints) mein dard, jisse chalne-phirne ya movement mein takleef hoti hai.",
    simpleChain: "Mechanical joint overload, cartilage wear or minor trauma → synovial nerve stimulation → joint pain (arthralgia)",
    medicalMeaning:
      "Pain localized to one or more anatomical articulations, caused by mechanical strain, cartilage wear, synovial inflammation, or ligamentous sprains.",
    commonSymptoms: [
      "Aching pain in knees, hips, elbows, or fingers",
      "Joint stiffness after sitting or on waking up",
      "Mild puffiness or tenderness around the joint",
      "Creaking, grinding, or popping sound upon flexion",
    ],
    difficultWords: ["inflammation", "analgesic", "anti-inflammatory", "musculoskeletal"],
    memoryTrick: "Joint Pain = Articular friction or inflammation → Targeted anti-inflammatory + Joint mobility exercises!",
    redFlags:
      "🚨 Red Flag: Single hot, red, swollen joint with high fever and complete inability to bend or bear weight (septic arthritis alert) requires emergency needle aspiration.",
    searchAliases: [
      "joint pain",
      "jodon ka dard",
      "ghutne ka dard",
      "arthralgia",
      "kamar dard",
      "joint",
      "sandhi shool",
      "joint aches",
    ],
    databaseSearchTerms: ["musculoskeletal pain", "pain", "joint", "arthralgia"],
  },
  {
    id: "arthritis",
    name: "Arthritis & Joint Inflammation (Gathiya)",
    category: "musculoskeletal",
    medicalTerm: "Arthritis",
    simpleHinglish:
      "Arthritis = Jodon mein inflammation (sujan) aur pain ki condition jo joints ko stiff aur movement ko restricted karti hai.",
    simpleChain: "Joint cartilage wear & chronic synovial inflammation → bone-on-bone friction → stiffness, swelling & joint pain",
    medicalMeaning:
      "Inflammatory or degenerative pathology of the joints characterized by pain, synovial swelling, joint stiffness, and structural degradation.",
    commonSymptoms: [
      "Joint pain, swelling, and warmth",
      "Stiffness, particularly prominent upon waking in the morning",
      "Reduced range of motion making daily chores painful",
      "Joint enlargement or deformity over time",
    ],
    difficultWords: ["anti-inflammatory", "inflammation", "analgesic", "contraindication"],
    memoryTrick: "Arthritis = Joint inflammation → Anti-inflammatory control + Cartilage preservation!",
    redFlags:
      "🚨 Red Flag: Rapid joint swelling accompanied by fever, or numbness/weakness in limbs indicates urgent specialist rheumatology care.",
    searchAliases: [
      "arthritis",
      "gathiya",
      "joint inflammation",
      "swollen joints",
      "sandhivata",
      "gathia",
    ],
    databaseSearchTerms: ["arthritis", "osteoarthritis", "rheumatoid"],
  },
  {
    id: "rheumatoid-arthritis",
    name: "Rheumatoid Arthritis (Autoimmune Gathiya)",
    category: "musculoskeletal",
    medicalTerm: "Rheumatoid Arthritis (RA)",
    simpleHinglish:
      "Rheumatoid arthritis = Ek autoimmune joint disease jisme immune system joints par attack karta hai, jiski wajah se dono taraf ke joints mein pain aur swelling hoti hai.",
    simpleChain: "Immune-system related inflammation → joint synovial membrane attack → pain, stiffness & swelling",
    medicalMeaning:
      "A chronic systemic autoimmune inflammatory disorder characterized by symmetric polyarthritis, persistent synovitis, bone erosion, and extra-articular manifestations.",
    commonSymptoms: [
      "Symmetrical pain and swelling in small joints of hands, wrists, and feet",
      "Morning stiffness lasting longer than 1 hour",
      "Tender, warm, spongy swollen joints",
      "Rheumatoid nodules under the skin and chronic systemic fatigue",
    ],
    difficultWords: ["rheumatoid arthritis", "inflammation", "autoimmune", "hepatotoxicity"],
    memoryTrick: "Rheumatoid Arthritis = Autoimmune synovitis → Early DMARD therapy halts bone destruction!",
    redFlags:
      "🚨 Red Flag: Sudden chest pain, shortness of breath (rheumatoid lung/pericarditis), or severe eye pain with redness (scleritis) needs immediate specialist care.",
    searchAliases: [
      "rheumatoid arthritis",
      "ra",
      "autoimmune joint disease",
      "autoimmune gathiya",
      "rheumatoid",
    ],
    databaseSearchTerms: ["rheumatoid arthritis", "rheumatoid"],
  },
  {
    id: "osteoarthritis",
    name: "Osteoarthritis (Cartilage Ghisaav)",
    category: "musculoskeletal",
    medicalTerm: "Osteoarthritis (OA)",
    simpleHinglish:
      "Osteoarthritis = Jodon ke cartilage mein gradual wear-and-tear (ghisaav) se hone wali degenerative joint disease.",
    simpleChain: "Age / wear-and-tear articular cartilage breakdown → subchondral bone remodeling & osteophytes → movement-related joint pain",
    medicalMeaning:
      "A progressive joint failure characterized by focal cartilage degradation, subchondral bone sclerosis, and osteophyte formation, most prevalent in weight-bearing knees and hips.",
    commonSymptoms: [
      "Deep aching joint pain worse with walking or stairs, relieved by resting",
      "Brief morning stiffness lasting less than 30 minutes",
      "Bony enlargement of knee or finger joints (Heberden / Bouchard nodes)",
      "Joint grating or crepitus during motion",
    ],
    difficultWords: ["osteoarthritis", "analgesic", "inflammation", "oral"],
    memoryTrick: "Osteoarthritis = Mechanical wear & tear → Weight reduction + Quadriceps strengthening + Analgesia!",
    redFlags:
      "🚨 Red Flag: Sudden giving way of the knee, sudden locking preventing leg extension, or severe rest pain in hip requires urgent orthopedic consultation.",
    searchAliases: [
      "osteoarthritis",
      "oa",
      "wear and tear arthritis",
      "ghutne ka ghisaav",
      "cartilage wear",
      "degenerative arthritis",
    ],
    databaseSearchTerms: ["osteoarthritis"],
  },

  // 🩸 Metabolic
  {
    id: "diabetes",
    name: "Diabetes & High Blood Sugar (Madhumeha / Sugar)",
    category: "metabolic",
    medicalTerm: "Diabetes Mellitus (Type 2)",
    simpleHinglish:
      "Diabetes = Blood glucose/sugar level ko control karne mein body ki problem, jisme blood mein sugar level normal se high bana rehta hai.",
    simpleChain: "Pancreatic beta-cell insulin deficiency or insulin resistance → glucose cannot enter peripheral cells → hyperglycemia (high sugar)",
    medicalMeaning:
      "A group of metabolic diseases characterized by chronic hyperglycemia resulting from defects in insulin secretion, peripheral insulin resistance, or both.",
    commonSymptoms: [
      "Frequent urination, particularly getting up multiple times at night (polyuria)",
      "Excessive thirst (polydipsia) and constant dry mouth",
      "Increased hunger (polyphagia) alongside unexplained weight loss",
      "Slow wound healing, recurring fungal infections, or tingling in feet (neuropathy)",
    ],
    difficultWords: ["diabetes", "hyperglycemia", "hypoglycemia", "lactic acidosis"],
    memoryTrick: "Diabetes = Glucose locked out of cells → Insulin sensitizers and secretagogues lower glucose!",
    redFlags:
      "🚨 Red Flag: Fruity-smelling breath, rapid deep breathing, vomiting, confusion, or extreme weakness (DKA or hyperosmolar crisis) is a life-threatening ER emergency.",
    searchAliases: [
      "diabetes",
      "sugar",
      "high sugar",
      "sugar ki bimari",
      "blood sugar",
      "hyperglycemia",
      "madhumeha",
      "type 2 diabetes",
      "sugar problem",
    ],
    databaseSearchTerms: ["diabetes", "hyperglycemia", "type 2 diabetes"],
  },
  {
    id: "high-cholesterol",
    name: "High Cholesterol & Hyperlipidemia (Khoon mein Fat)",
    category: "metabolic",
    medicalTerm: "Hypercholesterolaemia / Dyslipidemia",
    simpleHinglish:
      "High cholesterol = Khoon mein fats/cholesterol (LDL) ka level safe limits se zyada hona jo arteries ko block karne ka risk banata hai.",
    simpleChain: "Excess hepatic LDL synthesis or reduced clearance → LDL accumulation in arterial walls → atheroma plaque formation",
    medicalMeaning:
      "An elevation of plasma cholesterol, triglycerides, or both, contributing to atherosclerosis plaque formation in coronary, cerebral, and peripheral vasculature.",
    commonSymptoms: [
      "Usually symptomless ('Silent condition') detected via routine lipid blood test",
      "Yellow fatty deposits around the eyelids (Xanthelasma) in severe cases",
      "Tendon xanthomas (fatty deposits on Achilles tendon or knuckles)",
    ],
    difficultWords: ["hyperlipidemia", "cardiac", "thrombosis", "clearance"],
    memoryTrick: "High Cholesterol = Artery clogging lipid plaque → Statins block liver HMG-CoA reductase!",
    redFlags:
      "🚨 Red Flag: Sudden chest tightness, pain radiating down left arm or jaw, cold sweating, or sudden breathlessness indicates coronary ischemia — call emergency immediately.",
    searchAliases: [
      "high cholesterol",
      "cholesterol",
      "hyperlipidemia",
      "high lipid",
      "dyslipidemia",
      "blood fat",
      "triglycerides",
    ],
    databaseSearchTerms: ["hypercholesterolaemia", "hypercholesterolemia", "lipid", "cholesterol"],
  },

  // ❤️ Cardiovascular
  {
    id: "hypertension",
    name: "High BP / Hypertension (High Blood Pressure)",
    category: "cardiovascular",
    medicalTerm: "Hypertension / Essential Hypertension",
    simpleHinglish:
      "High BP = Blood vessels ki deewaron par khoon ka pressure normal se consistently high (≥ 130/80 mmHg) rehna.",
    simpleChain: "Arterial stiffness + elevated systemic vascular resistance → high intravascular pressure against vessel walls → high BP",
    medicalMeaning:
      "A chronic cardiovascular condition in which systemic arterial blood pressure is persistently elevated, increasing risk for myocardial infarction, stroke, and renal failure.",
    commonSymptoms: [
      "Frequently asymptomatic ('Silent Killer') diagnosed on routine BP check",
      "Occasional morning headaches, heaviness in neck and back of head",
      "Dizziness, lightheadedness, or sudden visual blurring during BP spikes",
      "Pounding heartbeat (palpitations) or shortness of breath on exertion",
    ],
    difficultWords: ["hypertension", "vasodilation", "cardiac", "renal"],
    memoryTrick: "Hypertension = High peripheral resistance → Vasodilators & RAS blockers relax vessel pipes!",
    redFlags:
      "🚨 Red Flag: BP reading > 180/120 mmHg accompanied by severe headache, chest pain, numbness, vision changes, or confusion (Hypertensive Crisis) requires immediate ER care.",
    searchAliases: [
      "high bp",
      "hypertension",
      "high blood pressure",
      "bp",
      "blood pressure",
      "tez bp",
      "high pressure",
      "high bp problem",
    ],
    databaseSearchTerms: ["hypertension", "blood pressure"],
  },
  {
    id: "hypotension",
    name: "Low BP / Hypotension (Kam Blood Pressure)",
    category: "cardiovascular",
    medicalTerm: "Hypotension / Orthostatic Hypotension",
    simpleHinglish:
      "Low BP = Blood pressure ka normal range se kam (< 90/60 mmHg) ho jana, jisse chakkar ya weakness aa sakti hai.",
    simpleChain: "Reduced intravascular volume or vasodilation → reduced cardiac output & brain perfusion → dizziness & low BP",
    medicalMeaning:
      "A state in which systemic arterial blood pressure drops below physiological norms, potentially compromising organ and cerebral perfusion.",
    commonSymptoms: [
      "Dizziness or lightheadedness when abruptly standing up (orthostatic drop)",
      "Temporary blackouts or fainting spells (syncope)",
      "Blurred or fading vision and poor concentration",
      "Cold, pale, clammy skin and generalized fatigue",
    ],
    difficultWords: ["hypotension", "dizziness", "cardiac", "vasodilation"],
    memoryTrick: "Hypotension = Low hydrostatic flow → Hydration + Sodium balance + Slow postural shifts!",
    redFlags:
      "🚨 Red Flag: Sudden acute collapse in blood pressure with confusion, cold blue extremities, and rapid weak pulse (circulatory shock) requires immediate emergency resuscitation.",
    searchAliases: [
      "low bp",
      "hypotension",
      "low blood pressure",
      "chakkar",
      "kam bp",
      "kam blood pressure",
    ],
    databaseSearchTerms: ["hypotension", "shock"],
  },
  {
    id: "edema",
    name: "Edema / Fluid Retention (Sujan / Oedema)",
    category: "cardiovascular",
    medicalTerm: "Peripheral & Pulmonary Edema",
    simpleHinglish:
      "Edema = Body ke tissue mein extra fluid jama hone se sujan (swelling) aana, especially pairon, takhno ya chehre par.",
    simpleChain: "Capillary hydrostatic pressure increase or low oncotic albumin → fluid shift into interstitial spaces → visible swelling (edema)",
    medicalMeaning:
      "An abnormal accumulation of fluid in the interstitial compartment caused by increased capillary hydrostatic pressure, diminished plasma oncotic pressure, or renal salt retention.",
    commonSymptoms: [
      "Swelling or puffiness of legs, ankles, feet, or face",
      "Stretched, shiny, or tight skin over swollen area",
      "Pitting edema (skin that holds an indent after pressing for 5 seconds)",
      "Heaviness in legs and sudden unexplained weight gain",
    ],
    difficultWords: ["edema", "oedema", "cardiac", "renal"],
    memoryTrick: "Edema = Excess water trapped in tissues → Diuretics help kidneys excrete excess fluid!",
    redFlags:
      "🚨 Red Flag: Sudden acute swelling in one calf with pain and heat (deep vein thrombosis / DVT warning) or sudden severe swelling with breathlessness requires emergency hospital care.",
    searchAliases: [
      "edema",
      "oedema",
      "sujan",
      "swelling",
      "water retention",
      "fluid retention",
      "pairon mein sujan",
      "soojan",
      "swollen feet",
    ],
    databaseSearchTerms: ["oedema", "edema", "fluid retention"],
  },
];

/**
 * Verified Hinglish Meaning Engine Resolver
 *
 * Looks up any difficult medical term in the verified HINGLISH_TERMS_DICTIONARY.
 * If not present, returns exactly:
 * "Simple Hinglish meaning current database mein available nahi hai."
 */
export function resolveHinglishMeaning(term: string): {
  term: string;
  simpleHinglish: string;
  isAvailable: boolean;
} {
  const clean = term.trim().toLowerCase();
  const direct = HINGLISH_TERMS_DICTIONARY[clean];
  if (direct) {
    return {
      term: direct.term,
      simpleHinglish: direct.simpleHinglish,
      isAvailable: true,
    };
  }

  // Check case-insensitive key or word boundaries
  for (const [key, def] of Object.entries(HINGLISH_TERMS_DICTIONARY)) {
    if (key.toLowerCase() === clean || def.term.toLowerCase() === clean) {
      return {
        term: def.term,
        simpleHinglish: def.simpleHinglish,
        isAvailable: true,
      };
    }
  }

  return {
    term,
    simpleHinglish: "Simple Hinglish meaning current database mein available nahi hai.",
    isAvailable: false,
  };
}

export type ProductFormCategory =
  | "topical"
  | "oral"
  | "respiratory"
  | "injectable"
  | "drops"
  | "other";

export interface FormClassification {
  primaryCategory: ProductFormCategory;
  primaryCategoryLabel: string;
  badgeLabel: string;
  formIcon: string;
  isTopical: boolean;
  isOral: boolean;
  isRespiratory: boolean;
  isInjectable: boolean;
  isDrops: boolean;
  isOther: boolean;
  topicalForms: string[];
  oralForms: string[];
  respiratoryForms: string[];
  injectableForms: string[];
  dropsForms: string[];
  otherForms: string[];
}

/**
 * Classify verified dosage forms and routes into standardized categories:
 * - 🧴 Topical Products (Creams, Ointments, Gels, Lotions, Shampoos, Solutions, Foams, Sprays, Cleansers)
 * - 💊 Oral Medicines (Tablets, Capsules, Syrups, Suspensions, Sachets, Powders, Oral Solutions)
 * - 🌬️ Respiratory (Inhalers, DPI, Respules, Nebuliser Solutions, Nasal Sprays)
 * - 💉 Injectable (Injections, Infusions, Vials, Syringes)
 * - 👁️ Drops (Eye Drops, Ear Drops, Ophthalmic Solutions)
 */
export function classifyMedicineDosageForms(
  dosageForms?: string[] | null,
  routes?: string[] | null
): FormClassification {
  const forms = dosageForms || [];
  const rts = routes || [];
  const topicalForms: string[] = [];
  const oralForms: string[] = [];
  const respiratoryForms: string[] = [];
  const injectableForms: string[] = [];
  const dropsForms: string[] = [];
  const otherForms: string[] = [];

  for (const form of forms) {
    const fl = form.toLowerCase();
    if (
      fl.includes("cream") ||
      fl.includes("ointment") ||
      fl.includes("gel") ||
      fl.includes("lotion") ||
      fl.includes("shampoo") ||
      fl.includes("topical") ||
      fl.includes("foam") ||
      fl.includes("serum") ||
      fl.includes("solution for topical") ||
      fl.includes("lacquer") ||
      fl.includes("paste") ||
      fl.includes("patch") ||
      fl.includes("transdermal") ||
      fl.includes("cleanser")
    ) {
      topicalForms.push(form);
    } else if (
      fl.includes("inhaler") ||
      fl.includes("dpi") ||
      fl.includes("dry powder inhaler") ||
      fl.includes("respule") ||
      fl.includes("rotacap") ||
      fl.includes("nebuliser") ||
      fl.includes("nebulizer") ||
      fl.includes("nasal") ||
      fl.includes("inhalation") ||
      fl.includes("soft mist")
    ) {
      respiratoryForms.push(form);
    } else if (
      fl.includes("injection") ||
      fl.includes("infusion") ||
      fl.includes("vial") ||
      fl.includes("syringe") ||
      fl.includes("pen") ||
      fl.includes("ampoule") ||
      fl.includes("iv infusion")
    ) {
      injectableForms.push(form);
    } else if (
      fl.includes("eye drops") ||
      fl.includes("ear drops") ||
      fl.includes("ophthalmic") ||
      fl.includes("otic") ||
      fl.includes("eye ointment")
    ) {
      dropsForms.push(form);
    } else if (
      fl.includes("tablet") ||
      fl.includes("capsule") ||
      fl.includes("syrup") ||
      fl.includes("suspension") ||
      fl.includes("sachet") ||
      fl.includes("granule") ||
      fl.includes("lozenge") ||
      fl.includes("powder for oral") ||
      fl.includes("oral solution") ||
      fl.includes("oral drops") ||
      fl.includes("oral syrup") ||
      fl.includes("oral liquid") ||
      fl.includes("oral suspension") ||
      fl.includes("effervescent") ||
      fl.includes("dispersible") ||
      fl.includes("mouth dissolving") ||
      fl.includes("sublingual") ||
      fl.includes("caplet") ||
      fl.includes("powder")
    ) {
      oralForms.push(form);
    } else {
      otherForms.push(form);
    }
  }

  const rtsLower = rts.map((r) => r.toLowerCase());
  if (topicalForms.length === 0 && (rtsLower.includes("topical") || rtsLower.includes("transdermal"))) {
    topicalForms.push("Topical formulation");
  }
  if (oralForms.length === 0 && rtsLower.includes("oral")) {
    oralForms.push("Oral formulation");
  }
  if (respiratoryForms.length === 0 && (rtsLower.includes("inhalation") || rtsLower.includes("nasal") || rtsLower.includes("nebulisation"))) {
    respiratoryForms.push("Inhalation formulation");
  }
  if (injectableForms.length === 0 && (rtsLower.includes("intravenous") || rtsLower.includes("intramuscular") || rtsLower.includes("subcutaneous"))) {
    injectableForms.push("Parenteral / Injection");
  }
  if (dropsForms.length === 0 && (rtsLower.includes("ophthalmic") || rtsLower.includes("otic"))) {
    dropsForms.push("Ophthalmic / Otic drops");
  }

  const isTopical = topicalForms.length > 0;
  const isOral = oralForms.length > 0;
  const isRespiratory = respiratoryForms.length > 0;
  const isInjectable = injectableForms.length > 0;
  const isDrops = dropsForms.length > 0;
  const isOther = otherForms.length > 0 || (!isTopical && !isOral && !isRespiratory && !isInjectable && !isDrops);

  let primaryCategory: ProductFormCategory = "oral";
  let primaryCategoryLabel = "Oral Medicine";
  let formIcon = "💊";
  let badgeLabel = forms.length > 0 ? forms.join(", ") : "Tablet / Capsule";

  if (isTopical && (!isOral || topicalForms.length >= oralForms.length)) {
    primaryCategory = "topical";
    primaryCategoryLabel = "Topical Product";
    formIcon = "🧴";
    badgeLabel = topicalForms.join(", ");
  } else if (isTopical && isOral) {
    primaryCategory = "topical";
    primaryCategoryLabel = "Topical & Oral Formulation";
    formIcon = "🧴";
    badgeLabel = `${topicalForms.slice(0, 2).join(", ")} / ${oralForms[0]}`;
  } else if (isRespiratory && !isOral) {
    primaryCategory = "respiratory";
    primaryCategoryLabel = "Respiratory (Inhaler / Spray)";
    formIcon = "🌬️";
    badgeLabel = respiratoryForms.join(", ");
  } else if (isDrops && !isOral) {
    primaryCategory = "drops";
    primaryCategoryLabel = "Drops (Eye / Ear)";
    formIcon = "👁️";
    badgeLabel = dropsForms.join(", ");
  } else if (isInjectable && !isOral) {
    primaryCategory = "injectable";
    primaryCategoryLabel = "Injectable (Injection / Infusion)";
    formIcon = "💉";
    badgeLabel = injectableForms.join(", ");
  } else if (isOral) {
    primaryCategory = "oral";
    primaryCategoryLabel = "Oral Medicine";
    formIcon = "💊";
    badgeLabel = oralForms.length > 0 ? oralForms.join(", ") : "Tablet / Capsule";
  } else {
    primaryCategory = "other";
    primaryCategoryLabel = "Special Formulation";
    formIcon = "✨";
    badgeLabel = otherForms.join(", ");
  }

  return {
    primaryCategory,
    primaryCategoryLabel,
    badgeLabel,
    formIcon,
    isTopical,
    isOral,
    isRespiratory,
    isInjectable,
    isDrops,
    isOther,
    topicalForms,
    oralForms,
    respiratoryForms,
    injectableForms,
    dropsForms,
    otherForms,
  };
}

/**
 * Scan any medical text and extract difficult terms with verified simple Hinglish meanings.
 */
export function extractDifficultWordsForText(
  text: string
): Array<{ term: string; simpleHinglish: string }> {
  const words = text.toLowerCase();
  const matched: Array<{ term: string; simpleHinglish: string }> = [];
  const seen = new Set<string>();

  for (const [key, def] of Object.entries(HINGLISH_TERMS_DICTIONARY)) {
    if (seen.has(def.term.toLowerCase())) continue;
    const regex = new RegExp(`\\b${key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "i");
    if (regex.test(words)) {
      matched.push({ term: def.term, simpleHinglish: def.simpleHinglish });
      seen.add(def.term.toLowerCase());
    }
  }

  return matched;
}

export interface MatchedMedicineConnection {
  medicineId: string;
  medicineSlug: string;
  genericName: string;
  displayName: string;
  drugClass: string;
  matchedIndication: string;
  matchedIndicationSnippet?: string | undefined;
  relevantFormForIndication?: string | undefined;
  formSafetyNote?: string | undefined;
  relationReason: string;
  dosageForms: string[];
  routes: string[];
  formClassification: FormClassification;
  simpleExplanation: string;
  difficultTerms: Array<{ term: string; simpleHinglish: string }>;
}

export interface ResultCountSemantics {
  uniqueMedicinesCount: number;
  verifiedDosageFormsCount: number;
  distinctDosageForms: string[];
  verifiedRoutesCount: number;
  distinctRoutes: string[];
  topicalCount: number;
  oralCount: number;
  respiratoryCount: number;
  injectableCount: number;
  dropsCount: number;
  otherCount: number;
}

export function computeResultCountSemantics(
  medicines: MatchedMedicineConnection[]
): ResultCountSemantics {
  const uniqueMedicineIds = new Set(medicines.map((m) => m.medicineId));
  const uniqueMedicinesCount = uniqueMedicineIds.size;

  const allForms = new Set<string>();
  const allRoutes = new Set<string>();

  for (const m of medicines) {
    for (const f of m.dosageForms) {
      if (f && f.trim()) allForms.add(f.trim());
    }
    for (const r of m.routes) {
      if (r && r.trim()) allRoutes.add(r.trim());
    }
  }

  const topicalCount = medicines.filter((m) => m.formClassification.isTopical).length;
  const oralCount = medicines.filter((m) => m.formClassification.isOral).length;
  const respiratoryCount = medicines.filter((m) => m.formClassification.isRespiratory).length;
  const injectableCount = medicines.filter((m) => m.formClassification.isInjectable).length;
  const dropsCount = medicines.filter((m) => m.formClassification.isDrops).length;
  const otherCount = medicines.filter((m) => m.formClassification.isOther).length;

  return {
    uniqueMedicinesCount,
    verifiedDosageFormsCount: allForms.size,
    distinctDosageForms: Array.from(allForms),
    verifiedRoutesCount: allRoutes.size,
    distinctRoutes: Array.from(allRoutes),
    topicalCount,
    oralCount,
    respiratoryCount,
    injectableCount,
    dropsCount,
    otherCount,
  };
}

/**
 * Dynamically match medicines and universal products from the database against a verified condition.
 * Enforces educational wording, dosage form categorization, and 100% database ground truth.
 */
export function findRelatedMedicinesForCondition(
  condition: VerifiedCondition,
  medicines: Array<{
    id: string;
    slug: string;
    generic_name: string;
    display_name: string;
    category?: string | null;
    indications?: string[] | null;
    dosage_forms?: string[] | null;
    routes?: string[] | null;
  }>
): MatchedMedicineConnection[] {
  const results: MatchedMedicineConnection[] = [];
  const searchNeedles = condition.databaseSearchTerms.map((t) => t.toLowerCase());

  for (const med of medicines) {
    const indications = med.indications || [];
    let matchedIndicationText = "";
    let matchedIndicationSnippet = "";

    // 1. Check exact / partial matches in verified indications
    for (const ind of indications) {
      // Split into distinct clinical indication clauses by semicolon
      const clauses = ind.split(";").map((c) => c.trim()).filter(Boolean);
      for (const clause of clauses) {
        const clauseLower = clause.toLowerCase();
        if (searchNeedles.some((needle) => clauseLower.includes(needle))) {
          matchedIndicationText = ind;
          matchedIndicationSnippet = clause;
          break;
        }
      }
      if (matchedIndicationSnippet) break;
      const indLower = ind.toLowerCase();
      if (searchNeedles.some((needle) => indLower.includes(needle))) {
        matchedIndicationText = ind;
        matchedIndicationSnippet = ind;
        break;
      }
    }

    // 2. Check category if indication did not trigger
    if (!matchedIndicationText && med.category) {
      const catLower = med.category.toLowerCase();
      if (searchNeedles.some((needle) => catLower.includes(needle))) {
        matchedIndicationText = med.category;
        matchedIndicationSnippet = med.category;
      }
    }

    if (matchedIndicationText) {
      const dosageForms = med.dosage_forms || [];
      const routes = med.routes || [];
      const formClassification = classifyMedicineDosageForms(dosageForms, routes);

      // Contextual Simple Hinglish explanation
      let simpleExplanation = "";
      if (formClassification.isTopical) {
        const topForms = formClassification.topicalForms.length > 0
          ? formClassification.topicalForms.join(", ")
          : "Cream / Gel / Shampoo / Topical";
        simpleExplanation = `Skin ya scalp par lagayi jane wali medicine/product (${topForms}) jo verified database ke according ${condition.name} ke liye recorded hai.`;
      } else if (formClassification.primaryCategory === "other") {
        simpleExplanation = `${formClassification.primaryCategoryLabel} (${formClassification.badgeLabel}) jo verified database ke according ${condition.name} ke liye recorded hai.`;
      } else {
        const oralF = formClassification.oralForms.length > 0
          ? formClassification.oralForms.join(", ")
          : "Tablet / Capsule";
        simpleExplanation = `Mouth ke through li jane wali medicine (${oralF}) jiska verified database ke according ${condition.name}-related use recorded hai.`;
      }

      // Automatically detect difficult medical words in the product's record
      const corpus = `${med.generic_name} ${med.display_name} ${med.category || ""} ${matchedIndicationText} ${dosageForms.join(" ")} ${routes.join(" ")}`;
      const difficultTerms = extractDifficultWordsForText(corpus).slice(0, 4);

      // Task 6: Associate the condition with the specific relevant verified dosage form
      let relevantFormForIndication: string | undefined = undefined;
      let formSafetyNote: string | undefined = undefined;

      if ((med.slug === "triamcinolone" || med.slug.includes("triamcinolone")) && condition.id === "hair-fall") {
        relevantFormForIndication = "Injectable Suspension (Route: Intralesional injection for alopecia areata)";
        formSafetyNote = "Note: Database mein recorded other dosage forms (Oral Paste, Nasal Spray) non-hair conditions ke liye indicated hain (canker sores aur allergic rhinitis), hair loss ke liye nahi.";
      } else if (med.slug === "minoxidil-topical" || med.slug.includes("minoxidil")) {
        relevantFormForIndication = "Topical Solution & Topical Foam (Route: Topical)";
        formSafetyNote = "Both verified formulations (Topical Solution aur Topical Foam) androgenetic alopecia ke liye indicated hain.";
      } else if (med.slug === "ketoconazole" && condition.id === "dandruff") {
        relevantFormForIndication = "Shampoo & Cream (Route: Topical)";
        formSafetyNote = "Topical Shampoo aur Cream formulations dandruff/seborrhoeic dermatitis ke liye indicated hain. Oral tablet restricted systemic use ke liye hai.";
      } else if ((med.slug === "ciclopirox" || med.slug.includes("ciclopirox")) && condition.id === "dandruff") {
        relevantFormForIndication = "Medicated Shampoo (Route: Topical)";
        formSafetyNote = "Medicated Shampoo formulation scalp dandruff ke liye indicated hai. 8% nail lacquer nail fungal infections ke liye hai.";
      } else if (med.slug === "terbinafine" && condition.id === "dandruff") {
        relevantFormForIndication = "Tablet (Route: Oral)";
        formSafetyNote = "Scalp ringworm ke liye oral tablet form indicated hai. Topical cream body/foot tinea ke liye use hoti hai.";
      } else if (med.slug === "griseofulvin" && condition.id === "dandruff") {
        relevantFormForIndication = "Tablet & Oral Suspension (Route: Oral)";
        formSafetyNote = "Oral tablet aur oral suspension formulations scalp ringworm (Tinea capitis) ke liye indicated hain.";
      }

      results.push({
        medicineId: med.id,
        medicineSlug: med.slug,
        genericName: med.generic_name,
        displayName: med.display_name,
        drugClass: med.category || "Therapeutic Class on record",
        matchedIndication: matchedIndicationText,
        matchedIndicationSnippet: matchedIndicationSnippet || matchedIndicationText,
        relevantFormForIndication,
        formSafetyNote,
        relationReason: "Why it appears: Database-recorded indication relationship",
        dosageForms,
        routes,
        formClassification,
        simpleExplanation,
        difficultTerms,
      });
    }
  }

  // Sort topical first if condition is dermatological or scalp, otherwise alphabetical
  if (condition.category === "skin" || condition.category === "hair_scalp") {
    return results.sort((a, b) => {
      if (a.formClassification.isTopical && !b.formClassification.isTopical) return -1;
      if (!a.formClassification.isTopical && b.formClassification.isTopical) return 1;
      return a.displayName.localeCompare(b.displayName);
    });
  }

  return results.sort((a, b) => a.displayName.localeCompare(b.displayName));
}

/**
 * Search conditions across:
 * 1. Exact medical term
 * 2. Common English term
 * 3. Simple Hinglish term / aliases
 * 4. Synonyms
 * 5. Condition name
 * 6. Symptom name
 *
 * Ordered by relevance tier:
 * Tier 1: Exact alias or exact name/medical term match
 * Tier 2: Alias or name starts with query
 * Tier 3: Alias or name contains query
 * Tier 4: Symptoms or general text contains query
 */
export function searchConditions(queryText: string): VerifiedCondition[] {
  const q = queryText.trim().toLowerCase();
  if (!q) return VERIFIED_CONDITIONS;

  // Split multi-word query
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored: Array<{ cond: VerifiedCondition; rank: number }> = [];

  for (const cond of VERIFIED_CONDITIONS) {
    const nameLower = cond.name.toLowerCase();
    const medTermLower = cond.medicalTerm.toLowerCase();
    const idLower = cond.id.toLowerCase();
    const aliasesLower = cond.searchAliases.map((a) => a.toLowerCase());

    let rank = 99;

    // Tier 1: Exact match in aliases, id, or primary names
    if (
      aliasesLower.includes(q) ||
      idLower === q ||
      nameLower === q ||
      medTermLower.includes(q)
    ) {
      rank = 1;
    } else if (
      aliasesLower.some((a) => a.startsWith(q)) ||
      nameLower.startsWith(q) ||
      idLower.startsWith(q)
    ) {
      // Tier 2: Prefix match in alias or name
      rank = 2;
    } else if (
      aliasesLower.some((a) => a.includes(q)) ||
      nameLower.includes(q)
    ) {
      // Tier 3: Substring match in alias or name
      rank = 3;
    } else {
      // Tier 4: Full text / symptoms match
      const haystack = [
        cond.simpleHinglish,
        cond.medicalMeaning,
        ...cond.commonSymptoms,
        ...cond.databaseSearchTerms,
      ]
        .join(" ")
        .toLowerCase();

      if (haystack.includes(q) || tokens.every((token) => haystack.includes(token))) {
        rank = 4;
      }
    }

    if (rank < 99) {
      scored.push({ cond, rank });
    }
  }

  return scored.sort((a, b) => a.rank - b.rank).map((s) => s.cond);
}

// --------------------------------------------------------------------------
// SEARCH INTENT SEPARATION (Condition vs Dosage Form vs Cosmetic vs Medicine vs Educational)
// --------------------------------------------------------------------------

export type SearchIntentType =
  | "condition"
  | "dosage_form"
  | "cosmetic_unsupported"
  | "medicine_product"
  | "hair_educational";

export interface HairEducationSection {
  title: string;
  hinglishTitle: string;
  icon: string;
  content: string;
  bulletPoints: string[];
}

export const HAIR_EDUCATION_GUIDE: HairEducationSection[] = [
  {
    title: "Hair Follicle Anatomy",
    hinglishTitle: "Hair Follicle (Baal ki Jad / Root)",
    icon: "🌱",
    content:
      "Hair follicle scalp ke andar ek chhota living organ hota hai jahan se baal grow karta hai. Follicle ke base par dermal papilla aur capillary microvessels hote hain jo hair growth ke liye zaroori oxygen aur amino acids supply karte hain.",
    bulletPoints: [
      "Healthy microcirculation follicle ko active growth phase mein banaye rakhta hai.",
      "Follicular miniaturization (jad ka sukadna) se baal dheere-dheere patle aur chote hone lagte hain.",
    ],
  },
  {
    title: "Hair Growth Cycle",
    hinglishTitle: "Hair Growth Cycle (Baal Ugne aur Girne ka Chakra)",
    icon: "🔄",
    content:
      "Har hair follicle 3 natural phases se guzarta hai: Anagen (Active Growth phase, 2-7 saal), Catagen (Transition phase, 2-3 hafte), aur Telogen (Resting & Natural Shedding phase, 2-4 mahine).",
    bulletPoints: [
      "Rozana 50 se 100 baal girna normal telogen shedding cycle ka natural hissa hota hai.",
      "Physical stress, fever ya illness se zyada follicles achanak resting phase (Telogen Effluvium) mein chale jaate hain.",
    ],
  },
  {
    title: "Scalp Health & Microbiome",
    hinglishTitle: "Scalp Health (Scalp Environment aur Sebum Balance)",
    icon: "🧴",
    content:
      "Scalp hair follicles ki zameen ki tarah hai. Scalp par natural sebum (oil) banta hai jo moisture maintain karta hai, lekin excessive oil aur Malassezia yeast buildup se dandruff aur inflammation paida ho sakti hai.",
    bulletPoints: [
      "Excess oil, sweat aur dead skin buildup follicles ko clog kar sakte hain.",
      "Regular gentle cleansing aur verified antifungal care scalp barrier ko healthy rakhte hain.",
    ],
  },
  {
    title: "Nutrition-Related Factors",
    hinglishTitle: "Nutrition (Poshan aur Aahar)",
    icon: "🥗",
    content:
      "Baal keratin protein se bane hote hain. Balanced diet mein adequate dietary protein, iron (serum ferritin), zinc aur vitamins hair follicle metabolism ke liye vital hain.",
    bulletPoints: [
      "Severe crash dieting, low protein intake ya blood loss diffuse shedding trigger kar sakte hain.",
      "Supplements sirf doctor ke dwara confirmed nutritional deficiency par hi lene chahiye; bina medical guidance ke random supplements recommend nahi kiye jaate.",
    ],
  },
  {
    title: "Hormonal Factors",
    hinglishTitle: "Hormonal Factors (Hormones ka Asar)",
    icon: "⚡",
    content:
      "Hormones hair growth pattern ko deeply influence karte hain. Dihydrotestosterone (DHT) androgen hormone genetic sensitivity wale follicles par bind hokar unko miniaturize karta hai.",
    bulletPoints: [
      "Thyroid imbalance (Hypothyroidism ya Hyperthyroidism) se diffuse hair thinning ho sakti hai.",
      "PCOS ya postpartum hormonal transitions se temporary shedding observe hoti hai.",
    ],
  },
  {
    title: "Genetic & Hereditary Factors",
    hinglishTitle: "Genetic Factors (Khandani / Hereditary Pattern)",
    icon: "🧬",
    content:
      "Androgenetic alopecia (Male / Female pattern hair loss) sabse common genetic cause hai jo family genetics se inherit hota hai.",
    bulletPoints: [
      "Men mein hairline recede hona aur crown thinning typical hereditary pattern hai.",
      "Women mein central parting line ka chauda hona aur general density decrease hona common hai.",
    ],
  },
  {
    title: "Inflammation & Infections",
    hinglishTitle: "Inflammation aur Scalp Infection",
    icon: "🛡️",
    content:
      "Scalp par fungal infection (Tinea capitis) ya chronic inflammation (Seborrhoeic dermatitis) hair roots ko kamzor karti hai.",
    bulletPoints: [
      "Continuous itching aur scalp scratching se hair shafts physically break ho sakte hain.",
      "Autoimmune inflammation (jaise Alopecia areata) mein immune cells patches mein hair follicles ko target karte hain.",
    ],
  },
  {
    title: "Medication & Physical Styling Factors",
    hinglishTitle: "Dawaiyan aur Styling Factors",
    icon: "⚠️",
    content:
      "Kuch medications, psychological stress, excessive chemical straightening, aur tight hairstyles (traction alopecia) baalon par mechanical stress create karte hain.",
    bulletPoints: [
      "Bohat tight ponytail ya braids se roots par continuous pull rehta hai.",
      "Frequent excessive heat styling hair shaft ki outer cuticle ko permanently damage karti hai.",
    ],
  },
  {
    title: "When Medical Evaluation Matters",
    hinglishTitle: "Doctor / Dermatologist Consultation kab zaroori hai?",
    icon: "🩺",
    content:
      "Agar sudden circular coin-like bald patches dikhein, scalp par dard, pus ya redness ho, ya eyebrow/body hair jhad rahe hon, toh turant dermatologist se consult karein.",
    bulletPoints: [
      "Trichoscopy aur targeted blood tests (Ferritin, TSH, CBC) exact diagnosis establish karne mein help karte hain.",
      "Self-medication se bachein; doctor cause ke anuroop scientifically validated therapy select karte hain.",
    ],
  },
];

export interface DosageFormSearchDefinition {
  target: string;
  label: string;
  aliases: string[];
  formMatcher: (form: string, route: string) => boolean;
  educationalNote: string;
}

export const DOSAGE_FORM_SEARCHES: DosageFormSearchDefinition[] = [
  {
    target: "cream",
    label: "Cream / Topical Cream",
    aliases: [
      "cream",
      "creams",
      "topical cream",
      "skin cream",
      "face cream",
      "medicated cream",
    ],
    formMatcher: (form) => form.toLowerCase().includes("cream"),
    educationalNote:
      "Database mein verified 'Cream / Topical Cream' dosage form wale pharmaceutical aur dermatological products.",
  },
  {
    target: "lotion",
    label: "Lotion / Topical Lotion",
    aliases: [
      "lotion",
      "lotions",
      "topical lotion",
      "skin lotion",
      "face lotion",
      "medicated lotion",
      "scalp lotion",
      "hair lotion",
    ],
    formMatcher: (form) => form.toLowerCase().includes("lotion"),
    educationalNote:
      "Database mein verified 'Lotion / Topical Lotion' dosage form wale verified products.",
  },
  {
    target: "serum",
    label: "Serum / Topical Serum",
    aliases: [
      "serum",
      "face serum",
      "skin serum",
      "scalp serum",
      "hair serum",
      "topical serum",
    ],
    formMatcher: (form) => form.toLowerCase().includes("serum"),
    educationalNote:
      "Current database mein is dosage/form category ka koi verified record available nahi hai. (Biochemical references jaise 'serum uric acid' ko dosage form nahi mana gaya hai).",
  },
  {
    target: "gel",
    label: "Gel / Topical Gel",
    aliases: ["gel", "gels", "topical gel", "skin gel", "face gel"],
    formMatcher: (form) => form.toLowerCase().includes("gel"),
    educationalNote:
      "Database mein verified 'Gel / Topical Gel' dosage form wale verified products.",
  },
  {
    target: "ointment",
    label: "Ointment / Topical Ointment",
    aliases: [
      "ointment",
      "ointments",
      "topical ointment",
      "skin ointment",
    ],
    formMatcher: (form) => form.toLowerCase().includes("ointment"),
    educationalNote:
      "Database mein verified 'Ointment / Topical Ointment' dosage form wale verified products.",
  },
  {
    target: "shampoo",
    label: "Shampoo / Medicated Shampoo",
    aliases: [
      "shampoo",
      "shampoos",
      "medicated shampoo",
      "scalp shampoo",
      "hair shampoo",
    ],
    formMatcher: (form) => form.toLowerCase().includes("shampoo"),
    educationalNote:
      "Database mein verified 'Shampoo / Medicated Shampoo' dosage form wale verified products.",
  },
  {
    target: "foam",
    label: "Foam / Topical Foam",
    aliases: ["foam", "foams", "topical foam", "hair foam", "scalp foam"],
    formMatcher: (form) => form.toLowerCase().includes("foam"),
    educationalNote:
      "Database mein verified 'Foam / Topical Foam' dosage form wale verified products.",
  },
  {
    target: "topical solution",
    label: "Topical Solution",
    aliases: [
      "topical solution",
      "solution for topical use",
      "solution for topical",
      "solution",
      "hair solution",
      "scalp solution",
    ],
    formMatcher: (form, route) =>
      form.toLowerCase().includes("topical solution") ||
      (form.toLowerCase().includes("solution") && route.toLowerCase().includes("topical")),
    educationalNote:
      "Database mein verified 'Topical Solution' dosage form wale verified products.",
  },
  {
    target: "oil",
    label: "Oil / Scalp Oil",
    aliases: ["oil", "oils", "hair oil", "scalp oil", "topical oil"],
    formMatcher: (form) => form.toLowerCase().includes("oil"),
    educationalNote:
      "Current database mein is dosage/form category ka koi verified record available nahi hai.",
  },
  {
    target: "spray",
    label: "Spray / Topical Spray",
    aliases: ["spray", "sprays", "hair spray", "scalp spray", "topical spray"],
    formMatcher: (form, route) =>
      form.toLowerCase().includes("spray") &&
      (route.toLowerCase().includes("topical") || route.toLowerCase().includes("scalp") || form.toLowerCase().includes("hair")),
    educationalNote:
      "Database mein verified spray dosage form wale verified products.",
  },
];

export const UNSUPPORTED_COSMETIC_ALIASES = [
  "face whitening",
  "skin whitening",
  "whitening",
  "skin brightening",
  "face brightening",
  "brightening",
  "skin lightening",
  "lightening",
  "uneven skin tone",
  "tanning",
  "sun spots",
  "pigmentation",
  "hyperpigmentation",
  "melasma",
  "dark spots",
  "dull skin",
  "dry skin",
  "oily skin",
  "rough skin",
  "sensitive skin",
];

export interface SearchIntentResult {
  intent: SearchIntentType;
  normalizedQuery: string;
  dosageDef?: DosageFormSearchDefinition | undefined;
  cosmeticMessage?: string | undefined;
  suggestedConditions?: VerifiedCondition[] | undefined;
  targetMedicineSlug?: string | undefined;
  highlightForm?: "solution" | "foam" | undefined;
}

export const MINOXIDIL_SEARCH_ALIASES = [
  "minoxidil",
  "minoxidil solution",
  "minoxidil foam",
  "hair fall minoxidil",
  "topical minoxidil",
  "minoxidil topical",
  "minoxidil scalp",
  "minoxidil cream",
  "minoxidil lotion",
];

export const HAIR_EDUCATIONAL_ALIASES = [
  "hair growth",
  "baal badhana",
  "baal ugana",
  "baal kaise badhte hain",
  "hair growth ke liye kya important hai",
  "baalon ke liye kya chahiye",
  "hair ke liye kya important hai",
  "baal kyun nahi badh rahe",
  "healthy hair ke liye kya important hai",
  "hair fall ke liye kya important hai",
  "baal kyun girte hain",
  "baal patle kyun ho rahe hain",
  "hair care",
  "hair care ke liye kya chahiye",
  "hair growth ke liye kya chahiye",
  "baalon ki growth",
];

/**
 * Detect search intent:
 * 1. Specific medicine/product search (e.g. Minoxidil solution/foam)
 * 2. Hair educational overview (e.g. hair ke liye kya important hai)
 * 3. Dosage form search (e.g. cream, lotion, serum, gel)
 * 4. Cosmetic / skin appearance query without direct verified database indication
 * 5. Medical condition query (e.g. hair fall, acne, asthma, dandruff)
 */
export function detectSearchIntent(rawQuery: string): SearchIntentResult {
  const q = rawQuery.trim().toLowerCase();
  if (!q) {
    return { intent: "condition", normalizedQuery: "" };
  }

  // 1. Check for Minoxidil medicine/product search
  if (MINOXIDIL_SEARCH_ALIASES.includes(q)) {
    return {
      intent: "medicine_product",
      normalizedQuery: q,
      targetMedicineSlug: "minoxidil-topical",
      highlightForm: q.includes("foam") ? "foam" : q.includes("solution") ? "solution" : undefined,
    };
  }

  // 2. Check for Hair educational overview search
  if (HAIR_EDUCATIONAL_ALIASES.includes(q)) {
    return {
      intent: "hair_educational",
      normalizedQuery: q,
    };
  }

  // 3. Check for dosage form search
  for (const dosageDef of DOSAGE_FORM_SEARCHES) {
    if (dosageDef.aliases.some((alias) => alias === q)) {
      return {
        intent: "dosage_form",
        normalizedQuery: q,
        dosageDef,
      };
    }
  }

  // 4. Check for unsupported cosmetic / beauty concerns
  if (UNSUPPORTED_COSMETIC_ALIASES.includes(q)) {
    // Check if any closely related clinical condition exists (e.g. acne for blemishes/spots or rash for sun/redness)
    const suggested: VerifiedCondition[] = [];
    if (q.includes("spot") || q.includes("acne") || q.includes("mark")) {
      const acneCond = VERIFIED_CONDITIONS.find((c) => c.id === "acne");
      if (acneCond) suggested.push(acneCond);
    }
    if (q.includes("tan") || q.includes("sun") || q.includes("tone")) {
      const rashCond = VERIFIED_CONDITIONS.find((c) => c.id === "rash");
      if (rashCond) suggested.push(rashCond);
    }
    const dermCond = VERIFIED_CONDITIONS.find((c) => c.id === "dermatitis");
    if (dermCond && !suggested.includes(dermCond)) suggested.push(dermCond);

    return {
      intent: "cosmetic_unsupported",
      normalizedQuery: q,
      cosmeticMessage:
        `Is exact cosmetic concern ("${rawQuery.trim()}") ke liye verified database indication nahi mila. MediDex strictly verified clinical pharmacology database records par based hai aur automated whitening, fairness ya cosmetic claims fabricate nahi karta. Medical evaluation ke liye registered dermatologist se consult karein.`,
      suggestedConditions: suggested,
    };
  }

  // 5. Standard condition query
  return {
    intent: "condition",
    normalizedQuery: q,
  };
}

/**
 * Directly find medicines that have a verified dosage form matching a dosage form search definition.
 */
export function findMedicinesForDosageFormSearch(
  dosageDef: DosageFormSearchDefinition,
  medicines: Array<{
    id: string;
    slug: string;
    generic_name: string;
    display_name: string;
    category?: string | null;
    indications?: string[] | null;
    dosage_forms?: string[] | null;
    routes?: string[] | null;
  }>
): MatchedMedicineConnection[] {
  const results: MatchedMedicineConnection[] = [];

  for (const med of medicines) {
    const dosageForms = med.dosage_forms || [];
    const routes = med.routes || [];
    const routesStr = routes.join(" ");

    const matchesForm = dosageForms.some((form) =>
      dosageDef.formMatcher(form, routesStr)
    );

    if (matchesForm) {
      const formClassification = classifyMedicineDosageForms(dosageForms, routes);
      const matchedIndicationText = med.indications?.[0] || med.category || "Clinical Pharmacology Use";

      const corpus = `${med.generic_name} ${med.display_name} ${med.category || ""} ${matchedIndicationText} ${dosageForms.join(" ")} ${routes.join(" ")}`;
      const difficultTerms = extractDifficultWordsForText(corpus).slice(0, 4);

      results.push({
        medicineId: med.id,
        medicineSlug: med.slug,
        genericName: med.generic_name,
        displayName: med.display_name,
        drugClass: med.category || "Therapeutic Class on record",
        matchedIndication: matchedIndicationText,
        relationReason: "Why it appears: Database-recorded indication relationship",
        dosageForms,
        routes,
        formClassification,
        simpleExplanation: `Verified ${dosageDef.label} formulation jo verified clinical indications ke liye prescribe ki jati hai.`,
        difficultTerms,
      });
    }
  }

  // Sort topical first, then alphabetically
  return results.sort((a, b) => {
    if (a.formClassification.isTopical && !b.formClassification.isTopical) return -1;
    if (!a.formClassification.isTopical && b.formClassification.isTopical) return 1;
    return a.displayName.localeCompare(b.displayName);
  });
}

/**
 * Find verified Minoxidil medicine record from the database.
 */
export function findMinoxidilMedicine(
  medicines: Array<{
    id: string;
    slug: string;
    generic_name: string;
    display_name: string;
    category?: string | null;
    indications?: string[] | null;
    dosage_forms?: string[] | null;
    routes?: string[] | null;
  }>
): MatchedMedicineConnection[] {
  const minox = medicines.find(
    (m) =>
      m.slug === "minoxidil-topical" ||
      m.generic_name.toLowerCase().includes("minoxidil") ||
      m.display_name.toLowerCase().includes("minoxidil")
  );

  if (!minox) return [];

  const dosageForms = minox.dosage_forms || [];
  const routes = minox.routes || [];
  const formClassification = classifyMedicineDosageForms(dosageForms, routes);
  const matchedIndicationText =
    minox.indications?.[0] ||
    "Androgenetic alopecia (male pattern hair loss and female pattern hair loss)";

  const corpus = `${minox.generic_name} ${minox.display_name} ${minox.category || ""} ${matchedIndicationText}`;
  const difficultTerms = extractDifficultWordsForText(corpus).slice(0, 4);

  return [
    {
      medicineId: minox.id,
      medicineSlug: minox.slug,
      genericName: minox.generic_name,
      displayName: minox.display_name,
      drugClass: minox.category || "Dermatology",
      matchedIndication: matchedIndicationText,
      relationReason: "Why it appears: Database-recorded indication relationship",
      dosageForms,
      routes,
      formClassification,
      simpleExplanation:
        "Verified topical vasodilator active jo scalp hair follicles ke surrounding blood flow ko stimulate karta hai aur anagen phase ko prolong karta hai.",
      difficultTerms,
    },
  ];
}
