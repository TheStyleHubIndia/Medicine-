import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as drugClassesQuery } from "./router-DbBUrYCp.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { t as ExplainButton } from "./explain-button-CFRo5O2p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classes.index-CJvhnXcU.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/classes.index.tsx?tsr-split=component";
function ClassesPage() {
	const { data, isLoading } = useQuery(drugClassesQuery());
	const therapeutic = (data ?? []).filter((c) => c.class_type === "therapeutic");
	const pharmacological = (data ?? []).filter((c) => c.class_type !== "therapeutic");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Classification"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Classification means grouping medicines according to their therapeutic use, pharmacological action, mechanism, chemical structure or other standardised criteria."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, { topic: "Drug classification" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this), isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-64 rounded-xl" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 20
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "space-y-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
				title: "Therapeutic Classes",
				items: therapeutic
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Group, {
				title: "Pharmacological Classes",
				items: pharmacological
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 63
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
function Group({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
		className: "mb-3 font-display text-lg font-semibold",
		children: title
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
		children: items.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/classes/$slug",
			params: { slug: c.slug },
			className: "surface block p-4 transition-shadow hover:shadow-[var(--shadow-float)]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "font-semibold",
					children: c.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 15
				}, this), c.key_suffix && /* @__PURE__ */ (void 0)(Badge, {
					variant: "outline",
					children: c.key_suffix
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 32
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
				children: c.simple_explanation
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 13
			}, this)]
		}, c.id, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 25
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 10
	}, this);
}
//#endregion
export { ClassesPage as component };
