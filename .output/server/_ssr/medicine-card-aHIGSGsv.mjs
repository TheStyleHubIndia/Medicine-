import { n as cn, t as Button } from "./button-jFwRhC1j.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { u as Star } from "../_libs/lucide-react.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ExplainButton } from "./explain-button-CFRo5O2p.mjs";
import { t as PronounceButtons } from "./pronounce-Cl94W_bY.mjs";
import { t as useFavorites } from "./use-user-data-DeJGuI7f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/medicine-card-aHIGSGsv.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/medicine-card.tsx";
function MedicineCard({ m }) {
	const navigate = useNavigate();
	const { toggle, isFavorite } = useFavorites();
	const saved = isFavorite("medicine", m.slug);
	const open = () => void navigate({
		to: "/medicines/$slug",
		params: { slug: m.slug }
	});
	function toggleFavorite(e) {
		e.preventDefault();
		e.stopPropagation();
		toggle.mutate({
			item_type: "medicine",
			item_id: m.slug,
			label: m.display_name
		}, {
			onSuccess: (r) => toast.success(r === "added" ? "Saved to favourites" : "Removed from favourites"),
			onError: () => toast.error("Sign in to save favourites.")
		});
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		role: "link",
		tabIndex: 0,
		"aria-label": `Open ${m.display_name}`,
		onClick: open,
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				open();
			}
		},
		className: "surface press-feedback flex cursor-pointer flex-col gap-3 p-4 transition-shadow hover:shadow-[var(--shadow-float)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "truncate text-base font-semibold",
						children: m.display_name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: [m.pronunciation_en ? `${m.pronunciation_en} • ` : "", m.salt ?? m.generic_name]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 49,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PronounceButtons, {
						text: m.generic_name,
						compact: true
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			m.category && /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap gap-1.5",
				children: [/* @__PURE__ */ (void 0)(Badge, {
					variant: "secondary",
					children: m.category
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 11
				}, this), m.key_suffix && /* @__PURE__ */ (void 0)(Badge, {
					variant: "outline",
					children: m.key_suffix
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 28
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "line-clamp-2 text-sm text-muted-foreground",
				children: m.description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-auto flex flex-wrap items-center gap-2 pt-1",
				onClick: (e) => e.stopPropagation(),
				onKeyDown: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExplainButton, {
						topic: m.display_name,
						context: m.description ?? ""
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": saved ? `Remove ${m.display_name} from favourites` : `Add ${m.display_name} to favourites`,
						"aria-pressed": saved,
						onClick: toggleFavorite,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: cn("size-4 transition-transform", saved && "fill-current text-primary animate-pop") }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/medicines/$slug",
						params: { slug: m.slug },
						className: "ml-auto text-xs text-muted-foreground underline underline-offset-2 hover:text-primary",
						children: "Open profile"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
//#endregion
export { MedicineCard as t };
