import { a as objectType, i as literalType, n as booleanType, o as stringType, r as enumType, s as unionType, t as arrayType } from "../_libs/zod.mjs";
import { r as createServerFn } from "./server-BADUQpwq.mjs";
import { t as createSsrRpc } from "./createSsrRpc-JOw5HWmc.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-FoqcX4MC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-dYqNRDsI.js
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
createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("d7ab752d5c5280d2ee84a9875749b1cba0d95c7bbe892baa67e4f3368bfac36c"));
var saveMedicine = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => medicineSchema.parse(d)).handler(createSsrRpc("979f0e6c5d42dfe14fcd249ad665c48ba3aed926a883c1039eb45c7d2f6e184f"));
createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({ id: uuid }).parse(d)).handler(createSsrRpc("8a89e45d93c2647ed0abc3717c692e1ca254e79eb89352bdb7463c1612d5c8ad"));
var setMedicineStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid,
	status: enumType([
		"published",
		"draft",
		"archived"
	])
}).parse(d)).handler(createSsrRpc("65d49d6b28d2549a9120f218884cac2a979311cd51f24fbc7653182d33e2ae18"));
var VERIFICATION_STATES = [
	"draft",
	"under_review",
	"verified",
	"needs_update",
	"archived"
];
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
var saveBrand = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => brandSchema.parse(d)).handler(createSsrRpc("d16dfce9e3dbc33ae25e675ac0882987524ee2b654cd7346677ee901e9943680"));
var setBrandStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid,
	verification_status: enumType(VERIFICATION_STATES)
}).parse(d)).handler(createSsrRpc("a5d1534c8348cfcfaf8906e7abae92ad58cb60b1f397ee6e13e0d0bc718d225e"));
var setManufacturerStatus = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid,
	verification_status: enumType(VERIFICATION_STATES)
}).parse(d)).handler(createSsrRpc("d3c22143675fd2e1e1ec8e21a5025858f8751ab54c09c1f4ef3174e064cc7d46"));
var deleteBrand = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({ id: uuid }).parse(d)).handler(createSsrRpc("8a085013f7d7768ca3971119903abea591ee738c7baf79ed52049f6729d010ff"));
var saveManufacturer = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	id: uuid.optional(),
	name: stringType().trim().min(2).max(200),
	country: shortText,
	website: optionalUrl,
	status: enumType(["active", "inactive"]).default("active"),
	verification_status: enumType(VERIFICATION_STATES).default("under_review"),
	source: text,
	last_verified: isoDate
}).parse(d)).handler(createSsrRpc("ee51b8ebc1a2665af9f3ea7fac16b33ac51cd4c09045e26bc2b2c062523afa54"));
var setMedicineClasses = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	medicine_id: uuid,
	classes: arrayType(objectType({
		class_id: uuid,
		is_primary: booleanType()
	})).max(20)
}).parse(d)).handler(createSsrRpc("0db7dd063f6759ae5fdba627cadfba03d2beac07f9b66f829b896cbd6d7b2d9c"));
var saveReference = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	medicine_id: uuid,
	source_name: stringType().trim().min(2).max(300),
	source_type: shortText,
	source_url: optionalUrl,
	notes: text
}).parse(d)).handler(createSsrRpc("bffc1f49a1bfec2db46e099214563c9b2e76b30ad00c8fac7a64dad956702d2a"));
var unlinkReference = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
	medicine_id: uuid,
	reference_id: uuid
}).parse(d)).handler(createSsrRpc("61e40d9f0082d12124073047945fc0c4c5e83c97b593d0bfd3040ca69ed36ad0"));
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
var importMedicines = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({ rows: arrayType(importRowSchema).min(1).max(500) }).parse(d)).handler(createSsrRpc("322ba7f46dde3f314004b29bf6851da96fbbc05f5f55544add0d1b7b7fc0f551"));
createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => objectType({
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
}).refine((v) => v.status || v.verification_status, "Nothing to update").parse(d)).handler(createSsrRpc("74429b8650a46053b8183b8f79e882ab6adde4ff3281c19e2cd3178177f1c3e3"));
//#endregion
export { saveMedicine as a, setManufacturerStatus as c, unlinkReference as d, saveManufacturer as i, setMedicineClasses as l, importMedicines as n, saveReference as o, saveBrand as r, setBrandStatus as s, deleteBrand as t, setMedicineStatus as u };
