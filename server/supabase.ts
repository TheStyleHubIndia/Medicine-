import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabaseServerClient: SupabaseClient | null = null;

/**
 * Initializes and returns the server-side Supabase client using the server-only secret key.
 * This function must only be called from server-side code (never imported into client-side bundles).
 */
export function getSupabaseServerClient(): SupabaseClient {
  if (supabaseServerClient) {
    return supabaseServerClient;
  }

  const supabaseUrl = process.env.SUPABASE_URL || 'https://fgsmqccesuxxhitosztc.supabase.co';
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseSecretKey) {
    throw new Error(
      'SUPABASE_SECRET_KEY is required for server-side persistence operations but is not configured in the server environment.'
    );
  }

  supabaseServerClient = createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseServerClient;
}
