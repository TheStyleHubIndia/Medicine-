import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { D as LoaderCircle, l as Stethoscope, w as Mail } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-B4towMDa.mjs";
import { _ as useSearch, g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { P as Input, c as useAuth } from "./router-DbBUrYCp.mjs";
import { t as Label } from "./label-9S9l3qE3.mjs";
import { n as friendlyAuthError, t as PasswordField } from "./password-field-Bfc5wI1w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BYXFck5K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/google-button.tsx";
function GoogleMark() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 24 24",
		className: "size-4",
		"aria-hidden": true,
		focusable: "false",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#4285F4",
				d: "M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.8Z"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#34A853",
				d: "M12 24c3.24 0 5.96-1.08 7.94-2.93l-3.88-3c-1.08.72-2.46 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.28v3.1A12 12 0 0 0 12 24Z"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#FBBC05",
				d: "M5.29 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.28a12 12 0 0 0 0 10.74l4.01-3.1Z"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				fill: "#EA4335",
				d: "M12 4.75c1.76 0 3.34.61 4.59 1.8l3.43-3.43C17.95 1.18 15.23 0 12 0A12 12 0 0 0 1.28 6.63l4.01 3.1C6.23 6.86 8.88 4.75 12 4.75Z"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
/**
* Official Supabase OAuth flow. Requires the Google provider to be enabled
* in the backend auth settings; otherwise a friendly message is shown.
*/
function GoogleButton({ label = "Continue with Google" }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function signIn() {
		setBusy(true);
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: {
					redirectTo: window.location.origin,
					queryParams: {
						access_type: "offline",
						prompt: "consent"
					}
				}
			});
			if (error) {
				setBusy(false);
				toast.error(friendlyAuthError(error));
			}
		} catch {
			setBusy(false);
			toast.error("We couldn't connect right now. Please try again.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		type: "button",
		variant: "outline",
		className: "press-feedback w-full",
		disabled: busy,
		onClick: () => void signIn(),
		children: [busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, {
			className: "size-4 animate-spin",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 66,
			columnNumber: 15
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleMark, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 66,
			columnNumber: 73
		}, this), label]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 59,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
function AuthPage() {
	const search = useSearch({ from: "/auth" });
	const [mode, setMode] = (0, import_react.useState)(search.mode === "signup" ? "signup" : "signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const { user } = useAuth();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (user) navigate({
			to: "/",
			replace: true
		});
	}, [user, navigate]);
	async function submit(e) {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Please enter a valid email address.");
			return;
		}
		setBusy(true);
		try {
			const { error } = mode === "signin" ? await supabase.auth.signInWithPassword({
				email,
				password
			}) : await supabase.auth.signUp({
				email,
				password,
				options: { emailRedirectTo: window.location.origin }
			});
			if (error) toast.error(friendlyAuthError(error));
			else if (mode === "signup") {
				setSent(true);
				toast.success("Almost there — check your inbox to confirm your email.");
			}
		} catch {
			toast.error("We couldn't connect right now. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	async function forgotPassword() {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Enter your email above first, then tap “Forgot password?”.");
			return;
		}
		setBusy(true);
		const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
		setBusy(false);
		if (error) toast.error(friendlyAuthError(error));
		else toast.success("Password reset link sent. Please check your email.");
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "animate-fade-up mx-auto max-w-sm space-y-5 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mx-auto mb-3 grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stethoscope, {
							className: "size-5",
							"aria-hidden": true
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-2xl font-bold",
						children: ["MediVault ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "India"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Learn medicines. Understand pharmacology."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface space-y-4 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleButton, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs text-muted-foreground",
								children: "or"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px flex-1 bg-border" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
						onSubmit: submit,
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
									htmlFor: "email",
									children: "Email"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									id: "email",
									type: "email",
									autoComplete: "email",
									placeholder: "you@example.com",
									value: email,
									required: true,
									onChange: (e) => setEmail(e.target.value)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 104,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordField, {
								id: "password",
								label: "Password",
								value: password,
								onChange: setPassword,
								autoComplete: mode === "signin" ? "current-password" : "new-password",
								minLength: 6
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								type: "submit",
								className: "press-feedback w-full",
								disabled: busy,
								children: busy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "size-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 17
								}, this), " Just a moment…"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 21
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 113,
									columnNumber: 17
								}, this), mode === "signin" ? "Continue with email" : "Create account"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 112,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 9
					}, this),
					sent && /* @__PURE__ */ (void 0)("p", {
						className: "rounded-lg bg-muted p-3 text-xs text-muted-foreground",
						children: "We've emailed you a confirmation link. Once you confirm, come back here and sign in."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 18
					}, this),
					mode === "signin" && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => void forgotPassword(),
						className: "w-full text-center text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground",
						children: "Forgot password?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 31
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: "w-full text-center text-sm text-primary underline underline-offset-2",
				onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
				children: mode === "signin" ? "New here? Create an account" : "Already have an account? Sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 128,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-center text-xs text-muted-foreground",
				children: "Educational reference only — never a replacement for your doctor or pharmacist."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 132,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 79,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
