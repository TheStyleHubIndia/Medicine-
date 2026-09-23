import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { B as Dna, F as FlaskConical, H as ClipboardCheck, Q as BookOpen, V as Clock, X as CalendarCheck, Z as Brain, b as Pill, h as Search, k as Layers, n as Volume2, u as Star } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as DATASET_LABEL, k as medicinesQuery, m as GlobalSearch, v as drugClassesQuery } from "./router-DbBUrYCp.mjs";
import { t as Disclaimer } from "./disclaimer-B9cgdbzn.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { a as useReviewSchedule, r as useRecentlyViewed, t as useFavorites } from "./use-user-data-DeJGuI7f.mjs";
import { t as MedicineCard } from "./medicine-card-aHIGSGsv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C9YZa2c8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
var QUICK = [
	{
		to: "/medicines",
		label: "Medicines",
		icon: Pill
	},
	{
		to: "/classes",
		label: "Drug Classes",
		icon: Dna
	},
	{
		to: "/terms",
		label: "Dictionary",
		icon: BookOpen
	},
	{
		to: "/memory",
		label: "Drug Memory",
		icon: Brain
	},
	{
		to: "/flashcards",
		label: "Flashcards",
		icon: Layers
	},
	{
		to: "/quiz",
		label: "Quiz",
		icon: ClipboardCheck
	},
	{
		to: "/pronunciation",
		label: "Pronunciation",
		icon: Volume2
	},
	{
		to: "/adme",
		label: "ADME",
		icon: FlaskConical
	}
];
function Home() {
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const medicines = useQuery(medicinesQuery());
	const classes = useQuery(drugClassesQuery());
	const recent = useRecentlyViewed();
	const { favorites } = useFavorites();
	const { dueToday } = useReviewSchedule();
	const common = (medicines.data ?? []).slice(0, 6);
	const popularClasses = (classes.data ?? []).filter((c) => c.class_type === "pharmacological").slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "hero-gradient -mx-4 rounded-b-3xl px-4 pt-8 pb-10 sm:-mx-6 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
						variant: "secondary",
						className: "mb-3",
						children: DATASET_LABEL
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-3xl font-bold sm:text-4xl",
						children: ["MediVault ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "India"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-muted-foreground sm:text-base",
						children: "Medicine & Pharmacology Reference"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setSearchOpen(true),
						className: "mt-5 flex w-full max-w-2xl items-center gap-3 rounded-2xl border bg-card px-4 py-4 text-left shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-float)]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-5 text-primary" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "truncate text-sm text-muted-foreground",
							children: "Search medicine, generic, brand, salt or medical term..."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 grid grid-cols-4 gap-2 sm:grid-cols-8",
						children: QUICK.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to,
							className: "surface flex flex-col items-center gap-1.5 p-3 text-center transition-shadow hover:shadow-[var(--shadow-float)]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
								className: "size-5 text-primary",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] leading-tight font-medium",
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 86,
								columnNumber: 15
							}, this)]
						}, to, true, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 61,
				columnNumber: 7
			}, this),
			(dueToday.length > 0 || favorites.length > 0 || (recent.data?.length ?? 0) > 0) && /* @__PURE__ */ (void 0)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (void 0)(StatTile, {
						icon: CalendarCheck,
						label: "Review today",
						value: dueToday.length,
						to: "/flashcards"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(StatTile, {
						icon: Star,
						label: "Favourites",
						value: favorites.length,
						to: "/favorites"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(StatTile, {
						icon: Clock,
						label: "Recently viewed",
						value: recent.data?.length ?? 0,
						to: "/learning"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 91
			}, this),
			(recent.data?.length ?? 0) > 0 && /* @__PURE__ */ (void 0)("section", { children: [/* @__PURE__ */ (void 0)(SectionHeader, { title: "Recently Viewed" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap gap-2",
				children: (recent.data ?? []).map((r) => /* @__PURE__ */ (void 0)(Button, {
					asChild: true,
					variant: "outline",
					size: "sm",
					children: /* @__PURE__ */ (void 0)(Link, {
						to: r.item_type === "medicine" ? "/medicines/$slug" : "/classes/$slug",
						params: { slug: r.item_id },
						children: r.label ?? r.item_id
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 17
					}, this)
				}, r.id, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 43
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 42
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				title: "Common Drugs",
				action: {
					to: "/medicines",
					label: "See all"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 9
			}, this), medicines.isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: [
					0,
					1,
					2,
					3,
					4,
					5
				].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-44 rounded-xl" }, i, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 42
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 32
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: common.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicineCard, { m }, m.id, false, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 30
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 20
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				title: "Popular Classes",
				action: {
					to: "/classes",
					label: "All classes"
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 123,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: popularClasses.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					variant: "secondary",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/classes/$slug",
						params: { slug: c.slug },
						children: c.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 15
					}, this)
				}, c.id, false, {
					fileName: _jsxFileName,
					lineNumber: 128,
					columnNumber: 36
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, { title: "Recommended Learning" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LearnTile, {
						to: "/adme",
						title: "ADME step by step",
						body: "Absorption → Distribution → Metabolism → Excretion, with simple and student explanations."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 141,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LearnTile, {
						to: "/memory",
						title: "Drug name patterns",
						body: "-pril, -sartan, -statin, -prazole and more, with the exceptions clearly flagged."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 142,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LearnTile, {
						to: "/quiz",
						title: "Take a 10-question quiz",
						body: "Test drug classes, mechanisms, ADME and medical terminology."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 143,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 140,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 147,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlobalSearch, {
				open: searchOpen,
				onOpenChange: setSearchOpen
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 60,
		columnNumber: 10
	}, this);
}
function SectionHeader({ title, action }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mb-3 flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "font-display text-lg font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 162,
			columnNumber: 7
		}, this), action && /* @__PURE__ */ (void 0)(Button, {
			asChild: true,
			variant: "ghost",
			size: "sm",
			children: /* @__PURE__ */ (void 0)(Link, {
				to: action.to,
				children: action.label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 164,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 163,
			columnNumber: 18
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 161,
		columnNumber: 10
	}, this);
}
function StatTile({ icon: Icon, label, value, to }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to,
		className: "surface flex items-center gap-3 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
			className: "size-5 text-primary",
			"aria-hidden": true
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 180,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "font-display text-xl font-semibold",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 182,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 183,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 181,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 179,
		columnNumber: 10
	}, this);
}
function LearnTile({ to, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to,
		className: "surface block p-4 transition-shadow hover:shadow-[var(--shadow-float)]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
			className: "font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 197,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: body
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 198,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 196,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
