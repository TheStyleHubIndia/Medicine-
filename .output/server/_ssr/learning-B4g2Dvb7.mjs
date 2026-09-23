import { t as Button } from "./button-jFwRhC1j.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useAuth } from "./router-DbBUrYCp.mjs";
import { a as useReviewSchedule, n as useLearningProgress, r as useRecentlyViewed, t as useFavorites } from "./use-user-data-DeJGuI7f.mjs";
import { t as Progress } from "./progress-wTpBupxw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learning-B4g2Dvb7.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/learning.tsx?tsr-split=component";
function LearningPage() {
	const { user } = useAuth();
	const { data: progress } = useLearningProgress();
	const recent = useRecentlyViewed();
	const { schedule, dueToday } = useReviewSchedule();
	const { favorites } = useFavorites();
	if (!user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface mx-auto max-w-md p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-xl font-semibold",
			children: "Sign in to track learning"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			asChild: true,
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/auth",
				children: "Sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 21
	}, this);
	const quizzes = (progress ?? []).filter((p) => p.activity_type === "quiz");
	const cards = (progress ?? []).filter((p) => p.activity_type === "flashcard");
	const avg = quizzes.length > 0 ? Math.round(quizzes.reduce((s, q) => s + (q.score ?? 0) / Math.max(q.total ?? 1, 1), 0) / quizzes.length * 100) : 0;
	const medicinesSeen = new Set((recent.data ?? []).filter((r) => r.item_type === "medicine").map((r) => r.item_id)).size;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "My Learning"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Medicines visited",
						value: medicinesSeen
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Flashcards studied",
						value: cards.length
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Quizzes taken",
						value: quizzes.length
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stat, {
						label: "Review today",
						value: dueToday.length
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm font-medium",
						children: "Average quiz score"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, {
						value: avg,
						className: "mt-2"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [avg, "%"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display font-semibold",
					children: "Recent activity"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "mt-2 space-y-1 text-sm text-muted-foreground",
					children: [(progress ?? []).slice(0, 10).map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
						p.activity_type,
						" · ",
						p.topic ?? "general",
						p.total ? ` · ${p.score}/${p.total}` : "",
						" ·",
						" ",
						new Date(p.completed_at).toLocaleDateString()
					] }, p.id, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 51
					}, this)), (progress ?? []).length === 0 && /* @__PURE__ */ (void 0)("li", { children: "No activity yet — try a quiz or flashcards." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 45
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display font-semibold",
						children: "Saved & scheduled"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							favorites.length,
							" favourites • ",
							schedule.length,
							" cards in the review schedule"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/flashcards",
								children: "Review now"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/favorites",
								children: "Favourites"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "font-display text-2xl font-bold text-primary",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 83,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 10
	}, this);
}
//#endregion
export { LearningPage as component };
