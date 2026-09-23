import { t as GoogleGenAI } from "../_libs/google__genai+p-retry+retry.mjs";
import processModule from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/gemini.server-CsgMH8ik.js
if (typeof window !== "undefined") throw new Error("src/lib/gemini.server.ts must only be run in a server-side environment.");
var geminiClient = null;
function getGeminiClient() {
	const apiKey = processModule.env["GEMINI_API_KEY"];
	if (!apiKey) throw new Error("GEMINI_API_KEY is not configured in the server environment.");
	if (!geminiClient) geminiClient = new GoogleGenAI({
		apiKey,
		httpOptions: { headers: { "User-Agent": "aistudio-build" } }
	});
	return geminiClient;
}
/**
* Executes a text generation request using the official @google/genai SDK on the server.
* Standardizes responses and error recovery for pharmacology explanations and study modes.
*/
async function generateGeminiContent(options) {
	if (!processModule.env["GEMINI_API_KEY"]) return {
		ok: false,
		errorMessage: "Gemini API key is not configured on the server. Please ensure GEMINI_API_KEY is set in Settings > Secrets."
	};
	const modelsToTry = [options.model ?? "gemini-3.8-flash", "gemini-flash-latest"];
	const client = getGeminiClient();
	let lastError = null;
	for (const model of modelsToTry) try {
		const text = (await client.models.generateContent({
			model,
			contents: options.prompt,
			config: {
				...options.systemInstruction ? { systemInstruction: options.systemInstruction } : {},
				...typeof options.temperature === "number" ? { temperature: options.temperature } : { temperature: .2 }
			}
		})).text?.trim();
		if (text) return {
			ok: true,
			text
		};
	} catch (error) {
		lastError = error;
		const errStr = String(error);
		if (errStr.includes("403") || errStr.includes("429")) break;
		console.warn(`[Gemini Service] Model ${model} failed, attempting next model...`, errStr);
	}
	console.error("[Gemini Service Error]", lastError);
	const errorStr = String(lastError);
	if (errorStr.includes("429") || errorStr.toLowerCase().includes("quota") || errorStr.toLowerCase().includes("rate limit")) return {
		ok: false,
		errorMessage: "Too many requests just now. Please try again in a moment."
	};
	if (errorStr.includes("403") || errorStr.toLowerCase().includes("permission") || errorStr.toLowerCase().includes("api key not valid")) return {
		ok: false,
		errorMessage: "Gemini API authentication failed. Please check the API key configuration."
	};
	return {
		ok: false,
		errorMessage: "The pharmacology explanation assistant is momentarily unavailable. Please try again."
	};
}
//#endregion
export { generateGeminiContent };
