import { t as Button } from "./button-jFwRhC1j.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as mnemonicsQuery, M as suffixesQuery, k as medicinesQuery } from "./router-DbBUrYCp.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/memory-CBN3bAm9.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/memory.tsx?tsr-split=component";
function MemoryPage() {
	const suffixes = useQuery(suffixesQuery());
	const mnemonics = useQuery(mnemonicsQuery());
	const tricks = (useQuery(medicinesQuery()).data ?? []).filter((m) => m.key_suffix);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Drug Memory"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Learning aids for pharmacology. Mnemonics are learning aids — always verify the actual classification in the medicine record."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mb-3 font-display text-lg font-semibold",
					children: "Drug Name Patterns"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				suffixes.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-48 rounded-xl" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 31
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
					children: (suffixes.data ?? []).map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "font-display text-lg font-semibold text-primary",
									children: s.suffix
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 26,
									columnNumber: 19
								}, this), s.class_hint && /* @__PURE__ */ (void 0)(Badge, {
									variant: "secondary",
									children: s.class_hint
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 36
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 25,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-sm",
								children: s.meaning
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: (s.examples ?? []).join(" • ")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-[11px] text-muted-foreground",
								children: s.note
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 17
							}, this)
						]
					}, s.id, true, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 45
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 74
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 rounded-lg bg-warning/10 p-3 text-xs text-warning-foreground",
					children: "Drug-name suffixes are memory aids, not absolute classification rules. Exceptions exist."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Mnemonics"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: (mnemonics.data ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-semibold",
							children: m.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm",
							children: m.content
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: m.explanation
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 15
						}, this)
					]
				}, m.id, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 44
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Per-medicine memory tricks"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: tricks.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					size: "sm",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/medicines/$slug",
						params: { slug: m.slug },
						children: [
							m.display_name,
							" · ",
							m.key_suffix
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 15
					}, this)
				}, m.id, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 28
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { MemoryPage as component };
