import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { D as LoaderCircle, O as Lightbulb } from "../_libs/lucide-react.mjs";
import { B as DialogTrigger, F as Dialog, I as DialogContent, L as DialogDescription, R as DialogHeader, z as DialogTitle } from "./router-DbBUrYCp.mjs";
import { n as useServerFn } from "./createSsrRpc-JOw5HWmc.mjs";
import { t as explainTopic } from "./ai.functions-C5LKzh8u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explain-button-CFRo5O2p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/explain-button.tsx";
var MODES = [
	{
		key: "simple",
		label: "Explain Simply"
	},
	{
		key: "hindi",
		label: "Explain in Hindi"
	},
	{
		key: "hinglish",
		label: "Explain in Hinglish"
	},
	{
		key: "student",
		label: "Explain for Student"
	},
	{
		key: "detailed",
		label: "Explain in Detail"
	}
];
function ExplainButton({ topic, context, size = "sm", variant = "secondary", label = "Explain" }) {
	const explain = useServerFn(explainTopic);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mode, setMode] = (0, import_react.useState)("simple");
	const [text, setText] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function run(m) {
		setMode(m);
		setLoading(true);
		setText("");
		try {
			const res = await explain({ data: {
				topic,
				context: context ?? "",
				mode: m
			} });
			setText(res.text);
		} catch {
			setText("The explanation assistant could not be reached. Please try again.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange: (o) => {
			setOpen(o);
			if (o && !text && !loading) run("simple");
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant,
				size,
				"aria-label": `Explain ${topic}`,
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lightbulb, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 11
				}, this), size !== "icon" && label]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 66,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "max-h-[85vh] overflow-y-auto sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
					className: "uppercase tracking-wide",
					children: topic
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { children: "Explanations are generated from the reference record in this app. Always verify against the medicine record and a qualified professional." }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: mode === m.key ? "default" : "outline",
						onClick: () => void run(m.key),
						disabled: loading,
						children: m.label
					}, m.key, false, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-h-24 rounded-lg bg-muted p-4 text-sm leading-relaxed whitespace-pre-wrap",
					children: loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "flex items-center gap-2 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 15
						}, this), " Preparing explanation…"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 13
					}, this) : text || "Choose an explanation style above."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 95,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 72,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 59,
		columnNumber: 5
	}, this);
}
//#endregion
export { ExplainButton as t };
