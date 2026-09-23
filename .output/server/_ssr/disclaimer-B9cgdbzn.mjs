import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { p as ShieldAlert } from "../_libs/lucide-react.mjs";
import { p as DISCLAIMER } from "./router-DbBUrYCp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/disclaimer-B9cgdbzn.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/disclaimer.tsx";
function Disclaimer({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		role: "note",
		className: `flex gap-3 rounded-xl border border-warning/40 bg-warning/10 text-warning-foreground ${compact ? "p-3 text-xs" : "p-4 text-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldAlert, {
			className: "size-5 shrink-0",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "leading-relaxed",
			children: DISCLAIMER
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
//#endregion
export { Disclaimer as t };
