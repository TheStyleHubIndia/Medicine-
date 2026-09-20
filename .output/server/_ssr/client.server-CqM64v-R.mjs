import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/client.server-CqM64v-R.js
function sanitizeSupabaseUrl(rawUrl) {
	if (typeof rawUrl !== "string" || !rawUrl.trim()) return null;
	let val = rawUrl.trim();
	const urlMatch = val.match(/https?:\/\/[^\s"',;]+/);
	if (urlMatch) val = urlMatch[0];
	try {
		const parsed = new URL(val);
		if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.origin;
	} catch {}
	return null;
}
function sanitizeSupabaseKey(rawKey) {
	if (typeof rawKey !== "string" || !rawKey.trim()) return null;
	let val = rawKey.trim();
	if (val.includes("=")) val = val.split("=").pop()?.trim() || val;
	if (val.startsWith("http://") || val.startsWith("https://")) return null;
	val = val.replace(/^['"]+|['";]+$/g, "").trim();
	return val.length > 5 ? val : null;
}
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseAdminClient() {
	const rawUrl = processModule.env["NEXT_PUBLIC_SUPABASE_URL"] || processModule.env["SUPABASE_URL"] || processModule.env["VITE_SUPABASE_URL"];
	const rawSecret = processModule.env["SUPABASE_SECRET_KEY"] || processModule.env["SUPABASE_SERVICE_ROLE_KEY"];
	const validUrl = sanitizeSupabaseUrl(rawUrl);
	const validSecret = sanitizeSupabaseKey(rawSecret);
	if (!validUrl || !validSecret) {
		console.warn(`[Supabase] Missing or invalid Supabase admin URL/Key. Using safe fallback admin client.`);
		return createClient("https://placeholder.supabase.co", "placeholder-service-key", {
			global: { fetch: async () => new Response(JSON.stringify([]), {
				status: 200,
				headers: { "content-type": "application/json" }
			}) },
			auth: {
				storage: void 0,
				persistSession: false,
				autoRefreshToken: false
			}
		});
	}
	return createClient(validUrl, validSecret, {
		global: { fetch: createSupabaseFetch(validSecret) },
		auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		}
	});
}
var _supabaseAdmin;
var supabaseAdmin = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
	return Reflect.get(_supabaseAdmin, prop, receiver);
} });
//#endregion
export { supabaseAdmin };
