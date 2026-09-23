import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { N as termsQuery, P as Input } from "./router-DbBUrYCp.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { t as ExplainButton } from "./explain-button-CFRo5O2p.mjs";
import { t as PronounceButtons } from "./pronounce-Cl94W_bY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-DVTw89aq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/terms.tsx?tsr-split=component";
function TermsPage() {
	const { data, isLoading } = useQuery(termsQuery());
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = (data ?? []).filter((t) => t.term.toLowerCase().includes(q.toLowerCase().trim()));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Medical Terms"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: [data?.length ?? 0, " terms in the dictionary."]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search a term…",
				"aria-label": "Search terms"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-64 rounded-xl" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 20
			}, this) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "surface p-6 text-center text-sm text-muted-foreground",
				children: "No term matches."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 87
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: filtered.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "font-semibold",
								children: t.term
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-primary",
								children: t.pronunciation_en
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-1",
								children: [t.category && /* @__PURE__ */ (void 0)(Badge, {
									variant: "outline",
									children: t.category
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 31,
									columnNumber: 34
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronounceButtons, {
									text: t.term,
									compact: true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-sm",
							children: t.definition
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: t.hindi_explanation
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: t.hinglish_explanation
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, {
								topic: t.term,
								context: t.definition ?? ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 15
						}, this)
					]
				}, t.id, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 30
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 179
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { TermsPage as component };
