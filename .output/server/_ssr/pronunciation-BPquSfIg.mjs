import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { P as Input, k as medicinesQuery } from "./router-DbBUrYCp.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { t as PronounceButtons } from "./pronounce-Cl94W_bY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pronunciation-BPquSfIg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/pronunciation.tsx?tsr-split=component";
function PronunciationPage() {
	const { data, isLoading } = useQuery(medicinesQuery());
	const [q, setQ] = (0, import_react.useState)("");
	const list = (data ?? []).filter((m) => m.display_name.toLowerCase().includes(q.toLowerCase().trim()));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Pronunciation"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "English, easy phonetic and Hindi-friendly forms. Audio uses your device's speech engine."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Find a medicine…",
				"aria-label": "Find a medicine"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-64 rounded-xl" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 20
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: list.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
					className: "surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "font-display font-semibold uppercase",
							children: m.generic_name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 24,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-1 text-sm text-primary",
							children: m.pronunciation_en
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronounceButtons, { text: m.generic_name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 15
						}, this)
					]
				}, m.id, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 26
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 63
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { PronunciationPage as component };
