import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as Input, f as DATASET_LABEL, k as medicinesQuery } from "./router-DbBUrYCp.mjs";
import { t as Disclaimer } from "./disclaimer-B9cgdbzn.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { t as MedicineCard } from "./medicine-card-aHIGSGsv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/medicines.index-DfYdyhQ2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/medicines.index.tsx?tsr-split=component";
function MedicinesPage() {
	const { data, isLoading, isError } = useQuery(medicinesQuery());
	const [term, setTerm] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)(null);
	const categories = (0, import_react.useMemo)(() => [...new Set((data ?? []).map((m) => m.category).filter(Boolean))], [data]);
	const filtered = (data ?? []).filter((m) => {
		const t = term.toLowerCase().trim();
		return (!t || m.display_name.toLowerCase().includes(t) || m.generic_name.toLowerCase().includes(t) || (m.salt ?? "").toLowerCase().includes(t)) && (!category || m.category === category);
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "secondary",
					className: "mb-2",
					children: DATASET_LABEL
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Medicines"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						data?.length ?? 0,
						" records ·",
						" ",
						(data ?? []).filter((m) => m.verification_status === "verified").length,
						" verified ·",
						" ",
						(data ?? []).filter((m) => m.verification_status !== "verified").length,
						" under review. This is not a list of all medicines available in India."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				value: term,
				onChange: (e) => setTerm(e.target.value),
				placeholder: "Filter by generic name or salt…",
				"aria-label": "Filter medicines"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "sm",
					variant: category === null ? "default" : "outline",
					onClick: () => setCategory(null),
					children: "All"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this), categories.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "sm",
					variant: category === c ? "default" : "outline",
					onClick: () => setCategory(c),
					children: c
				}, c, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 30
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			isError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "surface p-6 text-sm",
				children: "The medicine database could not be reached. Please check your connection and refresh."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 18
			}, this) : isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: [
					0,
					1,
					2,
					3,
					4,
					5
				].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-44 rounded-xl" }, i, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 40
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 53,
				columnNumber: 28
			}, this) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "surface p-6 text-center text-sm text-muted-foreground",
				children: "No medicine matches that filter in the starter database."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 42
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: filtered.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicineCard, { m }, m.id, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 30
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 16
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, { compact: true }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 10
	}, this);
}
//#endregion
export { MedicinesPage as component };
