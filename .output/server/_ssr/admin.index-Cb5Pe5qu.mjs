import { n as __toESM } from "../_runtime.mjs";
import { t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { f as ShieldCheck, y as Plus } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-B4towMDa.mjs";
import { a as useQueryClient, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { P as Input, c as useAuth, f as DATASET_LABEL } from "./router-DbBUrYCp.mjs";
import { n as useServerFn } from "./createSsrRpc-JOw5HWmc.mjs";
import { i as saveManufacturer, u as setMedicineStatus } from "./admin.functions-dYqNRDsI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-Cb5Pe5qu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin.index.tsx?tsr-split=component";
function AdminHome() {
	const { isAdmin, loading } = useAuth();
	const qc = useQueryClient();
	const [q, setQ] = (0, import_react.useState)("");
	const [mfr, setMfr] = (0, import_react.useState)("");
	const archive = useServerFn(setMedicineStatus);
	const addManufacturer = useServerFn(saveManufacturer);
	const meds = useQuery({
		queryKey: ["admin-medicines"],
		enabled: isAdmin,
		queryFn: async () => {
			const { data, error } = await supabase.from("medicines").select("id, slug, display_name, generic_name, category, status, verification_status, last_verified").order("generic_name");
			if (error) throw error;
			return data ?? [];
		}
	});
	const logs = useQuery({
		queryKey: ["admin-audit"],
		enabled: isAdmin,
		queryFn: async () => {
			const { data, error } = await supabase.from("admin_audit_logs").select("id, action, table_name, record_id, created_at").order("created_at", { ascending: false }).limit(15);
			if (error) throw error;
			return data ?? [];
		}
	});
	const filtered = (0, import_react.useMemo)(() => {
		const t = q.trim().toLowerCase();
		if (!t) return meds.data ?? [];
		return (meds.data ?? []).filter((m) => `${m.display_name} ${m.generic_name} ${m.category ?? ""}`.toLowerCase().includes(t));
	}, [meds.data, q]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "text-sm text-muted-foreground",
		children: "Checking permissions…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 55,
		columnNumber: 23
	}, this);
	if (!isAdmin) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "surface mx-auto max-w-md p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "font-display text-xl font-semibold",
			children: "Admin access required"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "This area is limited to verified administrators. All database rules are enforced on the server, so nothing can be edited from here without the admin role."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 24
	}, this);
	async function setStatus(id, status) {
		try {
			await archive({ data: {
				id,
				status
			} });
			toast.success(status === "archived" ? "Medicine archived" : "Medicine published");
			await qc.invalidateQueries({ queryKey: ["admin-medicines"] });
			await qc.invalidateQueries({ queryKey: ["admin-audit"] });
		} catch {
			toast.error("Could not update the status.");
		}
	}
	async function createManufacturer() {
		if (mfr.trim().length < 2) return;
		try {
			await addManufacturer({ data: {
				name: mfr.trim(),
				status: "active"
			} });
			setMfr("");
			toast.success("Manufacturer added");
		} catch {
			toast.error("Could not save this manufacturer.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mr-auto",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "font-display text-2xl font-bold",
							children: "Medicine Editor"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted-foreground",
							children: DATASET_LABEL
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						size: "sm",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/admin/manufacturers",
							children: "Manufacturers"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/admin/$id",
							params: { id: "new" },
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 13
							}, this), " Add medicine"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 109,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Filter medicines…",
				"aria-label": "Filter medicines"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "grid gap-2",
				children: [filtered.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
					className: "surface flex flex-wrap items-center gap-2 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mr-auto min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "truncate font-medium",
								children: m.display_name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: [
									m.generic_name,
									" • ",
									m.category ?? "Uncategorised",
									" • last verified",
									" ",
									m.last_verified ?? "Not yet verified"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: m.status === "published" ? "secondary" : "outline",
							children: m.status
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
							variant: m.verification_status === "verified" ? "default" : "outline",
							children: m.verification_status === "verified" ? "Verified" : "Not yet verified"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 130,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/admin/$id",
								params: { id: m.id },
								children: "Edit"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => void setStatus(m.id, m.status === "archived" ? "published" : "archived"),
							children: m.status === "archived" ? "Restore" : "Archive"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 13
						}, this)
					]
				}, m.id, true, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 28
				}, this)), filtered.length === 0 && !meds.isLoading && /* @__PURE__ */ (void 0)("li", {
					className: "surface p-6 text-center text-sm text-muted-foreground",
					children: "No medicines match this filter."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 144,
					columnNumber: 54
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface space-y-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display font-semibold",
					children: "Manufacturers"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
						value: mfr,
						onChange: (e) => setMfr(e.target.value),
						placeholder: "New manufacturer name",
						"aria-label": "New manufacturer name"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						onClick: () => void createManufacturer(),
						children: "Add"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 151,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "surface space-y-2 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "font-display font-semibold",
					children: "Recent admin activity"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 158,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "space-y-1 text-xs text-muted-foreground",
					children: [(logs.data ?? []).map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
						new Date(l.created_at).toLocaleString(),
						" — ",
						l.action,
						" (",
						l.table_name,
						")"
					] }, l.id, true, {
						fileName: _jsxFileName,
						lineNumber: 160,
						columnNumber: 39
					}, this)), (logs.data ?? []).length === 0 && /* @__PURE__ */ (void 0)("li", { children: "No admin changes recorded yet." }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 163,
						columnNumber: 46
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 97,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminHome as component };
