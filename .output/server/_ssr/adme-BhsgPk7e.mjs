import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { nt as ArrowDown } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { D as medicineQuery, k as medicinesQuery } from "./router-DbBUrYCp.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { t as ExplainButton } from "./explain-button-CFRo5O2p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/adme-BhsgPk7e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/adme.tsx?tsr-split=component";
var STEPS = [
	{
		step: "A",
		title: "Absorption",
		simple: "How the medicine gets into the blood.",
		student: "Movement of drug from the site of administration into systemic circulation; bioavailability is the key measure."
	},
	{
		step: "D",
		title: "Distribution",
		simple: "Where the medicine travels in the body.",
		student: "Reversible transfer of drug between blood and tissues; described by volume of distribution and protein binding."
	},
	{
		step: "M",
		title: "Metabolism",
		simple: "How the body changes the medicine.",
		student: "Biotransformation, mainly hepatic (phase I oxidation via CYP enzymes, phase II conjugation)."
	},
	{
		step: "E",
		title: "Excretion",
		simple: "How the medicine leaves the body.",
		student: "Removal of drug and metabolites, mainly renal and biliary; described by clearance and half-life."
	}
];
function AdmePage() {
	const meds = useQuery(medicinesQuery());
	const [slug, setSlug] = (0, import_react.useState)("paracetamol");
	const { data: m, isLoading } = useQuery(medicineQuery(slug));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-bold",
					children: "ADME"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: "Pharmacokinetics is what the body does to the drug. Pharmacodynamics is what the drug does to the body."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, { topic: "ADME" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, {
						topic: "Pharmacodynamics",
						label: "Pharmacodynamics"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-xl space-y-2",
				children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-7 place-items-center rounded-md bg-primary text-sm font-bold text-primary-foreground",
								children: s.step
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-display font-semibold",
								children: s.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-sm",
							children: s.simple
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: s.student
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 13
				}, this), i < STEPS.length - 1 && /* @__PURE__ */ (void 0)("div", {
					className: "flex justify-center py-1 text-muted-foreground",
					children: /* @__PURE__ */ (void 0)(ArrowDown, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 38
				}, this)] }, s.step, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 30
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mb-3 font-display text-lg font-semibold",
					children: "ADME for a medicine"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-3 flex flex-wrap gap-2",
					children: (meds.data ?? []).slice(0, 12).map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: slug === x.slug ? "default" : "outline",
						onClick: () => setSlug(x.slug),
						children: x.display_name
					}, x.id, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 52
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 9
				}, this),
				isLoading || !m ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-48 rounded-xl" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 28
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						["Absorption", m.absorption],
						["Distribution", m.distribution],
						["Metabolism", m.metabolism],
						["Excretion", m.excretion],
						["Half-life", m.half_life],
						["Bioavailability", m.bioavailability],
						["Protein binding", m.protein_binding],
						["Clearance", m.clearance]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-medium text-muted-foreground",
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm",
							children: value || "Not recorded."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 17
						}, this)]
					}, label, true, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 297
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 71
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdmePage as component };
