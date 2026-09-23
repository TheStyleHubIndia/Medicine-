import { n as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-jFwRhC1j.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Badge } from "./badge-CV-LYmz4.mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { B as Dna, C as Menu, D as LoaderCircle, E as LogIn, F as FlaskConical, H as ClipboardCheck, L as Factory, M as Info, N as House, P as GraduationCap, Q as BookOpen, S as Moon, T as LogOut, Y as ChartColumn, Z as Brain, b as Pill, c as Sun, d as Sparkles, f as ShieldCheck, g as Scale, h as Search, k as Layers, l as Stethoscope, m as Settings, n as Volume2, t as X, u as Star } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as supabase } from "./client-B4towMDa.mjs";
import { a as useQueryClient, i as QueryClientProvider, n as queryOptions, r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { M as redirect, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as objectType, o as stringType } from "../_libs/zod.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dialog-CZpgJUpp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$8 = "/app/applet/src/components/ui/dialog.tsx";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay, {}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 37,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 48,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$8,
			lineNumber: 49,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 47,
		columnNumber: 7
	}, void 0)]
}, void 0, true, {
	fileName: _jsxFileName$8,
	lineNumber: 38,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$8,
	lineNumber: 36,
	columnNumber: 3
}, void 0));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 57,
	columnNumber: 3
}, void 0);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 62,
	columnNumber: 3
}, void 0);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 73,
	columnNumber: 3
}, void 0));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$8,
	lineNumber: 85,
	columnNumber: 3
}, void 0));
DialogDescription.displayName = DialogDescription$1.displayName;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/input-Bi36govA.js
var _jsxFileName$7 = "/app/applet/src/components/ui/input.tsx";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Input.displayName = "Input";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/queries-BVXNsbdl.js
var LIST_COLUMNS = "id, slug, generic_name, display_name, salt, active_ingredient, category, description, pronunciation_en, key_suffix, verification_status";
var medicinesQuery = (category) => queryOptions({
	queryKey: ["medicines", category ?? "all"],
	queryFn: async () => {
		let q = supabase.from("medicines").select(LIST_COLUMNS).order("generic_name");
		if (category) q = q.eq("category", category);
		const { data, error } = await q.returns();
		if (error) throw error;
		return data ?? [];
	}
});
var medicineQuery = (slug) => queryOptions({
	queryKey: ["medicine", slug],
	queryFn: async () => {
		const { data, error } = await supabase.from("medicines").select("*").eq("slug", slug).maybeSingle();
		if (error) throw error;
		return data;
	}
});
var medicineBrandsQuery = (medicineId) => queryOptions({
	queryKey: ["brands", medicineId],
	enabled: !!medicineId,
	queryFn: async () => {
		const { data, error } = await supabase.from("brands").select("*, manufacturers(name)").eq("medicine_id", medicineId).order("brand_name");
		if (error) throw error;
		return data ?? [];
	}
});
var medicineClassesQuery = (medicineId) => queryOptions({
	queryKey: ["medicine-classes", medicineId],
	enabled: !!medicineId,
	queryFn: async () => {
		const { data, error } = await supabase.from("medicine_classifications").select("is_primary, drug_classes(*)").eq("medicine_id", medicineId);
		if (error) throw error;
		return (data ?? []).flatMap((r) => r.drug_classes ? [r.drug_classes] : []);
	}
});
var medicineReferencesQuery = (medicineId) => queryOptions({
	queryKey: ["medicine-references", medicineId],
	enabled: !!medicineId,
	queryFn: async () => {
		const { data, error } = await supabase.from("medicine_references").select("references(*)").eq("medicine_id", medicineId);
		if (error) throw error;
		return (data ?? []).flatMap((r) => r.references ? [r.references] : []);
	}
});
var UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var medicineInteractionsQuery = (medicineId) => queryOptions({
	queryKey: ["medicine-interactions", medicineId],
	enabled: !!medicineId && UUID_RE.test(medicineId),
	queryFn: async () => {
		const { data, error } = await supabase.from("drug_interactions").select("*, a:medicines!drug_interactions_medicine_a_id_fkey(display_name, slug), b:medicines!drug_interactions_medicine_b_id_fkey(display_name, slug)").or(`medicine_a_id.eq.${medicineId},medicine_b_id.eq.${medicineId}`);
		if (error) throw error;
		return data ?? [];
	}
});
var drugClassesQuery = () => queryOptions({
	queryKey: ["drug-classes"],
	queryFn: async () => {
		const { data, error } = await supabase.from("drug_classes").select("*").order("name");
		if (error) throw error;
		return data ?? [];
	}
});
var drugClassQuery = (slug) => queryOptions({
	queryKey: ["drug-class", slug],
	queryFn: async () => {
		const { data, error } = await supabase.from("drug_classes").select("*").eq("slug", slug).maybeSingle();
		if (error) throw error;
		return data;
	}
});
var classMedicinesQuery = (classId) => queryOptions({
	queryKey: ["class-medicines", classId],
	enabled: !!classId,
	queryFn: async () => {
		const { data, error } = await supabase.from("medicine_classifications").select(`medicines(${LIST_COLUMNS})`).eq("class_id", classId);
		if (error) throw error;
		return (data ?? []).flatMap((r) => r.medicines ? [r.medicines] : []);
	}
});
var termsQuery = () => queryOptions({
	queryKey: ["medical-terms"],
	queryFn: async () => {
		const { data, error } = await supabase.from("medical_terms").select("*").order("term");
		if (error) throw error;
		return data ?? [];
	}
});
var suffixesQuery = () => queryOptions({
	queryKey: ["suffixes"],
	queryFn: async () => {
		const { data, error } = await supabase.from("suffix_patterns").select("*").order("suffix");
		if (error) throw error;
		return data ?? [];
	}
});
var mnemonicsQuery = () => queryOptions({
	queryKey: ["mnemonics"],
	queryFn: async () => {
		const { data, error } = await supabase.from("mnemonics").select("*").order("title");
		if (error) throw error;
		return data ?? [];
	}
});
var flashcardsQuery = (topic) => queryOptions({
	queryKey: ["flashcards", topic ?? "all"],
	queryFn: async () => {
		let q = supabase.from("flashcards").select("*");
		if (topic && topic !== "all") q = q.eq("topic", topic);
		const { data, error } = await q;
		if (error) throw error;
		return data ?? [];
	}
});
var quizQuery = (topic) => queryOptions({
	queryKey: ["quiz", topic ?? "all"],
	queryFn: async () => {
		let q = supabase.from("quiz_questions").select("*");
		if (topic && topic !== "all") q = q.eq("topic", topic);
		const { data, error } = await q;
		if (error) throw error;
		return data ?? [];
	}
});
/**
* Ranking tiers used by global search:
* 1 exact generic • 2 exact brand • 3 exact salt • 4 exact active ingredient
* 5 exact classification • 6 prefix match • 7 partial match • 8 related term
*/
function rankFor(value, needle, exactTier) {
	const v = (value ?? "").toLowerCase();
	if (!v) return 8;
	if (v === needle) return exactTier;
	if (v.startsWith(needle)) return 6;
	if (v.includes(needle)) return 7;
	return 8;
}
/** Global search across medicines, brands, classes, manufacturers and medical terms. */
var searchQuery = (term) => queryOptions({
	queryKey: ["search", term],
	enabled: term.trim().length >= 2,
	queryFn: async () => {
		const t = term.trim().slice(0, 80).replace(/[,()"'*%\\]/g, " ").trim();
		if (t.length < 2) return [];
		const needle = t.toLowerCase();
		const like = `%${t}%`;
		const [meds, synMeds, brands, brandsByMaker, classes, terms, makers] = await Promise.all([
			supabase.from("medicines").select("slug, display_name, generic_name, salt, active_ingredient, category, pronunciation_en").or(`generic_name.ilike.${like},display_name.ilike.${like},salt.ilike.${like},active_ingredient.ilike.${like}`).limit(15),
			supabase.from("medicines").select("slug, display_name, generic_name, salt, active_ingredient, category, pronunciation_en").contains("synonyms", [t]).limit(5),
			supabase.from("brands").select("id, brand_name, composition, active_ingredient, strength, verification_status, medicines(slug, display_name), manufacturers(name)").or(`brand_name.ilike.${like},composition.ilike.${like},active_ingredient.ilike.${like}`).limit(10),
			supabase.from("brands").select("id, brand_name, composition, active_ingredient, strength, verification_status, medicines(slug, display_name), manufacturers!inner(name)").ilike("manufacturers.name", like).order("verification_status").limit(12),
			supabase.from("drug_classes").select("slug, name, class_type").ilike("name", like).limit(8),
			supabase.from("medical_terms").select("slug, term, simple_definition").ilike("term", like).limit(8),
			supabase.from("manufacturers").select("id, name, country, verification_status").ilike("name", like).limit(5)
		]);
		const results = [];
		const seen = /* @__PURE__ */ new Set();
		for (const m of [...meds.data ?? [], ...synMeds.data ?? []]) {
			if (seen.has(m.slug)) continue;
			seen.add(m.slug);
			const rank = Math.min(rankFor(m.generic_name, needle, 1), rankFor(m.display_name, needle, 1), rankFor(m.salt, needle, 3), rankFor(m.active_ingredient, needle, 4));
			results.push({
				kind: "medicine",
				title: m.display_name,
				subtitle: [m.salt, m.category].filter(Boolean).join(" • ") || "Medicine",
				href: `/medicines/${m.slug}`,
				pronunciation: m.pronunciation_en,
				rank
			});
		}
		const brandRows = [...brands.data ?? [], ...brandsByMaker.data ?? []];
		const seenBrands = /* @__PURE__ */ new Set();
		for (const b of brandRows) {
			if (seenBrands.has(b.id)) continue;
			seenBrands.add(b.id);
			const maker = b.manufacturers?.name;
			const generic = b.medicines?.display_name;
			const composition = b.verification_status === "verified" ? b.composition ?? b.active_ingredient ?? "composition on record" : "Not yet verified";
			results.push({
				kind: "brand",
				title: b.brand_name,
				subtitle: [
					"Brand",
					maker,
					generic,
					composition,
					b.strength ?? void 0
				].filter(Boolean).join(" • "),
				href: `/brands/${b.id}`,
				rank: Math.min(rankFor(b.brand_name, needle, 2), maker ? rankFor(maker, needle, 2) + 1 : 8)
			});
		}
		for (const c of classes.data ?? []) results.push({
			kind: "class",
			title: c.name,
			subtitle: `${c.class_type} class`,
			href: `/classes/${c.slug}`,
			rank: rankFor(c.name, needle, 5)
		});
		for (const mk of makers.data ?? []) results.push({
			kind: "manufacturer",
			title: mk.name,
			subtitle: `Pharmaceutical company${mk.country ? ` • ${mk.country}` : ""}${mk.verification_status === "verified" ? " • verified" : " • Not yet verified"}`,
			href: `/manufacturers/${mk.id}`,
			rank: rankFor(mk.name, needle, 5) + 1
		});
		for (const t2 of terms.data ?? []) results.push({
			kind: "term",
			title: t2.term,
			subtitle: t2.simple_definition ?? "Medical term",
			href: `/terms?q=${encodeURIComponent(t2.term)}`,
			rank: Math.max(rankFor(t2.term, needle, 6), 6)
		});
		return results.sort((a, b) => (a.rank ?? 8) - (b.rank ?? 8)).slice(0, 30);
	}
});
var manufacturersQuery = () => queryOptions({
	queryKey: ["manufacturers"],
	queryFn: async () => {
		const [{ data: makers, error }, { data: brands, error: brandError }] = await Promise.all([supabase.from("manufacturers").select("*").order("name"), supabase.from("brands").select("manufacturer_id, verification_status")]);
		if (error) throw error;
		if (brandError) throw brandError;
		const counts = /* @__PURE__ */ new Map();
		for (const b of brands ?? []) {
			if (!b.manufacturer_id || b.verification_status !== "verified") continue;
			counts.set(b.manufacturer_id, (counts.get(b.manufacturer_id) ?? 0) + 1);
		}
		return (makers ?? []).map((m) => ({
			...m,
			verified_brand_count: counts.get(m.id) ?? 0
		}));
	}
});
var manufacturerQuery = (id) => queryOptions({
	queryKey: ["manufacturer", id],
	queryFn: async () => {
		const { data, error } = await supabase.from("manufacturers").select("*").eq("id", id).maybeSingle();
		if (error) throw error;
		return data;
	}
});
var manufacturerBrandsQuery = (id) => queryOptions({
	queryKey: ["manufacturer-brands", id],
	queryFn: async () => {
		const { data, error } = await supabase.from("brands").select("*, medicines(id, slug, display_name, generic_name, category), references(source_name, source_url)").eq("manufacturer_id", id).order("brand_name");
		if (error) throw error;
		return data ?? [];
	}
});
/** Drug classes represented by the medicines a company's brands map to. */
var manufacturerClassesQuery = (medicineIds) => queryOptions({
	queryKey: ["manufacturer-classes", [...medicineIds].sort().join(",")],
	enabled: medicineIds.length > 0,
	queryFn: async () => {
		const { data, error } = await supabase.from("medicine_classifications").select("drug_classes(id, slug, name, class_type)").in("medicine_id", medicineIds);
		if (error) throw error;
		const map = /* @__PURE__ */ new Map();
		for (const row of data ?? []) if (row.drug_classes) map.set(row.drug_classes.id, row.drug_classes);
		return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
	}
});
var brandQuery = (id) => queryOptions({
	queryKey: ["brand", id],
	enabled: UUID_RE.test(id),
	queryFn: async () => {
		const { data, error } = await supabase.from("brands").select("*, manufacturers(id, name, verification_status), medicines(id, slug, display_name, generic_name, salt, active_ingredient, category), references(source_name, source_url)").eq("id", id).maybeSingle();
		if (error) throw error;
		return data;
	}
});
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DbBUrYCp.js
var styles_default = "/assets/styles-C7pKw52G.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _jsxFileName$6 = "/app/applet/src/components/ui/sheet.tsx";
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 22,
	columnNumber: 3
}, void 0));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetOverlay, {}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 62,
	columnNumber: 5
}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent$1, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 65,
			columnNumber: 9
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "sr-only",
			children: "Close"
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 66,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 64,
		columnNumber: 7
	}, void 0), children]
}, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 63,
	columnNumber: 5
}, void 0)] }, void 0, true, {
	fileName: _jsxFileName$6,
	lineNumber: 61,
	columnNumber: 3
}, void 0));
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 75,
	columnNumber: 3
}, void 0);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 80,
	columnNumber: 3
}, void 0);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 91,
	columnNumber: 3
}, void 0));
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$6,
	lineNumber: 103,
	columnNumber: 3
}, void 0));
SheetDescription.displayName = DialogDescription$1.displayName;
var _jsxFileName$5 = "/app/applet/src/components/global-search.tsx";
var RECENT_KEY = "medivault.recent-searches";
var POPULAR = [
	"Paracetamol",
	"Crocin",
	"Losartan",
	"Metformin",
	"Analgesic",
	"PPI"
];
function useDebounced(value, delay = 250) {
	const [v, setV] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setV(value), delay);
		return () => clearTimeout(t);
	}, [value, delay]);
	return v;
}
function GlobalSearch({ open, onOpenChange }) {
	const [term, setTerm] = (0, import_react.useState)("");
	const debounced = useDebounced(term);
	const navigate = useNavigate();
	const [recent, setRecent] = (0, import_react.useState)([]);
	const { data, isFetching } = useQuery(searchQuery(debounced));
	(0, import_react.useEffect)(() => {
		try {
			setRecent(JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]"));
		} catch {
			setRecent([]);
		}
	}, [open]);
	function go(href, label) {
		const next = [label, ...recent.filter((r) => r !== label)].slice(0, 6);
		setRecent(next);
		localStorage.setItem(RECENT_KEY, JSON.stringify(next));
		onOpenChange(false);
		setTerm("");
		navigate({ to: href });
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, {
			className: "top-[12%] max-h-[76vh] translate-y-0 gap-3 overflow-hidden p-0 sm:max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, {
					className: "sr-only",
					children: "Search MediVault India"
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 56,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2 border-b px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-4 shrink-0 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 58,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							autoFocus: true,
							value: term,
							onChange: (e) => setTerm(e.target.value),
							placeholder: "Search medicine, generic, brand, salt or medical term...",
							className: "border-0 shadow-none focus-visible:ring-0"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 59,
							columnNumber: 11
						}, this),
						isFetching && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "size-4 animate-spin text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 66,
							columnNumber: 26
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-h-[54vh] overflow-y-auto px-2 pb-4",
					children: debounced.trim().length < 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-4 p-3",
						children: [recent.length > 0 && /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
							className: "mb-2 text-xs font-medium text-muted-foreground",
							children: "Recent searches"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 74,
							columnNumber: 19
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "flex flex-wrap gap-2",
							children: recent.map((r) => /* @__PURE__ */ (void 0)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setTerm(r),
								children: r
							}, r, false, {
								fileName: _jsxFileName$5,
								lineNumber: 77,
								columnNumber: 23
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 75,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 73,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mb-2 text-xs font-medium text-muted-foreground",
							children: "Popular searches"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 85,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap gap-2",
							children: POPULAR.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "secondary",
								size: "sm",
								onClick: () => setTerm(p),
								children: p
							}, p, false, {
								fileName: _jsxFileName$5,
								lineNumber: 88,
								columnNumber: 21
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 86,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 84,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 71,
						columnNumber: 13
					}, this) : (data?.length ?? 0) === 0 && !isFetching ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "p-6 text-center text-sm text-muted-foreground",
						children: "No match found in the starter database. Try a generic name such as “Paracetamol”."
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 96,
						columnNumber: 13
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "space-y-1",
						children: (data ?? []).map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => go(r.href, r.title),
							className: "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-accent",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
								variant: "outline",
								className: "mt-0.5 shrink-0 capitalize",
								children: r.kind
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 107,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "block truncate font-medium",
									children: r.title
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 111,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "block truncate text-xs text-muted-foreground",
									children: [r.subtitle, r.pronunciation ? ` • ${r.pronunciation}` : ""]
								}, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 112,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 110,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 103,
							columnNumber: 19
						}, this) }, `${r.kind}-${r.title}-${r.href}`, false, {
							fileName: _jsxFileName$5,
							lineNumber: 102,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 100,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 69,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 54,
		columnNumber: 5
	}, this);
}
var MAIN_NAV = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/medicines",
		label: "Medicines",
		icon: Pill
	},
	{
		to: "/classes",
		label: "Classes",
		icon: Dna
	},
	{
		to: "/manufacturers",
		label: "Pharma Companies",
		icon: Factory
	},
	{
		to: "/terms",
		label: "Medical Terms",
		icon: BookOpen
	},
	{
		to: "/memory",
		label: "Drug Memory",
		icon: Brain
	},
	{
		to: "/learn",
		label: "Learning Path",
		icon: GraduationCap
	},
	{
		to: "/study",
		label: "Study with AI",
		icon: Sparkles
	},
	{
		to: "/flashcards",
		label: "Flashcards",
		icon: Layers
	},
	{
		to: "/quiz",
		label: "Quiz",
		icon: ClipboardCheck
	},
	{
		to: "/pronunciation",
		label: "Pronunciation",
		icon: Volume2
	},
	{
		to: "/adme",
		label: "ADME",
		icon: FlaskConical
	},
	{
		to: "/compare",
		label: "Compare",
		icon: Scale
	},
	{
		to: "/favorites",
		label: "Favorites",
		icon: Star
	},
	{
		to: "/learning",
		label: "My Learning",
		icon: ChartColumn
	}
];
var SECONDARY_NAV = [
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	},
	{
		to: "/about",
		label: "About",
		icon: Info
	},
	{
		to: "/admin",
		label: "Admin",
		icon: ShieldCheck
	}
];
var MOBILE_NAV = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/medicines",
		label: "Medicines",
		icon: Pill
	},
	{
		to: "/classes",
		label: "Classes",
		icon: Dna
	},
	{
		to: "/flashcards",
		label: "Learn",
		icon: Layers
	},
	{
		to: "/learning",
		label: "Progress",
		icon: ChartColumn
	}
];
var APP_NAME = "MediVault India";
var APP_TAGLINE = "Medicine • Pharmacology • Learning • Reference";
var APP_VERSION = "1.0.0";
var DATASET_LABEL = "Starter / Common Medicine Database";
var DISCLAIMER = "Educational reference only. MediVault India does not replace a qualified doctor, pharmacist or other healthcare professional. Do not start, stop or change prescription medicines based solely on this application.";
var _jsxFileName$4 = "/app/applet/src/hooks/use-auth.tsx";
var AuthContext = (0, import_react.createContext)({
	user: null,
	session: null,
	loading: true,
	isAdmin: false
});
function AuthProvider({ children }) {
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
			setSession(s);
			setLoading(false);
		});
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setLoading(false);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	(0, import_react.useEffect)(() => {
		const uid = session?.user?.id;
		if (!uid) {
			setIsAdmin(false);
			return;
		}
		let active = true;
		supabase.from("user_roles").select("role").eq("user_id", uid).eq("role", "admin").maybeSingle().then(({ data }) => {
			if (active) setIsAdmin(!!data);
		});
		return () => {
			active = false;
		};
	}, [session?.user?.id]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthContext.Provider, {
		value: {
			user: session?.user ?? null,
			session,
			loading,
			isAdmin
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 58,
		columnNumber: 5
	}, this);
}
var useAuth = () => (0, import_react.useContext)(AuthContext);
var _jsxFileName$3 = "/app/applet/src/hooks/use-preferences.tsx";
var DEFAULTS = {
	theme: "system",
	language: "en",
	learningLevel: "beginner",
	speechSpeed: "normal",
	learningReminders: false,
	reviewReminders: false
};
var STORAGE_KEY = "medivault.prefs";
function readStored() {
	if (typeof window === "undefined") return DEFAULTS;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			const legacy = window.localStorage.getItem("medivault.theme");
			return legacy === "dark" || legacy === "light" ? {
				...DEFAULTS,
				theme: legacy
			} : DEFAULTS;
		}
		return {
			...DEFAULTS,
			...JSON.parse(raw)
		};
	} catch {
		return DEFAULTS;
	}
}
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	const dark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	document.documentElement.classList.toggle("dark", dark);
}
var PreferencesContext = (0, import_react.createContext)({
	prefs: DEFAULTS,
	setPref: () => {},
	isDark: false,
	toggleTheme: () => {},
	hydrated: false
});
function PreferencesProvider({ children }) {
	const [prefs, setPrefs] = (0, import_react.useState)(DEFAULTS);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [isDark, setIsDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = readStored();
		setPrefs(stored);
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
		applyTheme(prefs.theme);
		setIsDark(document.documentElement.classList.contains("dark"));
		if (prefs.theme !== "system") return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => {
			applyTheme("system");
			setIsDark(document.documentElement.classList.contains("dark"));
		};
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, [prefs, hydrated]);
	const value = (0, import_react.useMemo)(() => ({
		prefs,
		hydrated,
		isDark,
		setPref: (key, val) => setPrefs((p) => ({
			...p,
			[key]: val
		})),
		toggleTheme: () => setPrefs((p) => ({
			...p,
			theme: isDark ? "light" : "dark"
		}))
	}), [
		prefs,
		hydrated,
		isDark
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreferencesContext.Provider, {
		value,
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 104,
		columnNumber: 10
	}, this);
}
var usePreferences = () => (0, import_react.useContext)(PreferencesContext);
/** Speech rate used by pronunciation buttons, read outside React too. */
function storedSpeechRate(base = 1) {
	if (typeof window === "undefined") return base;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return base;
		return JSON.parse(raw).speechSpeed === "slow" ? Math.min(base, 1) * .6 : base;
	} catch {
		return base;
	}
}
var _jsxFileName$2 = "/app/applet/src/components/app-shell.tsx";
function NavList({ onNavigate }) {
	const { isAdmin } = useAuth();
	const items = [...MAIN_NAV, ...SECONDARY_NAV.filter((s) => s.to !== "/admin" || isAdmin)];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
		className: "flex flex-col gap-0.5",
		children: items.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to,
			onClick: onNavigate,
			activeOptions: { exact: to === "/" },
			activeProps: { className: "bg-sidebar-accent text-sidebar-accent-foreground font-medium" },
			className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
				className: "size-4 shrink-0",
				"aria-hidden": true
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 30,
				columnNumber: 11
			}, this), label]
		}, to, true, {
			fileName: _jsxFileName$2,
			lineNumber: 20,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
function AppShell({ children }) {
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const { isDark, toggleTheme } = usePreferences();
	const { user } = useAuth();
	const navigate = useNavigate();
	const qc = useQueryClient();
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				setSearchOpen(true);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "sticky top-0 z-40 border-b bg-background/85 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sheet, {
							open: menuOpen,
							onOpenChange: setMenuOpen,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "ghost",
									size: "icon",
									className: "lg:hidden",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 71,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 70,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 69,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetContent, {
								side: "left",
								className: "w-72 overflow-y-auto p-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SheetTitle, {
									className: "mb-4 font-display",
									children: APP_NAME
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 75,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavList, { onNavigate: () => setMenuOpen(false) }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 76,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 74,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 68,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stethoscope, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 82,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 81,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-sm leading-tight font-semibold sm:text-base",
								children: ["MediVault ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-primary",
									children: "India"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 85,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 84,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 80,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => setSearchOpen(true),
							className: "ml-auto flex h-9 max-w-md flex-1 items-center gap-2 rounded-full border bg-card px-3 text-sm text-muted-foreground transition-colors hover:bg-accent",
							"aria-label": "Search medicines",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 94,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "truncate",
								children: "Search medicine, brand, salt…"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 95,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 89,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: toggleTheme,
							"aria-label": "Toggle dark mode",
							children: isDark ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sun, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 99,
								columnNumber: 23
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Moon, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 99,
								columnNumber: 52
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 98,
							columnNumber: 11
						}, this),
						user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => void signOut(),
							"aria-label": "Sign out",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 109,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 103,
							columnNumber: 13
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "ghost",
							size: "icon",
							"aria-label": "Sign in",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/auth",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogIn, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 114,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 113,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 112,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 67,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 66,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto flex max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
					className: "sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r bg-sidebar p-4 lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavList, {}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 123,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-6 px-3 text-[11px] leading-relaxed text-muted-foreground",
						children: [
							APP_TAGLINE,
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 126,
								columnNumber: 13
							}, this),
							"v",
							APP_VERSION,
							" • Database v",
							"1.0"
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 124,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 122,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
					className: "animate-fade-up min-w-0 flex-1 px-4 pt-5 pb-28 sm:px-6 lg:pb-12",
					children
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 130,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 121,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t bg-background/95 backdrop-blur lg:hidden",
				"aria-label": "Primary",
				children: MOBILE_NAV.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to,
					activeOptions: { exact: to === "/" },
					activeProps: { className: "text-primary" },
					className: "flex flex-col items-center gap-1 py-2.5 text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {
						className: "size-5",
						"aria-hidden": true
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 147,
						columnNumber: 13
					}, this), label]
				}, to, true, {
					fileName: _jsxFileName$2,
					lineNumber: 140,
					columnNumber: 11
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 135,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlobalSearch, {
				open: searchOpen,
				onOpenChange: setSearchOpen
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 153,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 65,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/ui/sonner.tsx";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-6xl font-bold text-primary",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Oops! We couldn't find that page."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The link may be old or mistyped. Try the home page, or search for a medicine by generic name, brand name or salt."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The reference database could not be reached. Check your connection and try again."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 51,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 5
	}, this);
}
var Route$31 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "MediVault India — Medicine & Pharmacology Reference" },
			{
				name: "description",
				content: "Educational medicine reference and pharmacology learning platform for medicines used in India."
			},
			{
				name: "theme-color",
				content: "#0f766e"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 115,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 114,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 113,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$31.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreferencesProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 134,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 131,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toaster$1, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 137,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 130,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 129,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$27 = () => import("./routes-C9YZa2c8.mjs");
var Route$30 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "MediVault India — Medicine & Pharmacology Reference" },
		{
			name: "description",
			content: "Search medicines, brands, salts and drug classes. Learn pharmacology with ADME, flashcards, quizzes and pronunciations."
		},
		{
			property: "og:title",
			content: "MediVault India — Medicine & Pharmacology Reference"
		},
		{
			property: "og:description",
			content: "An educational medicine reference and pharmacology learning platform for medicines used in India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./route-CRRSyPUS.mjs");
