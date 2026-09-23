import { n as __toESM } from "../_runtime.mjs";
import { n as cn, t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { $ as Bell, A as Languages, M as Info, P as GraduationCap, T as LogOut, U as Circle, f as ShieldCheck, n as Volume2, r as User, s as Trash2, x as Palette } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-B4towMDa.mjs";
import { a as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useAuth, d as APP_VERSION, l as APP_NAME, s as usePreferences } from "./router-DbBUrYCp.mjs";
import { t as Label } from "./label-9S9l3qE3.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-separator.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-DgRgh3wx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$3 = "/app/applet/src/components/ui/switch.tsx";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 18,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Switch.displayName = Switch$1.displayName;
var _jsxFileName$2 = "/app/applet/src/components/ui/radio-group.tsx";
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 11,
		columnNumber: 10
	}, void 0);
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-3.5 w-3.5 fill-primary" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 29,
				columnNumber: 9
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 28,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 20,
		columnNumber: 5
	}, void 0);
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var _jsxFileName$1 = "/app/applet/src/components/ui/separator.tsx";
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 10,
	columnNumber: 3
}, void 0));
Separator.displayName = Root.displayName;
var _jsxFileName = "/app/applet/src/routes/settings.tsx?tsr-split=component";
function SettingsPage() {
	const { user } = useAuth();
	const { prefs, setPref } = usePreferences();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		toast.success("You're signed out.");
		navigate({
			to: "/auth",
			replace: true
		});
	}
	async function clearRecent() {
		if (!user) return;
		setBusy(true);
		const { error } = await supabase.from("recently_viewed").delete().eq("user_id", user.id);
		setBusy(false);
		if (error) {
			toast.error("We couldn't clear that right now. Please try again.");
			return;
		}
		qc.invalidateQueries({ queryKey: ["recent"] });
		toast.success("Recently viewed cleared.");
	}
	async function clearLearning() {
		if (!user) return;
		setBusy(true);
		const a = await supabase.from("learning_progress").delete().eq("user_id", user.id);
		const b = await supabase.from("review_schedule").delete().eq("user_id", user.id);
		setBusy(false);
		if (a.error || b.error) {
			toast.error("We couldn't clear your history right now. Please try again.");
			return;
		}
		qc.invalidateQueries({ queryKey: ["progress"] });
		qc.invalidateQueries({ queryKey: ["reviews"] });
		toast.success("Learning history cleared.");
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "animate-fade-up mx-auto max-w-3xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Settings"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					"Make ",
					APP_NAME,
					" work the way you learn. Everything here saves instantly on this device."
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: User,
				title: "Account",
				children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							label: "Email",
							value: user.email ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
							label: "Profile",
							value: user.user_metadata?.["full_name"] ?? "No display name set"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => void signOut(),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 15
							}, this), " Sign out"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 82,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 17
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: "You're browsing as a guest. Sign in to sync favourites, progress and reviews."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/auth",
							children: "Sign in or create an account"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 20
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: Palette,
				title: "Appearance",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Choice, {
					name: "theme",
					value: prefs.theme,
					onChange: (v) => setPref("theme", v),
					options: [
						{
							value: "light",
							label: "Light mode"
						},
						{
							value: "dark",
							label: "Dark mode"
						},
						{
							value: "system",
							label: "System default"
						}
					]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: Languages,
				title: "Language",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mb-2 text-sm text-muted-foreground",
					children: "Sets the default style used by AI Explain and term helpers."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 109,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Choice, {
					name: "language",
					value: prefs.language,
					onChange: (v) => setPref("language", v),
					options: [
						{
							value: "en",
							label: "English"
						},
						{
							value: "hi",
							label: "Hindi"
						},
						{
							value: "hinglish",
							label: "Hinglish"
						}
					]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 108,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: GraduationCap,
				title: "Learning level",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mb-2 text-sm text-muted-foreground",
					children: "We use this to pitch explanations at the right depth."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Choice, {
					name: "level",
					value: prefs.learningLevel,
					onChange: (v) => setPref("learningLevel", v),
					options: [
						{
							value: "beginner",
							label: "Beginner"
						},
						{
							value: "student",
							label: "Student"
						},
						{
							value: "healthcare",
							label: "Healthcare learner"
						},
						{
							value: "professional",
							label: "Professional reference"
						}
					]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 128,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 124,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: Volume2,
				title: "Pronunciation",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Choice, {
					name: "speech",
					value: prefs.speechSpeed,
					onChange: (v) => setPref("speechSpeed", v),
					options: [{
						value: "normal",
						label: "Normal speed"
					}, {
						value: "slow",
						label: "Slow speed"
					}]
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 144,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 143,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: Bell,
				title: "Notifications",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
						id: "learning-reminders",
						label: "Learning reminders",
						hint: "A nudge to study when you haven't opened a medicine in a while.",
						checked: prefs.learningReminders,
						onChange: (v) => setPref("learningReminders", v)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, { className: "my-3" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, {
						id: "review-reminders",
						label: "Review reminders",
						hint: "Highlight flashcards that are due today on your home screen.",
						checked: prefs.reviewReminders,
						onChange: (v) => setPref("reviewReminders", v)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: ShieldCheck,
				title: "Privacy",
				children: [user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						disabled: busy,
						onClick: () => void clearRecent(),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 15
						}, this), " Clear recently viewed"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						disabled: busy,
						onClick: () => void clearLearning(),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 15
						}, this), " Clear learning history"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 17
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: "Nothing personal is stored while you're signed out — only your preferences on this device."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 167,
					columnNumber: 20
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: "Your favourites, history and progress are private to your account. To delete your account entirely, contact support from the email you signed up with."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsCard, {
				icon: Info,
				title: "About",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "outline",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/about",
							children: ["About ", APP_NAME]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 180,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 179,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"v",
							APP_VERSION,
							" • Database v",
							"1.0"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 178,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 70,
		columnNumber: 10
	}, this);
}
function SettingsCard({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "mb-3 flex items-center gap-2 font-display text-base font-semibold",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
					className: "size-4 text-primary",
					"aria-hidden": true
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 9
				}, this),
				" ",
				title
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 199,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 198,
		columnNumber: 10
	}, this);
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-xs font-medium text-muted-foreground",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 213,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm",
		children: value
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 214,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 212,
		columnNumber: 10
	}, this);
}
function Choice({ name, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, {
		value,
		onValueChange: (v) => onChange(v),
		className: "grid gap-2 sm:grid-cols-2",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
			htmlFor: `${name}-${o.value}`,
			className: "flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm transition-colors hover:bg-accent has-[:checked]:border-primary",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroupItem, {
				id: `${name}-${o.value}`,
				value: o.value
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 233,
				columnNumber: 11
			}, this), o.label]
		}, o.value, true, {
			fileName: _jsxFileName,
			lineNumber: 232,
			columnNumber: 25
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 231,
		columnNumber: 10
	}, this);
}
function Toggle({ id, label, hint, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
			htmlFor: id,
			className: "text-sm font-medium",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 253,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-xs text-muted-foreground",
			children: hint
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 256,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 252,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Switch, {
			id,
			checked,
			onCheckedChange: onChange,
			"aria-label": label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 258,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 251,
		columnNumber: 10
	}, this);
}
//#endregion
export { SettingsPage as component };
