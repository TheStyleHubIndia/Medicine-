import { a as objectType, o as stringType, r as enumType } from "../_libs/zod.mjs";
import { r as createServerFn } from "./server-BADUQpwq.mjs";
import { n as STUDY_MODE_KEYS } from "./ai-study-tXIAnpE8.mjs";
import { t as createServerRpc } from "./createServerRpc-CY1-FKyj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai.functions-DYiBt1r3.js
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
var MODE_INSTRUCTIONS = {
	simple: "Explain in very simple English, 3-5 short sentences, for a complete beginner.",
	hindi: "Explain in Hindi (Devanagari script), simple everyday language, 3-5 short sentences. Keep drug names in their usual English form.",
	hinglish: "Explain in Hinglish (Roman script, mixed Hindi-English), casual and clear.",
	student: "Explain for a pharmacy or medical student: mechanism, class, key clinical points. Use short bullet lines.",
	detailed: "Give a detailed reference-style explanation covering mechanism, pharmacokinetics and clinical relevance. Use short bullet lines."
};
async function callAiAssistant(system, user) {
	try {
		const { generateGeminiContent } = await import("./gemini.server-NKFmiKzW.mjs");
		return await generateGeminiContent({
			systemInstruction: system,
			prompt: user,
			temperature: .2
		});
	} catch (error) {
		console.error("[AI Function Handler Error]", error);
		return {
			ok: false,
			errorMessage: "The explanation assistant could not be reached."
		};
	}
}
var explainTopic_createServerFn_handler = createServerRpc({
	id: "ff37c279ad20471a2156865fd2e6b736184b1b277d305f65dc49d35d77e50275",
	name: "explainTopic",
	filename: "src/lib/ai.functions.ts"
}, (opts) => explainTopic.__executeServer(opts));
var explainTopic = createServerFn({ method: "POST" }).inputValidator((d) => schema.parse(d)).handler(explainTopic_createServerFn_handler, async ({ data }) => {
	const { checkAiRateLimit } = await import("./ai-rate-limit.server-DqOamu4g.mjs");
	const verdict = await checkAiRateLimit();
	if (!verdict.allowed) return {
		text: verdict.message,
		ok: false
	};
	const result = await callAiAssistant([
		"You are the explanation assistant inside MediVault India, an educational pharmacology reference app.",
		"Rules you must follow strictly:",
		"1. Explain only the reference data provided below plus well-established, textbook-level pharmacology.",
		"2. Never invent doses, brand compositions, drug interactions or contraindications. If the reference data does not contain it, say: 'Information could not be verified from the available reference data.'",
		"3. Never diagnose, never give individualised prescribing advice. For clinically consequential questions, advise consulting a qualified healthcare professional.",
		"4. Keep it educational and concise. No markdown headings, no tables.",
		MODE_INSTRUCTIONS[data.mode]
	].join("\n"), data.context ? `Topic: ${data.topic}\n\nVerified reference data from the MediVault database:\n${data.context}` : `Topic: ${data.topic}\n\n(No database record was supplied; keep to general textbook pharmacology and say clearly when something cannot be verified.)`);
	if (!result.ok || !result.text) return {
		text: result.errorMessage ?? "No explanation could be generated.",
		ok: false
	};
	return {
		text: result.text,
		ok: true
	};
});
var studySchema = objectType({
	topic: stringType().min(1).max(200),
	mode: enumType(STUDY_MODE_KEYS),
	extraContext: stringType().max(6e3).default("")
});
var studyWithAi_createServerFn_handler = createServerRpc({
	id: "058d2a2071c4339b3b1f72b28f91fb5be9ed8728e6f3c72e98af208ca5b66831",
	name: "studyWithAi",
	filename: "src/lib/ai.functions.ts"
}, (opts) => studyWithAi.__executeServer(opts));
var studyWithAi = createServerFn({ method: "POST" }).inputValidator((d) => studySchema.parse(d)).handler(studyWithAi_createServerFn_handler, async ({ data }) => {
	const { checkAiRateLimit } = await import("./ai-rate-limit.server-DqOamu4g.mjs");
	const verdict = await checkAiRateLimit();
	if (!verdict.allowed) return {
		text: verdict.message,
		ok: false
	};
	const { retrieveContext } = await import("./ai-retrieval.server-BuaBs4Vo.mjs");
	let retrieved = "";
	try {
		retrieved = await retrieveContext(data.topic);
	} catch {
		retrieved = "";
	}
	const modeInstruction = {
		explain: "Teach the topic step by step: 1) What is it 2) Examples 3) Mechanism 4) Uses 5) Adverse effects 6) Important precautions 7) Memory trick. Short numbered lines.",
		quiz: "Write 5 multiple-choice questions with options A-D, then an ANSWERS section with the correct option and a one-line explanation for each.",
		flashcard: "Write 6 flashcards in the form 'Front: ...' then 'Back: ...' on separate lines. Keep each side to one short sentence.",
		mnemonic: "Give 2-3 memory aids or mnemonics with a one-line explanation of each. State clearly that mnemonics are learning aids, not classification rules.",
		simplify: "Explain in very simple English for a complete beginner, 4-6 short sentences, no jargon.",
		compare: "Compare the items in the topic point by point: mechanism, uses, key differences, adverse effects, and when one is preferred. Short lines.",
		revise: "Give a high-yield revision recap: 8-10 crisp bullet lines a student can revise in one minute."
	};
	const system = [
		"You are the AI Study Mode tutor inside MediVault India, an educational pharmacology reference app.",
		"Rules you must follow strictly:",
		"1. Teach from the retrieved database record below plus well-established textbook pharmacology only.",
		"2. Never invent doses, brand compositions, interactions or contraindications. If it is not in the retrieved data, say: 'Information could not be verified from the available reference data.'",
		"3. Never diagnose and never give individualised prescribing advice.",
		"4. Anything not present in the retrieved record must be presented as general textbook teaching, not as a verified MediVault fact.",
		"5. Plain text only. No markdown headings, no tables.",
		modeInstruction[data.mode] ?? modeInstruction["explain"]
	].join("\n");
	const grounding = [retrieved, data.extraContext].filter(Boolean).join("\n");
	const result = await callAiAssistant(system, grounding ? `Topic: ${data.topic}\n\nRetrieved MediVault database record:\n${grounding}` : `Topic: ${data.topic}\n\n(No database record matched; keep to general textbook pharmacology and say clearly when something cannot be verified.)`);
	if (!result.ok || !result.text) return {
		text: result.errorMessage ?? "No study material could be generated.",
		ok: false
	};
	return {
		text: result.text,
		ok: true,
		grounded: retrieved.length > 0
	};
});
//#endregion
export { explainTopic_createServerFn_handler, studyWithAi_createServerFn_handler };