var Route$29 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./about-Ci893uFb.mjs");
var Route$28 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About MediVault India — Our Approach to Medicine Data" },
		{
			name: "description",
			content: "What MediVault India is, which learning tools it offers, how medicine data is verified, and the references behind the starter database."
		},
		{
			property: "og:title",
			content: "About MediVault India"
		},
		{
			property: "og:description",
			content: "Medicine reference and pharmacology learning: Drug Memory, AI Explain, ADME, flashcards, quizzes and comparison."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./adme-BhsgPk7e.mjs");
var Route$27 = createFileRoute("/adme")({
	head: () => ({ meta: [
		{ title: "ADME & Pharmacokinetics — MediVault India" },
		{
			name: "description",
			content: "Absorption, distribution, metabolism and excretion explained simply, with per-medicine ADME data."
		},
		{
			property: "og:title",
			content: "ADME — MediVault India"
		},
		{
			property: "og:description",
			content: "Learn ADME, pharmacokinetics and pharmacodynamics."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./auth-BYXFck5K.mjs");
var Route$26 = createFileRoute("/auth")({
	validateSearch: (search) => search["mode"] === "signup" ? { mode: "signup" } : {},
	head: () => ({ meta: [
		{ title: "Sign In — MediVault India" },
		{
			name: "description",
			content: "Sign in to save favourites, track learning progress and keep your review schedule."
		},
		{
			property: "og:title",
			content: "Sign In — MediVault India"
		},
		{
			property: "og:description",
			content: "Access your MediVault India learning account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./compare-BfNYVCAq.mjs");
var searchSchema = objectType({ a: stringType().optional() });
var Route$25 = createFileRoute("/compare")({
	validateSearch: searchSchema,
	head: () => ({ meta: [
		{ title: "Compare Medicines — MediVault India" },
		{
			name: "description",
			content: "Compare two medicines side by side: class, mechanism, ADME, uses, adverse effects and interactions."
		},
		{
			property: "og:title",
			content: "Compare Medicines — MediVault India"
		},
		{
			property: "og:description",
			content: "Educational side-by-side medicine comparison."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var Route$24 = createFileRoute("/drug-memory")({ beforeLoad: () => {
	throw redirect({
		to: "/memory",
		replace: true
	});
} });
var $$splitComponentImporter$21 = () => import("./favorites-DlG8RBFl.mjs");
var Route$23 = createFileRoute("/favorites")({
	head: () => ({ meta: [
		{ title: "Favorites — MediVault India" },
		{
			name: "description",
			content: "Your saved medicines, drug classes and medical terms."
		},
		{
			property: "og:title",
			content: "Favorites — MediVault India"
		},
		{
			property: "og:description",
			content: "Your saved pharmacology reference items."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./flashcards-B279l9T7.mjs");
var Route$22 = createFileRoute("/flashcards")({
	head: () => ({ meta: [
		{ title: "Pharmacology Flashcards — MediVault India" },
		{
			name: "description",
			content: "Study pharmacology with flashcards and a simple spaced-repetition review schedule."
		},
		{
			property: "og:title",
			content: "Flashcards — MediVault India"
		},
		{
			property: "og:description",
			content: "Spaced-repetition pharmacology flashcards."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./learn-Du4Iv8hB.mjs");
var Route$21 = createFileRoute("/learn")({
	head: () => ({ meta: [
		{ title: "Pharmacology Learning Path — MediVault India" },
		{
			name: "description",
			content: "A structured pharmacology learning path from beginner foundations to system-wise student topics. Every topic opens in AI Study Mode."
		},
		{
			property: "og:title",
			content: "Pharmacology Learning Path — MediVault India"
		},
		{
			property: "og:description",
			content: "Beginner to student pharmacology, topic by topic."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./learning-B4g2Dvb7.mjs");
var Route$20 = createFileRoute("/learning")({
	head: () => ({ meta: [
		{ title: "My Learning — MediVault India" },
		{
			name: "description",
			content: "Track medicines learned, quiz scores, flashcard reviews and your study streak."
		},
		{
			property: "og:title",
			content: "My Learning — MediVault India"
		},
		{
			property: "og:description",
			content: "Your pharmacology learning dashboard."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var Route$19 = createFileRoute("/login")({ beforeLoad: () => {
	throw redirect({
		to: "/auth",
		replace: true
	});
} });
var $$splitComponentImporter$17 = () => import("./memory-CBN3bAm9.mjs");
var Route$18 = createFileRoute("/memory")({
	head: () => ({ meta: [
		{ title: "Drug Memory & Name Patterns — MediVault India" },
		{
			name: "description",
			content: "Learn drug classes faster with safe mnemonics and drug-name suffix patterns such as -pril, -sartan and -statin."
		},
		{
			property: "og:title",
			content: "Drug Memory — MediVault India"
		},
		{
			property: "og:description",
			content: "Mnemonics and drug-name suffix patterns."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./pronunciation-BPquSfIg.mjs");
var Route$17 = createFileRoute("/pronunciation")({
	head: () => ({ meta: [
		{ title: "Medicine Pronunciation — MediVault India" },
		{
			name: "description",
			content: "Hear and read English and Hindi-friendly pronunciations of common medicine names."
		},
		{
			property: "og:title",
			content: "Pronunciation — MediVault India"
		},
		{
			property: "og:description",
			content: "English and Hindi-friendly medicine pronunciations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./quiz-DoV2rnLa.mjs");
var Route$16 = createFileRoute("/quiz")({
	head: () => ({ meta: [
		{ title: "Pharmacology Quiz — MediVault India" },
		{
			name: "description",
			content: "Test your pharmacology knowledge: drug classes, mechanisms, ADME and medical terms."
		},
		{
			property: "og:title",
			content: "Quiz — MediVault India"
		},
		{
			property: "og:description",
			content: "10 and 20 question pharmacology quizzes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./reset-password-CqSW1CHE.mjs");
var Route$15 = createFileRoute("/reset-password")({
	head: () => ({ meta: [
		{ title: "Set a New Password — MediVault India" },
		{
			name: "description",
			content: "Choose a new password for your MediVault India learning account."
		},
		{
			property: "og:title",
			content: "Set a New Password — MediVault India"
		},
		{
			property: "og:description",
			content: "Securely update your MediVault India password."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./settings-DgRgh3wx.mjs");
var Route$14 = createFileRoute("/settings")({
	head: () => ({ meta: [
		{ title: "Settings — MediVault India" },
		{
			name: "description",
			content: "Manage your MediVault India account, appearance, language, learning level, pronunciation speed, reminders and privacy controls."
		},
		{
			property: "og:title",
			content: "Settings — MediVault India"
		},
		{
			property: "og:description",
			content: "Personalise appearance, language, learning level and privacy in MediVault India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var Route$13 = createFileRoute("/signup")({ beforeLoad: () => {
	throw redirect({
		to: "/auth",
		search: { mode: "signup" },
		replace: true
	});
} });
var $$splitComponentImporter$12 = () => import("./study-DSC9PGxf.mjs");
var Route$12 = createFileRoute("/study")({
	validateSearch: (s) => typeof s["topic"] === "string" ? { topic: s["topic"].slice(0, 120) } : {},
	head: () => ({ meta: [
		{ title: "Study with AI — MediVault India" },
		{
			name: "description",
			content: "Learn any medicine, drug class or pharmacology topic step by step with quizzes, flashcards and mnemonics grounded in the MediVault reference database."
		},
		{
			property: "og:title",
			content: "Study with AI — MediVault India"
		},
		{
			property: "og:description",
			content: "Explain, quiz, flashcard, mnemonic, simplify, compare and revise any topic."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./terms-DVTw89aq.mjs");
var Route$11 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Medical Dictionary — MediVault India" },
		{
			name: "description",
			content: "Medical and pharmacology terms explained in English, Hindi and Hinglish with pronunciation."
		},
		{
			property: "og:title",
			content: "Medical Dictionary — MediVault India"
		},
		{
			property: "og:description",
			content: "Pharmacology terms in English, Hindi and Hinglish."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitNotFoundComponentImporter$2 = () => import("./brands._id-EV_w49qA.mjs");
var $$splitErrorComponentImporter$2 = () => import("./brands._id-CIrguAkv.mjs");
var $$splitComponentImporter$10 = () => import("./brands._id-DXELS15K.mjs");
var Route$10 = createFileRoute("/brands/$id")({
	head: () => ({ meta: [
		{ title: "Brand Record — Manufacturer & Generic | MediVault India" },
		{
			name: "description",
			content: "Brand record showing the manufacturer, generic medicine, composition, strength, dosage form and verification status."
		},
		{
			property: "og:title",
			content: "Brand Record — MediVault India"
		},
		{
			property: "og:description",
			content: "Manufacturer, generic medicine, composition and verification status."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$2, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent")
});
var $$splitComponentImporter$9 = () => import("./classes.index-CJvhnXcU.mjs");
var Route$9 = createFileRoute("/classes/")({
	head: () => ({ meta: [
		{ title: "Drug Classes & Classification — MediVault India" },
		{
			name: "description",
			content: "Browse therapeutic and pharmacological drug classes with simple, Hindi and clinical explanations."
		},
		{
			property: "og:title",
			content: "Drug Classes — MediVault India"
		},
		{
			property: "og:description",
			content: "Therapeutic and pharmacological classification explained simply."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./classes._slug-B2nYZBGs.mjs");
var Route$8 = createFileRoute("/classes/$slug")({
	head: ({ params }) => {
		const name = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
		return { meta: [
			{ title: `${name} — Drug Class | MediVault India` },
			{
				name: "description",
				content: `${name}: definition, mechanism, uses, adverse effects and example medicines, explained simply and clinically.`
			},
			{
				property: "og:title",
				content: `${name} — MediVault India`
			},
			{
				property: "og:description",
				content: `Learn the ${name} drug class with examples.`
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitNotFoundComponentImporter$1 = () => import("./manufacturers.index-CDQOWvSh.mjs");
var $$splitErrorComponentImporter$1 = () => import("./manufacturers.index-CJEY97Lf.mjs");
var $$splitComponentImporter$7 = () => import("./manufacturers.index-CoNwL82q.mjs");
var Route$7 = createFileRoute("/manufacturers/")({
	head: () => ({ meta: [
		{ title: "Pharma Companies — Indian Manufacturer Directory | MediVault India" },
		{
			name: "description",
			content: "Browse Indian pharmaceutical companies and their recorded brands, with an explicit verification status for every entry."
		},
		{
			property: "og:title",
			content: "Pharma Companies — MediVault India"
		},
		{
			property: "og:description",
			content: "Indian pharmaceutical manufacturers, their brands and verification status."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var $$splitNotFoundComponentImporter = () => import("./manufacturers._id-Cx1-8JFU.mjs");
var $$splitErrorComponentImporter = () => import("./manufacturers._id-CqmsIMnd.mjs");
var $$splitComponentImporter$6 = () => import("./manufacturers._id-B6c28HGt.mjs");
var Route$6 = createFileRoute("/manufacturers/$id")({
	head: () => ({ meta: [
		{ title: "Company Profile — Brands & Medicines | MediVault India" },
		{
			name: "description",
			content: "Pharmaceutical company profile: recorded brands, the generic medicines they map to and the verification status of each record."
		},
		{
			property: "og:title",
			content: "Company Profile — MediVault India"
		},
		{
			property: "og:description",
			content: "Recorded brands, generic medicines and verification status for this company."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var $$splitComponentImporter$5 = () => import("./medicines.index-DfYdyhQ2.mjs");
var Route$5 = createFileRoute("/medicines/")({
	head: () => ({ meta: [
		{ title: "Medicines — MediVault India" },
		{
			name: "description",
			content: "Browse the starter database of commonly used medicines in India by category, generic name and salt."
		},
		{
			property: "og:title",
			content: "Medicines — MediVault India"
		},
		{
			property: "og:description",
			content: "Browse commonly used medicines by category, generic name and salt."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./medicines._slug-BsQexYaN.mjs");
var Route$4 = createFileRoute("/medicines/$slug")({
	head: ({ params }) => {
		const name = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
		return { meta: [
			{ title: `${name} — Medicine Profile | MediVault India` },
			{
				name: "description",
				content: `${name}: classification, mechanism of action, ADME, pharmacokinetics, uses, warnings and adverse effects — educational reference.`
			},
			{
				property: "og:title",
				content: `${name} — MediVault India`
			},
			{
				property: "og:description",
				content: `Pharmacology reference for ${name}: class, mechanism, ADME and clinical information.`
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./admin.index-Cb5Pe5qu.mjs");
var Route$3 = createFileRoute("/_authenticated/admin/")({
	head: () => ({ meta: [
		{ title: "Admin — Medicine Editor | MediVault India" },
		{
			name: "description",
			content: "Admin-only editor for the MediVault India medicine reference database."
		},
		{
			property: "og:title",
			content: "Admin — Medicine Editor"
		},
		{
			property: "og:description",
			content: "Manage medicines, brands and references."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin._id-DT2RaRFl.mjs");
var Route$2 = createFileRoute("/_authenticated/admin/$id")({
	head: () => ({ meta: [
		{ title: "Edit medicine — Admin | MediVault India" },
		{
			name: "description",
			content: "Admin-only medicine record editor."
		},
		{
			property: "og:title",
			content: "Edit medicine — Admin"
		},
		{
			property: "og:description",
			content: "Admin-only medicine record editor."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./admin.import-B9wIdilG.mjs");
var Route$1 = createFileRoute("/_authenticated/admin/import")({
	head: () => ({ meta: [
		{ title: "Admin — Import Medicines | MediVault India" },
		{
			name: "description",
			content: "Preview, validate and import medicine records from CSV or JSON."
		},
		{
			property: "og:title",
			content: "Admin — Import Medicines"
		},
		{
			property: "og:description",
			content: "CSV/JSON import with validation and preview."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin.manufacturers-BX3LIK2I.mjs");
var Route = createFileRoute("/_authenticated/admin/manufacturers")({
	head: () => ({ meta: [
		{ title: "Manufacturers — Admin | MediVault India" },
		{
			name: "description",
			content: "Admin-only pharmaceutical company records."
		},
		{
			property: "og:title",
			content: "Manufacturers — Admin"
		},
		{
			property: "og:description",
			content: "Admin-only pharmaceutical company records."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$30.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$31
});
var AuthenticatedRouteRoute = Route$29.update({
	id: "/_authenticated",
	getParentRoute: () => Route$31
});
var AboutRoute = Route$28.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$31
});
var AdmeRoute = Route$27.update({
	id: "/adme",
	path: "/adme",
	getParentRoute: () => Route$31
});
var AuthRoute = Route$26.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$31
});
var CompareRoute = Route$25.update({
	id: "/compare",
	path: "/compare",
	getParentRoute: () => Route$31
});
var DrugMemoryRoute = Route$24.update({
	id: "/drug-memory",
	path: "/drug-memory",
	getParentRoute: () => Route$31
});
var FavoritesRoute = Route$23.update({
	id: "/favorites",
	path: "/favorites",
	getParentRoute: () => Route$31
});
var FlashcardsRoute = Route$22.update({
	id: "/flashcards",
	path: "/flashcards",
	getParentRoute: () => Route$31
});
var LearnRoute = Route$21.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$31
});
var LearningRoute = Route$20.update({
	id: "/learning",
	path: "/learning",
	getParentRoute: () => Route$31
});
var LoginRoute = Route$19.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$31
});
var MemoryRoute = Route$18.update({
	id: "/memory",
	path: "/memory",
	getParentRoute: () => Route$31
});
var PronunciationRoute = Route$17.update({
	id: "/pronunciation",
	path: "/pronunciation",
	getParentRoute: () => Route$31
});
var QuizRoute = Route$16.update({
	id: "/quiz",
	path: "/quiz",
	getParentRoute: () => Route$31
});
var ResetPasswordRoute = Route$15.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$31
});
var SettingsRoute = Route$14.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$31
});
var SignupRoute = Route$13.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$31
});
var StudyRoute = Route$12.update({
	id: "/study",
	path: "/study",
	getParentRoute: () => Route$31
});
var TermsRoute = Route$11.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$31
});
var BrandsIdRoute = Route$10.update({
	id: "/brands/$id",
	path: "/brands/$id",
	getParentRoute: () => Route$31
});
var ClassesIndexRoute = Route$9.update({
	id: "/classes/",
	path: "/classes/",
	getParentRoute: () => Route$31
});
var ClassesSlugRoute = Route$8.update({
	id: "/classes/$slug",
	path: "/classes/$slug",
	getParentRoute: () => Route$31
});
var ManufacturersIndexRoute = Route$7.update({
	id: "/manufacturers/",
	path: "/manufacturers/",
	getParentRoute: () => Route$31
});
var ManufacturersIdRoute = Route$6.update({
	id: "/manufacturers/$id",
	path: "/manufacturers/$id",
	getParentRoute: () => Route$31
});
var MedicinesIndexRoute = Route$5.update({
	id: "/medicines/",
	path: "/medicines/",
	getParentRoute: () => Route$31
});
var MedicinesSlugRoute = Route$4.update({
	id: "/medicines/$slug",
	path: "/medicines/$slug",
	getParentRoute: () => Route$31
});
var AuthenticatedAdminIndexRoute = Route$3.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAdminIdRoute: Route$2.update({
		id: "/admin/$id",
		path: "/admin/$id",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedAdminImportRoute: Route$1.update({
		id: "/admin/import",
		path: "/admin/import",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedAdminManufacturersRoute: Route.update({
		id: "/admin/manufacturers",
		path: "/admin/manufacturers",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedAdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AdmeRoute,
	AuthRoute,
	CompareRoute,
	DrugMemoryRoute,
	FavoritesRoute,
	FlashcardsRoute,
	LearnRoute,
	LearningRoute,
	LoginRoute,
	MemoryRoute,
	PronunciationRoute,
	QuizRoute,
	ResetPasswordRoute,
	SettingsRoute,
	SignupRoute,
	StudyRoute,
	TermsRoute,
	BrandsIdRoute,
	ClassesSlugRoute,
	ManufacturersIdRoute,
	MedicinesSlugRoute,
	ClassesIndexRoute,
	ManufacturersIndexRoute,
	MedicinesIndexRoute
};
var routeTree = Route$31._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { mnemonicsQuery as A, DialogTrigger as B, manufacturersQuery as C, medicineQuery as D, medicineInteractionsQuery as E, Dialog as F, DialogContent as I, DialogDescription as L, suffixesQuery as M, termsQuery as N, medicineReferencesQuery as O, Input as P, DialogHeader as R, manufacturerQuery as S, medicineClassesQuery as T, drugClassQuery as _, Route$25 as a, manufacturerBrandsQuery as b, useAuth as c, APP_VERSION as d, DATASET_LABEL as f, classMedicinesQuery as g, brandQuery as h, Route$10 as i, quizQuery as j, medicinesQuery as k, APP_NAME as l, GlobalSearch as m, Route$2 as n, storedSpeechRate as o, DISCLAIMER as p, Route$6 as r, usePreferences as s, router_exports as t, APP_TAGLINE as u, drugClassesQuery as v, medicineBrandsQuery as w, manufacturerClassesQuery as x, flashcardsQuery as y, DialogTitle as z };
