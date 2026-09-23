import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { D as LoaderCircle, d as Sparkles } from "../_libs/lucide-react.mjs";
import { _ as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as Input } from "./router-DbBUrYCp.mjs";
import { t as Disclaimer } from "./disclaimer-B9cgdbzn.mjs";
import { n as useServerFn } from "./createSsrRpc-JOw5HWmc.mjs";
import { t as STUDY_MODES } from "./ai-study-tXIAnpE8.mjs";
import { n as studyWithAi } from "./ai.functions-C5LKzh8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/study-DSC9PGxf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/study.tsx?tsr-split=component";
function StudyPage() {
	const search = useSearch({ from: "/study" });
	const [topic, setTopic] = (0, import_react.useState)(search.topic ?? "");
	const [mode, setMode] = (0, import_react.useState)("explain");
	const [text, setText] = (0, import_react.useState)("");
	const [grounded, setGrounded] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const run = useServerFn(studyWithAi);
	async function go(m) {
		const t = topic.trim();
		if (t.length < 2) return;
		setMode(m);
		setLoading(true);
		setText("");
		setGrounded(null);
		try {
			const res = await run({ data: {
				topic: t,
				mode: m,
				extraContext: ""
			} });
			setText(res.text);
			setGrounded("grounded" in res ? Boolean(res.grounded) : null);
		} catch {
			setText("The study assistant could not be reached. Please try again in a moment.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "animate-fade-up space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "secondary",
					className: "mb-2",
					children: "AI Study Mode"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Study with AI"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: "Pick a medicine, drug class or pharmacology topic. The assistant first looks up the MediVault record, then teaches from it."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface space-y-4 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						go(mode);
					},
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						value: topic,
						onChange: (e) => setTopic(e.target.value),
						placeholder: "e.g. Beta blockers, Paracetamol, ADME of metformin",
						"aria-label": "Study topic"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						type: "submit",
						disabled: loading || topic.trim().length < 2,
						className: "press-feedback",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 13
						}, this), " Start"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: STUDY_MODES.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: mode === m.key ? "default" : "outline",
						disabled: loading || topic.trim().length < 2,
						onClick: () => void go(m.key),
						title: m.hint,
						className: "press-feedback",
						children: m.label
					}, m.key, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 33
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface min-h-40 p-4 text-sm leading-relaxed whitespace-pre-wrap",
				children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "flex items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 13
					}, this), " Preparing your study material…"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 20
				}, this) : text ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [grounded === false && /* @__PURE__ */ (void 0)("p", {
					className: "mb-3 rounded-md bg-muted p-2 text-xs text-muted-foreground",
					children: "No matching record was found in the MediVault database, so this is general textbook teaching — treat it as unverified."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 36
				}, this), text] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 28
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-muted-foreground",
					children: "Enter a topic above and choose a study mode — Explain, Quiz Me, Flashcard Me, Give Mnemonic, Simplify, Compare or Revise."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 17
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 77,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, { compact: true }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 10
	}, this);
}
//#endregion
export { StudyPage as component };
