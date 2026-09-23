import { t as Button } from "./button-jFwRhC1j.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { B as Dna, F as FlaskConical, H as ClipboardCheck, O as Lightbulb, Q as BookOpen, Z as Brain, b as Pill, f as ShieldCheck, g as Scale, k as Layers, n as Volume2 } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as APP_VERSION, f as DATASET_LABEL, l as APP_NAME, p as DISCLAIMER, u as APP_TAGLINE } from "./router-DbBUrYCp.mjs";
import { t as Disclaimer } from "./disclaimer-B9cgdbzn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Ci893uFb.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/about.tsx?tsr-split=component";
var FEATURES = [
	{
		icon: Pill,
		title: "Medicine reference",
		body: "Generic name, salt, strengths, dosage forms, brands in India, uses, warnings and adverse effects in one clean profile.",
		to: "/medicines"
	},
	{
		icon: Dna,
		title: "Pharmacology learning",
		body: "Therapeutic and pharmacological classes, mechanisms of action and how drug families relate to each other.",
		to: "/classes"
	},
	{
		icon: Brain,
		title: "Drug Memory",
		body: "Name-suffix patterns like -pril, -sartan, -statin and -prazole, plus mnemonics with their exceptions flagged.",
		to: "/memory"
	},
	{
		icon: Lightbulb,
		title: "AI Explain",
		body: "Any topic explained simply, in Hindi, in Hinglish, for a student or in detail — built from the record you are reading.",
		to: "/medicines"
	},
	{
		icon: FlaskConical,
		title: "ADME",
		body: "Absorption, Distribution, Metabolism and Excretion step by step, with pharmacokinetic values beside them.",
		to: "/adme"
	},
	{
		icon: Layers,
		title: "Flashcards",
		body: "Spaced-repetition cards that resurface topics right when you are about to forget them.",
		to: "/flashcards"
	},
	{
		icon: ClipboardCheck,
		title: "Quiz",
		body: "10 or 20 question sets across classes, mechanisms, ADME and terminology, with scores saved to your progress.",
		to: "/quiz"
	},
	{
		icon: Scale,
		title: "Medicine comparison",
		body: "Compare two generics side by side: class, mechanism, ADME, adverse effects and cautions.",
		to: "/compare"
	},
	{
		icon: Volume2,
		title: "Pronunciation",
		body: "Phonetic spelling plus device text-to-speech at normal or slow speed.",
		to: "/pronunciation"
	},
	{
		icon: BookOpen,
		title: "Medical dictionary",
		body: "Everyday-language definitions of the terms that make pharmacology feel intimidating.",
		to: "/terms"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "animate-fade-up space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "hero-gradient -mx-4 rounded-b-3xl px-4 pt-8 pb-8 sm:-mx-6 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						variant: "secondary",
						className: "mb-3",
						children: DATASET_LABEL
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-3xl font-bold sm:text-4xl",
						children: ["MediVault ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "India"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-muted-foreground sm:text-base",
						children: APP_TAGLINE
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface space-y-3 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-lg font-semibold",
						children: [
							"What ",
							APP_NAME,
							" is"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: [APP_NAME, " is an educational medicine reference and pharmacology learning app focused on medicines commonly used in India. It brings the things students and curious patients usually hunt for across many places — what a medicine is, which class it belongs to, how it works, what the body does with it, and what to watch out for — into one consistent, readable profile."]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "pt-2 font-display font-semibold",
						children: "Why it exists"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: "Pharmacology is mostly memory plus pattern recognition. The app is built to support both: reference pages you can trust to be structured the same way every time, and learning tools — Drug Memory, flashcards, quizzes and AI Explain — that turn reading into recall. Nothing here is a prescription tool."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "What you can do here"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: FEATURES.map(({ icon: Icon, title, body, to }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to,
					className: "surface press-feedback block p-4 transition-shadow hover:shadow-[var(--shadow-float)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
							className: "size-5 text-primary",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 97,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-2 font-semibold",
							children: title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: body
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 15
						}, this)
					]
				}, title, true, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface space-y-3 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "flex items-center gap-2 font-display text-lg font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, {
							className: "size-5 text-primary",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 11
						}, this), " Data quality & verification"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: [
							"Every medicine record carries a verification status, a last-verified date and a data version. Records are written from standard references rather than generated freehand, and any field that could not be checked is shown as ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "Not yet verified" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 59
							}, this),
							" instead of being filled with a plausible guess. Brand entries are only marked verified once their composition has been confirmed."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display font-semibold",
						children: "References used"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-1 list-disc space-y-1 pl-5 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "WHO Model List of Essential Medicines" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "National List of Essential Medicines (NLEM), India" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "KD Tripathi, Essentials of Medical Pharmacology" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Goodman & Gilman's The Pharmacological Basis of Therapeutics" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Manufacturer product information and package inserts" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							"The current dataset is labelled ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: DATASET_LABEL }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 43
							}, this),
							". It is a curated set of commonly used medicines — it does ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "not" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 127,
								columnNumber: 45
							}, this),
							" contain every medicine available in India, and it grows over time through the reviewed admin editor."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface grid gap-3 p-5 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {
						label: "App version",
						value: `v${APP_VERSION}`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {
						label: "Database version",
						value: `v1.0`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 134,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {
						label: "Dataset",
						value: DATASET_LABEL
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 135,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 132,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface space-y-2 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Educational disclaimer"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: DISCLAIMER
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 140,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/medicines",
						children: "Browse medicines"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 145,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 144,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/settings",
						children: "Open settings"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 143,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 59,
		columnNumber: 10
	}, this);
}
function Meta({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-xs font-medium text-muted-foreground",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 163,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "font-display text-base font-semibold",
		children: value
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 164,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 162,
		columnNumber: 10
	}, this);
}
//#endregion
export { AboutPage as component };
