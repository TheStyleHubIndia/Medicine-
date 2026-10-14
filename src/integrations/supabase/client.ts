// This file is generated from the project's Supabase client configuration.
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";
import { brokeredPreviewStorage } from "./previewAuthStorage";

function sanitizeSupabaseUrl(rawUrl?: unknown): string | null {
  if (typeof rawUrl !== "string" || !rawUrl.trim()) return null;
  let val = rawUrl.trim();
  const urlMatch = val.match(/https?:\/\/[^\s"',;]+/);
  if (urlMatch) val = urlMatch[0];

  try {
    const parsed = new URL(val);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return parsed.origin;
    }
  } catch {
    // Invalid URL format.
  }
  return null;
}

function sanitizeSupabaseKey(rawKey?: unknown): string | null {
  if (typeof rawKey !== "string" || !rawKey.trim()) return null;
  let val = rawKey.trim();
  if (val.includes("=")) val = val.split("=").pop()?.trim() || val;
  if (val.startsWith("http://") || val.startsWith("https://")) return null;
  val = val.replace(/^['"]+|['";]+$/g, "").trim();
  return val.length > 5 ? val : null;
}

function isPublishableApiKey(value: string): boolean {
  return value.startsWith("sb_publishable_");
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    // Supabase publishable keys are opaque strings, not JWT bearer tokens.
    if (
      isPublishableApiKey(supabaseKey) &&
      headers.get("Authorization") === `Bearer ${supabaseKey}`
    ) {
      headers.delete("Authorization");
    }

    headers.set("apikey", supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

function createSupabaseClient() {
  const rawUrlCandidate =
    (typeof process !== "undefined" && process.env?.["NEXT_PUBLIC_SUPABASE_URL"]) ||
    import.meta.env["NEXT_PUBLIC_SUPABASE_URL"] ||
    import.meta.env["VITE_SUPABASE_URL"] ||
    (typeof process !== "undefined" && process.env?.["SUPABASE_URL"]) ||
    (typeof process !== "undefined" && process.env?.["VITE_SUPABASE_URL"]);

  const rawKeyCandidate =
    (typeof process !== "undefined" && process.env?.["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"]) ||
    import.meta.env["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"] ||
    import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
    (typeof process !== "undefined" && process.env?.["SUPABASE_PUBLISHABLE_KEY"]) ||
    (typeof process !== "undefined" && process.env?.["VITE_SUPABASE_PUBLISHABLE_KEY"]);

  let validUrl = sanitizeSupabaseUrl(rawUrlCandidate);
  let validKey = sanitizeSupabaseKey(rawKeyCandidate);

  // Recover from accidentally swapped values, but never use a fake/offline client.
  if (!validUrl && sanitizeSupabaseUrl(rawKeyCandidate)) {
    validUrl = sanitizeSupabaseUrl(rawKeyCandidate);
    validKey = sanitizeSupabaseKey(rawUrlCandidate);
  }

  if (!validUrl || !validKey) {
    throw new Error(
      "[Supabase Config Error] Missing or invalid VITE_SUPABASE_URL or VITE_SUPABASE_PUBLISHABLE_KEY. " +
        "The app will not return fake empty medicine results. Configure the public Supabase URL and publishable/anon key, then rebuild.",
    );
  }

  if (validKey.startsWith("sb_secret_")) {
    throw new Error(
      "[Supabase Config Error] A Supabase secret key must never be used in browser code. " +
        "Use VITE_SUPABASE_PUBLISHABLE_KEY with a publishable key or legacy anon key.",
    );
  }

  return createClient<Database>(validUrl, validKey, {
    global: {
      fetch: createSupabaseFetch(validKey),
    },
    auth: {
      storage: brokeredPreviewStorage(),
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}

let _supabase: ReturnType<typeof createSupabaseClient> | undefined;

export const supabase = new Proxy({} as ReturnType<typeof createSupabaseClient>, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  },
});
