import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as manufacturersQuery, P as Input, c as useAuth } from "./router-DbBUrYCp.mjs";
import { n as useServerFn } from "./createSsrRpc-JOw5HWmc.mjs";
import { c as setManufacturerStatus, i as saveManufacturer } from "./admin.functions-dYqNRDsI.mjs";
import { t as VerificationBadge } from "./verification-badge-gH0luRzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.manufacturers-BX3LIK2I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.manufacturers.tsx?tsr-split=component";
var EMPTY = {
	name: "",
	country: "India",
	website: "",
	source: ""
};
function AdminManufacturers() {
	const { isAdmin, loading } = useAuth();
	const qc = useQueryClient();
	const makers = useQuery(manufacturersQuery());
	const save = useServerFn(saveManufacturer);
	const setStatus = useServerFn(setManufacturerStatus);
	const [draft, setDraft] = (0, import_react.useState)(EMPTY);
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm text-muted-foreground",
		children: "Checking permissions…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 23
	}, this);
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm",
		children: "Admins only."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 24
	}, this);
	const refresh = () => qc.invalidateQueries({ queryKey: ["manufacturers"] });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/admin",
						className: "text-xs text-muted-foreground hover:text-primary",
						children: "← Admin"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-2xl font-bold",
						children: "Pharmaceutical companies"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted-foreground",
						children: "Company records are factual. A company only reads as verified when it has at least one verified brand and a recorded source."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface space-y-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "font-display font-semibold",
						children: "Add company"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-2 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								placeholder: "Company name",
								"aria-label": "Company name",
								value: draft.name,
								onChange: (e) => setDraft({
									...draft,
									name: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								placeholder: "Country",
								"aria-label": "Country",
								value: draft.country,
								onChange: (e) => setDraft({
									...draft,
									country: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								placeholder: "Website",
								"aria-label": "Website",
								value: draft.website,
								onChange: (e) => setDraft({
									...draft,
									website: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								placeholder: "Source",
								"aria-label": "Source",
								value: draft.source,
								onChange: (e) => setDraft({
									...draft,
									source: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						size: "sm",
						onClick: async () => {
							try {
								await save({ data: {
									name: draft.name,
									country: draft.country || null,
									website: draft.website || null,
									source: draft.source || null,
									status: "active",
									verification_status: "under_review"
								} });
								setDraft(EMPTY);
								await refresh();
								toast.success("Company saved as Not yet verified");
							} catch (e) {
								toast.error(e instanceof Error ? e.message : "Could not save this company.");
							}
						},
						children: "Add company"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display font-semibold",
					children: [
						"All companies (",
						makers.data?.length ?? 0,
						")"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "space-y-2",
					children: (makers.data ?? []).map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
						className: "surface flex flex-wrap items-center gap-2 p-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/manufacturers/$id",
								params: { id: m.id },
								className: "mr-auto font-medium hover:text-primary",
								children: [m.name, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "ml-2 text-xs font-normal text-muted-foreground",
									children: [
										m.verified_brand_count,
										" verified brand",
										m.verified_brand_count === 1 ? "" : "s"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VerificationBadge, { status: m.verification_status }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 15
							}, this),
							[
								"verified",
								"under_review",
								"archived"
							].map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								size: "sm",
								variant: m.verification_status === s ? "secondary" : "ghost",
								onClick: async () => {
									try {
										await setStatus({ data: {
											id: m.id,
											verification_status: s
										} });
										await refresh();
										toast.success("Company status updated");
									} catch (e) {
										toast.error(e instanceof Error ? e.message : "Could not update this company.");
									}
								},
								children: s === "verified" ? "Verify" : s === "archived" ? "Archive" : "Review"
							}, s, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 77
							}, this))
						]
					}, m.id, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 41
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminManufacturers as component };
