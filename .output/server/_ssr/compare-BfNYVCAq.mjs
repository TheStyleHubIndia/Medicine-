import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { D as medicineQuery, a as Route$25, k as medicinesQuery } from "./router-DbBUrYCp.mjs";
import { t as Disclaimer } from "./disclaimer-B9cgdbzn.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-BfNYVCAq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/compare.tsx?tsr-split=component";
var ROWS = [
	["Generic", "generic_name"],
	["Salt", "salt"],
	["Category", "category"],
	["Mechanism", "mechanism_of_action"],
	["Absorption", "absorption"],
	["Metabolism", "metabolism"],
	["Excretion", "excretion"],
	["Half-life", "half_life"],
	["Bioavailability", "bioavailability"],
	["Pregnancy", "pregnancy"],
	["Renal", "renal"],
	["Hepatic", "hepatic"]
];
function useMedicine(slug) {
	return useQuery(medicineQuery(slug)).data;
}
function ComparePage() {
	const { a } = Route$25.useSearch();
	const meds = useQuery(medicinesQuery());
	const [left, setLeft] = (0, import_react.useState)(a ?? "paracetamol");
	const [right, setRight] = (0, import_react.useState)("ibuprofen");
	const l = useMedicine(left);
	const r = useMedicine(right);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Compare Medicines"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "Educational comparison only. This does not recommend which medicine any individual should take."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [{
					value: left,
					set: setLeft,
					label: "Medicine A"
				}, {
					value: right,
					set: setRight,
					label: "Medicine B"
				}].map((col) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mb-2 text-xs font-medium text-muted-foreground",
					children: col.label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex max-h-32 flex-wrap gap-1.5 overflow-y-auto",
					children: (meds.data ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: col.value === m.slug ? "default" : "outline",
						onClick: () => col.set(m.slug),
						children: m.display_name
					}, m.id, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 43
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 13
				}, this)] }, col.label, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 21
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			!l || !r ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-64 rounded-xl" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 19
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
						className: "border-b",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "p-3 text-left font-medium",
								children: "Field"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "p-3 text-left font-semibold",
								children: l.display_name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "p-3 text-left font-semibold",
								children: r.display_name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [ROWS.map(([label, key]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
						className: "border-b align-top last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "p-3 text-xs font-medium text-muted-foreground",
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "p-3",
								children: (l[key] ?? "") || "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "p-3",
								children: (r[key] ?? "") || "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 19
							}, this)
						]
					}, label, true, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 43
					}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
						className: "align-top",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "p-3 text-xs font-medium text-muted-foreground",
								children: "Common adverse effects"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "p-3",
								children: (l.common_adverse_effects ?? []).join(", ") || "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "p-3",
								children: (r.common_adverse_effects ?? []).join(", ") || "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 62
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 10
	}, this);
}
//#endregion
export { ComparePage as component };
