import { n as __toESM } from "../_runtime.mjs";
import { n as cn, t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { G as CircleCheck, I as Flame, K as ChevronUp, M as Info, Q as BookOpen, W as CircleQuestionMark, Z as Brain, b as Pill, et as ArrowRight, f as ShieldCheck, g as Scale, l as Stethoscope, o as TriangleAlert, p as ShieldAlert, q as ChevronDown, tt as ArrowLeft, u as Star } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as medicineQuery, E as medicineInteractionsQuery, O as medicineReferencesQuery, T as medicineClassesQuery, w as medicineBrandsQuery } from "./router-DbBUrYCp.mjs";
import { t as Disclaimer } from "./disclaimer-B9cgdbzn.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { t as ExplainButton } from "./explain-button-CFRo5O2p.mjs";
import { t as VerificationBadge } from "./verification-badge-gH0luRzr.mjs";
import { t as PronounceButtons } from "./pronounce-Cl94W_bY.mjs";
import { o as useTrackView, t as useFavorites } from "./use-user-data-DeJGuI7f.mjs";
import { i as Trigger, n as Portal, r as Root2$1, t as Content2$1 } from "../_libs/@radix-ui/react-popover+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/medicines._slug-BsQexYaN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$4 = "/app/applet/src/components/ui/accordion.tsx";
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 13,
	columnNumber: 3
}, void 0));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 31,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 22,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("pb-4 pt-0", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 46,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 41,
	columnNumber: 3
}, void 0));
AccordionContent.displayName = Content2.displayName;
var _jsxFileName$3 = "/app/applet/src/components/ui/popover.tsx";
var Popover = Root2$1;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2$1, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 17,
	columnNumber: 5
}, void 0) }, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 16,
	columnNumber: 3
}, void 0));
PopoverContent.displayName = Content2$1.displayName;
function e(entry) {
	return entry;
}
var GLOSSARY = {
	adme: e({
		term: "ADME",
		simple: "ADME stands for Absorption, Distribution, Metabolism and Excretion — what the body does with a medicine.",
		medical: "The four pharmacokinetic processes that describe a drug's journey through the body from intake to elimination.",
		hinglish: "ADME ka matlab hai Absorption, Distribution, Metabolism aur Excretion — yani body medicine ke saath kya karti hai.",
		hindi: "ADME का अर्थ है अवशोषण, वितरण, चयापचय और उत्सर्जन — यानी शरीर दवा के साथ क्या करता है।",
		pronunciation: "AY-DEE-EM-EE",
		related: [
			"Absorption",
			"Distribution",
			"Metabolism",
			"Excretion",
			"Pharmacokinetics"
		]
	}),
	pharmacokinetics: e({
		term: "Pharmacokinetics",
		simple: "What the body does to the medicine over time.",
		medical: "Study of absorption, distribution, metabolism and excretion, and the resulting drug concentration–time profile.",
		hinglish: "Pharmacokinetics batata hai ki body medicine ke saath kya karti hai.",
		hindi: "फार्माकोकाइनेटिक्स बताता है कि शरीर दवा के साथ क्या करता है।",
		pronunciation: "far-ma-ko-ki-NET-iks",
		related: [
			"ADME",
			"Half-life",
			"Bioavailability",
			"Clearance"
		]
	}),
	pharmacodynamics: e({
		term: "Pharmacodynamics",
		simple: "What the medicine does to the body.",
		medical: "Study of the biochemical and physiological effects of a drug and its mechanism of action, including dose–response relationships.",
		hinglish: "Pharmacodynamics batata hai ki medicine body par kya effect karti hai.",
		hindi: "फार्माकोडायनामिक्स बताता है कि दवा शरीर पर क्या असर करती है।",
		pronunciation: "far-ma-ko-die-NAM-iks",
		related: [
			"Mechanism of Action",
			"Receptor",
			"Agonist",
			"Antagonist"
		]
	}),
	bioavailability: e({
		term: "Bioavailability",
		simple: "The fraction of a dose that actually reaches the bloodstream unchanged.",
		medical: "The rate and extent to which the active drug reaches systemic circulation; intravenous dosing is defined as 100%.",
		hinglish: "Dose ka kitna hissa asal mein blood tak pahunchta hai, wahi bioavailability hai.",
		hindi: "खुराक का कितना भाग वास्तव में रक्त तक पहुँचता है।",
		pronunciation: "bye-oh-a-vail-a-BIL-i-tee",
		related: ["Absorption", "Pharmacokinetics"]
	}),
	"half-life": e({
		term: "Half-life",
		simple: "The time needed for the drug level in blood to fall to half its value.",
		medical: "t½ — time required for plasma concentration to decrease by 50%; guides dosing interval and time to steady state.",
		hinglish: "Blood mein medicine ka level aadha hone mein jitna time lagta hai.",
		hindi: "रक्त में दवा का स्तर आधा होने में लगने वाला समय।",
		related: ["Clearance", "Pharmacokinetics"]
	}),
	clearance: e({
		term: "Clearance",
		simple: "How fast the body removes a drug, usually by the kidneys or liver.",
		medical: "Volume of plasma cleared of drug per unit time; the primary determinant of maintenance dose.",
		hinglish: "Body kitni tezi se medicine ko hataati hai — mostly kidney ya liver ke through.",
		hindi: "शरीर दवा को कितनी तेज़ी से बाहर निकालता है।",
		related: [
			"Excretion",
			"Renal",
			"Hepatic"
		]
	}),
	"volume of distribution": e({
		term: "Volume of Distribution",
		simple: "A calculated value showing how widely a drug spreads into body tissues.",
		medical: "Vd — the theoretical volume needed to contain the total amount of drug at the observed plasma concentration.",
		hinglish: "Medicine body tissues mein kitna failti hai, uska calculated measure.",
		hindi: "दवा शरीर के ऊतकों में कितनी फैलती है, इसका गणनात्मक माप।",
		related: ["Distribution", "Protein Binding"]
	}),
	"protein binding": e({
		term: "Protein Binding",
		simple: "The share of drug attached to blood proteins; only the free part works.",
		medical: "Reversible binding to plasma proteins such as albumin; only the unbound fraction is pharmacologically active.",
		hinglish: "Medicine ka jitna hissa blood proteins se juda hota hai; sirf free part kaam karta hai.",
		hindi: "दवा का जितना भाग रक्त प्रोटीन से जुड़ा होता है; केवल मुक्त भाग काम करता है।",
		related: ["Distribution", "Volume of Distribution"]
	}),
	"mechanism of action": e({
		term: "Mechanism of Action",
		simple: "The exact way a medicine produces its effect in the body.",
		medical: "The specific molecular interaction — receptor, enzyme, channel or transporter — through which a drug exerts its effect.",
		hinglish: "Medicine body mein apna effect kaise deti hai, wahi mechanism of action hai.",
		hindi: "दवा शरीर में अपना असर किस तरह करती है।",
		related: [
			"Receptor",
			"Enzyme Inhibitor",
			"Pharmacodynamics"
		]
	}),
	"therapeutic class": e({
		term: "Therapeutic Class",
		simple: "Grouping of medicines by the condition they treat, e.g. antihypertensive.",
		medical: "Classification based on the clinical indication or disease treated.",
		hinglish: "Medicines ko unke use/disease ke hisaab se group karna, jaise antihypertensive.",
		hindi: "दवाओं को उनके उपयोग/रोग के आधार पर समूहित करना।",
		examples: [
			"Antihypertensive",
			"Analgesic",
			"Antidiabetic"
		],
		related: ["Pharmacological Class", "Chemical Class"]
	}),
	"pharmacological class": e({
		term: "Pharmacological Class",
		simple: "Grouping of medicines by how they work, e.g. beta blocker.",
		medical: "Classification based on shared mechanism of action or molecular target.",
		hinglish: "Medicines ko unke kaam karne ke tarike se group karna, jaise beta blocker.",
		hindi: "दवाओं को उनके काम करने के तरीके के आधार पर समूहित करना।",
		examples: [
			"Beta blocker",
			"ACE inhibitor",
			"Proton pump inhibitor"
		],
		related: ["Therapeutic Class", "Mechanism of Action"]
	}),
	"chemical class": e({
		term: "Chemical Class",
		simple: "Grouping of medicines by their chemical structure.",
		medical: "Classification by core chemical scaffold, e.g. benzodiazepines, beta-lactams, dihydropyridines.",
		hinglish: "Medicines ko unke chemical structure ke hisaab se group karna.",
		hindi: "दवाओं को उनकी रासायनिक संरचना के आधार पर समूहित करना।",
		examples: [
			"Benzodiazepines",
			"Beta-lactams",
			"Dihydropyridines"
		],
		related: ["Pharmacological Class"]
	}),
	"adverse effects": e({
		term: "Adverse Effects",
		simple: "Unwanted or harmful effects that a medicine can cause.",
		medical: "Any noxious, unintended response to a drug occurring at doses normally used in humans.",
		hinglish: "Medicine se hone wale unwanted ya nuksandeh effects.",
		hindi: "दवा से होने वाले अवांछित या हानिकारक प्रभाव।",
		related: ["Side Effect", "Precautions"]
	}),
	"side effect": e({
		term: "Side Effect",
		simple: "A secondary effect of a medicine, which may be harmless or unwanted.",
		medical: "A predictable, dose-related effect other than the intended therapeutic effect; not always harmful.",
		hinglish: "Medicine ka doosra effect, jo harmless bhi ho sakta hai aur unwanted bhi.",
		hindi: "दवा का द्वितीयक प्रभाव, जो हानिरहित या अवांछित हो सकता है।",
		related: ["Adverse Effects"]
	}),
	contraindications: e({
		term: "Contraindications",
		simple: "Situations where a medicine should not be used because of risk of harm.",
		medical: "Clinical conditions in which a drug must be avoided (absolute) or used only with strong justification (relative).",
		hinglish: "Aisi situations jahan kisi medicine ka use nahi karna chahiye, kyunki harm ka risk hota hai.",
		hindi: "ऐसी स्थितियाँ जिनमें दवा का उपयोग नहीं करना चाहिए।",
		related: ["Precautions", "Warnings"]
	}),
	precautions: e({
		term: "Precautions",
		simple: "Extra care needed when using a medicine in certain people or conditions.",
		medical: "Conditions requiring dose adjustment, monitoring or increased vigilance.",
		hinglish: "Kuch logon ya conditions mein medicine use karte waqt extra dhyan rakhna.",
		hindi: "कुछ लोगों या स्थितियों में दवा लेते समय अतिरिक्त सावधानी।",
		related: ["Contraindications", "Monitoring"]
	}),
	warnings: e({
		term: "Warnings",
		simple: "Serious risks a prescriber and patient must know about before use.",
		medical: "Statements highlighting significant hazards, often regulator-mandated.",
		hinglish: "Serious risks jinke baare mein medicine lene se pehle jaanna zaroori hai.",
		hindi: "गंभीर जोखिम जिनकी जानकारी दवा लेने से पहले आवश्यक है।",
		related: ["Contraindications"]
	}),
	"drug interactions": e({
		term: "Drug Interactions",
		simple: "Changes in effect when two medicines (or a medicine and food) are taken together.",
		medical: "Pharmacokinetic or pharmacodynamic modification of one drug's effect by another substance.",
		hinglish: "Do medicines (ya medicine aur food) saath lene par effect badal jana.",
		hindi: "दो दवाएँ साथ लेने पर उनके प्रभाव में बदलाव।",
		related: ["Enzyme Inhibitor", "Metabolism"]
	}),
	indication: e({
		term: "Indication",
		simple: "The condition or reason for which a medicine is approved or used.",
		medical: "A clinical condition for which the drug has established therapeutic benefit.",
		hinglish: "Jis condition ke liye medicine di jati hai, wahi indication hai.",
		hindi: "जिस स्थिति के लिए दवा दी जाती है।",
		related: ["Therapeutic Class"]
	}),
	"route of administration": e({
		term: "Route of Administration",
		simple: "How a medicine is given — oral, IV, topical and so on.",
		medical: "The path by which a drug is brought into contact with the body.",
		hinglish: "Medicine kaise di jaati hai — oral, IV, topical waghera.",
		hindi: "दवा किस रास्ते से दी जाती है — मुँह से, नस से, त्वचा पर आदि।",
		examples: [
			"Oral",
			"Intravenous",
			"Topical",
			"Inhalation"
		]
	}),
	pregnancy: e({
		term: "Pregnancy",
		simple: "Guidance on using the medicine during pregnancy.",
		medical: "Assessment of teratogenic and foetal risk versus maternal benefit across trimesters.",
		hinglish: "Pregnancy ke dauraan medicine use karne se judi guidance.",
		hindi: "गर्भावस्था के दौरान दवा के उपयोग से जुड़ी जानकारी।",
		related: ["Lactation"]
	}),
	lactation: e({
		term: "Lactation",
		simple: "Guidance for breastfeeding mothers.",
		medical: "Consideration of drug transfer into breast milk and infant exposure risk.",
		hinglish: "Lactation breastfeeding se related term hai.",
		hindi: "स्तनपान से संबंधित जानकारी।",
		related: ["Pregnancy", "Pediatric"]
	}),
	pediatric: e({
		term: "Pediatric",
		simple: "Medical information related to children.",
		medical: "Dosing and safety considerations for neonates, infants, children and adolescents, usually weight-based.",
		hinglish: "Children se related medical information ko pediatric kaha jata hai.",
		hindi: "बच्चों से संबंधित चिकित्सा जानकारी।",
		pronunciation: "pee-dee-AT-rik",
		related: ["Geriatric"]
	}),
	geriatric: e({
		term: "Geriatric",
		simple: "Medical information related to older adults.",
		medical: "Considerations for elderly patients: reduced renal/hepatic function, polypharmacy and higher sensitivity.",
		hinglish: "Geriatric ka matlab older/elderly adults se related medical information.",
		hindi: "वृद्ध लोगों से संबंधित चिकित्सा जानकारी।",
		pronunciation: "jer-ee-AT-rik",
		related: ["Renal", "Hepatic"]
	}),
	renal: e({
		term: "Renal",
		simple: "Related to the kidneys.",
		medical: "Kidney-related; renal impairment often requires dose reduction for renally cleared drugs.",
		hinglish: "Renal ka relation kidneys se hota hai.",
		hindi: "गुर्दों (किडनी) से संबंधित।",
		pronunciation: "REE-nal",
		related: ["Excretion", "Clearance"]
	}),
	hepatic: e({
		term: "Hepatic",
		simple: "Related to the liver.",
		medical: "Liver-related; hepatic impairment affects drug metabolism and dosing.",
		hinglish: "Hepatic ka relation liver se hota hai.",
		hindi: "यकृत (लिवर) से संबंधित।",
		pronunciation: "heh-PAT-ik",
		related: ["Metabolism"]
	}),
	monitoring: e({
		term: "Monitoring",
		simple: "Tests or checks done while a person is on the medicine.",
		medical: "Scheduled clinical or laboratory assessment for efficacy and toxicity during therapy.",
		hinglish: "Medicine lene ke dauraan jo tests ya checks kiye jaate hain.",
		hindi: "दवा लेते समय किए जाने वाले परीक्षण या जाँच।"
	}),
	counselling: e({
		term: "Counselling",
		simple: "Practical advice given to the patient about taking the medicine safely.",
		medical: "Structured patient education covering administration, adherence, warning signs and storage.",
		hinglish: "Patient ko medicine safely lene ke baare mein di gayi practical advice.",
		hindi: "रोगी को दवा सुरक्षित रूप से लेने की व्यावहारिक सलाह।"
	}),
	absorption: e({
		term: "Absorption",
		simple: "How the medicine gets from the site of intake into the blood.",
		medical: "Movement of drug from the administration site into systemic circulation.",
		hinglish: "Medicine intake ki jagah se blood tak kaise pahunchti hai.",
		hindi: "दवा शरीर में लेने की जगह से रक्त तक कैसे पहुँचती है।",
		related: ["ADME", "Bioavailability"]
	}),
	distribution: e({
		term: "Distribution",
		simple: "How the medicine spreads from blood into body tissues.",
		medical: "Reversible transfer of drug from the bloodstream into tissues and body compartments.",
		hinglish: "Medicine blood se body tissues mein kaise failti hai.",
		hindi: "दवा रक्त से शरीर के ऊतकों में कैसे फैलती है।",
		related: ["Volume of Distribution", "Protein Binding"]
	}),
	metabolism: e({
		term: "Metabolism",
		simple: "How the body chemically changes the medicine, mostly in the liver.",
		medical: "Biotransformation, largely hepatic (phase I oxidation via CYP450, phase II conjugation), into metabolites.",
		hinglish: "Body medicine ko chemically kaise badalti hai, mostly liver mein.",
		hindi: "शरीर दवा को रासायनिक रूप से कैसे बदलता है, मुख्यतः लिवर में।",
		related: [
			"Hepatic",
			"Prodrug",
			"Enzyme Inhibitor"
		]
	}),
	excretion: e({
		term: "Excretion",
		simple: "How the medicine leaves the body, mostly through urine or stool.",
		medical: "Irreversible removal of drug and metabolites, chiefly renal and biliary.",
		hinglish: "Medicine body se kaise bahar jaati hai, mostly urine ya stool ke through.",
		hindi: "दवा शरीर से कैसे बाहर निकलती है।",
		related: ["Renal", "Clearance"]
	}),
	salt: e({
		term: "Salt / Active Ingredient",
		simple: "The actual chemical that produces the medicine's effect.",
		medical: "The pharmacologically active moiety, often paired with a counter-ion to improve solubility or stability.",
		hinglish: "Wo actual chemical jo medicine ka effect deta hai.",
		hindi: "वह वास्तविक रसायन जो दवा का असर देता है।"
	}),
	"verification status": e({
		term: "Verification Status",
		simple: "Whether the record has been checked against a reliable reference.",
		medical: "Editorial state of a data record: verified, needs review or unverified.",
		hinglish: "Record kisi reliable reference se check kiya gaya hai ya nahi.",
		hindi: "क्या रिकॉर्ड किसी विश्वसनीय संदर्भ से जाँचा गया है।"
	}),
	agonist: e({
		term: "Agonist",
		simple: "A drug that switches a receptor on and produces a response.",
		medical: "A ligand that binds a receptor and produces the full biological response.",
		hinglish: "Aisi drug jo receptor ko activate karke response deti hai.",
		hindi: "ऐसी दवा जो रिसेप्टर को सक्रिय करके प्रभाव देती है।",
		examples: ["Salbutamol at beta-2 receptors"],
		related: [
			"Antagonist",
			"Partial Agonist",
			"Receptor"
		]
	}),
	antagonist: e({
		term: "Antagonist",
		simple: "A drug that blocks a receptor so the natural signal cannot act.",
		medical: "A ligand that binds a receptor without activating it, preventing agonist-mediated response.",
		hinglish: "Aisi drug jo receptor ko block karti hai, response nahi deti.",
		hindi: "ऐसी दवा जो रिसेप्टर को अवरुद्ध करती है।",
		examples: ["Propranolol at beta receptors"],
		related: ["Agonist", "Receptor"]
	}),
	"partial agonist": e({
		term: "Partial Agonist",
		simple: "A drug that switches a receptor on only partly, even at full dose.",
		medical: "A ligand with submaximal intrinsic activity relative to a full agonist.",
		hinglish: "Aisi drug jo receptor ko poori tarah nahi, thoda hi activate karti hai.",
		hindi: "ऐसी दवा जो रिसेप्टर को आंशिक रूप से सक्रिय करती है।",
		related: ["Agonist", "Antagonist"]
	}),
	receptor: e({
		term: "Receptor",
		simple: "A target on or inside a cell that a medicine attaches to.",
		medical: "A macromolecule that binds a ligand and transduces a signal, e.g. GPCR, ion channel, nuclear receptor.",
		hinglish: "Cell par ya andar ka target jahan medicine attach hoti hai.",
		hindi: "कोशिका पर या भीतर वह लक्ष्य जहाँ दवा जुड़ती है।",
		related: [
			"Agonist",
			"Antagonist",
			"Mechanism of Action"
		]
	}),
	"enzyme inhibitor": e({
		term: "Enzyme Inhibitor",
		simple: "A medicine that slows or blocks an enzyme.",
		medical: "A drug that reduces enzyme activity competitively, non-competitively or irreversibly.",
		hinglish: "Aisi medicine jo kisi enzyme ka kaam rok deti hai.",
		hindi: "ऐसी दवा जो किसी एंजाइम के कार्य को रोकती है।",
		examples: ["ACE inhibitors", "Statins (HMG-CoA reductase)"],
		related: ["Mechanism of Action", "Metabolism"]
	}),
	prodrug: e({
		term: "Prodrug",
		simple: "An inactive medicine that the body converts into the active form.",
		medical: "A pharmacologically inactive compound metabolised in vivo into the active drug moiety.",
		hinglish: "Aisi inactive medicine jo body mein active form mein badal jaati hai.",
		hindi: "ऐसी निष्क्रिय दवा जो शरीर में सक्रिय रूप में बदल जाती है।",
		examples: ["Enalapril → enalaprilat"],
		related: ["Metabolism"]
	}),
	tolerance: e({
		term: "Tolerance",
		simple: "The medicine works less well over time, so more is needed for the same effect.",
		medical: "Reduced pharmacological response after repeated exposure, requiring dose escalation.",
		hinglish: "Time ke saath medicine ka asar kam ho jaana.",
		hindi: "समय के साथ दवा का असर कम हो जाना।",
		related: ["Dependence"]
	}),
	dependence: e({
		term: "Dependence",
		simple: "The body or mind needs the medicine to function normally.",
		medical: "An adaptive state in which withdrawal symptoms appear when the drug is stopped or reduced.",
		hinglish: "Body ya mind ko medicine ki aadat pad jaana.",
		hindi: "शरीर या मन का दवा पर निर्भर हो जाना।",
		related: ["Tolerance"]
	}),
	resistance: e({
		term: "Resistance",
		simple: "Germs stop responding to a medicine that used to kill them.",
		medical: "Loss of susceptibility of a microorganism or cell line to a previously effective agent.",
		hinglish: "Bacteria ya germs par medicine ka asar khatam ho jaana.",
		hindi: "रोगाणुओं पर दवा का असर समाप्त हो जाना।",
		related: ["Antibiotics"]
	}),
	"first pass metabolism": e({
		term: "First-Pass Metabolism",
		simple: "The liver breaks down part of an oral medicine before it reaches the blood.",
		medical: "Presystemic hepatic and gut-wall metabolism that reduces the bioavailability of orally administered drugs.",
		hinglish: "Oral medicine ka kuch hissa liver pehle hi tod deta hai.",
		hindi: "मुँह से ली गई दवा का कुछ भाग लिवर पहले ही तोड़ देता है।",
		related: ["Bioavailability", "Metabolism"]
	}),
	"therapeutic index": e({
		term: "Therapeutic Index",
		simple: "How wide the safety gap is between a helpful dose and a harmful dose.",
		medical: "Ratio of the toxic dose to the effective dose; a narrow index needs close monitoring.",
		hinglish: "Effective dose aur toxic dose ke beech ka safety gap.",
		hindi: "प्रभावी और विषैली खुराक के बीच सुरक्षा का अंतर।",
		related: ["Monitoring"]
	}),
	"loading dose": e({
		term: "Loading Dose",
		simple: "A larger first dose used to reach the working level quickly.",
		medical: "An initial higher dose calculated from volume of distribution to rapidly attain target concentration.",
		hinglish: "Pehli badi dose taaki level jaldi ban jaye.",
		hindi: "शुरुआती बड़ी खुराक ताकि स्तर जल्दी बने।",
		related: ["Volume of Distribution"]
	}),
	"steady state": e({
		term: "Steady State",
		simple: "When the amount going in equals the amount leaving, so levels stay stable.",
		medical: "Condition where rate of drug administration equals rate of elimination, reached in ~4–5 half-lives.",
		hinglish: "Jab medicine ka intake aur elimination barabar ho jaata hai.",
		hindi: "जब दवा का सेवन और निष्कासन बराबर हो जाता है।",
		related: ["Half-life"]
	})
};
/** Alternate spellings and plurals mapped to canonical glossary keys. */
var ALIASES = {
	interactions: "drug interactions",
	interaction: "drug interactions",
	"drug interaction": "drug interactions",
	indications: "indication",
	"adverse effect": "adverse effects",
	"common adverse effects": "adverse effects",
	"serious adverse effects": "adverse effects",
	"side effects": "side effect",
	contraindication: "contraindications",
	precaution: "precautions",
	warning: "warnings",
	"half life": "half-life",
	halflife: "half-life",
	"active ingredient": "salt",
	"patient counselling": "counselling",
	counseling: "counselling",
	"route": "route of administration",
	routes: "route of administration",
	"first-pass metabolism": "first pass metabolism",
	"steady-state": "steady state",
	"mechanism": "mechanism of action",
	moa: "mechanism of action"
};
function lookupTerm(term) {
	const key = term.trim().toLowerCase();
	return GLOSSARY[key] ?? GLOSSARY[ALIASES[key] ?? ""];
}
Object.values(GLOSSARY).sort((a, b) => a.term.localeCompare(b.term));
var _jsxFileName$2 = "/app/applet/src/components/medical-term-help.tsx";
/**
* Small "ⓘ" helper that explains a medical term in simple English, medical
* wording, Hinglish and Hindi.
* Usage: <MedicalTermHelp term="Contraindications" /> or with custom label text.
*/
function MedicalTermHelp({ term, label, className, asSpan = false }) {
	const entry = lookupTerm(term);
	if (!entry) return null;
	const shown = label ?? entry.term;
	const triggerClasses = cn("inline-grid size-5 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer", className);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverTrigger, {
		asChild: true,
		children: asSpan ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			role: "button",
			tabIndex: 0,
			"aria-label": `What is ${shown}?`,
			onClick: (e) => e.stopPropagation(),
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") e.stopPropagation();
			},
			className: triggerClasses,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, {
				className: "size-3.5",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 47,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 35,
			columnNumber: 11
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			"aria-label": `What is ${shown}?`,
			onClick: (e) => e.stopPropagation(),
			className: triggerClasses,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Info, {
				className: "size-3.5",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 56,
				columnNumber: 13
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 50,
			columnNumber: 11
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 33,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PopoverContent, {
		align: "start",
		className: "max-h-80 w-80 space-y-2 overflow-y-auto text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-display font-semibold",
				children: [
					"What is ",
					entry.term,
					"?"
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 62,
				columnNumber: 11
			}, this), entry.pronunciation && /* @__PURE__ */ (void 0)("p", {
				className: "text-xs text-muted-foreground",
				children: ["Say it: ", entry.pronunciation]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 64,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 61,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-muted-foreground",
				children: entry.simple
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 67,
				columnNumber: 9
			}, this),
			entry.medical && /* @__PURE__ */ (void 0)("p", {
				className: "rounded-md border border-border/60 p-2 text-xs",
				children: [/* @__PURE__ */ (void 0)("span", {
					className: "font-medium",
					children: "Medical definition: "
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 70,
					columnNumber: 13
				}, this), entry.medical]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 69,
				columnNumber: 11
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "rounded-md bg-muted p-2 text-xs text-foreground",
				children: entry.hinglish
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 74,
				columnNumber: 9
			}, this),
			entry.hindi && /* @__PURE__ */ (void 0)("p", {
				className: "rounded-md bg-muted p-2 text-xs text-foreground",
				children: entry.hindi
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 76,
				columnNumber: 11
			}, this),
			entry.examples && entry.examples.length > 0 && /* @__PURE__ */ (void 0)("p", {
				className: "text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (void 0)("span", {
					className: "font-medium text-foreground",
					children: "Examples: "
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 80,
					columnNumber: 13
				}, this), entry.examples.join(", ")]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 79,
				columnNumber: 11
			}, this),
			entry.related && entry.related.length > 0 && /* @__PURE__ */ (void 0)("p", {
				className: "text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (void 0)("span", {
					className: "font-medium text-foreground",
					children: "Related: "
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 86,
					columnNumber: 13
				}, this), entry.related.join(" • ")]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 85,
				columnNumber: 11
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 60,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
var SUFFIX_MASTERBOOK = {
	"-prazole": {
		suffix: "-prazole",
		className: "Proton Pump Inhibitor (PPI)",
		meaning: "Proton pump block karta hai",
		mnemonic: "-prazole = Proton Pump ko Pause!",
		highYieldFact: "Irreversible H+/K+-ATPase block karta hai, acid production drastically down."
	},
	"-cillin": {
		suffix: "-cillin",
		className: "Penicillin Antibiotic (Beta-lactam)",
		meaning: "Bacterial cell wall synthesis block karta hai",
		mnemonic: "-cillin = Cell wall ko Kill-in!",
		highYieldFact: "Penicillin-binding proteins (PBPs) se bind karke peptidoglycan cross-linking rokta hai."
	},
	"-olol": {
		suffix: "-olol",
		className: "Beta Blocker",
		meaning: "Beta-adrenergic receptors block karta hai",
		mnemonic: "-olol = Heart rate aur BP ko s-l-o-w-l-o-l!",
		highYieldFact: "Cardiac workload aur oxygen demand reduce karta hai."
	},
	"-statin": {
		suffix: "-statin",
		className: "HMG-CoA Reductase Inhibitor",
		meaning: "Cholesterol synthesis pathway block karta hai",
		mnemonic: "-statin = Cholesterol production Stop-in!",
		highYieldFact: "Rate-limiting enzyme HMG-CoA reductase ko block karta hai."
	},
	"-floxacin": {
		suffix: "-floxacin",
		className: "Fluoroquinolone Antibiotic",
		meaning: "DNA gyrase / Topoisomerase IV block karta hai",
		mnemonic: "-floxacin = Bacterial DNA unwinding block in!",
		highYieldFact: "Bacterial DNA replication interrupt karke bactericidal action deta hai."
	},
	"-tidine": {
		suffix: "-tidine",
		className: "H2 Receptor Antagonist",
		meaning: "Histamine-2 receptors in stomach block karta hai",
		mnemonic: "-tidine = To dine without acid!",
		highYieldFact: "Parietal cell H2 receptor block karke baseline acid kam karta hai."
	},
	"-dipine": {
		suffix: "-dipine",
		className: "Dihydropyridine Calcium Channel Blocker (CCB)",
		meaning: "Vascular smooth muscle L-type calcium channels block karta hai",
		mnemonic: "-dipine = Blood pressure drop-in!",
		highYieldFact: "Potent peripheral vasodilation produces BP reduction; watch for ankle oedema."
	},
	"-sartan": {
		suffix: "-sartan",
		className: "Angiotensin II Receptor Blocker (ARB)",
		meaning: "AT1 receptors block karta hai",
		mnemonic: "-sartan = Angiotensin II ko Sort out / Block!",
		highYieldFact: "No bradykinin accumulation; cough incidence ACE inhibitors se bahut kam."
	},
	"-pril": {
		suffix: "-pril",
		className: "ACE Inhibitor",
		meaning: "Angiotensin Converting Enzyme inhibit karta hai",
		mnemonic: "-pril = Pressure Reduction In Line!",
		highYieldFact: "Bradykinin breakdown rokta hai → dry cough common side effect."
	},
	"-gliptin": {
		suffix: "-gliptin",
		className: "DPP-4 Inhibitor",
		meaning: "Incretin breakdown delay karta hai",
		mnemonic: "-gliptin = Glucose-dependent insulin lift-in!",
		highYieldFact: "GLP-1 breakdown rokta hai, glucose-dependent insulin release badhata hai."
	},
	"-gliflozin": {
		suffix: "-gliflozin",
		className: "SGLT2 Inhibitor",
		meaning: "Renal glucose reabsorption block karta hai",
		mnemonic: "-gliflozin = Glucose flows in urine!",
		highYieldFact: "Kidney se glucose excretion badhata hai; osmotic diuresis aur weight loss."
	},
	"-glitazone": {
		suffix: "-glitazone",
		className: "Thiazolidinedione (PPAR-gamma agonist)",
		meaning: "Insulin sensitivity improve karta hai",
		mnemonic: "-glitazone = Glucose utilisation zone!",
		highYieldFact: "Adipose aur muscle tissue mein insulin sensitivity enhance karta hai."
	},
	"-lukast": {
		suffix: "-lukast",
		className: "Leukotriene Receptor Antagonist",
		meaning: "CysLT1 leukotriene receptors block karta hai",
		mnemonic: "-lukast = Leukotriene ko Lock fast!",
		highYieldFact: "Bronchoconstriction aur airway inflammation kam karta hai (asthma/allergic rhinitis)."
	},
	"-azepam": {
		suffix: "-azepam",
		className: "Benzodiazepine",
		meaning: "GABA-A receptor affinity enhance karta hai",
		mnemonic: "-azepam = Brain excitability ko Calm down!",
		highYieldFact: "Chloride channel opening frequency badhata hai → CNS depression."
	},
	"-setron": {
		suffix: "-setron",
		className: "5-HT3 Receptor Antagonist",
		meaning: "Serotonin receptors in CTZ & gut block karta hai",
		mnemonic: "-setron = Vomiting reflex Stop on!",
		highYieldFact: "Chemotherapy aur post-operative nausea/vomiting ke liye first-line antiemetic."
	},
	"-terol": {
		suffix: "-terol",
		className: "Beta-2 Adrenergic Agonist",
		meaning: "Bronchial smooth muscle relax karta hai",
		mnemonic: "-terol = Airway open to the core!",
		highYieldFact: "cAMP increase karke bronchodilation induce karta hai."
	},
	"-thromycin": {
		suffix: "-thromycin",
		className: "Macrolide Antibiotic",
		meaning: "Bacterial 50S ribosomal subunit block karta hai",
		mnemonic: "-thromycin = Ribosome protein synthesis thrown away!",
		highYieldFact: "Translocation step inhibit karta hai; atypical pathogens ke against effective."
	},
	"-cycline": {
		suffix: "-cycline",
		className: "Tetracycline Antibiotic",
		meaning: "Bacterial 30S ribosomal subunit block karta hai",
		mnemonic: "-cycline = Bacterial protein synthesis cycle break!",
		highYieldFact: "tRNA binding to mRNA-ribosome complex block karta hai; chelates calcium."
	}
};
/**
* Detect matching suffix from Masterbook or database key_suffix
*/
function detectSuffixRule(medicine) {
	const genericLower = medicine.generic_name.toLowerCase();
	if (medicine.key_suffix && SUFFIX_MASTERBOOK[medicine.key_suffix.toLowerCase()]) return SUFFIX_MASTERBOOK[medicine.key_suffix.toLowerCase()] || null;
	for (const [suf, rule] of Object.entries(SUFFIX_MASTERBOOK)) {
		const rawSuf = suf.replace("-", "");
		if (genericLower.endsWith(rawSuf)) return rule;
	}
	return null;
}
function getDiseaseExplanation(medicine) {
	const generic = medicine.generic_name.toLowerCase();
	const indications = (medicine.indications ?? []).map((i) => i.toLowerCase()).join(" ");
	const category = (medicine.category ?? "").toLowerCase();
	if (indications.includes("gerd") || category.includes("acidity") || generic === "omeprazole") return {
		name: "GERD",
		fullName: "Gastroesophageal Reflux Disease",
		simpleExplanation: "Stomach acid aur contents food pipe (oesophagus) mein upar reflux karte hain, jisse burning aur mucosal irritation hoti hai.",
		symptoms: [
			"Heartburn (chhati mein jalan)",
			"Sour/acidic taste in mouth",
			"Regurgitation (khana upar aana)",
			"Symptoms meal ke baad aur letne par worse hote hain"
		],
		medicineConnection: `${medicine.display_name} stomach acid pump ko block karta hai → acid production drastically down → oesophagus heal hone lagta hai.`
	};
	if (indications.includes("ulcer") || indications.includes("peptic")) return {
		name: "Peptic Ulcer Disease (PUD)",
		fullName: "Gastric & Duodenal Ulcers",
		simpleExplanation: "Stomach ya intestine ke lining mein protective mucus layer break hone se gastric acid aur pepsin ke direct contact se sores/ulcers ban jate hain.",
		symptoms: [
			"Epigastric burning pain (khali pet ya raat ko badhna)",
			"Bloating aur jaldi pet bharna",
			"Nausea / vomiting"
		],
		medicineConnection: `${medicine.display_name} mucosal exposure ko acidic insult se bacha kar ulcer healing promote karta hai.`
	};
	if (indications.includes("diabetes") || category.includes("diabetes") || generic === "metformin") return {
		name: "Type 2 Diabetes Mellitus",
		fullName: "Chronic Hyperglycaemia & Insulin Resistance",
		simpleExplanation: "Body cells insulin ko properly respond nahi karte (insulin resistance) aur pancreas sufficient compensatory insulin produce nahi kar pata → blood glucose elevated rehta hai.",
		symptoms: [
			"Frequent urination (polyuria)",
			"Increased thirst (polydipsia)",
			"Excessive hunger (polyphagia)",
			"Fatigue aur slow wound healing"
		],
		medicineConnection: `${medicine.display_name} liver se excess glucose production rokta hai aur peripheral insulin sensitivity badhata hai bina pancreas ko force kiye.`
	};
	if (category.includes("antibiotic") || indications.includes("infection") || generic === "amoxicillin") return {
		name: "Bacterial Infection",
		fullName: "Bacterial Pathogen Proliferation",
		simpleExplanation: "Bacteria respiratory tract, ear, throat ya urinary tract mein invade karke multiply karte hain, jisse inflammatory immune response trigger hota hai.",
		symptoms: [
			"Fever aur chills",
			"Localized pain, swelling ya purulent discharge",
			"Sore throat, cough ya dysuria (depending on site)"
		],
		medicineConnection: `${medicine.display_name} bacterial cell wall synthesis ko actively block karta hai → bacteria burst/lyse ho jate hain.`
	};
	if (category.includes("pain") || category.includes("fever") || generic === "paracetamol") return {
		name: "Pyrexia & Somatic Pain",
		fullName: "Fever & Inflammatory Pain Pathway",
		simpleExplanation: "Hypothalamus ke thermoregulatory set-point badhne se fever hota hai, aur peripheral tissue injury se prostaglandins release hokar pain signals amplify karte hain.",
		symptoms: [
			"Elevated body temperature",
			"Body aches aur headache",
			"Malaise aur shivering"
		],
		medicineConnection: `${medicine.display_name} central nervous system mein prostaglandin synthesis inhibit karta hai aur hypothalamic heat-regulating center ko reset karta hai.`
	};
	return null;
}
/**
* Generate 2. MOA chain: Drug → Target → Action → Result
*/
function buildMoaChain(medicine) {
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
		target = medicine.mechanism_of_action?.slice(0, 70) ?? "Receptor / Enzyme target";
		action = "Target modulation";
		result = `${medicine.category ?? "Disease"} symptoms control ↓`;
	}
	const chain = `${medicine.generic_name} → ${target} → ${action} → ${result}`;
	return {
		target,
		action,
		result,
		chain
	};
}
/**
* Generate 1. "Ye kya karta hai?" simple Hinglish explanation
*/
function buildSimpleExplanation(medicine) {
	const generic = medicine.generic_name.toLowerCase();
	const cat = medicine.category ?? "Medicine";
	if (generic === "omeprazole") return {
		explanation: "Omeprazole stomach ke andar acid banane wale pumps ko strongly block karta hai, jisse chhati ki jalan (GERD) aur pet ke chhale (ulcers) jaldi theek hote hain.",
		simpleChain: "Omeprazole → Proton Pump block → Gastric acid ↓ → Acid-related symptoms ↓"
	};
	if (generic === "paracetamol") return {
		explanation: "Paracetamol brain aur spinal cord mein pain aur fever signals generate karne wale chemicals (prostaglandins) ko block karta hai, jisse dard aur tez bukhar kam hota hai.",
		simpleChain: "Paracetamol → Central pain & fever signals block → Pain ↓ & Temperature normal ↓"
	};
	if (generic === "metformin") return {
		explanation: "Metformin liver ko extra glucose banane se rokta hai aur body cells ko insulin better use karne mein help karta hai, jisse blood sugar naturally control rehta hai.",
		simpleChain: "Metformin → Liver glucose production ↓ + Insulin sensitivity ↑ → Blood sugar stable"
	};
	if (generic === "amoxicillin") return {
		explanation: "Amoxicillin bacteria ki protective outer wall ko banne se rokta hai, jisse bacteria kamzor hokar phat (burst) jate hain aur infection khatam hota hai.",
		simpleChain: "Amoxicillin → Bacterial cell wall synthesis block → Bacteria lysis → Infection cleared"
	};
	const moaShort = medicine.mechanism_of_action || "Target receptor ko modulate karta hai";
	return {
		explanation: `${medicine.display_name} (${cat}) body mein ${moaShort.toLowerCase()} jisse related symptoms aur disease progression control hota hai.`,
		simpleChain: `${medicine.generic_name} → Specific target modulation → Pathological pathway control → Clinical recovery`
	};
}
function buildInteractionDetails(medicine) {
	const generic = medicine.generic_name.toLowerCase();
	const dbInteractions = medicine.drug_interactions ?? [];
	if (dbInteractions.length === 0) return [];
	return dbInteractions.map((item) => {
		const itemLower = item.toLowerCase();
		if (generic === "omeprazole" && itemLower.includes("clopidogrel")) return {
			medicineB: item,
			pathway: "Omeprazole → CYP2C19 enzyme inhibition",
			clinicalConcern: "Clopidogrel active form mein convert nahi ho pata → antiplatelet effect reduce ho sakta hai.",
			memoryNote: "Ome = Clopi activation ko slow!"
		};
		if (generic === "paracetamol" && itemLower.includes("warfarin")) return {
			medicineB: item,
			pathway: "Sustained high-dose paracetamol → hepatic coagulation factor synthesis interference",
			clinicalConcern: "INR increase ho sakta hai; regular monitoring zaroori hai.",
			memoryNote: "High-dose Para + Warfarin = Bleeding/INR monitor!"
		};
		if (generic === "paracetamol" && itemLower.includes("alcohol")) return {
			medicineB: item,
			pathway: "Alcohol → CYP2E1 induction → NAPQI toxic metabolite accumulation",
			clinicalConcern: "Hepatotoxicity / Liver injury ka risk drastically increase hota hai.",
			memoryNote: "Alcohol + Paracetamol = Toxic liver burden!"
		};
		if (generic === "metformin" && itemLower.includes("contrast")) return {
			medicineB: item,
			pathway: "Contrast media induced renal impairment → Metformin accumulation",
			clinicalConcern: "Lactic acidosis ka severe risk; imaging procedure se pehle withhold karna padta hai.",
			memoryNote: "Contrast Scan = Metformin Pause (Lactic acidosis risk)!"
		};
		if (generic === "amoxicillin" && itemLower.includes("methotrexate")) return {
			medicineB: item,
			pathway: "Amoxicillin → Renal tubular secretion competition",
			clinicalConcern: "Methotrexate clearance ↓ → Methotrexate toxicity risk ↑.",
			memoryNote: "Amox + Metho = Renal clearance conflict!"
		};
		return {
			medicineB: item,
			pathway: `${medicine.generic_name} ↔ ${item} interaction pathway`,
			clinicalConcern: "Pharmacokinetic ya pharmacodynamic interaction documented in source database."
		};
	});
}
/**
* Generate 11. 5-Second Revision Chain
*/
function build5SecRevision(medicine, suffixRule) {
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
function buildFinalMemorySentence(medicine, suffixRule) {
	const genericUpper = medicine.generic_name.toUpperCase();
	const suf = suffixRule?.suffix.replace("-", "").toUpperCase() ?? medicine.category?.toUpperCase() ?? "AGENT";
	const { action, result } = buildMoaChain(medicine);
	return `${genericUpper} = ${suf} → ${action} → ${result} → ${(medicine.indications?.[0] ?? "First-line Therapy").toUpperCase()} → ${(medicine.warnings?.[0] ?? medicine.drug_interactions?.[0] ?? "Safety check").toUpperCase()}`;
}
var HINGLISH_TERMS_DICTIONARY = {
	flatulence: {
		term: "Flatulence",
		simpleHinglish: "Pet mein gas banna ya gas pass hona.",
		category: "symptom"
	},
	inflammation: {
		term: "Inflammation",
		simpleHinglish: "Body ke kisi part mein sujan/soojan aur irritation ki protective reaction.",
		category: "pharmacology"
	},
	contraindication: {
		term: "Contraindication",
		simpleHinglish: "Aisi specific medical condition ya situation jahan yeh medicine use nahi karni chahiye.",
		category: "pharmacology"
	},
	"drug interaction": {
		term: "Drug Interaction",
		simpleHinglish: "Jab ek medicine doosri medicine, food ya supplement ke effect ko badal de ya adverse reaction kare.",
		category: "pharmacology"
	},
	interaction: {
		term: "Interaction",
		simpleHinglish: "Jab ek medicine doosri medicine ya substance ke effect ko alter (change) kare.",
		category: "pharmacology"
	},
	"adverse effect": {
		term: "Adverse Effect",
		simpleHinglish: "Medicine lene se hone wala unintended (anchaaha) ya harmful side effect.",
		category: "adverse_effect"
	},
	"adverse effects": {
		term: "Adverse Effects",
		simpleHinglish: "Medicine se hone wale unwanted ya harmful side effects.",
		category: "adverse_effect"
	},
	regurgitation: {
		term: "Regurgitation",
		simpleHinglish: "Stomach ka khana ya acidic content bina ulti kiye wapas food pipe ya throat tak aana.",
		category: "symptom"
	},
	heartburn: {
		term: "Heartburn",
		simpleHinglish: "Chest aur food pipe ke area mein teekhi jalan, jo usually stomach acid reflux ki wajah se hoti hai.",
		category: "symptom"
	},
	diarrhea: {
		term: "Diarrhea",
		simpleHinglish: "Baar-baar loose ya watery motion (dast) aana.",
		category: "symptom"
	},
	diarrhoea: {
		term: "Diarrhoea",
		simpleHinglish: "Baar-baar loose ya watery motion (dast) aana.",
		category: "symptom"
	},
	constipation: {
		term: "Constipation",
		simpleHinglish: "Stool hard hona ya pet saaf hone (bowel movement) mein difficulty hona.",
		category: "symptom"
	},
	nausea: {
		term: "Nausea",
		simpleHinglish: "Ulti (vomiting) aane jaisa jee ghabrana ya uncomfortable feel hona.",
		category: "symptom"
	},
	vomiting: {
		term: "Vomiting",
		simpleHinglish: "Stomach ke contents ka mouth ke through force ke saath bahar nikalna (ulti hona).",
		category: "symptom"
	},
	dizziness: {
		term: "Dizziness",
		simpleHinglish: "Chakkar aana ya body balance unstable feel hona.",
		category: "symptom"
	},
	headache: {
		term: "Headache",
		simpleHinglish: "Sir ke kisi hisse mein dard ya heaviness hona.",
		category: "symptom"
	},
	edema: {
		term: "Edema",
		simpleHinglish: "Body ke tissues (jaise pair ya hands) mein extra fluid jama hone se aane wali sujan (swelling).",
		category: "symptom"
	},
	oedema: {
		term: "Oedema",
		simpleHinglish: "Body ke tissues mein abnormal fluid accumulation ki wajah se sujan hona.",
		category: "symptom"
	},
	hypertension: {
		term: "Hypertension",
		simpleHinglish: "Blood vessels mein blood ka pressure normal limit se lagatar zyada (High BP) rehna.",
		category: "condition"
	},
	hypotension: {
		term: "Hypotension",
		simpleHinglish: "Blood pressure ka normal range se kam (Low BP) ho jana, jisse chakkar ya weakness aa sakti hai.",
		category: "condition"
	},
	hyperglycemia: {
		term: "Hyperglycemia",
		simpleHinglish: "Blood mein glucose (sugar) level ka normal se zyada ho jana.",
		category: "condition"
	},
	hypoglycemia: {
		term: "Hypoglycemia",
		simpleHinglish: "Blood mein glucose (sugar) level ka dangerously low ho jana, jisse ghabrahat aur paseena aata hai.",
		category: "condition"
	},
	infection: {
		term: "Infection",
		simpleHinglish: "Harmful germs (bacteria, virus, fungus) ka body mein ghus kar multiply hona aur illness paida karna.",
		category: "condition"
	},
	"bacterial infection": {
		term: "Bacterial Infection",
		simpleHinglish: "Bacteria ki wajah se hone wala infection (jaise pneumonia, UTI, bacterial throat infection).",
		category: "condition"
	},
	"viral infection": {
		term: "Viral Infection",
		simpleHinglish: "Virus ki wajah se hone wali illness (jaise flu, common cold, viral fever).",
		category: "condition"
	},
	"fungal infection": {
		term: "Fungal Infection",
		simpleHinglish: "Fungus ki wajah se skin, nails ya internal organs mein hone wala infection.",
		category: "condition"
	},
	antibacterial: {
		term: "Antibacterial",
		simpleHinglish: "Bacteria ko kill karne ya unki growth ko rokne wali medicine.",
		category: "pharmacology"
	},
	antifungal: {
		term: "Antifungal",
		simpleHinglish: "Fungal infection ko khatam karne ya fungal growth block karne wali medicine.",
		category: "pharmacology"
	},
	"anti-inflammatory": {
		term: "Anti-inflammatory",
		simpleHinglish: "Tissue inflammation, sujan aur irritation ko kam karne wali property ya medicine.",
		category: "pharmacology"
	},
	analgesic: {
		term: "Analgesic",
		simpleHinglish: "Pain (dard) ko kam karne ya relieve karne wali medicine.",
		category: "pharmacology"
	},
	antipyretic: {
		term: "Antipyretic",
		simpleHinglish: "High body temperature (fever/bukhar) ko kam karke normal level par laane wali medicine.",
		category: "pharmacology"
	},
	sedation: {
		term: "Sedation",
		simpleHinglish: "Neend aana, calmness ya relaxed drowsy state induce hona.",
		category: "adverse_effect"
	},
	drowsiness: {
		term: "Drowsiness",
		simpleHinglish: "Aalsi lagna, behoshi jaisi feeling ya din mein neend jaisa mehsoos hona.",
		category: "symptom"
	},
	palpitations: {
		term: "Palpitations",
		simpleHinglish: "Apne hi dil ki dhadkan (heartbeat) ko abnormally fast, pounding ya irregular mehsoos karna.",
		category: "symptom"
	},
	dyspnea: {
		term: "Dyspnea",
		simpleHinglish: "Saans lene mein takleef hona ya saans phoolna (shortness of breath).",
		category: "symptom"
	},
	pruritus: {
		term: "Pruritus",
		simpleHinglish: "Skin par teekhi khujli (itching) hona jisse scratch karne ka mann kare.",
		category: "symptom"
	},
	rash: {
		term: "Rash",
		simpleHinglish: "Skin par achanak laal daane, redness, spots ya irritation nikal aana.",
		category: "symptom"
	},
	hepatotoxicity: {
		term: "Hepatotoxicity",
		simpleHinglish: "Medicine, chemical ya toxic exposure ki wajah se liver cells ko damage hona.",
		category: "adverse_effect"
	},
	nephrotoxicity: {
		term: "Nephrotoxicity",
		simpleHinglish: "Kidneys par harmful ya toxic effect padna jisse kidney function deteriorate ho.",
		category: "adverse_effect"
	},
	hepatic: {
		term: "Hepatic",
		simpleHinglish: "Liver (jigar) se related.",
		category: "general"
	},
	renal: {
		term: "Renal",
		simpleHinglish: "Kidney (gurde) se related.",
		category: "general"
	},
	gastric: {
		term: "Gastric",
		simpleHinglish: "Stomach (pet) se related.",
		category: "general"
	},
	cardiac: {
		term: "Cardiac",
		simpleHinglish: "Heart (dil) se related.",
		category: "general"
	},
	neurological: {
		term: "Neurological",
		simpleHinglish: "Brain, spinal cord, nerves ya nervous system se related.",
		category: "general"
	},
	gastrointestinal: {
		term: "Gastrointestinal",
		simpleHinglish: "Digestive system (stomach, intestines aur food pipe) se related.",
		category: "general"
	},
	oral: {
		term: "Oral",
		simpleHinglish: "Mouth (muh) ke through nigal kar li jane wali medicine.",
		category: "route"
	},
	intravenous: {
		term: "Intravenous (IV)",
		simpleHinglish: "Direct vein (nas) ke andar syringe ya drip ke through di jane wali medicine.",
		category: "route"
	},
	intramuscular: {
		term: "Intramuscular (IM)",
		simpleHinglish: "Muscle tissue (jaise shoulder ya glute) ke andar deep injection lagana.",
		category: "route"
	},
	subcutaneous: {
		term: "Subcutaneous",
		simpleHinglish: "Skin ke theek neeche wali fatty tissue layer mein injection lagana (jaise insulin).",
		category: "route"
	},
	gerd: {
		term: "GERD",
		simpleHinglish: "Gastroesophageal Reflux Disease — stomach acid ka baar-baar food pipe mein upar aana jisse chhati mein jalan hoti hai.",
		category: "condition"
	},
	"peptic ulcer": {
		term: "Peptic Ulcer",
		simpleHinglish: "Stomach ya small intestine ki inner lining mein acid aur pepsin ke kaaran bana hua ghaav ya chhaala.",
		category: "condition"
	},
	"rheumatoid arthritis": {
		term: "Rheumatoid Arthritis",
		simpleHinglish: "Ek autoimmune disease jisme body ka immune system joints par attack karta hai, jisse joints mein inflammation, pain aur stiffness ho sakti hai.",
		category: "condition"
	},
	osteoarthritis: {
		term: "Osteoarthritis",
		simpleHinglish: "Joints ke smooth protective cartilage mein gradual wear-and-tear se hone wali degenerative joint disease.",
		category: "condition"
	},
	diabetes: {
		term: "Diabetes",
		simpleHinglish: "Chronic condition jisme pancreas adequate insulin nahi banata ya cells insulin utilize nahi kar pate, jisse blood sugar high rehta hai.",
		category: "condition"
	},
	asthma: {
		term: "Asthma",
		simpleHinglish: "Airways (saans ki nali) mein chronic inflammation aur narrowing ki wajah se wheezing aur breathing difficulty aana.",
		category: "condition"
	},
	hyperlipidemia: {
		term: "Hyperlipidemia",
		simpleHinglish: "Blood mein cholesterol ya triglycerides jaise fats/lipids ka level normal se zyada ho jana.",
		category: "condition"
	},
	anaphylaxis: {
		term: "Anaphylaxis",
		simpleHinglish: "Achanak hone wala severe, life-threatening allergic reaction jisme saans ruk sakti hai aur BP crash ho sakta hai.",
		category: "adverse_effect"
	},
	"lactic acidosis": {
		term: "Lactic Acidosis",
		simpleHinglish: "Blood mein lactic acid ka dangerously high jama ho jana, jo rare par severe medical emergency hoti hai.",
		category: "adverse_effect"
	},
	hypokalemia: {
		term: "Hypokalemia",
		simpleHinglish: "Blood mein potassium electrolyte ka level normal se kam ho jana.",
		category: "condition"
	},
	hyperkalemia: {
		term: "Hyperkalemia",
		simpleHinglish: "Blood mein potassium level dangerous limit tak badh jana, jo heart rhythm affect kar sakta hai.",
		category: "condition"
	},
	bronchospasm: {
		term: "Bronchospasm",
		simpleHinglish: "Airway muscles ka achanak tight ya constrict ho jana jisse saans lene mein ghur-ghur ya seeti ki aawaz aati hai.",
		category: "symptom"
	},
	tachycardia: {
		term: "Tachycardia",
		simpleHinglish: "Resting heart rate ka abnormally fast (usually > 100 beats/min) chalna.",
		category: "symptom"
	},
	bradycardia: {
		term: "Bradycardia",
		simpleHinglish: "Heart rate ka normal se kaafi dheema (usually < 60 beats/min) chalna.",
		category: "symptom"
	},
	"protein binding": {
		term: "Protein Binding",
		simpleHinglish: "Blood proteins (jaise albumin) ke saath medicine molecules ka temporary chipakna.",
		category: "pharmacology"
	},
	bioavailability: {
		term: "Bioavailability",
		simpleHinglish: "Dawa ka kitna fraction bina kisi change ke bloodstream (blood circulation) tak pahunchta hai.",
		category: "pharmacology"
	},
	"half-life": {
		term: "Half-Life (t½)",
		simpleHinglish: "Body mein dawa ki concentration ko aadha (50%) hone mein lagne wala time.",
		category: "pharmacology"
	},
	clearance: {
		term: "Clearance",
		simpleHinglish: "Body ke organs (kidneys/liver) dwaara per minute blood se medicine ko puri tarah remove karne ki speed.",
		category: "pharmacology"
	},
	"gluconeogenesis": {
		term: "Gluconeogenesis",
		simpleHinglish: "Liver dwara non-carbohydrate sources se naya glucose (sugar) banane ki metabolic process.",
		category: "pharmacology"
	},
	"proton pump": {
		term: "Proton Pump (H+/K+-ATPase)",
		simpleHinglish: "Stomach ke parietal cells mein acid (H+ ions) pump karne wala main engine enzyme.",
		category: "pharmacology"
	},
	"gastric acid": {
		term: "Gastric Acid",
		simpleHinglish: "Stomach mein banne wala concentrated hydrochloric acid jo khana digest karta hai.",
		category: "pharmacology"
	},
	inhibit: {
		term: "Inhibit",
		simpleHinglish: "Kisi biological target, enzyme ya chemical reaction ko rokna ya uski activity ko kam karna.",
		category: "pharmacology"
	},
	inhibition: {
		term: "Inhibition",
		simpleHinglish: "Kisi biological process ya enzyme ko block karne ki kriya.",
		category: "pharmacology"
	},
	bactericidal: {
		term: "Bactericidal",
		simpleHinglish: "Bacteria ko directly jaan se maar dene wali action.",
		category: "pharmacology"
	},
	bacteriostatic: {
		term: "Bacteriostatic",
		simpleHinglish: "Bacteria ki growth aur multiplication ko rokne wali action, jabki immune system unhe clear karta hai.",
		category: "pharmacology"
	},
	vasodilation: {
		term: "Vasodilation",
		simpleHinglish: "Blood vessels (khoon ki naliyon) ka relax hokar chauda (widen) ho jana jisse blood pressure kam hota hai.",
		category: "pharmacology"
	},
	vasoconstriction: {
		term: "Vasoconstriction",
		simpleHinglish: "Blood vessels ka sikudna (narrow hona) jisse blood flow kam aur pressure badh sakta hai.",
		category: "pharmacology"
	},
	hypersensitivity: {
		term: "Hypersensitivity",
		simpleHinglish: "Immune system ka kisi medicine ya substance ke prati exaggerated ya allergic reaction dena.",
		category: "adverse_effect"
	},
	thrombosis: {
		term: "Thrombosis",
		simpleHinglish: "Blood vessels ke andar blood clot (thakka) ban kar khoon ke bahaav ko rokna.",
		category: "condition"
	},
	prophylaxis: {
		term: "Prophylaxis",
		simpleHinglish: "Kisi disease ya complication ko shuru hone se pehle hi rokne ke liye di gayi preventive treatment.",
		category: "pharmacology"
	},
	tolerance: {
		term: "Tolerance",
		simpleHinglish: "Dawa ko baar-baar lene se body ka aadi hona, jisse wahi asar pane ke liye higher dose ki zaroorat padti hai.",
		category: "pharmacology"
	}
};
/**
* Scan medicine fields for difficult terms and retrieve verified simple Hinglish meanings.
*/
function extractDifficultTermsForMedicine(fields) {
	const corpusParts = [];
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
	const foundTerms = [];
	const seenCanonicalKeys = /* @__PURE__ */ new Set();
	for (const [key, def] of Object.entries(HINGLISH_TERMS_DICTIONARY)) {
		if (seenCanonicalKeys.has(def.term.toLowerCase())) continue;
		if (new RegExp(`\\b${key.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "i").test(fullText)) {
			foundTerms.push(def);
			seenCanonicalKeys.add(def.term.toLowerCase());
		}
	}
	return foundTerms.sort((a, b) => {
		const priority = (cat) => {
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
var _jsxFileName$1 = "/app/applet/src/components/medicine-memory-mode.tsx";
function MedicineMemoryMode({ medicine, classes }) {
	const [level, setLevel] = (0, import_react.useState)("30s");
	const [showDisease, setShowDisease] = (0, import_react.useState)(true);
	const [showTerms, setShowTerms] = (0, import_react.useState)(true);
	const suffixRule = detectSuffixRule(medicine);
	const disease = getDiseaseExplanation(medicine);
	const moaData = buildMoaChain(medicine);
	const simple = buildSimpleExplanation(medicine);
	const interactions = buildInteractionDetails(medicine);
	const fiveSecRevision = build5SecRevision(medicine, suffixRule);
	const finalMemorySentence = buildFinalMemorySentence(medicine, suffixRule);
	const difficultTerms = extractDifficultTermsForMedicine({
		category: medicine.category,
		mechanism_of_action: medicine.mechanism_of_action,
		indications: medicine.indications,
		common_adverse_effects: medicine.common_adverse_effects,
		serious_adverse_effects: medicine.serious_adverse_effects,
		contraindications: medicine.contraindications,
		warnings: medicine.warnings,
		drug_interactions: medicine.drug_interactions,
		routes: medicine.routes
	});
	const primaryClass = classes?.[0]?.name || suffixRule?.className || medicine.category || "Therapeutic Class on record";
	const missingText = "MediDex data mein available nahi hai.";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-xl border border-primary/20 bg-card p-4 shadow-sm sm:p-6 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid size-8 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brain, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 81,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 80,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-lg font-bold tracking-tight sm:text-xl flex items-center gap-2",
						children: "🧠 EASY MEMORY / EXAM MODE"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 84,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: "High-yield Hinglish pharmacology memory guide & rapid exam revision"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 87,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 83,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 79,
					columnNumber: 11
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 78,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1.5 rounded-lg border bg-muted/40 p-1 self-start sm:self-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setLevel("5s"),
							className: `rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${level === "5s" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: "⚡ 5-Sec Recall"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 96,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setLevel("30s"),
							className: `rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${level === "30s" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: "⏱️ 30-Sec Summary"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 107,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setLevel("exam"),
							className: `rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${level === "exam" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
							children: "📚 Exam Detail"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 118,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 95,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-lg bg-primary/5 p-4 border border-primary/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pill, { className: "size-5 text-primary" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 136,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-lg font-bold text-foreground",
						children: ["💊 ", medicine.display_name]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 137,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 135,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-foreground",
								children: "Class:"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 141,
								columnNumber: 15
							}, this),
							" ",
							primaryClass
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 140,
							columnNumber: 13
						}, this),
						suffixRule ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-foreground",
								children: "Suffix:"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 145,
								columnNumber: 17
							}, this),
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
								className: "rounded bg-primary/10 px-1 py-0.5 font-semibold text-primary",
								children: [
									suffixRule.suffix,
									" → ",
									suffixRule.className
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 146,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 144,
							columnNumber: 15
						}, this) : medicine.key_suffix ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-foreground",
								children: "Suffix:"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 152,
								columnNumber: 17
							}, this),
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
								className: "rounded bg-primary/10 px-1 py-0.5 font-semibold text-primary",
								children: medicine.key_suffix
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 153,
								columnNumber: 17
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 151,
							columnNumber: 15
						}, this) : null,
						medicine.pronunciation_en && /* @__PURE__ */ (void 0)("span", { children: [
							/* @__PURE__ */ (void 0)("strong", {
								className: "text-foreground",
								children: "Pronunciation:"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 160,
								columnNumber: 17
							}, this),
							" ",
							/* @__PURE__ */ (void 0)("span", {
								className: "italic text-primary",
								children: medicine.pronunciation_en
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 161,
								columnNumber: 17
							}, this),
							medicine.pronunciation_hi ? ` (${medicine.pronunciation_hi})` : ""
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 159,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 139,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 134,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 133,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-lg bg-amber-500/10 border border-amber-500/25 p-3.5 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-wider",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flame, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 172,
						columnNumber: 11
					}, this), " 📚 5-Second Revision"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 171,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm font-semibold text-foreground break-words font-mono",
					children: fiveSecRevision
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 174,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 170,
				columnNumber: 7
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-2.5 rounded-lg border p-4 bg-background",
				children: [
					/* @__PURE__ */ (void 0)("h3", {
						className: "text-sm font-bold text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold",
							children: "1"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 183,
							columnNumber: 13
						}, this), "🧠 Ye kya hai?"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 182,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-sm leading-relaxed text-foreground/90 font-medium",
						children: simple.explanation
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 188,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-2 rounded-md bg-muted/60 p-2.5 text-xs sm:text-sm font-mono text-primary flex items-center gap-1.5 overflow-x-auto",
						children: /* @__PURE__ */ (void 0)("span", { children: simple.simpleChain }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 192,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 191,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 181,
				columnNumber: 9
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-3 rounded-lg border border-primary/25 p-4 bg-primary/[0.02]",
				children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (void 0)("h3", {
							className: "text-sm font-bold text-foreground flex items-center gap-2",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "grid size-5 place-items-center rounded bg-primary text-primary-foreground text-xs font-bold",
								children: "2"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 202,
								columnNumber: 15
							}, this), "⚙️ MOA — Kaise kaam karti hai? (Sabse Important) 🧠"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 201,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)(Badge, {
							variant: "outline",
							className: "text-2xs font-semibold text-primary",
							children: "High Yield"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 207,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 200,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "text-xs sm:text-sm space-y-2 text-foreground/90",
						children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-semibold text-foreground",
							children: "Target / Site: "
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 214,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: moaData.target }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 215,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 213,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-semibold text-foreground",
							children: "Mechanism Details: "
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 218,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: medicine.mechanism_of_action || /* @__PURE__ */ (void 0)("span", {
							className: "text-muted-foreground italic",
							children: missingText
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 221,
							columnNumber: 19
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 219,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 217,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 212,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "rounded-md bg-muted p-2.5 text-xs sm:text-sm font-semibold font-mono text-foreground flex flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (void 0)("span", {
								className: "text-primary",
								children: medicine.generic_name
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 229,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3 text-muted-foreground shrink-0" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 230,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("span", {
								className: "text-blue-600 dark:text-blue-400",
								children: moaData.target.split(" ")[0]
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 231,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3 text-muted-foreground shrink-0" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 232,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("span", {
								className: "text-amber-600 dark:text-amber-400",
								children: moaData.action
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 233,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)(ArrowRight, { className: "size-3 text-muted-foreground shrink-0" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 234,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("span", {
								className: "text-emerald-600 dark:text-emerald-400",
								children: moaData.result
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 235,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 228,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "rounded-md bg-accent/60 p-3 text-xs sm:text-sm border border-accent",
						children: /* @__PURE__ */ (void 0)("p", {
							className: "font-semibold text-accent-foreground flex items-center gap-1.5",
							children: [/* @__PURE__ */ (void 0)("span", { children: "🧠 Easy Memory Trick:" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 241,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "font-bold text-primary",
								children: suffixRule?.mnemonic || medicine.memory_trick || `"${medicine.generic_name} = Key mechanism recall!"`
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 242,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 240,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 239,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 199,
				columnNumber: 9
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-3 rounded-lg border p-4 bg-background",
				children: [
					/* @__PURE__ */ (void 0)("h3", {
						className: "text-sm font-bold text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold",
							children: "3"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 254,
							columnNumber: 13
						}, this), "🎯 Main Uses"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 253,
						columnNumber: 11
					}, this),
					(medicine.indications?.length ?? 0) > 0 ? /* @__PURE__ */ (void 0)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: medicine.indications.map((ind, idx) => /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-1.5 text-xs sm:text-sm font-medium",
							children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 267,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", { children: ind }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 268,
								columnNumber: 19
							}, this)]
						}, idx, true, {
							fileName: _jsxFileName$1,
							lineNumber: 263,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 261,
						columnNumber: 13
					}, this) : /* @__PURE__ */ (void 0)("p", {
						className: "text-xs sm:text-sm text-muted-foreground italic",
						children: missingText
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 273,
						columnNumber: 13
					}, this),
					medicine.indications && medicine.indications.length > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "rounded-md bg-muted/60 p-2.5 text-xs sm:text-sm",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-bold text-foreground",
							children: "🧠 One-line memory: "
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 278,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "font-mono text-primary font-semibold",
							children: [
								"\"",
								medicine.indications.slice(0, 4).join(" + "),
								" = ",
								primaryClass,
								"\""
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 279,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 277,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 252,
				columnNumber: 9
			}, this),
			disease && level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "rounded-lg border border-blue-500/20 bg-blue-500/[0.03] p-4 space-y-3",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm",
						children: [/* @__PURE__ */ (void 0)(Stethoscope, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 292,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: [
							"🩺 Condition Connection: ",
							disease.name,
							" kya hai? (",
							disease.fullName,
							")"
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 293,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 291,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-7 text-xs text-muted-foreground",
						onClick: () => setShowDisease(!showDisease),
						children: showDisease ? /* @__PURE__ */ (void 0)(ChevronUp, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 301,
							columnNumber: 30
						}, this) : /* @__PURE__ */ (void 0)(ChevronDown, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 301,
							columnNumber: 67
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 295,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 290,
					columnNumber: 11
				}, this), showDisease && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-2.5 text-xs sm:text-sm pt-1",
					children: [
						/* @__PURE__ */ (void 0)("p", {
							className: "text-foreground/90 leading-relaxed font-medium",
							children: disease.simpleExplanation
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 307,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-semibold text-foreground",
							children: "Common symptoms:"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 311,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("ul", {
							className: "mt-1 list-disc pl-5 space-y-1 text-muted-foreground",
							children: disease.symptoms.map((s, idx) => /* @__PURE__ */ (void 0)("li", { children: s }, idx, false, {
								fileName: _jsxFileName$1,
								lineNumber: 314,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 312,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 310,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "rounded bg-blue-500/10 p-2.5 text-blue-900 dark:text-blue-200 text-xs sm:text-sm font-medium",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "font-bold",
								children: [medicine.display_name, " connection: "]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 319,
								columnNumber: 17
							}, this), disease.medicineConnection]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 318,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 306,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 289,
				columnNumber: 9
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-2 rounded-lg border p-4 bg-background",
				children: [
					/* @__PURE__ */ (void 0)("h3", {
						className: "text-sm font-bold text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold",
							children: "4"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 331,
							columnNumber: 13
						}, this), "💊 Dose / Administration"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 330,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "grid gap-2 text-xs sm:text-sm sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "rounded-md border p-2.5 bg-muted/20",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground block text-2xs uppercase font-semibold",
									children: "Available Strengths"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 339,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-semibold text-foreground",
									children: (medicine.strengths?.length ?? 0) > 0 ? medicine.strengths.join(", ") : missingText
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 340,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 338,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "rounded-md border p-2.5 bg-muted/20",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground block text-2xs uppercase font-semibold",
									children: "Dosage Forms"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 347,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-semibold text-foreground",
									children: (medicine.dosage_forms?.length ?? 0) > 0 ? medicine.dosage_forms.join(", ") : missingText
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 348,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 346,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "rounded-md border p-2.5 bg-muted/20",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground block text-2xs uppercase font-semibold",
									children: "Routes of Admin"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 355,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "font-semibold text-foreground",
									children: (medicine.routes?.length ?? 0) > 0 ? medicine.routes.join(", ") : missingText
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 356,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 354,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 337,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-2xs text-muted-foreground italic pt-1",
						children: "Exact dose patient-specific diagnosis aur condition par depend karti hai. Educational reference only."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 363,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 329,
				columnNumber: 9
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-3 rounded-lg border p-4 bg-background",
				children: [
					/* @__PURE__ */ (void 0)("h3", {
						className: "text-sm font-bold text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold",
							children: "5"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 373,
							columnNumber: 13
						}, this), "⚠️ Side Effects"]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 372,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5 rounded-md border p-3 bg-muted/10",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-xs font-bold text-foreground flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "size-3.5 text-amber-500" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 383,
									columnNumber: 17
								}, this), " Common Side Effects:"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 382,
								columnNumber: 15
							}, this), (medicine.common_adverse_effects?.length ?? 0) > 0 ? /* @__PURE__ */ (void 0)("ul", {
								className: "list-disc pl-4 space-y-0.5 text-xs text-muted-foreground",
								children: medicine.common_adverse_effects.map((se, idx) => /* @__PURE__ */ (void 0)("li", { children: se }, idx, false, {
									fileName: _jsxFileName$1,
									lineNumber: 388,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 386,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground italic",
								children: missingText
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 392,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 381,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "space-y-1.5 rounded-md border border-destructive/20 p-3 bg-destructive/[0.03]",
							children: [/* @__PURE__ */ (void 0)("span", {
								className: "text-xs font-bold text-destructive flex items-center gap-1.5",
								children: [/* @__PURE__ */ (void 0)(ShieldAlert, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 399,
									columnNumber: 17
								}, this), " Serious / Red Flag Effects:"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 398,
								columnNumber: 15
							}, this), (medicine.serious_adverse_effects?.length ?? 0) > 0 ? /* @__PURE__ */ (void 0)("ul", {
								className: "list-disc pl-4 space-y-0.5 text-xs text-destructive/90",
								children: medicine.serious_adverse_effects.map((se, idx) => /* @__PURE__ */ (void 0)("li", {
									className: "font-medium",
									children: se
								}, idx, false, {
									fileName: _jsxFileName$1,
									lineNumber: 404,
									columnNumber: 21
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 402,
								columnNumber: 17
							}, this) : /* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground italic",
								children: missingText
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 408,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 397,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 379,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "rounded-md bg-muted/60 p-2.5 text-xs",
						children: [/* @__PURE__ */ (void 0)("span", {
							className: "font-bold text-foreground",
							children: "🧠 Memory grouping: "
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 415,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "font-medium text-foreground",
							children: (medicine.common_adverse_effects?.length ?? 0) > 0 ? `${medicine.generic_name} ke common effects primarily ${medicine.common_adverse_effects[0]} aur gut/systemic tolerance se related hain.` : "Standard monitoring required."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 416,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 414,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 371,
				columnNumber: 9
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-3 rounded-lg border p-4 bg-background",
				children: [/* @__PURE__ */ (void 0)("h3", {
					className: "text-sm font-bold text-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (void 0)("span", {
						className: "grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold",
						children: "6"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 429,
						columnNumber: 13
					}, this), "🚫 Contraindications / Cautions"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 428,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "space-y-2 text-xs sm:text-sm",
					children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
						className: "font-bold text-destructive",
						children: "Contraindications: "
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 437,
						columnNumber: 15
					}, this), (medicine.contraindications?.length ?? 0) > 0 ? /* @__PURE__ */ (void 0)("span", {
						className: "text-foreground/90 font-medium",
						children: medicine.contraindications.join("; ")
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 439,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (void 0)("span", {
						className: "text-muted-foreground italic",
						children: missingText
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 443,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 436,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
						className: "font-bold text-amber-600 dark:text-amber-400",
						children: "Important Warnings / Cautions: "
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 448,
						columnNumber: 15
					}, this), (medicine.warnings?.length ?? 0) > 0 ? /* @__PURE__ */ (void 0)("ul", {
						className: "mt-1 list-disc pl-5 space-y-0.5 text-muted-foreground",
						children: medicine.warnings.map((w, idx) => /* @__PURE__ */ (void 0)("li", { children: w }, idx, false, {
							fileName: _jsxFileName$1,
							lineNumber: 452,
							columnNumber: 21
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 450,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (void 0)("span", {
						className: "text-muted-foreground italic",
						children: missingText
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 456,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 447,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 435,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 427,
				columnNumber: 9
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-3 rounded-lg border p-4 bg-background",
				children: [/* @__PURE__ */ (void 0)("h3", {
					className: "text-sm font-bold text-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (void 0)("span", {
						className: "grid size-5 place-items-center rounded bg-primary/10 text-primary text-xs font-bold",
						children: "7"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 467,
						columnNumber: 13
					}, this), "🔄 Important Drug Interactions"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 466,
					columnNumber: 11
				}, this), interactions.length > 0 ? /* @__PURE__ */ (void 0)("div", {
					className: "space-y-2.5",
					children: interactions.map((inter, idx) => /* @__PURE__ */ (void 0)("div", {
						className: "rounded-md border p-3 bg-muted/20 space-y-1",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between text-xs font-bold text-foreground",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-primary font-mono",
									children: inter.pathway
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 478,
									columnNumber: 21
								}, this), /* @__PURE__ */ (void 0)(Badge, {
									variant: "outline",
									className: "text-2xs",
									children: "Interaction"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 479,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 477,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: [/* @__PURE__ */ (void 0)("strong", {
									className: "text-foreground",
									children: "Clinical concern: "
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 482,
									columnNumber: 21
								}, this), inter.clinicalConcern]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 481,
								columnNumber: 19
							}, this),
							inter.memoryNote && /* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold text-amber-700 dark:text-amber-400 pt-0.5",
								children: [
									"🧠 Memory: «",
									inter.memoryNote,
									"»"
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 486,
								columnNumber: 21
							}, this)
						]
					}, idx, true, {
						fileName: _jsxFileName$1,
						lineNumber: 476,
						columnNumber: 17
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 474,
					columnNumber: 13
				}, this) : /* @__PURE__ */ (void 0)("p", {
					className: "text-xs sm:text-sm text-muted-foreground italic",
					children: missingText
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 494,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 465,
				columnNumber: 9
			}, this),
			level !== "5s" && /* @__PURE__ */ (void 0)("section", {
				className: "rounded-lg border border-purple-500/20 bg-purple-500/[0.02] p-4 space-y-3",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold text-sm",
						children: [/* @__PURE__ */ (void 0)(BookOpen, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 504,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("span", { children: [
							"📖 Difficult Words — Simple Hinglish Meaning (",
							difficultTerms.length,
							" terms)"
						] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 505,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 503,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)(Button, {
						variant: "ghost",
						size: "sm",
						className: "h-7 text-xs text-muted-foreground",
						onClick: () => setShowTerms(!showTerms),
						children: showTerms ? /* @__PURE__ */ (void 0)(ChevronUp, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 513,
							columnNumber: 28
						}, this) : /* @__PURE__ */ (void 0)(ChevronDown, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 513,
							columnNumber: 65
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 507,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 502,
					columnNumber: 11
				}, this), showTerms && /* @__PURE__ */ (void 0)("div", {
					className: "space-y-2 pt-1",
					children: difficultTerms.length > 0 ? /* @__PURE__ */ (void 0)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: difficultTerms.map((termItem, idx) => /* @__PURE__ */ (void 0)("div", {
							className: "rounded-md border border-purple-500/15 bg-card/60 p-2.5 text-xs space-y-1 shadow-2xs",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "font-bold text-foreground text-xs flex items-center gap-1",
									children: [/* @__PURE__ */ (void 0)(CircleQuestionMark, { className: "size-3 text-purple-600 dark:text-purple-400" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 528,
										columnNumber: 27
									}, this), termItem.term]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 527,
									columnNumber: 25
								}, this), termItem.category && /* @__PURE__ */ (void 0)(Badge, {
									variant: "outline",
									className: "text-3xs uppercase tracking-wider",
									children: termItem.category.replace("_", " ")
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 532,
									columnNumber: 27
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 526,
								columnNumber: 23
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: ["= ", termItem.simpleHinglish]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 537,
								columnNumber: 23
							}, this)]
						}, idx, true, {
							fileName: _jsxFileName$1,
							lineNumber: 522,
							columnNumber: 21
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 520,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (void 0)("p", {
						className: "text-xs text-muted-foreground italic",
						children: "Simple Hinglish meaning current database mein available nahi hai."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 544,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 518,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 501,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-3 rounded-lg border border-primary/20 bg-primary/[0.015] p-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "text-sm font-bold text-foreground flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid size-5 place-items-center rounded bg-primary text-primary-foreground text-xs font-bold",
						children: "8"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 556,
						columnNumber: 11
					}, this), "Practical Medicine Memory (20–30s Recall)"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 555,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-2 text-xs sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-md border bg-card p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-2xs font-semibold text-muted-foreground uppercase",
								children: "Class"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 564,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-foreground line-clamp-2",
								children: primaryClass
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 565,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 563,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-md border bg-card p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-2xs font-semibold text-muted-foreground uppercase",
								children: "Target"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 569,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-foreground line-clamp-2",
								children: moaData.target.split(" ")[0]
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 570,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 568,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-md border bg-card p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-2xs font-semibold text-muted-foreground uppercase",
								children: "Main Use"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 574,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-foreground line-clamp-2",
								children: medicine.indications?.[0] || missingText
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 575,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 573,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-md border bg-card p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-2xs font-semibold text-muted-foreground uppercase",
								children: "Suffix"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 581,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-bold text-primary font-mono",
								children: suffixRule?.suffix || medicine.key_suffix || "None"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 582,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 580,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-md border bg-card p-2.5 col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-2xs font-semibold text-muted-foreground uppercase",
								children: "Major Warning"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 588,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-medium text-foreground line-clamp-2",
								children: medicine.warnings?.[0] || missingText
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 589,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 587,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-md border bg-card p-2.5 col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-2xs font-semibold text-muted-foreground uppercase",
								children: "Major Interaction"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 595,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-medium text-foreground line-clamp-2",
								children: medicine.drug_interactions?.[0] || missingText
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 596,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 594,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 562,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 554,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-lg bg-primary/10 border border-primary/25 p-3.5 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-2xs font-bold text-primary uppercase tracking-wider block",
					children: "🧠 Final Memory Sentence"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 605,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs sm:text-sm font-bold text-foreground break-words font-mono",
					children: [
						"\"",
						finalMemorySentence,
						"\""
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 608,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 604,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 75,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/medicines.$slug.tsx?tsr-split=component";
function List({ items }) {
	if (!items || items.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm text-muted-foreground",
		children: "Not recorded in the starter database."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 44
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "list-disc space-y-1 pl-5 text-sm",
		children: items.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: i }, i, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 23
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 10
	}, this);
}
function Text({ value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm leading-relaxed",
		children: value || /* @__PURE__ */ (void 0)("span", {
			className: "text-muted-foreground",
			children: "Not recorded in the starter database."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 17
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 10
	}, this);
}
function MedicineDetail() {
	const { slug } = useParams({ from: "/medicines/$slug" });
	const { data: m, isLoading } = useQuery(medicineQuery(slug));
	const { data: brands } = useQuery(medicineBrandsQuery(m?.id));
	const { data: classes } = useQuery(medicineClassesQuery(m?.id));
	const { data: refs } = useQuery(medicineReferencesQuery(m?.id));
	const { data: interactions } = useQuery(medicineInteractionsQuery(m?.id));
	const { toggle, isFavorite } = useFavorites();
	const track = useTrackView();
	(0, import_react.useEffect)(() => {
		if (m) track("medicine", m.slug, m.display_name);
	}, [m?.id]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-96 rounded-xl" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 68,
		columnNumber: 25
	}, this);
	if (!m) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-xl font-semibold",
				children: "Medicine not found"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "This medicine is not in the starter database yet."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/medicines",
					children: "Back to medicines"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 69,
		columnNumber: 18
	}, this);
	const aiContext = JSON.stringify({
		name: m.display_name,
		salt: m.salt,
		mechanism: m.mechanism_of_action,
		adme: {
			absorption: m.absorption,
			distribution: m.distribution,
			metabolism: m.metabolism,
			excretion: m.excretion
		},
		indications: m.indications,
		warnings: m.warnings,
		adverse: m.common_adverse_effects
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "ghost",
				size: "sm",
				className: "-ml-2",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/medicines",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 11
					}, this), " Medicines"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-2xl font-bold uppercase sm:text-3xl",
						children: m.generic_name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 9
					}, this),
					m.pronunciation_en && /* @__PURE__ */ (void 0)("p", {
						className: "mt-1 text-sm text-primary",
						children: [m.pronunciation_en, m.pronunciation_hi ? ` • ${m.pronunciation_hi}` : ""]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 32
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 flex flex-wrap gap-1.5",
						children: [
							(classes ?? []).map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/classes/$slug",
								params: { slug: c.slug },
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
									variant: "secondary",
									children: c.name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 15
								}, this)
							}, c.id, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 37
							}, this)),
							m.category && /* @__PURE__ */ (void 0)(Badge, {
								variant: "outline",
								children: m.category
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 26
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								className: "gap-1 bg-success text-success-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 113,
										columnNumber: 13
									}, this),
									" ",
									m.verification_status
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronounceButtons, { text: m.generic_name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, {
								topic: m.display_name,
								context: aiContext
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/memory",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brain, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 122,
										columnNumber: 15
									}, this), " Remember"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/compare",
									search: { a: m.slug },
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scale, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 129,
										columnNumber: 15
									}, this), " Compare"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 126,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: isFavorite("medicine", m.slug) ? "default" : "outline",
								size: "sm",
								onClick: () => toggle.mutate({
									item_type: "medicine",
									item_id: m.slug,
									label: m.display_name
								}, {
									onSuccess: (r) => toast.success(r === "added" ? "Added to favourites" : "Removed"),
									onError: (e) => toast.error(e.message)
								}),
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 13
								}, this), " Favourite"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 132,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicineMemoryMode, {
				medicine: m,
				classes: classes ?? void 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 145,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: m.description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, {
				type: "multiple",
				defaultValue: ["overview", "moa"],
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "overview",
						title: "Overview",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Generic",
									value: m.generic_name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Salt / Active ingredient",
									value: m.salt ?? m.active_ingredient
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 153,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Strengths",
									value: (m.strengths ?? []).join(", ")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 154,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Dosage forms",
									value: (m.dosage_forms ?? []).join(", ")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Routes",
									value: (m.routes ?? []).join(", ")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Storage",
									value: m.storage
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Onset",
									value: m.onset
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Duration",
									value: m.duration
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 159,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 151,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 150,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "brands",
						title: `Brands & Manufacturers (${brands?.length ?? 0})`,
						children: [(brands?.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm text-muted-foreground",
							children: "No brand record yet."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 42
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "grid gap-2 sm:grid-cols-2",
							children: (brands ?? []).map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/brands/$id",
								params: { id: b.id },
								className: "block rounded-lg border p-3 text-sm transition-colors hover:bg-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium",
											children: b.brand_name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 170,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerificationBadge, { status: b.verification_status }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 171,
											columnNumber: 23
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 169,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "block text-xs text-muted-foreground",
										children: [
											b.composition ?? "Composition not yet verified",
											b.strength ? ` • ${b.strength}` : "",
											b.dosage_form ? ` • ${b.dosage_form}` : ""
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 173,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "block text-xs text-muted-foreground",
										children: b.manufacturers?.name ?? "Manufacturer not recorded"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 178,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 166,
								columnNumber: 19
							}, this) }, b.id, false, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 40
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 114
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: "Brand records are factual reference data. They do not imply any brand or company is better, safer or recommended."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "moa",
						title: "Mechanism of Action & Pharmacodynamics",
						term: "Mechanism of Action",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { value: m.mechanism_of_action }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { value: m.pharmacodynamics }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 193,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, {
									topic: `Mechanism of ${m.generic_name}`,
									context: m.mechanism_of_action ?? ""
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 196,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 195,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "adme",
						title: "ADME",
						term: "ADME",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdmeCard, {
									step: "A",
									title: "Absorption",
									value: m.absorption
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 202,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdmeCard, {
									step: "D",
									title: "Distribution",
									value: m.distribution
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 203,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdmeCard, {
									step: "M",
									title: "Metabolism",
									value: m.metabolism
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 204,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdmeCard, {
									step: "E",
									title: "Excretion",
									value: m.excretion
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 205,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "pk",
						title: "Pharmacokinetics",
						term: "Pharmacokinetics",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Bioavailability",
									value: m.bioavailability
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 211,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Half-life",
									value: m.half_life
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 212,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Protein binding",
									value: m.protein_binding
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 213,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Volume of distribution",
									value: m.volume_of_distribution
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 214,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Clearance",
									value: m.clearance
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 215,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 210,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 209,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "uses",
						title: "Uses / Indications",
						term: "Indications",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.indications }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 220,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 219,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "contra",
						title: "Contraindications",
						term: "Contraindications",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.contraindications }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 223,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 222,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "warn",
						title: "Warnings & Precautions",
						term: "Precautions",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.warnings }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 226,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.precautions }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 228,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 227,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 225,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "ae",
						title: "Adverse Effects",
						term: "Adverse Effects",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mb-1 text-xs font-medium text-muted-foreground",
								children: "Common"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 232,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.common_adverse_effects }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 233,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 mb-1 text-xs font-medium text-muted-foreground",
								children: "Serious"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 234,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.serious_adverse_effects }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 231,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "inter",
						title: "Interactions",
						term: "Interactions",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.drug_interactions }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 238,
								columnNumber: 11
							}, this),
							(interactions?.length ?? 0) > 0 && /* @__PURE__ */ (void 0)("div", {
								className: "mt-3 space-y-2",
								children: (interactions ?? []).map((i) => /* @__PURE__ */ (void 0)("div", {
									className: "rounded-lg border p-3 text-sm",
									children: [
										/* @__PURE__ */ (void 0)("p", {
											className: "font-medium",
											children: [
												i.a?.display_name,
												" + ",
												i.b?.display_name,
												" ",
												/* @__PURE__ */ (void 0)(Badge, {
													variant: "outline",
													className: "ml-1 capitalize",
													children: i.severity
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 243,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-muted-foreground",
											children: i.description
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 247,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: i.professional_consideration
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 248,
											columnNumber: 19
										}, this)
									]
								}, i.id, true, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 46
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 239,
								columnNumber: 47
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.food_interactions }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 252,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 251,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 237,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "pop",
						title: "Special Populations",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Pregnancy",
									value: m.pregnancy
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 257,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Lactation",
									value: m.lactation
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 258,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Pediatric",
									value: m.pediatric
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 259,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Geriatric",
									value: m.geriatric
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 260,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Renal",
									value: m.renal
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 261,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Hepatic",
									value: m.hepatic
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 262,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 256,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 255,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "mon",
						title: "Monitoring & Counselling",
						term: "Monitoring",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.monitoring }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 266,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.patient_counselling }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 268,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 267,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 265,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "edu",
						title: "Learning Notes",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mb-1 text-xs font-medium text-muted-foreground",
								children: "Advantages"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 272,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.advantages }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 273,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 mb-1 text-xs font-medium text-muted-foreground",
								children: "Disadvantages"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 274,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.disadvantages }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 275,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 mb-1 text-xs font-medium text-muted-foreground",
								children: "Key points"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 276,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { items: m.key_points }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 277,
								columnNumber: 11
							}, this),
							m.memory_trick && /* @__PURE__ */ (void 0)("div", {
								className: "mt-3 rounded-lg bg-accent p-3 text-sm text-accent-foreground",
								children: [
									/* @__PURE__ */ (void 0)("strong", { children: "Memory trick:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 279,
										columnNumber: 15
									}, this),
									" ",
									m.memory_trick,
									/* @__PURE__ */ (void 0)("p", {
										className: "mt-1 text-xs",
										children: "Mnemonic is a learning aid. Always verify the actual classification in the medicine record."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 280,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 278,
								columnNumber: 30
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 271,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
						value: "ref",
						title: "References & Verification",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "space-y-1 text-sm",
							children: (refs ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [r.source_url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: r.source_url,
								target: "_blank",
								rel: "noreferrer",
								className: "text-primary underline underline-offset-2",
								children: r.source_name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 289,
								columnNumber: 33
							}, this) : r.source_name, r.source_type ? ` — ${r.source_type}` : ""] }, r.id, true, {
								fileName: _jsxFileName,
								lineNumber: 288,
								columnNumber: 36
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 287,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: [
								"Status: ",
								m.verification_status,
								" • Last verified: ",
								m.last_verified ?? "—",
								" • Data version",
								" ",
								m.data_version
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 295,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 286,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 302,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 92,
		columnNumber: 10
	}, this);
}
function Section({ value, title, term, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, {
		value,
		className: "surface border px-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, {
			className: "text-left font-display font-semibold",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "flex items-center gap-1.5",
				children: [title, term ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicalTermHelp, {
					term,
					asSpan: true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 320,
					columnNumber: 19
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 318,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 317,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, {
			className: "pb-4",
			children
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 323,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 316,
		columnNumber: 10
	}, this);
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
		className: "flex items-center gap-1 text-xs font-medium text-muted-foreground",
		children: [label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicalTermHelp, { term: label }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 336,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 334,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
		className: "text-sm",
		children: value || "Not yet verified"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 338,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 333,
		columnNumber: 10
	}, this);
}
function AdmeCard({ step, title, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-lg border p-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "grid size-6 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground",
				children: step
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 352,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm font-semibold",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 355,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 351,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: value || "Not recorded."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 357,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 350,
		columnNumber: 10
	}, this);
}
//#endregion
export { MedicineDetail as component };
