import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { L as Factory } from "../_libs/lucide-react.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as manufacturersQuery, P as Input } from "./router-DbBUrYCp.mjs";
import { t as VerificationBadge } from "./verification-badge-gH0luRzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manufacturers.index-CoNwL82q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/manufacturers.index.tsx?tsr-split=component";
var LETTERS = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
function ManufacturerDirectory() {
	const { data, isLoading } = useQuery(manufacturersQuery());
	const [q, setQ] = (0, import_react.useState)("");
	const [letter, setLetter] = (0, import_react.useState)("All");
	const [verifiedOnly, setVerifiedOnly] = (0, import_react.useState)(false);
	const rows = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return (data ?? []).filter((m) => {
			if (verifiedOnly && m.verification_status !== "verified") return false;
			if (letter !== "All" && !m.name.toUpperCase().startsWith(letter)) return false;
			if (needle && !m.name.toLowerCase().includes(needle)) return false;
			return true;
		});
	}, [
		data,
		q,
		letter,
		verifiedOnly
	]);
	const recent = (0, import_react.useMemo)(() => (data ?? []).filter((m) => m.verification_status === "verified" && m.last_verified).sort((a, b) => (b.last_verified ?? "").localeCompare(a.last_verified ?? "")).slice(0, 6), [data]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
					variant: "secondary",
					className: "mb-2",
					children: "Company & brand directory"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Pharma Companies"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: [(data ?? []).length, " companies on record. A company is shown as verified only when at least one of its brands has verified composition and a source. This directory is factual reference data — it does not recommend any company or brand."]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search company name...",
					"aria-label": "Search pharmaceutical companies",
					className: "max-w-xs"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "sm",
					variant: verifiedOnly ? "default" : "outline",
					onClick: () => setVerifiedOnly((v) => !v),
					children: "Verified companies"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 42,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-1",
				children: LETTERS.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					size: "sm",
					variant: letter === l ? "secondary" : "ghost",
					className: "h-7 px-2 text-xs",
					onClick: () => setLetter(l),
					children: l
				}, l, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 27
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 7
			}, this),
			recent.length > 0 && /* @__PURE__ */ (void 0)("section", {
				className: "surface space-y-2 p-4",
				children: [/* @__PURE__ */ (void 0)("h2", {
					className: "font-display text-sm font-semibold",
					children: "Recently verified"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "flex flex-wrap gap-2",
					children: recent.map((m) => /* @__PURE__ */ (void 0)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (void 0)(Link, {
							to: "/manufacturers/$id",
							params: { id: m.id },
							children: m.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 17
						}, this)
					}, m.id, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 30
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 29
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "grid gap-2 sm:grid-cols-2",
				children: [rows.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/manufacturers/$id",
					params: { id: m.id },
					className: "surface press-feedback flex items-start gap-3 p-4 transition-shadow hover:shadow-[var(--shadow-float)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Factory, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block truncate font-medium",
								children: m.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-xs text-muted-foreground",
								children: [
									m.country ?? "Country not recorded",
									" • ",
									m.verified_brand_count,
									" verified brand",
									m.verified_brand_count === 1 ? "" : "s"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerificationBadge, { status: m.verification_status }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 13
				}, this) }, m.id, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 24
				}, this)), rows.length === 0 && !isLoading && /* @__PURE__ */ (void 0)("li", {
					className: "surface p-6 text-center text-sm text-muted-foreground sm:col-span-2",
					children: "No company matches this filter."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 45
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
//#endregion
export { ManufacturerDirectory as component };
