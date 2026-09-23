import { t as Button } from "./button-jFwRhC1j.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as useAuth } from "./router-DbBUrYCp.mjs";
import { t as useFavorites } from "./use-user-data-DeJGuI7f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/favorites-DlG8RBFl.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/favorites.tsx?tsr-split=component";
function FavoritesPage() {
	const { user } = useAuth();
	const { favorites, isLoading } = useFavorites();
	if (!user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface mx-auto max-w-md p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "font-display text-xl font-semibold",
				children: "Sign in to save favourites"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Favourites, learning progress and review schedules are stored with your account."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				asChild: true,
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/auth",
					children: "Sign in"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 21
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-2xl font-bold",
			children: "Favorites"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this), isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-sm text-muted-foreground",
			children: "Loading…"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 20
		}, this) : favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "surface p-6 text-center text-sm text-muted-foreground",
			children: "Nothing saved yet. Tap the star on any medicine."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 105
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
			className: "grid gap-2 sm:grid-cols-2",
			children: favorites.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
				className: "surface flex items-center justify-between gap-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "font-medium",
					children: f.label ?? f.item_id
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 17
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "outline",
					className: "mt-1 capitalize",
					children: f.item_type
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 17
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					size: "sm",
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: f.item_type === "class" ? "/classes/$slug" : "/medicines/$slug",
						params: { slug: f.item_id },
						children: "Open"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 17
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 15
				}, this)]
			}, f.id, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 31
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 16
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 10
	}, this);
}
//#endregion
export { FavoritesPage as component };
