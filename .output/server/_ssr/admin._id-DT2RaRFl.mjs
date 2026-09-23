import { n as __toESM } from "../_runtime.mjs";
import { n as cn, t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { J as Check } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-B4towMDa.mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as manufacturersQuery, P as Input, c as useAuth, n as Route$2 } from "./router-DbBUrYCp.mjs";
import { n as useServerFn } from "./createSsrRpc-JOw5HWmc.mjs";
import { t as Label } from "./label-9S9l3qE3.mjs";
import { t as Textarea } from "./textarea-DAtqJF9T.mjs";
import { a as saveMedicine, d as unlinkReference, l as setMedicineClasses, o as saveReference, r as saveBrand, s as setBrandStatus, t as deleteBrand } from "./admin.functions-dYqNRDsI.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin._id-DT2RaRFl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/checkbox.tsx";
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 20,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 19,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 11,
	columnNumber: 3
}, void 0));
Checkbox.displayName = Checkbox$1.displayName;
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.$id.tsx?tsr-split=component";
var EMPTY_BRAND = {
	brand_name: "",
	composition: "",
	strength: "",
	dosage_form: "",
	route: "",
	source: "",
	manufacturer_id: "",
	verification_status: "under_review"
};
var TEXT_FIELDS = [
	["slug", "Slug"],
	["generic_name", "Generic name"],
	["display_name", "Display name"],
	["active_ingredient", "Active ingredient"],
	["salt", "Salt"],
	["category", "Category"],
	["key_suffix", "Key suffix"],
	["pronunciation_en", "Pronunciation (English)"],
	["pronunciation_hi", "Pronunciation (Hindi)"],
	["pronunciation_ipa", "Pronunciation (IPA)"],
	["bioavailability", "Bioavailability"],
	["half_life", "Half life"],
	["protein_binding", "Protein binding"],
	["volume_of_distribution", "Volume of distribution"],
	["clearance", "Clearance"],
	["onset", "Onset"],
	["duration", "Duration"]
];
var LONG_FIELDS = [
	["description", "Description"],
	["mechanism_of_action", "Mechanism of action"],
	["pharmacodynamics", "Pharmacodynamics"],
	["absorption", "ADME — Absorption"],
	["distribution", "ADME — Distribution"],
	["metabolism", "ADME — Metabolism"],
	["excretion", "ADME — Excretion"],
	["storage", "Storage"],
	["pregnancy", "Pregnancy"],
	["lactation", "Lactation"],
	["pediatric", "Paediatric"],
	["geriatric", "Geriatric"],
	["renal", "Renal"],
	["hepatic", "Hepatic"],
	["memory_trick", "Memory trick / Hindi–Hinglish explanation"]
];
var LIST_FIELDS = [
	["synonyms", "Synonyms"],
	["strengths", "Strengths"],
	["dosage_forms", "Dosage forms"],
	["routes", "Routes"],
	["indications", "Uses / indications"],
	["contraindications", "Contraindications"],
	["warnings", "Warnings"],
	["precautions", "Precautions"],
	["common_adverse_effects", "Common adverse effects"],
	["serious_adverse_effects", "Serious adverse effects"],
	["drug_interactions", "Drug interactions"],
	["food_interactions", "Food interactions"],
	["monitoring", "Monitoring"],
	["patient_counselling", "Patient counselling"],
	["advantages", "Advantages"],
	["disadvantages", "Disadvantages"],
	["key_points", "Key points"]
];
var EMPTY = {
	slug: "",
	generic_name: "",
	display_name: "",
	status: "draft",
	verification_status: "unverified",
	data_version: "1.0"
};
function AdminEditor() {
	const { id } = Route$2.useParams();
	const isNew = id === "new";
	const { isAdmin, loading } = useAuth();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const save = useServerFn(saveMedicine);
	const brandSave = useServerFn(saveBrand);
	const brandDelete = useServerFn(deleteBrand);
	const brandStatus = useServerFn(setBrandStatus);
	const refSave = useServerFn(saveReference);
	const refUnlink = useServerFn(unlinkReference);
	const classSave = useServerFn(setMedicineClasses);
	const record = useQuery({
		queryKey: ["admin-medicine", id],
		enabled: isAdmin && !isNew,
		queryFn: async () => {
			const { data, error } = await supabase.from("medicines").select("*").eq("id", id).maybeSingle();
			if (error) throw error;
			return data;
		}
	});
	const classes = useQuery({
		queryKey: ["admin-classes"],
		enabled: isAdmin,
		queryFn: async () => {
			const { data } = await supabase.from("drug_classes").select("id, name, class_type").order("name");
			return data ?? [];
		}
	});
	const linkedClasses = useQuery({
		queryKey: ["admin-medicine-classes", id],
		enabled: isAdmin && !isNew,
		queryFn: async () => {
			const { data } = await supabase.from("medicine_classifications").select("class_id, is_primary").eq("medicine_id", id);
			return data ?? [];
		}
	});
	const brands = useQuery({
		queryKey: ["admin-brands", id],
		enabled: isAdmin && !isNew,
		queryFn: async () => {
			const { data } = await supabase.from("brands").select("*").eq("medicine_id", id).order("brand_name");
			return data ?? [];
		}
	});
	const refs = useQuery({
		queryKey: ["admin-refs", id],
		enabled: isAdmin && !isNew,
		queryFn: async () => {
			const { data } = await supabase.from("medicine_references").select("reference_id, references(id, source_name, source_url)").eq("medicine_id", id);
			return data ?? [];
		}
	});
	const [selected, setSelected] = (0, import_react.useState)([]);
	const [brandDraft, setBrandDraft] = (0, import_react.useState)(EMPTY_BRAND);
	const makers = useQuery(manufacturersQuery());
	const [refDraft, setRefDraft] = (0, import_react.useState)({
		source_name: "",
		source_url: ""
	});
	(0, import_react.useEffect)(() => {
		if (record.data) setForm(record.data);
	}, [record.data]);
	(0, import_react.useEffect)(() => {
		if (linkedClasses.data) setSelected(linkedClasses.data.map((c) => c.class_id));
	}, [linkedClasses.data]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm text-muted-foreground",
		children: "Checking permissions…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 123,
		columnNumber: 23
	}, this);
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface mx-auto max-w-md p-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-xl font-semibold",
			children: "Admin access required"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 125,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 124,
		columnNumber: 24
	}, this);
	const set = (k, v) => setForm((f) => ({
		...f,
		[k]: v
	}));
	const str = (k) => form[k] == null ? "" : String(form[k]);
	const arr = (k) => Array.isArray(form[k]) ? form[k].join("\n") : "";
	async function onSave() {
		setSaving(true);
		try {
			const payload = { ...form };
			if (!isNew) payload["id"] = id;
			for (const [k] of LIST_FIELDS) {
				const v = payload[k];
				if (typeof v === "string") payload[k] = v.split("\n").map((s) => s.trim()).filter(Boolean);
			}
			delete payload["created_at"];
			delete payload["updated_at"];
			const res = await save({ data: payload });
			if (!isNew) await classSave({ data: {
				medicine_id: id,
				classes: selected.map((c, i) => ({
					class_id: c,
					is_primary: i === 0
				}))
			} });
			toast.success("Medicine saved");
			await qc.invalidateQueries();
			if (isNew) navigate({
				to: "/admin/$id",
				params: { id: res.id }
			});
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Could not save this medicine.");
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mr-auto font-display text-2xl font-bold",
						children: isNew ? "Add medicine" : `Edit ${str("display_name") || "medicine"}`
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						onClick: () => void navigate({ to: "/admin" }),
						children: "Back"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						disabled: saving,
						onClick: () => void onSave(),
						children: saving ? "Saving…" : "Save"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 173,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "surface p-3 text-xs text-muted-foreground",
				children: "Leave a field blank when the information cannot be verified from a reliable reference — the app then shows “Not yet verified” rather than presenting unverified content."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 187,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface grid gap-3 p-4 sm:grid-cols-2",
				children: [
					TEXT_FIELDS.map(([k, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: k,
							children: label
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: k,
							value: str(k),
							onChange: (e) => set(k, e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 195,
							columnNumber: 13
						}, this)]
					}, k, true, {
						fileName: _jsxFileName,
						lineNumber: 193,
						columnNumber: 42
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "status",
							children: "Status (published / draft / archived)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "status",
							value: str("status"),
							onChange: (e) => set("status", e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 199,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "verification_status",
							children: "Verification status (verified / unverified / needs_review)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "verification_status",
							value: str("verification_status"),
							onChange: (e) => set("verification_status", e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 205,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "last_verified",
							children: "Last verified (YYYY-MM-DD)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "last_verified",
							value: str("last_verified"),
							onChange: (e) => set("last_verified", e.target.value || null)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 209,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 207,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "data_version",
							children: "Data version"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 212,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "data_version",
							value: str("data_version"),
							onChange: (e) => set("data_version", e.target.value)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 213,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 211,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 192,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface grid gap-3 p-4",
				children: LONG_FIELDS.map(([k, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						htmlFor: k,
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 219,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
						id: k,
						rows: 3,
						value: str(k),
						onChange: (e) => set(k, e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 220,
						columnNumber: 13
					}, this)]
				}, k, true, {
					fileName: _jsxFileName,
					lineNumber: 218,
					columnNumber: 42
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 217,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface grid gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display font-semibold",
					children: "Lists (one item per line)"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 225,
					columnNumber: 9
				}, this), LIST_FIELDS.map(([k, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
						htmlFor: k,
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 227,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
						id: k,
						rows: 3,
						value: typeof form[k] === "string" ? form[k] : arr(k),
						onChange: (e) => set(k, e.target.value)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 13
					}, this)]
				}, k, true, {
					fileName: _jsxFileName,
					lineNumber: 226,
					columnNumber: 42
				}, this))]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 224,
				columnNumber: 7
			}, this),
			!isNew && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
				/* @__PURE__ */ (void 0)("section", {
					className: "surface space-y-2 p-4",
					children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "font-display font-semibold",
							children: "Classification"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 234,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid gap-1 sm:grid-cols-2",
							children: (classes.data ?? []).map((c) => /* @__PURE__ */ (void 0)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ (void 0)(Checkbox, {
										checked: selected.includes(c.id),
										onCheckedChange: (v) => setSelected((s) => v ? [...s, c.id] : s.filter((x) => x !== c.id))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 237,
										columnNumber: 19
									}, this),
									c.name,
									" ",
									/* @__PURE__ */ (void 0)("span", {
										className: "text-xs text-muted-foreground",
										children: [
											"(",
											c.class_type,
											")"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 238,
										columnNumber: 28
									}, this)
								]
							}, c.id, true, {
								fileName: _jsxFileName,
								lineNumber: 236,
								columnNumber: 46
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 235,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground",
							children: "The first selected class is stored as the primary classification. Saved with the medicine."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 233,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("section", {
					className: "surface space-y-3 p-4",
					children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "font-display font-semibold",
							children: "Brands & manufacturers"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 248,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("ul", {
							className: "space-y-1 text-sm",
							children: (brands.data ?? []).map((b) => /* @__PURE__ */ (void 0)("li", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (void 0)("span", {
										className: "mr-auto",
										children: [
											b.brand_name,
											" — ",
											b.composition ?? "Not yet verified",
											b.strength ? ` • ${b.strength}` : "",
											" •",
											" ",
											b.verification_status === "verified" ? "Verified" : "Not yet verified"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 251,
										columnNumber: 19
									}, this),
									[
										"verified",
										"under_review",
										"archived"
									].map((s) => /* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										variant: b.verification_status === s ? "secondary" : "ghost",
										onClick: async () => {
											try {
												await brandStatus({ data: {
													id: b.id,
													verification_status: s
												} });
												await qc.invalidateQueries({ queryKey: ["admin-brands", id] });
												toast.success("Brand status updated");
											} catch (e) {
												toast.error(e instanceof Error ? e.message : "Could not update this brand.");
											}
										},
										children: s === "verified" ? "Verify" : s === "archived" ? "Archive" : "Review"
									}, s, false, {
										fileName: _jsxFileName,
										lineNumber: 256,
										columnNumber: 81
									}, this)),
									/* @__PURE__ */ (void 0)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: async () => {
											try {
												await brandDelete({ data: { id: b.id } });
												await qc.invalidateQueries({ queryKey: ["admin-brands", id] });
											} catch {
												toast.error("Could not remove this brand.");
											}
										},
										children: "Remove"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 274,
										columnNumber: 19
									}, this)
								]
							}, b.id, true, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 45
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 249,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid gap-2 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (void 0)(Input, {
									placeholder: "Brand name",
									"aria-label": "Brand name",
									value: brandDraft.brand_name,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										brand_name: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 293,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)(Input, {
									placeholder: "Verified composition",
									"aria-label": "Composition",
									value: brandDraft.composition,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										composition: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 297,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)(Input, {
									placeholder: "Strength",
									"aria-label": "Strength",
									value: brandDraft.strength,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										strength: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 301,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)(Input, {
									placeholder: "Dosage form",
									"aria-label": "Dosage form",
									value: brandDraft.dosage_form,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										dosage_form: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 305,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)(Input, {
									placeholder: "Route",
									"aria-label": "Route",
									value: brandDraft.route,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										route: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 309,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)(Input, {
									placeholder: "Source / reference",
									"aria-label": "Source or reference",
									value: brandDraft.source,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										source: e.target.value
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 313,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("select", {
									"aria-label": "Manufacturer",
									className: "h-9 rounded-md border bg-background px-2 text-sm",
									value: brandDraft.manufacturer_id,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										manufacturer_id: e.target.value
									}),
									children: [/* @__PURE__ */ (void 0)("option", {
										value: "",
										children: "Manufacturer not recorded"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 321,
										columnNumber: 17
									}, this), (makers.data ?? []).map((mk) => /* @__PURE__ */ (void 0)("option", {
										value: mk.id,
										children: mk.name
									}, mk.id, false, {
										fileName: _jsxFileName,
										lineNumber: 322,
										columnNumber: 48
									}, this))]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 317,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("select", {
									"aria-label": "Verification status",
									className: "h-9 rounded-md border bg-background px-2 text-sm",
									value: brandDraft.verification_status,
									onChange: (e) => setBrandDraft({
										...brandDraft,
										verification_status: e.target.value
									}),
									children: [
										/* @__PURE__ */ (void 0)("option", {
											value: "draft",
											children: "Draft"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 330,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "under_review",
											children: "Under review"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 331,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "verified",
											children: "Verified"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 332,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "needs_update",
											children: "Needs update"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 333,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("option", {
											value: "archived",
											children: "Archived"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 334,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 326,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 292,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							size: "sm",
							onClick: async () => {
								try {
									const res = await brandSave({ data: {
										medicine_id: id,
										brand_name: brandDraft.brand_name,
										manufacturer_id: brandDraft.manufacturer_id || null,
										composition: brandDraft.composition || null,
										strength: brandDraft.strength || null,
										dosage_form: brandDraft.dosage_form || null,
										route: brandDraft.route || null,
										source: brandDraft.source || null,
										verification_status: brandDraft.verification_status
									} });
									setBrandDraft(EMPTY_BRAND);
									await qc.invalidateQueries({ queryKey: ["admin-brands", id] });
									toast.success(res.verification_status === "verified" ? "Brand saved as verified" : "Brand saved as Not yet verified");
								} catch (e) {
									toast.error(e instanceof Error ? e.message : "Could not save this brand.");
								}
							},
							children: "Add brand"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 337,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-muted-foreground",
							children: "A brand can only be stored as verified when manufacturer, composition, dosage form and a source are all recorded. Anything else stays “Not yet verified”."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 363,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 247,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (void 0)("section", {
					className: "surface space-y-3 p-4",
					children: [
						/* @__PURE__ */ (void 0)("h2", {
							className: "font-display font-semibold",
							children: "References"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 370,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("ul", {
							className: "space-y-1 text-sm",
							children: (refs.data ?? []).map((r) => /* @__PURE__ */ (void 0)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "mr-auto",
									children: r.references?.source_name
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 373,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: async () => {
										try {
											await refUnlink({ data: {
												medicine_id: id,
												reference_id: r.reference_id
											} });
											await qc.invalidateQueries({ queryKey: ["admin-refs", id] });
										} catch {
											toast.error("Could not remove this reference.");
										}
									},
									children: "Remove"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 374,
									columnNumber: 19
								}, this)]
							}, r.reference_id, true, {
								fileName: _jsxFileName,
								lineNumber: 372,
								columnNumber: 43
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 371,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid gap-2 sm:grid-cols-2",
							children: [/* @__PURE__ */ (void 0)(Input, {
								placeholder: "Source name",
								"aria-label": "Source name",
								value: refDraft.source_name,
								onChange: (e) => setRefDraft({
									...refDraft,
									source_name: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 394,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)(Input, {
								placeholder: "Source URL (optional)",
								"aria-label": "Source URL",
								value: refDraft.source_url,
								onChange: (e) => setRefDraft({
									...refDraft,
									source_url: e.target.value
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 398,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 393,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)(Button, {
							size: "sm",
							onClick: async () => {
								try {
									await refSave({ data: {
										medicine_id: id,
										source_name: refDraft.source_name,
										source_url: refDraft.source_url || null
									} });
									setRefDraft({
										source_name: "",
										source_url: ""
									});
									await qc.invalidateQueries({ queryKey: ["admin-refs", id] });
									toast.success("Reference added");
								} catch {
									toast.error("Could not save this reference.");
								}
							},
							children: "Add reference"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 403,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 369,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 232,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 172,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminEditor as component };
