import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { H as ClipboardCheck, Z as Brain, k as Layers, tt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as drugClassQuery, g as classMedicinesQuery, v as drugClassesQuery } from "./router-DbBUrYCp.mjs";
import { t as Disclaimer } from "./disclaimer-B9cgdbzn.mjs";
import { t as Skeleton } from "./skeleton-CBG5JKSc.mjs";
import { t as ExplainButton } from "./explain-button-CFRo5O2p.mjs";
import { t as PronounceButtons } from "./pronounce-Cl94W_bY.mjs";
import { o as useTrackView } from "./use-user-data-DeJGuI7f.mjs";
import { t as MedicineCard } from "./medicine-card-aHIGSGsv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/classes._slug-B2nYZBGs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/classes.$slug.tsx?tsr-split=component";
function ClassDetail() {
	const { slug } = useParams({ from: "/classes/$slug" });
	const { data: c, isLoading } = useQuery(drugClassQuery(slug));
	const { data: meds } = useQuery(classMedicinesQuery(c?.id));
	const { data: all } = useQuery(drugClassesQuery());
	const track = useTrackView();
	(0, import_react.useEffect)(() => {
		if (c) track("class", c.slug, c.name);
	}, [c?.id]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { className: "h-96 rounded-xl" }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 25
	}, this);
	if (!c) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-xl font-semibold",
			children: "Class not found"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
			asChild: true,
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/classes",
				children: "Back to classes"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 39,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 18
	}, this);
	const parent = (all ?? []).find((p) => p.id === c.parent_id);
	const children = (all ?? []).filter((p) => p.parent_id === c.id);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				variant: "ghost",
				size: "sm",
				className: "-ml-2",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/classes",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this), " Classes"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-2xl font-bold uppercase",
						children: c.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "secondary",
								className: "capitalize",
								children: c.class_type
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 11
							}, this),
							c.key_suffix && /* @__PURE__ */ (void 0)(Badge, {
								variant: "outline",
								children: c.key_suffix
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 28
							}, this),
							parent && /* @__PURE__ */ (void 0)(Link, {
								to: "/classes/$slug",
								params: { slug: parent.slug },
								children: /* @__PURE__ */ (void 0)(Badge, {
									variant: "outline",
									children: ["↑ ", parent.name]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 61,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 22
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronounceButtons, { text: c.name }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, {
								topic: c.name,
								context: c.clinical_definition ?? c.simple_explanation ?? ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/memory",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Brain, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 15
									}, this), " Remember"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 67,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/flashcards",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layers, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 15
									}, this), " Flashcards"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/quiz",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClipboardCheck, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 79,
										columnNumber: 15
									}, this), " Quiz"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 13
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
						title: "Simple explanation",
						body: c.simple_explanation
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
						title: "Hindi / Hinglish",
						body: c.hindi_explanation
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
						title: "Medical definition",
						body: c.clinical_definition
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
						title: "Mechanism",
						body: c.mechanism
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 85,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBlock, {
						title: "Common uses",
						items: c.common_uses
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBlock, {
						title: "Important adverse effects",
						items: c.key_adverse_effects
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBlock, {
						title: "Contraindications",
						items: c.contraindications
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBlock, {
						title: "Advantages",
						items: c.advantages
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListBlock, {
						title: "Disadvantages",
						items: c.disadvantages
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 7
			}, this),
			children.length > 0 && /* @__PURE__ */ (void 0)("section", { children: [/* @__PURE__ */ (void 0)("h2", {
				className: "mb-2 font-display text-lg font-semibold",
				children: "Subclasses"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap gap-2",
				children: children.map((s) => /* @__PURE__ */ (void 0)(Button, {
					asChild: true,
					variant: "secondary",
					size: "sm",
					children: /* @__PURE__ */ (void 0)(Link, {
						to: "/classes/$slug",
						params: { slug: s.slug },
						children: s.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 17
					}, this)
				}, s.id, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 100,
				columnNumber: 31
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Medicines in this class"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 9
			}, this), (meds?.length ?? 0) === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: "No medicine from the starter database is linked to this class yet."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 115,
				columnNumber: 38
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: (meds ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MedicineCard, { m }, m.id, false, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 36
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 18
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Disclaimer, { compact: true }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 122,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 10
	}, this);
}
function Block({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
			className: "text-sm font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 133,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: body || "Not recorded."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 132,
		columnNumber: 10
	}, this);
}
function ListBlock({ title, items }) {
	if (!items || items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
			className: "text-sm font-semibold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
			className: "mt-1 list-disc space-y-1 pl-5 text-sm text-muted-foreground",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: i }, i, false, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 25
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 147,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 145,
		columnNumber: 10
	}, this);
}
//#endregion
export { ClassDetail as component };
