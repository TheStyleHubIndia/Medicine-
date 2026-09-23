import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { D as LoaderCircle, j as KeyRound } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-B4towMDa.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as friendlyAuthError, t as PasswordField } from "./password-field-Bfc5wI1w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-CqSW1CHE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/reset-password.tsx?tsr-split=component";
function ResetPasswordPage() {
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	async function submit(e) {
		e.preventDefault();
		if (password !== confirm) {
			toast.error("Those two passwords don't match. Please re-enter them.");
			return;
		}
		setBusy(true);
		const { error } = await supabase.auth.updateUser({ password });
		setBusy(false);
		if (error) {
			toast.error(friendlyAuthError(error));
			return;
		}
		toast.success("Password updated. You're all set.");
		navigate({
			to: "/",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "animate-fade-up mx-auto max-w-sm space-y-5 py-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "mx-auto mb-3 grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyRound, {
						className: "size-5",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Set a new password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Open this page from the reset link in your email, then choose a new password."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit: submit,
			className: "surface space-y-3 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordField, {
					id: "new-password",
					label: "New password",
					value: password,
					onChange: setPassword,
					autoComplete: "new-password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordField, {
					id: "confirm-password",
					label: "Confirm new password",
					value: confirm,
					onChange: setConfirm,
					autoComplete: "new-password"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					type: "submit",
					className: "press-feedback w-full",
					disabled: busy,
					children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
						className: "size-4 animate-spin",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 19
					}, this) : null, "Update password"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
//#endregion
export { ResetPasswordPage as component };
