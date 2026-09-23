import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { J as Check, _ as RotateCcw, t as X } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { y as flashcardsQuery } from "./router-DbBUrYCp.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { a as useReviewSchedule, i as useRecordProgress } from "./use-user-data-DeJGuI7f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flashcards-B279l9T7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/flashcards.tsx?tsr-split=component";
function FlashcardsPage() {
	const { data, isLoading } = useQuery(flashcardsQuery());
	const { record, dueToday } = useReviewSchedule();
	const progress = useRecordProgress();
	const [i, setI] = (0, import_react.useState)(0);
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-72 rounded-xl" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 25
	}, this);
	const cards = data ?? [];
	if (cards.length === 0) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "surface p-6 text-center text-sm",
		children: "No flashcards available yet."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 34
	}, this);
	const card = cards[i % cards.length];
	function answer(outcome) {
		record.mutate({
			flashcardId: card.id,
			outcome
		});
		progress.mutate({
			activity_type: "flashcard",
			topic: card.topic,
			item_id: card.id
		});
		setFlipped(false);
		setI((n) => n + 1);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Flashcards"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Card ",
						i % cards.length + 1,
						" of ",
						cards.length,
						" • ",
						dueToday.length,
						" due today"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "secondary",
					children: card.topic
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setFlipped((f) => !f),
				className: "surface flex min-h-56 w-full flex-col items-center justify-center gap-3 p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-display text-lg font-semibold",
					children: card.question
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this), flipped ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-primary",
					children: card.answer
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 20
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs text-muted-foreground",
					children: "Tap to reveal the answer"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 68
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => answer("know"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 11
						}, this), " Know"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => answer("review"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RotateCcw, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 11
						}, this), " Review"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => answer("dont-know"),
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this), " Don't know"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-center text-xs text-muted-foreground",
				children: "Sign in to save your review schedule and progress."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
//#endregion
export { FlashcardsPage as component };
