import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

function getRequiredEnvVar(name: string, value: unknown): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(
      `[Supabase Config Error]: Missing required environment variable: ${name}. Please verify VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are defined.`
    );
  }
  return value.trim();
}

const rawUrl =
  (typeof import.meta !== "undefined" && import.meta.env?.["VITE_SUPABASE_URL"]) ||
  (typeof process !== "undefined" && process.env?.["VITE_SUPABASE_URL"]) ||
  (typeof process !== "undefined" && process.env?.["SUPABASE_URL"]);

const rawKey =
  (typeof import.meta !== "undefined" && import.meta.env?.["VITE_SUPABASE_PUBLISHABLE_KEY"]) ||
  (typeof process !== "undefined" && process.env?.["VITE_SUPABASE_PUBLISHABLE_KEY"]);

export const SUPABASE_URL = getRequiredEnvVar("VITE_SUPABASE_URL", rawUrl);
export const SUPABASE_PUBLISHABLE_KEY = getRequiredEnvVar("VITE_SUPABASE_PUBLISHABLE_KEY", rawKey);

// Ensure client strictly uses only the public publishable key
export const supabase = createSupabaseClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export function createClient() {
  return createSupabaseClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}
