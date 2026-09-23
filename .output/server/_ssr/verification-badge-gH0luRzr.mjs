import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verification-badge-gH0luRzr.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/verification-badge.tsx";
var LABELS = {
	verified: "Verified",
	under_review: "Not yet verified",
	draft: "Draft",
	needs_update: "Needs update",
	archived: "Archived"
};
/**
* Verification is factual only: anything that is not fully sourced reads as
* "Not yet verified". It never implies a brand or company is better or safer.
*/
function VerificationBadge({ status, className }) {
	const s = status ?? "under_review";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
		variant: s === "verified" ? "default" : "outline",
		className,
		children: LABELS[s] ?? "Not yet verified"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 5
	}, this);
}
//#endregion
export { VerificationBadge as t };
