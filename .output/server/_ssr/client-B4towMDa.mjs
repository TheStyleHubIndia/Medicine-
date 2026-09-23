import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/client-B4towMDa.js
function brokeredPreviewStorage() {
	if (typeof window === "undefined") return void 0;
	const host = location.hostname;
	const onPreviewZone = [
		"lovableproject.com",
		"lovableproject-dev.com",
		"lovable.app",
		"gpt-eng.com",
		"gptengineer.run"
	].some((z) => host === z || host.endsWith("." + z));
	const UUID = "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";
	const projectId = onPreviewZone ? host.match(new RegExp("^(?:id-preview(?:-[a-z0-9]+)?|project)--(" + UUID + ")(?:-dev)?(?=\\.|$)", "i"))?.[1] ?? host.match(new RegExp("^(" + UUID + ")(?=[.-])", "i"))?.[1] : void 0;
	const framed = window.parent && window.parent !== window;
	if (!projectId || !framed) return localStorage;
	const dev = host.endsWith(".lovableproject-dev.com") || host.endsWith(".gpt-eng.com");
	const EDITOR = dev ? /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$|^http:\/\/localhost:3000$/ : /^https:\/\/([a-z0-9-]+\.)*(lovable\.dev|gptengineer\.app)$/;
	const ancestor = location.ancestorOrigins && location.ancestorOrigins[0] || (document.referrer ? new URL(document.referrer).origin : "");
	const editorOrigins = ancestor && EDITOR.test(ancestor) ? [ancestor] : dev ? ["https://lovable.dev", "http://localhost:3000"] : ["https://lovable.dev"];
	const RESULT = "lovable-preview-auth:result";
	const TIMEOUT = 2e3;
	const newId = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
	const request = (type, key, value) => new Promise((resolve) => {
		const requestId = newId();
		let done = false;
		let timer = void 0;
		const finish = (r) => {
			if (done) return;
			done = true;
			clearTimeout(timer);
			window.removeEventListener("message", onMessage);
			resolve(r);
		};
		const onMessage = (e) => {
			if (editorOrigins.indexOf(e.origin) < 0) return;
			const d = e.data;
			if (d && d.type === RESULT && d.requestId === requestId) finish(d);
		};
		window.addEventListener("message", onMessage);
		const msg = {
			type,
			requestId,
			projectId,
			key
		};
		if (value !== void 0) msg["value"] = value;
		for (const origin of editorOrigins) window.parent.postMessage(msg, origin);
		timer = setTimeout(() => finish(null), TIMEOUT);
	});
	let firstGet = true;
	const RETRY_DELAY = 250;
	return {
		getItem: async (key) => {
			let res = await request("lovable-preview-auth:get", key);
			if (!res && firstGet) {
				await new Promise((r) => setTimeout(r, RETRY_DELAY));
				res = await request("lovable-preview-auth:get", key);
			}
			firstGet = false;
			if (res && res.ok && typeof res.value === "string") {
				if (res.value === "") {
					localStorage.removeItem(key);
					return null;
				}
				return res.value;
			}
			return localStorage.getItem(key);
		},
		setItem: (key, value) => {
			localStorage.setItem(key, value);
			return request("lovable-preview-auth:set", key, value).then(() => void 0);
		},
		removeItem: (key) => {
			localStorage.removeItem(key);
			return request("lovable-preview-auth:remove", key).then(() => void 0);
		}
	};
}
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
function createSupabaseClient() {
	const rawUrlCandidate = typeof processModule !== "undefined" && processModule.env?.["NEXT_PUBLIC_SUPABASE_URL"] || {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_SWNfPQVmoVJWdeJfN6tN1w_TE6NF7eN",
		"VITE_SUPABASE_URL": "https://fgsmqccesuxxhitosztc.supabase.co"
	}["NEXT_PUBLIC_SUPABASE_URL"] || {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_SWNfPQVmoVJWdeJfN6tN1w_TE6NF7eN",
		"VITE_SUPABASE_URL": "https://fgsmqccesuxxhitosztc.supabase.co"
	}["VITE_SUPABASE_URL"] || typeof processModule !== "undefined" && processModule.env?.["SUPABASE_URL"] || typeof processModule !== "undefined" && processModule.env?.["VITE_SUPABASE_URL"];
	const rawKeyCandidate = typeof processModule !== "undefined" && processModule.env?.["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"] || {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_SWNfPQVmoVJWdeJfN6tN1w_TE6NF7eN",
		"VITE_SUPABASE_URL": "https://fgsmqccesuxxhitosztc.supabase.co"
	}["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"] || {
		"BASE_URL": "/",
		"DEV": true,
		"MODE": "production",
		"PROD": false,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_SWNfPQVmoVJWdeJfN6tN1w_TE6NF7eN",
		"VITE_SUPABASE_URL": "https://fgsmqccesuxxhitosztc.supabase.co"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || typeof processModule !== "undefined" && processModule.env?.["SUPABASE_PUBLISHABLE_KEY"] || typeof processModule !== "undefined" && processModule.env?.["VITE_SUPABASE_PUBLISHABLE_KEY"];
	let validUrl = sanitizeSupabaseUrl(rawUrlCandidate);
	let validKey = sanitizeSupabaseKey(rawKeyCandidate);
	if (!validUrl && sanitizeSupabaseUrl(rawKeyCandidate)) {
		validUrl = sanitizeSupabaseUrl(rawKeyCandidate);
		validKey = sanitizeSupabaseKey(rawUrlCandidate);
	}
	if (!validUrl || !validKey) {
		console.warn(`[Supabase] Missing or invalid Supabase URL/Key. Using safe fallback client.`);
		return createClient("https://placeholder.supabase.co", "placeholder-key", {
			global: { fetch: async () => new Response(JSON.stringify([]), {
				status: 200,
				headers: { "content-type": "application/json" }
			}) },
			auth: {
				persistSession: false,
				autoRefreshToken: false
			}
		});
	}
	return createClient(validUrl, validKey, {
		global: { fetch: createSupabaseFetch(validKey) },
		auth: {
			storage: brokeredPreviewStorage(),
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
