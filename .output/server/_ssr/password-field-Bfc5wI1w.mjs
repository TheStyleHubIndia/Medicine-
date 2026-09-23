import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { R as Eye, z as EyeOff } from "../_libs/lucide-react.mjs";
import { P as Input } from "./router-DbBUrYCp.mjs";
import { t as Label } from "./label-9S9l3qE3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/password-field-Bfc5wI1w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
/** Translate auth errors into friendly copy. Raw provider errors are never shown. */
function friendlyAuthError(error) {
	const raw = (error?.message ?? "").toLowerCase();
	if (raw.includes("invalid login credentials") || raw.includes("invalid password")) return "That email and password don't match. Please try again.";
	if (raw.includes("email not confirmed")) return "Please confirm your email first — check your inbox for the link.";
	if (raw.includes("user already registered") || raw.includes("already been registered")) return "An account with this email already exists. Try signing in instead.";
	if (raw.includes("invalid email") || raw.includes("email address")) return "Please enter a valid email address.";
	if (raw.includes("password should be") || raw.includes("password is too short")) return "Please choose a password with at least 6 characters.";
	if (raw.includes("weak password") || raw.includes("pwned")) return "That password is too easy to guess. Please choose a stronger one.";
	if (raw.includes("rate limit") || error?.status === 429) return "Too many attempts just now. Please wait a minute and try again.";
	if (raw.includes("unsupported provider") || raw.includes("provider is not enabled")) return "Google sign-in isn't enabled for this app yet. Please use email for now.";
	if (raw.includes("popup") || raw.includes("cancel") || raw.includes("access_denied")) return "Google sign-in was cancelled.";
	if (raw.includes("failed to fetch") || raw.includes("network")) return "We couldn't connect right now. Please try again.";
	return "Something went wrong. Please try again.";
}
var _jsxFileName = "/app/applet/src/components/password-field.tsx";
/** Password input with an accessible show/hide toggle. Masked by default. */
function PasswordField({ id, label, value, onChange, autoComplete = "current-password", minLength = 6, placeholder = "••••••••" }) {
	const [visible, setVisible] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
			htmlFor: id,
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				id,
				type: visible ? "text" : "password",
				value,
				required: true,
				minLength,
				autoComplete,
				placeholder,
				onChange: (e) => onChange(e.target.value),
				className: "pr-11"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: () => setVisible((v) => !v),
				"aria-label": visible ? "Hide password" : "Show password",
				"aria-pressed": visible,
				className: "absolute inset-y-0 right-0 grid w-11 place-items-center rounded-r-md text-muted-foreground transition-colors hover:text-foreground",
				children: visible ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, {
					className: "size-4",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 13
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, {
					className: "size-4",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
//#endregion
export { friendlyAuthError as n, PasswordField as t };
