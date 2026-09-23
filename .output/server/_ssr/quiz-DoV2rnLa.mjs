import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { j as quizQuery } from "./router-DbBUrYCp.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { i as useRecordProgress } from "./use-user-data-DeJGuI7f.mjs";
import { t as Progress } from "./progress-wTpBupxw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-DoV2rnLa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/quiz.tsx?tsr-split=component";
function QuizPage() {
	const { data, isLoading } = useQuery(quizQuery());
	const record = useRecordProgress();
	const [length, setLength] = (0, import_react.useState)(10);
	const [started, setStarted] = (0, import_react.useState)(false);
	const [topic, setTopic] = (0, import_react.useState)("all");
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const topics = (0, import_react.useMemo)(() => [...new Set((data ?? []).map((q) => q.topic))], [data]);
	const pool = (0, import_react.useMemo)(() => {
		if (!started) return [];
		return [...(data ?? []).filter((q) => topic === "all" || q.topic === topic)].sort(() => Math.random() - .5).slice(0, length);
	}, [
		data,
		topic,
		length,
		started
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-72 rounded-xl" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 27,
		columnNumber: 25
	}, this);
	if (!started) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-xl space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-2xl font-bold",
			children: "Quiz"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "surface space-y-4 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mb-2 text-sm font-medium",
					children: "Length"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 32,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-2",
					children: [10, 20].map((n) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: length === n ? "default" : "outline",
						onClick: () => setLength(n),
						children: [n, " questions"]
					}, n, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 34
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mb-2 text-sm font-medium",
					children: "Topic"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: topic === "all" ? "default" : "outline",
						onClick: () => setTopic("all"),
						children: "All topics"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 15
					}, this), topics.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						variant: topic === t ? "default" : "outline",
						onClick: () => setTopic(t),
						children: t
					}, t, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 32
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					className: "w-full",
					onClick: () => {
						setStarted(true);
						setIdx(0);
						setScore(0);
						setPicked(null);
					},
					children: "Start quiz"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 24
	}, this);
	if (idx >= pool.length) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-xl space-y-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-2xl font-bold",
				children: "Quiz complete"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "font-display text-5xl font-bold text-primary",
				children: [
					score,
					"/",
					pool.length
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				onClick: () => {
					record.mutate({
						activity_type: "quiz",
						topic,
						score,
						total: pool.length
					});
					setStarted(false);
				},
				children: "Save & finish"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 61,
		columnNumber: 12
	}, this);
	const q = pool[idx];
	const correct = picked === q.correct_answer;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-xl space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Progress, { value: (idx + 1) / pool.length * 100 }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
					"Question ",
					idx + 1,
					" of ",
					pool.length
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "secondary",
					children: q.topic
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "font-display text-lg font-semibold",
				children: q.question
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-2",
				children: q.options.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: picked === null ? "outline" : o === q.correct_answer ? "default" : picked === o ? "destructive" : "outline",
					className: "h-auto w-full justify-start py-3 text-left whitespace-normal",
					disabled: picked !== null,
					onClick: () => {
						setPicked(o);
						if (o === q.correct_answer) setScore((s) => s + 1);
					},
					children: o
				}, o, false, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 29
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 7
			}, this),
			picked && /* @__PURE__ */ (void 0)("div", {
				className: "surface space-y-2 p-4 text-sm",
				children: [
					/* @__PURE__ */ (void 0)("p", {
						className: "font-semibold",
						children: correct ? "Correct" : "Incorrect"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "text-muted-foreground",
						children: [
							"Answer: ",
							q.correct_answer,
							". ",
							q.explanation
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)(Button, {
						size: "sm",
						onClick: () => {
							setPicked(null);
							setIdx((n) => n + 1);
						},
						children: "Next"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 81,
		columnNumber: 10
	}, this);
}
//#endregion
export { QuizPage as component };
