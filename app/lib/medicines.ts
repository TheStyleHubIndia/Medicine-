import { supabase } from "./supabase";
import type { Database } from "@/integrations/supabase/types";

export type Medicine = Database["public"]["Tables"]["medicines"]["Row"];
export type MedicineInsert = Database["public"]["Tables"]["medicines"]["Insert"];
export type MedicineUpdate = Database["public"]["Tables"]["medicines"]["Update"];

export type MedicineListItem = Pick<
  Medicine,
  | "id"
  | "slug"
  | "generic_name"
  | "display_name"
  | "salt"
  | "active_ingredient"
  | "category"
  | "description"
  | "pronunciation_en"
  | "key_suffix"
  | "verification_status"
>;

/**
 * List medicines, optionally filtered by category or limited.
 */
export async function listMedicines(options?: {
  category?: string;
  limit?: number;
  offset?: number;
}): Promise<MedicineListItem[]> {
  let query = supabase
    .from("medicines")
    .select(
      "id, slug, generic_name, display_name, salt, active_ingredient, category, description, pronunciation_en, key_suffix, verification_status"
    )
    .order("generic_name", { ascending: true });

  if (options?.category) {
    query = query.eq("category", options.category);
  }

  if (typeof options?.offset === "number") {
    const limit = options?.limit ?? 50;
    query = query.range(options.offset, options.offset + limit - 1);
  } else if (typeof options?.limit === "number") {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  if (error) {
    throw new Error(`[Supabase listMedicines Error]: ${error.message}`);
  }

  return (data as MedicineListItem[]) ?? [];
}

/**
 * Fetch a single medicine by its unique slug.
 */
export async function getMedicineBySlug(slug: string): Promise<Medicine | null> {
  if (!slug || !slug.trim()) return null;

  const { data, error } = await supabase
    .from("medicines")
    .select("*")
    .eq("slug", slug.trim())
    .maybeSingle();

  if (error) {
    throw new Error(`[Supabase getMedicineBySlug Error]: ${error.message}`);
  }

  return data;
}

/**
 * Search medicines across generic_name, display_name, salt, active_ingredient, and category.
 */
export async function searchMedicines(queryText: string, limit: number = 30): Promise<MedicineListItem[]> {
  const clean = queryText.trim().replace(/[,()"'*%\\]/g, " ");
  if (!clean || clean.length < 1) {
    return listMedicines({ limit });
  }

  const pattern = `%${clean}%`;
  const { data, error } = await supabase
    .from("medicines")
    .select(
      "id, slug, generic_name, display_name, salt, active_ingredient, category, description, pronunciation_en, key_suffix, verification_status"
    )
    .or(
      `generic_name.ilike.${pattern},display_name.ilike.${pattern},salt.ilike.${pattern},active_ingredient.ilike.${pattern},category.ilike.${pattern}`
    )
    .order("generic_name", { ascending: true })
    .limit(limit);

  if (error) {
    throw new Error(`[Supabase searchMedicines Error]: ${error.message}`);
  }

  return (data as MedicineListItem[]) ?? [];
}

/**
 * Create a new medicine record.
 * Governed by Supabase RLS (requires authenticated admin role in production).
 */
export async function createMedicine(input: MedicineInsert): Promise<Medicine> {
  const { data, error } = await supabase
    .from("medicines")
    .insert(input)
    .select()
    .single();

  if (error) {
    throw new Error(`[Supabase createMedicine Error]: ${error.message}`);
  }

  return data;
}

/**
 * Update an existing medicine record by slug.
 * Governed by Supabase RLS (requires authenticated admin role in production).
 */
export async function updateMedicine(slug: string, input: MedicineUpdate): Promise<Medicine> {
  const { data, error } = await supabase
    .from("medicines")
    .update(input)
    .eq("slug", slug)
    .select()
    .single();

  if (error) {
    throw new Error(`[Supabase updateMedicine Error]: ${error.message}`);
  }

  return data;
}

/**
 * Delete a medicine record by slug.
 * Governed by Supabase RLS (requires authenticated admin role in production).
 */
export async function deleteMedicine(slug: string): Promise<void> {
  const { error } = await supabase
    .from("medicines")
    .delete()
    .eq("slug", slug);

  if (error) {
    throw new Error(`[Supabase deleteMedicine Error]: ${error.message}`);
  }
}
