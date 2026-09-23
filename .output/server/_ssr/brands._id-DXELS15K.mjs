import { t as Button } from "./button-jFwRhC1j.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as medicineClassesQuery, h as brandQuery, i as Route$10 } from "./router-DbBUrYCp.mjs";
import { t as VerificationBadge } from "./verification-badge-gH0luRzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands._id-DXELS15K.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/brands.$id.tsx?tsr-split=component";
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid gap-0.5 border-b py-2 last:border-0 sm:grid-cols-[200px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
			className: "text-sm",
			children: value || "Not yet verified"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
function BrandPage() {
	const { id } = Route$10.useParams();
	const { data: b, isLoading } = useQuery(brandQuery(id));
	const { data: classes } = useQuery(medicineClassesQuery(b?.medicines?.id));
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "p-6 text-sm text-muted-foreground",
		children: "Loading brand..."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 25
	}, this);
	if (!b) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "p-6 text-sm",
		children: "Brand not found."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 18
	}, this);
	const therapeutic = (classes ?? []).filter((c) => c.class_type === "therapeutic");
	const pharmacological = (classes ?? []).filter((c) => c.class_type !== "therapeutic");
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
						lineNumber: 37,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-2xl font-bold",
							children: b.brand_name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerificationBadge, { status: b.verification_status }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: "Brand record. This is not a separate generic medicine — it maps to the generic below."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
				className: "surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Manufacturer",
						value: b.manufacturers?.name ?? "Manufacturer not yet verified"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Generic medicine",
						value: b.medicines?.display_name
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Active ingredient",
						value: b.active_ingredient ?? b.medicines?.active_ingredient
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Salt / composition",
						value: b.composition ?? b.medicines?.salt
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Strength",
						value: b.strength
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Dosage form",
						value: b.dosage_form
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Route",
						value: b.route
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Therapeutic classification",
						value: therapeutic.map((c) => c.name).join(", ")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Pharmacological classification",
						value: pharmacological.map((c) => c.name).join(", ")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Source / reference",
						value: b.references?.source_name ?? b.source
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row, {
						label: "Last verified",
						value: b.last_verified
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-wrap gap-2",
				children: [b.medicines && /* @__PURE__ */ (void 0)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (void 0)(Link, {
						to: "/medicines/$slug",
						params: { slug: b.medicines.slug },
						children: "View generic medicine"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 25
				}, this), b.manufacturers && /* @__PURE__ */ (void 0)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (void 0)(Link, {
						to: "/manufacturers/$id",
						params: { id: b.manufacturers.id },
						children: "View manufacturer"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 71,
					columnNumber: 29
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			b.verification_status !== "verified" && /* @__PURE__ */ (void 0)("p", {
				className: "surface p-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (void 0)(Badge, {
					variant: "outline",
					className: "mr-2",
					children: "Needs verification"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 81,
					columnNumber: 11
				}, this), "Parts of this record are not yet confirmed against a reliable source, so it is not shown as verified. Nothing here implies this brand is better, safer or recommended."]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 48
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 35,
		columnNumber: 10
	}, this);
}
//#endregion
export { BrandPage as component };
