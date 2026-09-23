import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { o as getRequest } from "./server-BADUQpwq.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-rate-limit.server-DqOamu4g.js
/** Identify the caller without weakening auth: a valid bearer token upgrades the quota. */
async function identifyCaller() {
	const request = getRequest();
	const auth = request?.headers.get("authorization") ?? "";
	const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
	if (token && token.split(".").length === 3) {
		const url = processModule.env["SUPABASE_URL"];
		const key = processModule.env["SUPABASE_PUBLISHABLE_KEY"];
		if (url && key) try {
			const { data } = await createClient(url, key, { auth: {
				storage: void 0,
				persistSession: false,
				autoRefreshToken: false
			} }).auth.getClaims(token);
			const sub = data?.claims?.sub;
			if (sub) return {
				key: `user:${sub}`,
				scope: "user"
			};
		} catch {}
	}
	return {
		key: `anon:${(request?.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim() || request?.headers.get("cf-connecting-ip") || request?.headers.get("x-real-ip") || "unknown"}`,
		scope: "anonymous"
	};
}
var LIMITS = {
	user: {
		limit: 40,
		windowSeconds: 3600,
		minIntervalMs: 1500
	},
	anonymous: {
		limit: 10,
		windowSeconds: 3600,
		minIntervalMs: 4e3
	}
};
/** Server-side rate limit backed by a private table; never reachable from the browser. */
async function checkAiRateLimit() {
	const { key, scope } = await identifyCaller();
	const cfg = LIMITS[scope];
	try {
		const { supabaseAdmin } = await import("./client.server-CqM64v-R.mjs");
		const { data, error } = await supabaseAdmin.rpc("consume_ai_rate_limit", {
			_key: key,
			_limit: cfg.limit,
			_window_seconds: cfg.windowSeconds,
			_min_interval_ms: cfg.minIntervalMs
		});
		if (error) {
			console.error("[ai-rate-limit]", error.message);
			return {
				allowed: true,
				scope
			};
		}
		const result = data;
		if (result?.allowed) return {
			allowed: true,
			scope
		};
		if (result?.reason === "too_fast") return {
			allowed: false,
			message: "That was quick — please wait a moment before asking again."
		};
		return {
			allowed: false,
			message: scope === "anonymous" ? "You have reached the hourly limit for explanations. Sign in for a higher limit, or try again later." : "You have reached the hourly limit for explanations. Please try again later."
		};
	} catch (e) {
		console.error("[ai-rate-limit]", e);
		return {
			allowed: true,
			scope
		};
	}
}
//#endregion
export { checkAiRateLimit };
