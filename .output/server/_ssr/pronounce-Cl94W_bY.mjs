import { t as Button } from "./button-jFwRhC1j.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as Turtle, n as Volume2, v as Rabbit } from "../_libs/lucide-react.mjs";
import { o as storedSpeechRate } from "./router-DbBUrYCp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pronounce-Cl94W_bY.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/pronounce.tsx";
function speak(text, rate) {
	if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
	window.speechSynthesis.cancel();
	const utter = new SpeechSynthesisUtterance(text);
	utter.rate = rate;
	utter.lang = "en-IN";
	window.speechSynthesis.speak(utter);
}
function PronounceButtons({ text, compact = false }) {
	if (compact) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		variant: "ghost",
		size: "icon",
		"aria-label": `Listen to pronunciation of ${text}`,
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
			speak(text, storedSpeechRate(1));
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "size-4" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-wrap gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "secondary",
				size: "sm",
				onClick: () => speak(text, storedSpeechRate(1)),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this), " Listen"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => speak(text, .6),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Turtle, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this), " Slow"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				variant: "outline",
				size: "sm",
				onClick: () => speak(text, 1.15),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Rabbit, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this), " Normal+"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 5
	}, this);
}
//#endregion
export { PronounceButtons as t };
