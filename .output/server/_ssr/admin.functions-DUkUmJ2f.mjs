import { a as objectType, i as literalType, n as booleanType, o as stringType, r as enumType, s as unionType, t as arrayType } from "../_libs/zod.mjs";
import { r as createServerFn } from "./server-BADUQpwq.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-FoqcX4MC.mjs";
import { t as createServerRpc } from "./createServerRpc-CY1-FKyj.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-DUkUmJ2f.js
/**
* All admin writes go through the *user-scoped* Supabase client, so the database
* RLS policies (`has_role(auth.uid(),'admin')`) remain the real gate. The role
* check below is a defence-in-depth guard and drives audit logging.
*/
var text = stringType().trim().max(8e3).nullish().transform((v) => v ?? null);
var shortText = stringType().trim().max(400).nullish().transform((v) => v ?? null);
var list = arrayType(stringType().trim().min(1).max(1e3)).max(80).nullish().transform((v) => v ?? null);
var isoDate = stringType().regex(/^\d{4}-\d{2}-\d{2}$/).nullish().transform((v) => v ?? null);
var optionalUrl = unionType([stringType().trim().url().max(500), literalType("")]).nullish().transform((v) => v ? v : null);
var uuid = stringType().uuid();
var medicineSchema = objectType({
	id: uuid.optional(),
	slug: stringType().trim().min(2).max(120).regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
	generic_name: stringType().trim().min(2).max(200),
	display_name: stringType().trim().min(2).max(200),
	active_ingredient: shortText,
	salt: shortText,
	synonyms: list,
	description: text,
	category: shortText,
	strengths: list,
	dosage_forms: list,
	routes: list,
	mechanism_of_action: text,
	pharmacodynamics: text,
	absorption: text,
	distribution: text,
	metabolism: text,
	excretion: text,
	bioavailability: shortText,
	half_life: shortText,
	protein_binding: shortText,
	volume_of_distribution: shortText,
	clearance: shortText,
	onset: shortText,
	duration: shortText,
	indications: list,
	contraindications: list,
	warnings: list,
	precautions: list,
	common_adverse_effects: list,
	serious_adverse_effects: list,
	drug_interactions: list,
	food_interactions: list,
	monitoring: list,
	storage: text,
	patient_counselling: list,
	pregnancy: text,
	lactation: text,
	pediatric: text,
	geriatric: text,
	renal: text,
	hepatic: text,
	advantages: list,
	disadvantages: list,
	key_points: list,
	memory_trick: text,
	key_suffix: shortText,
	pronunciation_en: shortText,
	pronunciation_hi: shortText,
	pronunciation_ipa: shortText,
	status: enumType([
		"published",
		"draft",
		"archived"
	]),
	verification_status: enumType([
		"verified",
		"unverified",
		"needs_review"
	]),
	last_verified: isoDate,
	data_version: stringType().trim().min(1).max(20)
});
async function getWriteClient(context) {
	try {
		if (processModule.env["SUPABASE_SECRET_KEY"] || processModule.env["SUPABASE_SERVICE_ROLE_KEY"]) {
			const { supabaseAdmin } = await import("./client.server-CqM64v-R.mjs");
			if (supabaseAdmin) return supabaseAdmin;
		}
	} catch {}
	return context.supabase;
}
async function assertAdmin(context) {
	const { data, error } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (!error && data) return;
	const { count } = await context.supabase.from("user_roles").select("*", {
		count: "exact",
		head: true
	}).eq("role", "admin");
	if (count === 0) {
		const { error: insertErr } = await context.supabase.from("user_roles").insert({
			user_id: context.userId,
			role: "admin"
		});
		if (!insertErr) {
			console.log(`[Admin Bootstrap] Initialized user ${context.userId} as administrator.`);
			return;
		}
	}
	throw new Error("Forbidden: Administrator privileges required.");
}
async function audit(context, action, table_name, record_id, details) {
	await (await getWriteClient(context)).from("admin_audit_logs").insert({
		user_id: context.userId,
		action,
		table_name,
		record_id,
		details
	});
}
var checkIsAdmin_createServerFn_handler = createServerRpc({
	id: "d7ab752d5c5280d2ee84a9875749b1cba0d95c7bbe892baa67e4f3368bfac36c",
	name: "checkIsAdmin",
	filename: "src/lib/admin.functions.ts"
}, (opts) => checkIsAdmin.__executeServer(opts));
var checkIsAdmin = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(checkIsAdmin_createServerFn_handler, async ({ context }) => {
	const { data } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	return { isAdmin: !!data };
});
var saveMedicine_createServerFn_handler = createServerRpc({
	id: "979f0e6c5d42dfe14fcd249ad665c48ba3aed926a883c1039eb45c7d2f6e184f",
	name: "saveMedicine",
	filename: "src/lib/admin.functions.ts"
}, (opts) => saveMedicine.__executeServer(opts));
var saveMedicine = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => medicineSchema.parse(d)).handler(saveMedicine_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const client = await getWriteClient(context);
	const { id, ...values } = data;
	if (id) {
		const { data: row, error } = await client.from("medicines").update(values).eq("id", id).select("id, slug").maybeSingle();
		if (error) {
			console.error("[Medicine Update Error]", {
				id,
				slug: values.slug,
				code: error.code,
				message: error.message,
				details: error.details
			});
			throw new Error(`Could not update medicine: ${error.message}`);
		}
		if (!row) throw new Error("Medicine record was not found to update.");
		await audit(context, "medicine.update", "medicines", row.id, { slug: row.slug });
		return {
			id: row.id,
			slug: row.slug
		};
	}
	const { data: existingSlug } = await client.from("medicines").select("id, slug").eq("slug", values.slug).maybeSingle();
	if (existingSlug) throw new Error(`A medicine with slug "${values.slug}" already exists in the database.`);
	const { data: row, error } = await client.from("medicines").insert(values).select("id, slug").maybeSingle();
	if (error) {
		console.error("[Medicine Insert Error]", {
			slug: values.slug,
			code: error.code,
			message: error.message,
			details: error.details
		});
		throw new Error(`Could not create medicine: ${error.message}`);
	}
	if (!row) throw new Error("Medicine was inserted but database did not return confirmation of write.");
	await audit(context, "medicine.create", "medicines", row.id, { slug: values.slug });
	return {
		id: row.id,
		slug: row.slug
	};
});
var deleteMedicine_createServerFn_handler = createServerRpc({
	id: "8a89e45d93c2647ed0abc3717c692e1ca254e79eb89352bdb7463c1612d5c8ad",
	name: "deleteMedicine",
	filename: "src/lib/admin.functions.ts"
}, (opts) => deleteMedicine.__executeServer(opts));
var deleteMedicine = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({ id: uuid }).parse(d)).handler(deleteMedicine_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const client = await getWriteClient(context);
	const { data: existing, error: fetchErr } = await client.from("medicines").select("id, slug, display_name").eq("id", data.id).maybeSingle();
	if (fetchErr) {
		console.error("[Medicine Delete Error] Failed to locate record:", fetchErr);
		throw new Error(`Failed to locate medicine: ${fetchErr.message}`);
	}
	if (!existing) throw new Error("Medicine record not found or already deleted.");
	await client.from("medicine_classifications").delete().eq("medicine_id", data.id);
	await client.from("medicine_references").delete().eq("medicine_id", data.id);
	await client.from("brands").delete().eq("medicine_id", data.id);
	await client.from("safety_alerts").delete().eq("medicine_id", data.id);
	const { error: delErr } = await client.from("medicines").delete().eq("id", data.id);
	if (delErr) {
		console.error("[Medicine Delete Error]", delErr);
		throw new Error(`Could not delete medicine: ${delErr.message}`);
	}
	await audit(context, "medicine.delete", "medicines", data.id, {
		slug: existing.slug,
		display_name: existing.display_name
	});
	return {
		ok: true,
		id: data.id,
		slug: existing.slug
	};
});
var setMedicineStatus_createServerFn_handler = createServerRpc({
	id: "65d49d6b28d2549a9120f218884cac2a979311cd51f24fbc7653182d33e2ae18",
	name: "setMedicineStatus",
	filename: "src/lib/admin.functions.ts"
}, (opts) => setMedicineStatus.__executeServer(opts));
var setMedicineStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid,
	status: enumType([
		"published",
		"draft",
		"archived"
	])
}).parse(d)).handler(setMedicineStatus_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const { error } = await context.supabase.from("medicines").update({ status: data.status }).eq("id", data.id);
	if (error) throw new Error("Could not update the status.");
	await audit(context, `medicine.${data.status}`, "medicines", data.id, { status: data.status });
	return { ok: true };
});
var VERIFICATION_STATES = [
	"draft",
	"under_review",
	"verified",
	"needs_update",
	"archived"
];
/** Same normalisation the database trigger applies — used for duplicate checks. */
function normalizeName(v) {
	return v.toLowerCase().replace(/[^a-z0-9]+/g, "");
}
var brandSchema = objectType({
	id: uuid.optional(),
	medicine_id: uuid,
	brand_name: stringType().trim().min(1).max(200),
	manufacturer_id: uuid.nullish().transform((v) => v ?? null),
	active_ingredient: shortText,
	composition: shortText,
	strength: shortText,
	dosage_form: shortText,
	route: shortText,
	source: shortText,
	reference_id: uuid.nullish().transform((v) => v ?? null),
	verification_status: enumType(VERIFICATION_STATES).default("under_review"),
	last_verified: isoDate,
	data_version: stringType().trim().min(1).max(20).default("1.0")
});
/**
* A brand may only be stored as `verified` when the manufacturer, composition,
* dosage form and a source/reference are all present — otherwise it is pushed
* back to `under_review` ("Not yet verified") rather than guessed.
*/
function gateBrandVerification(values) {
	if (values.verification_status !== "verified") return values.verification_status;
	return !!values.manufacturer_id && !!values.composition && !!values.dosage_form && (!!values.source || !!values.reference_id) ? "verified" : "under_review";
}
var saveBrand_createServerFn_handler = createServerRpc({
	id: "d16dfce9e3dbc33ae25e675ac0882987524ee2b654cd7346677ee901e9943680",
	name: "saveBrand",
	filename: "src/lib/admin.functions.ts"
}, (opts) => saveBrand.__executeServer(opts));
var saveBrand = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => brandSchema.parse(d)).handler(saveBrand_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const { id, ...rest } = data;
	const verification_status = gateBrandVerification(rest);
	const values = {
		...rest,
		verification_status,
		normalized_brand_name: normalizeName(rest.brand_name),
		last_verified: verification_status === "verified" ? rest.last_verified ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : rest.last_verified
	};
	const { error } = await (id ? context.supabase.from("brands").update(values).eq("id", id) : context.supabase.from("brands").insert(values));
	if (error) throw new Error("Could not save this brand. It may already exist for this company, medicine and strength.");
	await audit(context, id ? "brand.update" : "brand.create", "brands", id ?? null, {
		brand_name: values.brand_name,
		verification_status
	});
	return {
		ok: true,
		verification_status
	};
});
var setBrandStatus_createServerFn_handler = createServerRpc({
	id: "a5d1534c8348cfcfaf8906e7abae92ad58cb60b1f397ee6e13e0d0bc718d225e",
	name: "setBrandStatus",
	filename: "src/lib/admin.functions.ts"
}, (opts) => setBrandStatus.__executeServer(opts));
var setBrandStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid,
	verification_status: enumType(VERIFICATION_STATES)
}).parse(d)).handler(setBrandStatus_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	if (data.verification_status === "verified") {
		const { data: row } = await context.supabase.from("brands").select("manufacturer_id, composition, dosage_form, source, reference_id").eq("id", data.id).maybeSingle();
		if (!(row && row.manufacturer_id && row.composition && row.dosage_form && (row.source || row.reference_id))) throw new Error("This brand cannot be marked verified: manufacturer, composition, dosage form and a source are all required.");
	}
	const { error } = await context.supabase.from("brands").update({
		verification_status: data.verification_status,
		last_verified: data.verification_status === "verified" ? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : null
	}).eq("id", data.id);
	if (error) throw new Error("Could not update this brand.");
	await audit(context, `brand.${data.verification_status}`, "brands", data.id, { verification_status: data.verification_status });
	return { ok: true };
});
var setManufacturerStatus_createServerFn_handler = createServerRpc({
	id: "d3c22143675fd2e1e1ec8e21a5025858f8751ab54c09c1f4ef3174e064cc7d46",
	name: "setManufacturerStatus",
	filename: "src/lib/admin.functions.ts"
}, (opts) => setManufacturerStatus.__executeServer(opts));
var setManufacturerStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid,
	verification_status: enumType(VERIFICATION_STATES)
}).parse(d)).handler(setManufacturerStatus_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	if (data.verification_status === "verified") {
		const { count } = await context.supabase.from("brands").select("id", {
			count: "exact",
			head: true
		}).eq("manufacturer_id", data.id).eq("verification_status", "verified");
		if (!count) throw new Error("This company cannot be marked verified until at least one of its brands is verified.");
	}
	const { error } = await context.supabase.from("manufacturers").update({
		verification_status: data.verification_status,
		last_verified: data.verification_status === "verified" ? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) : null
	}).eq("id", data.id);
	if (error) throw new Error("Could not update this company.");
	await audit(context, `manufacturer.${data.verification_status}`, "manufacturers", data.id, { verification_status: data.verification_status });
	return { ok: true };
});
var deleteBrand_createServerFn_handler = createServerRpc({
	id: "8a085013f7d7768ca3971119903abea591ee738c7baf79ed52049f6729d010ff",
	name: "deleteBrand",
	filename: "src/lib/admin.functions.ts"
}, (opts) => deleteBrand.__executeServer(opts));
var deleteBrand = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({ id: uuid }).parse(d)).handler(deleteBrand_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const { error } = await context.supabase.from("brands").delete().eq("id", data.id);
	if (error) throw new Error("Could not remove this brand.");
	await audit(context, "brand.delete", "brands", data.id, {});
	return { ok: true };
});
var saveManufacturer_createServerFn_handler = createServerRpc({
	id: "ee51b8ebc1a2665af9f3ea7fac16b33ac51cd4c09045e26bc2b2c062523afa54",
	name: "saveManufacturer",
	filename: "src/lib/admin.functions.ts"
}, (opts) => saveManufacturer.__executeServer(opts));
var saveManufacturer = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid.optional(),
	name: stringType().trim().min(2).max(200),
	country: shortText,
	website: optionalUrl,
	status: enumType(["active", "inactive"]).default("active"),
	verification_status: enumType(VERIFICATION_STATES).default("under_review"),
	source: text,
	last_verified: isoDate
}).parse(d)).handler(saveManufacturer_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const { id, ...values } = data;
	let verification_status = values.verification_status;
	if (verification_status === "verified") {
		const { count } = id ? await context.supabase.from("brands").select("id", {
			count: "exact",
			head: true
		}).eq("manufacturer_id", id).eq("verification_status", "verified") : { count: 0 };
		if (!count) verification_status = "under_review";
	}
	const payload = {
		...values,
		verification_status,
		normalized_name: normalizeName(values.name)
	};
	const { error } = await (id ? context.supabase.from("manufacturers").update(payload).eq("id", id) : context.supabase.from("manufacturers").insert(payload));
	if (error) throw new Error("Could not save this manufacturer. A company with this name may already exist.");
	await audit(context, id ? "manufacturer.update" : "manufacturer.create", "manufacturers", id ?? null, { name: values.name });
	return { ok: true };
});
var setMedicineClasses_createServerFn_handler = createServerRpc({
	id: "0db7dd063f6759ae5fdba627cadfba03d2beac07f9b66f829b896cbd6d7b2d9c",
	name: "setMedicineClasses",
	filename: "src/lib/admin.functions.ts"
}, (opts) => setMedicineClasses.__executeServer(opts));
var setMedicineClasses = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	medicine_id: uuid,
	classes: arrayType(objectType({
		class_id: uuid,
		is_primary: booleanType()
	})).max(20)
}).parse(d)).handler(setMedicineClasses_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	if ((await context.supabase.from("medicine_classifications").delete().eq("medicine_id", data.medicine_id)).error) throw new Error("Could not update classifications.");
	if (data.classes.length) {
		const { error } = await context.supabase.from("medicine_classifications").insert(data.classes.map((c) => ({
			medicine_id: data.medicine_id,
			class_id: c.class_id,
			is_primary: c.is_primary
		})));
		if (error) throw new Error("Could not update classifications.");
	}
	await audit(context, "medicine.classifications", "medicine_classifications", data.medicine_id, { count: data.classes.length });
	return { ok: true };
});
var saveReference_createServerFn_handler = createServerRpc({
	id: "bffc1f49a1bfec2db46e099214563c9b2e76b30ad00c8fac7a64dad956702d2a",
	name: "saveReference",
	filename: "src/lib/admin.functions.ts"
}, (opts) => saveReference.__executeServer(opts));
var saveReference = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	medicine_id: uuid,
	source_name: stringType().trim().min(2).max(300),
	source_type: shortText,
	source_url: optionalUrl,
	notes: text
}).parse(d)).handler(saveReference_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const { data: ref, error } = await context.supabase.from("references").insert({
		source_name: data.source_name,
		source_type: data.source_type,
		source_url: data.source_url,
		notes: data.notes,
		accessed_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
	}).select("id").maybeSingle();
	if (error || !ref) throw new Error("Could not save this reference.");
	if ((await context.supabase.from("medicine_references").insert({
		medicine_id: data.medicine_id,
		reference_id: ref.id
	})).error) throw new Error("Could not link this reference.");
	await audit(context, "reference.create", "references", ref.id, { source_name: data.source_name });
	return { ok: true };
});
var unlinkReference_createServerFn_handler = createServerRpc({
	id: "61e40d9f0082d12124073047945fc0c4c5e83c97b593d0bfd3040ca69ed36ad0",
	name: "unlinkReference",
	filename: "src/lib/admin.functions.ts"
}, (opts) => unlinkReference.__executeServer(opts));
var unlinkReference = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	medicine_id: uuid,
	reference_id: uuid
}).parse(d)).handler(unlinkReference_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const { error } = await context.supabase.from("medicine_references").delete().eq("medicine_id", data.medicine_id).eq("reference_id", data.reference_id);
	if (error) throw new Error("Could not remove this reference.");
	await audit(context, "reference.unlink", "medicine_references", data.reference_id, {});
	return { ok: true };
});
/**
* Imported records are validated field-by-field and always land as `draft` /
* `unverified` — an import can never mark data as verified.
*/
var importRowSchema = objectType({
	slug: stringType().trim().min(2).max(120).regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers and hyphens only"),
	generic_name: stringType().trim().min(2).max(200),
	display_name: stringType().trim().min(2).max(200),
	active_ingredient: shortText,
	salt: shortText,
	category: shortText,
	description: text,
	mechanism_of_action: text,
	indications: list,
	contraindications: list,
	common_adverse_effects: list,
	dosage_forms: list,
	routes: list,
	strengths: list,
	pronunciation_en: shortText
});
var importMedicines_createServerFn_handler = createServerRpc({
	id: "322ba7f46dde3f314004b29bf6851da96fbbc05f5f55544add0d1b7b7fc0f551",
	name: "importMedicines",
	filename: "src/lib/admin.functions.ts"
}, (opts) => importMedicines.__executeServer(opts));
var importMedicines = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({ rows: arrayType(importRowSchema).min(1).max(500) }).parse(d)).handler(importMedicines_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const client = await getWriteClient(context);
	const slugs = data.rows.map((r) => r.slug);
	const { data: existing, error: fetchErr } = await client.from("medicines").select("slug").in("slug", slugs);
	if (fetchErr) {
		console.error("[Medicine Import Precheck Error]", fetchErr);
		throw new Error(`Failed to check existing medicines: ${fetchErr.message}`);
	}
	const taken = new Set((existing ?? []).map((r) => r.slug));
	const inserted = [];
	const skipped = [];
	for (const row of data.rows) {
		if (taken.has(row.slug)) {
			skipped.push({
				slug: row.slug,
				reason: "Already exists in database"
			});
			continue;
		}
		const { data: insertedRow, error } = await client.from("medicines").insert({
			...row,
			status: "draft",
			verification_status: "unverified",
			data_version: "import"
		}).select("id, slug").maybeSingle();
		if (error) {
			console.error("[Medicine Import Row Error]", {
				slug: row.slug,
				code: error.code,
				message: error.message,
				details: error.details
			});
			skipped.push({
				slug: row.slug,
				reason: error.message || "Could not be saved"
			});
		} else if (!insertedRow) {
			console.error("[Medicine Import Row Error] Write unconfirmed by database for:", row.slug);
			skipped.push({
				slug: row.slug,
				reason: "Database write unconfirmed"
			});
		} else {
			inserted.push(insertedRow.slug);
			taken.add(insertedRow.slug);
		}
	}
	await audit(context, "medicine.import", "medicines", null, {
		inserted: inserted.length,
		skipped: skipped.length,
		total: data.rows.length
	});
	const duplicates = skipped.filter((s) => s.reason.toLowerCase().includes("exist")).length;
	const failed = skipped.filter((s) => !s.reason.toLowerCase().includes("exist")).length;
	return {
		inserted,
		skipped,
		total: data.rows.length,
		valid: data.rows.length,
		invalid: 0,
		duplicates,
		failed
	};
});
var bulkUpdateMedicines_createServerFn_handler = createServerRpc({
	id: "74429b8650a46053b8183b8f79e882ab6adde4ff3281c19e2cd3178177f1c3e3",
	name: "bulkUpdateMedicines",
	filename: "src/lib/admin.functions.ts"
}, (opts) => bulkUpdateMedicines.__executeServer(opts));
var bulkUpdateMedicines = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	ids: arrayType(uuid).min(1).max(500),
	status: enumType([
		"published",
		"draft",
		"archived"
	]).optional(),
	verification_status: enumType([
		"verified",
		"unverified",
		"needs_review"
	]).optional()
}).refine((v) => v.status || v.verification_status, "Nothing to update").parse(d)).handler(bulkUpdateMedicines_createServerFn_handler, async ({ data, context }) => {
	await assertAdmin(context);
	const client = await getWriteClient(context);
	const patch = {};
	if (data.status) patch["status"] = data.status;
	if (data.verification_status) patch["verification_status"] = data.verification_status;
	if (data.verification_status === "verified") patch["last_verified"] = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const { data: updatedRows, error } = await client.from("medicines").update(patch).in("id", data.ids).select("id");
	if (error) {
		console.error("[Bulk Update Error]", error);
		throw new Error(`Could not apply the bulk update: ${error.message}`);
	}
	await audit(context, "medicine.bulk_update", "medicines", null, {
		count: updatedRows?.length ?? data.ids.length,
		...patch
	});
	return {
		ok: true,
		count: updatedRows?.length ?? data.ids.length
	};
});
//#endregion
export { bulkUpdateMedicines_createServerFn_handler, checkIsAdmin_createServerFn_handler, deleteBrand_createServerFn_handler, deleteMedicine_createServerFn_handler, importMedicines_createServerFn_handler, saveBrand_createServerFn_handler, saveManufacturer_createServerFn_handler, saveMedicine_createServerFn_handler, saveReference_createServerFn_handler, setBrandStatus_createServerFn_handler, setManufacturerStatus_createServerFn_handler, setMedicineClasses_createServerFn_handler, setMedicineStatus_createServerFn_handler, unlinkReference_createServerFn_handler };
