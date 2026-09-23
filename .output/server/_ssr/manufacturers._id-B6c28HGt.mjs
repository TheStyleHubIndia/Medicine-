import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as manufacturerQuery, b as manufacturerBrandsQuery, r as Route$6, x as manufacturerClassesQuery } from "./router-DbBUrYCp.mjs";
import { t as VerificationBadge } from "./verification-badge-gH0luRzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manufacturers._id-B6c28HGt.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/manufacturers.$id.tsx?tsr-split=component";
function ManufacturerProfile() {
	const { id } = Route$6.useParams();
	const { data: m, isLoading } = useQuery(manufacturerQuery(id));
	const { data: brands } = useQuery(manufacturerBrandsQuery(id));
	const list = brands ?? [];
	const medicineIds = Array.from(new Set(list.flatMap((b) => b.medicines?.id ? [b.medicines.id] : [])));
	const { data: classes } = useQuery(manufacturerClassesQuery(medicineIds));
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "p-6 text-sm text-muted-foreground",
		children: "Loading company..."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 25
	}, this);
	if (!m) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "p-6 text-sm",
		children: "Company not found."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 18
	}, this);
	const verified = list.filter((b) => b.verification_status === "verified");
	const pending = list.filter((b) => b.verification_status !== "verified");
	const forms = Array.from(new Set(verified.map((b) => b.dosage_form).filter((f) => !!f)));
	const medicines = Array.from(new Map(verified.flatMap((b) => b.medicines ? [[b.medicines.slug, b.medicines]] : [])).values()).sort((a, b) => a.display_name.localeCompare(b.display_name));
	const sources = Array.from(new Set(list.flatMap((b) => b.references?.source_name ? [b.references.source_name] : b.source ? [b.source] : [])));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/manufacturers",
						className: "text-xs text-muted-foreground hover:text-primary",
						children: "← Pharma Companies"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-2xl font-bold",
							children: m.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerificationBadge, { status: m.verification_status }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: [
							m.country ?? "Country not recorded",
							" • ",
							verified.length,
							" verified brand",
							verified.length === 1 ? "" : "s",
							m.last_verified ? ` • last verified ${m.last_verified}` : ""
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 9
					}, this),
					m.website && /* @__PURE__ */ (void 0)("a", {
						href: m.website,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "text-xs underline underline-offset-2",
						children: m.website
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 23
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this),
			forms.length > 0 && /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-wrap gap-1.5",
				children: forms.map((f) => /* @__PURE__ */ (void 0)(Badge, {
					variant: "secondary",
					children: f
				}, f, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 27
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 28
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display font-semibold",
					children: [
						"Verified brands (",
						verified.length,
						")"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this), verified.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "surface p-4 text-sm text-muted-foreground",
					children: "No verified brand recorded for this company yet. Brand, composition and manufacturer data must be confirmed against a reliable source before it appears here."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 34
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "grid gap-2 sm:grid-cols-2",
					children: verified.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/brands/$id",
						params: { id: b.id },
						className: "surface press-feedback block p-4 transition-shadow hover:shadow-[var(--shadow-float)]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block font-medium",
							children: b.brand_name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 19
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "block text-xs text-muted-foreground",
							children: [
								b.medicines?.display_name ?? "Generic not linked",
								b.strength ? ` • ${b.strength}` : "",
								b.dosage_form ? ` • ${b.dosage_form}` : ""
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 19
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 62,
						columnNumber: 17
					}, this) }, b.id, false, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 32
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 18
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 7
			}, this),
			pending.length > 0 && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (void 0)("h2", {
					className: "font-display font-semibold",
					children: [
						"Needs verification (",
						pending.length,
						")"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("ul", {
					className: "grid gap-2 sm:grid-cols-2",
					children: pending.map((b) => /* @__PURE__ */ (void 0)("li", {
						className: "surface p-4 text-sm",
						children: [/* @__PURE__ */ (void 0)("p", {
							className: "font-medium",
							children: b.brand_name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground",
							children: [b.medicines?.display_name ?? "Generic not linked", " • Not yet verified"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 17
						}, this)]
					}, b.id, true, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 30
			}, this),
			medicines.length > 0 && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (void 0)("h2", {
					className: "font-display font-semibold",
					children: [
						"Associated generic medicines (",
						medicines.length,
						")"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("ul", {
					className: "flex flex-wrap gap-1.5",
					children: medicines.map((med) => /* @__PURE__ */ (void 0)("li", { children: /* @__PURE__ */ (void 0)(Link, {
						to: "/medicines/$slug",
						params: { slug: med.slug },
						className: "inline-block rounded-md border px-2.5 py-1 text-xs hover:border-primary",
						children: med.display_name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 94,
						columnNumber: 17
					}, this) }, med.slug, false, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 35
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 32
			}, this),
			(classes ?? []).length > 0 && /* @__PURE__ */ (void 0)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (void 0)("h2", {
					className: "font-display font-semibold",
					children: "Drug classes represented"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("ul", {
					className: "flex flex-wrap gap-1.5",
					children: (classes ?? []).map((c) => /* @__PURE__ */ (void 0)("li", { children: /* @__PURE__ */ (void 0)(Link, {
						to: "/classes/$slug",
						params: { slug: c.slug },
						className: "inline-block rounded-md border px-2.5 py-1 text-xs hover:border-primary",
						children: c.name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 17
					}, this) }, c.id, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 39
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 38
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface space-y-1 p-4 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display text-sm font-semibold text-foreground",
						children: "References"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: m.source ?? "No source recorded for this company yet." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 118,
						columnNumber: 9
					}, this),
					sources.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: s }, s, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 27
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Company and brand records are factual reference data only. They do not imply that any company or brand is better, safer or recommended." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 116,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 10
	}, this);
}
//#endregion
export { ManufacturerProfile as component };
