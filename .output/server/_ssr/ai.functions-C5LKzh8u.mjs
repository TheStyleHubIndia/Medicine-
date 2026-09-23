import { a as objectType, o as stringType, r as enumType } from "../_libs/zod.mjs";
import { r as createServerFn } from "./server-BADUQpwq.mjs";
import { t as createSsrRpc } from "./createSsrRpc-JOw5HWmc.mjs";
import { n as STUDY_MODE_KEYS } from "./ai-study-tXIAnpE8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai.functions-C5LKzh8u.js
var schema = objectType({
	topic: stringType().min(1).max(200),
	context: stringType().max(8e3).default(""),
	mode: enumType([
		"simple",
		"hindi",
		"hinglish",
		"student",
		"detailed"
	]).default("simple")
});
var explainTopic = createServerFn({ method: "POST" }).inputValidator((d) => schema.parse(d)).handler(createSsrRpc("ff37c279ad20471a2156865fd2e6b736184b1b277d305f65dc49d35d77e50275"));
var studySchema = objectType({
	topic: stringType().min(1).max(200),
	mode: enumType(STUDY_MODE_KEYS),
	extraContext: stringType().max(6e3).default("")
});
var studyWithAi = createServerFn({ method: "POST" }).inputValidator((d) => studySchema.parse(d)).handler(createSsrRpc("058d2a2071c4339b3b1f72b28f91fb5be9ed8728e6f3c72e98af208ca5b66831"));
//#endregion
export { studyWithAi as n, explainTopic as t };
