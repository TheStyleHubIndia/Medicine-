import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { G as CircleCheck, i as Upload, o as TriangleAlert, tt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as useAuth } from "./router-DbBUrYCp.mjs";
import { n as useServerFn } from "./createSsrRpc-JOw5HWmc.mjs";
import { t as Textarea } from "./textarea-DAtqJF9T.mjs";
import { n as importMedicines } from "./admin.functions-dYqNRDsI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.import-B9wIdilG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.import.tsx?tsr-split=component";
var REQUIRED = [
	"slug",
	"generic_name",
	"display_name"
];
var LIST_FIELDS = /* @__PURE__ */ new Set([
	"indications",
	"contraindications",
	"common_adverse_effects",
	"dosage_forms",
	"routes",
	"strengths"
]);
var ALLOWED = /* @__PURE__ */ new Set([
	"slug",
	"generic_name",
	"display_name",
	"active_ingredient",
	"salt",
	"category",
	"description",
	"mechanism_of_action",
	"pronunciation_en",
	...LIST_FIELDS
]);
function splitCsvLine(line) {
	const out = [];
	let cur = "";
	let quoted = false;
	for (let i = 0; i < line.length; i++) {
		const ch = line[i];
		if (quoted) {
			if (ch === "\"" && line[i + 1] === "\"") {
				cur += "\"";
				i++;
			} else if (ch === "\"") quoted = false;
			else cur += ch;
		} else if (ch === "\"") quoted = true;
		else if (ch === ",") {
			out.push(cur);
			cur = "";
		} else cur += ch;
	}
	out.push(cur);
	return out.map((v) => v.trim());
}
function normalise(raw) {
	const row = {};
	for (const [k, v] of Object.entries(raw)) {
		const key = k.trim().toLowerCase().replace(/\s+/g, "_");
		if (!ALLOWED.has(key)) continue;
		if (v == null || v === "") continue;
		if (LIST_FIELDS.has(key)) row[key] = Array.isArray(v) ? v.map(String) : String(v).split(/[;|]/).map((s) => s.trim()).filter(Boolean);
		else row[key] = typeof v === "string" ? v.trim() : v;
	}
	return row;
}
function parseInput(input) {
	const errors = [];
	const warnings = [];
	const text = input.trim();
	if (!text) return {
		rows: [],
		errors,
		warnings
	};
	let raw = [];
	if (text.startsWith("[") || text.startsWith("{")) try {
		const json = JSON.parse(text);
		raw = Array.isArray(json) ? json : [json];
	} catch {
		return {
			rows: [],
			errors: ["That JSON could not be read. Check for a missing bracket or comma."],
			warnings
		};
	}
	else {
		const lines = text.split(/\r?\n/).filter((l) => l.trim());
		if (lines.length < 2) return {
			rows: [],
			errors: ["CSV needs a header row and at least one data row."],
			warnings
		};
		const header = splitCsvLine(lines[0]).map((h) => h.toLowerCase().replace(/\s+/g, "_"));
		for (const line of lines.slice(1)) {
			const cells = splitCsvLine(line);
			const obj = {};
			header.forEach((h, i) => obj[h] = cells[i] ?? "");
			raw.push(obj);
		}
	}
	const rows = [];
	const seen = /* @__PURE__ */ new Set();
	raw.forEach((r, idx) => {
		const row = normalise(r);
		const missing = REQUIRED.filter((f) => !row[f]);
		if (missing.length) {
			errors.push(`Row ${idx + 1}: missing ${missing.join(", ")}`);
			return;
		}
		const slug = String(row["slug"]);
		if (!/^[a-z0-9-]+$/.test(slug)) {
			errors.push(`Row ${idx + 1}: slug "${slug}" must be lowercase letters, numbers and hyphens.`);
			return;
		}
		if (seen.has(slug)) {
			errors.push(`Row ${idx + 1}: duplicate slug "${slug}" in this file.`);
			return;
		}
		seen.add(slug);
		if (!row["category"]) warnings.push(`Row ${idx + 1} (${slug}): no category — it will be uncategorised.`);
		if (!row["indications"]) warnings.push(`Row ${idx + 1} (${slug}): no uses listed.`);
		rows.push(row);
	});
	return {
		rows,
		errors,
		warnings
	};
}
var SAMPLE = `slug,generic_name,display_name,salt,category,indications
example-drug,Example Drug,Example Drug,Example salt,Pain & Fever,Mild pain;Fever`;
function ImportPage() {
	const { isAdmin, loading } = useAuth();
	const [input, setInput] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const runImport = useServerFn(importMedicines);
	const parsed = (0, import_react.useMemo)(() => parseInput(input), [input]);
	async function onImport() {
		setBusy(true);
		setResult(null);
		try {
			const res = await runImport({ data: { rows: parsed.rows } });
			setResult(res);
			toast.success(`${res.inserted.length} record(s) imported as Draft.`);
		} catch {
			toast.error("The import could not be completed. Check the rows and try again.");
		} finally {
			setBusy(false);
		}
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm text-muted-foreground",
		children: "Checking permissions…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 153,
		columnNumber: 23
	}, this);
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface mx-auto max-w-md p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-xl font-semibold",
			children: "Admin access required"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 155,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "Importing medicine records is limited to verified administrators."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 156,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 24
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "animate-fade-up space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/admin",
					className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 11
					}, this), " Back to admin"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mt-2 font-display text-2xl font-bold",
					children: "Import medicines"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 165,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Paste CSV or JSON. Every imported record is saved as ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Draft / Not yet verified" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 64
						}, this),
						" — review and verify each one before it becomes public."
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 9
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "surface space-y-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
						htmlFor: "import-data",
						className: "text-sm font-medium",
						children: "CSV or JSON data"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
						id: "import-data",
						value: input,
						onChange: (e) => setInput(e.target.value),
						rows: 10,
						spellCheck: false,
						placeholder: SAMPLE,
						className: "font-mono text-xs"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs text-muted-foreground",
						children: "Required columns: slug, generic_name, display_name. Optional: salt, active_ingredient, category, description, mechanism_of_action, pronunciation_en, indications, contraindications, common_adverse_effects, dosage_forms, routes, strengths. Separate list values with a semicolon."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 177,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => setInput(SAMPLE),
						children: "Load sample"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 183,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 172,
				columnNumber: 7
			}, this),
			input.trim() && /* @__PURE__ */ (void 0)("div", {
				className: "surface space-y-3 p-4",
				children: [
					/* @__PURE__ */ (void 0)("h2", {
						className: "font-display font-semibold",
						children: "Preview"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "flex flex-wrap gap-2 text-xs",
						children: [
							/* @__PURE__ */ (void 0)(Badge, {
								variant: "secondary",
								children: [parsed.rows.length, " valid row(s)"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 13
							}, this),
							parsed.errors.length > 0 && /* @__PURE__ */ (void 0)(Badge, {
								variant: "destructive",
								children: [parsed.errors.length, " error(s)"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 42
							}, this),
							parsed.warnings.length > 0 && /* @__PURE__ */ (void 0)(Badge, {
								variant: "outline",
								children: [parsed.warnings.length, " warning(s)"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 44
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 11
					}, this),
					parsed.errors.length > 0 && /* @__PURE__ */ (void 0)("ul", {
						className: "space-y-1 text-xs text-destructive",
						children: parsed.errors.map((e) => /* @__PURE__ */ (void 0)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (void 0)(TriangleAlert, {
									className: "mt-0.5 size-3.5 shrink-0",
									"aria-hidden": true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 19
								}, this),
								" ",
								e
							]
						}, e, true, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 39
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 196,
						columnNumber: 40
					}, this),
					parsed.warnings.length > 0 && /* @__PURE__ */ (void 0)("ul", {
						className: "space-y-1 text-xs text-muted-foreground",
						children: parsed.warnings.map((w) => /* @__PURE__ */ (void 0)("li", { children: ["• ", w] }, w, true, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 41
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 42
					}, this),
					parsed.rows.length > 0 && /* @__PURE__ */ (void 0)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (void 0)("table", {
							className: "w-full min-w-[520px] text-left text-xs",
							children: [/* @__PURE__ */ (void 0)("thead", {
								className: "text-muted-foreground",
								children: /* @__PURE__ */ (void 0)("tr", { children: [
									/* @__PURE__ */ (void 0)("th", {
										className: "py-1 pr-3",
										children: "Slug"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 209,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "py-1 pr-3",
										children: "Generic"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "py-1 pr-3",
										children: "Category"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 211,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (void 0)("th", {
										className: "py-1",
										children: "Status"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 212,
										columnNumber: 21
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 208,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 207,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("tbody", { children: parsed.rows.slice(0, 25).map((r) => /* @__PURE__ */ (void 0)("tr", {
								className: "border-t border-border/60",
								children: [
									/* @__PURE__ */ (void 0)("td", {
										className: "py-1 pr-3 font-mono",
										children: String(r["slug"])
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 217,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (void 0)("td", {
										className: "py-1 pr-3",
										children: String(r["generic_name"])
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 218,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (void 0)("td", {
										className: "py-1 pr-3",
										children: String(r["category"] ?? "Not yet verified")
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (void 0)("td", {
										className: "py-1",
										children: /* @__PURE__ */ (void 0)(Badge, {
											variant: "outline",
											children: "Draft"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 221,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 220,
										columnNumber: 23
									}, this)
								]
							}, String(r["slug"]), true, {
								fileName: _jsxFileName,
								lineNumber: 216,
								columnNumber: 54
							}, this)) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 215,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 206,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 205,
						columnNumber: 38
					}, this),
					/* @__PURE__ */ (void 0)(Button, {
						onClick: () => void onImport(),
						disabled: busy || parsed.rows.length === 0,
						className: "press-feedback",
						children: [
							/* @__PURE__ */ (void 0)(Upload, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 229,
								columnNumber: 13
							}, this),
							" Import ",
							parsed.rows.length,
							" record(s) as Draft"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 228,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 188,
				columnNumber: 24
			}, this),
			result && /* @__PURE__ */ (void 0)("div", {
				className: "surface space-y-2 p-4 text-sm",
				children: [
					/* @__PURE__ */ (void 0)("h2", {
						className: "font-display font-semibold",
						children: "Import summary"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 234,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "flex items-center gap-2 text-emerald-600 dark:text-emerald-400",
						children: [
							/* @__PURE__ */ (void 0)(CircleCheck, {
								className: "size-4",
								"aria-hidden": true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 236,
								columnNumber: 13
							}, this),
							" ",
							result.inserted.length,
							" imported as Draft"
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 235,
						columnNumber: 11
					}, this),
					result.skipped.length > 0 && /* @__PURE__ */ (void 0)("ul", {
						className: "space-y-1 text-xs text-muted-foreground",
						children: result.skipped.map((s) => /* @__PURE__ */ (void 0)("li", { children: [
							"• ",
							s.slug,
							" — ",
							s.reason
						] }, s.slug, true, {
							fileName: _jsxFileName,
							lineNumber: 239,
							columnNumber: 40
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 238,
						columnNumber: 41
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 233,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 160,
		columnNumber: 10
	}, this);
}
//#endregion
export { ImportPage as component };
