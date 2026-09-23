import { supabase } from "@/lib/supabase-client";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export interface PersistenceTestResults {
  CREATE: "PASS" | "FAIL";
  READ: "PASS" | "FAIL";
  UPDATE: "PASS" | "FAIL";
  READ_AFTER_UPDATE: "PASS" | "FAIL";
  DELETE: "PASS" | "FAIL";
  FINAL_READ: "PASS" | "FAIL";
  cleanup: "PASS" | "FAIL";
  overall: "PASS" | "FAIL" | "BLOCKED";
  message?: string;
  details?: Record<string, string>;
}

/**
 * MEDIVAULT_DB_PERSISTENCE_TEST
 *
 * Deterministic persistence verification function testing the real Supabase REST/database path
 * through the application client.
 *
 * Flow:
 * A. Generate a unique test slug: _medivault_persistence_test_<timestamp>_<random>
 * B. CREATE: Insert a minimal valid medicine record using only required schema fields.
 * C. READ: Read the same record back by slug.
 * D. UPDATE: Update one safe field (display_name).
 * E. READ AGAIN: Confirm the updated value is actually persisted.
 * F. DELETE: Delete the test record.
 * G. FINAL READ: Confirm the record no longer exists.
 * H. CLEANUP: If any step fails, attempt cleanup of the generated test slug.
 */
export async function MEDIVAULT_DB_PERSISTENCE_TEST(
  client: SupabaseClient<Database> = supabase
): Promise<PersistenceTestResults> {
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  const testSlug = `_medivault_persistence_test_${Date.now()}_${randomSuffix}`;

  const results: PersistenceTestResults = {
    CREATE: "FAIL",
    READ: "FAIL",
    UPDATE: "FAIL",
    READ_AFTER_UPDATE: "FAIL",
    DELETE: "FAIL",
    FINAL_READ: "FAIL",
    cleanup: "FAIL",
    overall: "FAIL",
    details: {},
  };

  // Verify authentication before attempting writes under RLS
  const { data: sessionData, error: sessionErr } = await client.auth.getSession();
  if (sessionErr || !sessionData?.session) {
    results.overall = "BLOCKED";
    results.message =
      "BLOCKED: User session is not authenticated. Under RLS, medicine write operations require an authenticated admin session.";
    results.details!["AUTH_CHECK"] =
      sessionErr?.message || "No active authenticated session found.";
    return results;
  }

  try {
    // Safety cleanup in case slug existed
    await client.from("medicines").delete().eq("slug", testSlug);

    // B. CREATE
    const { data: created, error: createErr } = await client
      .from("medicines")
      .insert({
        slug: testSlug,
        generic_name: "Medivault Test Generic",
        display_name: "Medivault Test Display",
        data_version: "v1.0",
        status: "published",
        verification_status: "verified",
      })
      .select()
      .single();

    if (createErr || !created) {
      results.CREATE = "FAIL";
      results.details!["CREATE"] = createErr?.message ?? "No record returned";
      results.message = `CREATE failed: ${createErr?.message}`;
      return results;
    }
    results.CREATE = "PASS";

    // C. READ
    const { data: readRecord, error: readErr } = await client
      .from("medicines")
      .select("*")
      .eq("slug", testSlug)
      .maybeSingle();

    if (readErr || !readRecord || readRecord.slug !== testSlug) {
      results.READ = "FAIL";
      results.details!["READ"] = readErr?.message ?? "Record not found after create";
      results.message = `READ failed: ${readErr?.message}`;
      return results;
    }
    results.READ = "PASS";

    // D. UPDATE (update safe field display_name)
    const updatedDisplayName = `Medivault Test Display Updated ${Date.now()}`;
    const { data: updatedRecord, error: updateErr } = await client
      .from("medicines")
      .update({ display_name: updatedDisplayName })
      .eq("slug", testSlug)
      .select()
      .single();

    if (updateErr || !updatedRecord) {
      results.UPDATE = "FAIL";
      results.details!["UPDATE"] = updateErr?.message ?? "Update query failed";
      results.message = `UPDATE failed: ${updateErr?.message}`;
      return results;
    }
    results.UPDATE = "PASS";

    // E. READ AGAIN (READ_AFTER_UPDATE)
    const { data: readAfterUpdate, error: readAfterUpdateErr } = await client
      .from("medicines")
      .select("*")
      .eq("slug", testSlug)
      .maybeSingle();

    if (
      readAfterUpdateErr ||
      !readAfterUpdate ||
      readAfterUpdate.display_name !== updatedDisplayName
    ) {
      results.READ_AFTER_UPDATE = "FAIL";
      results.details!["READ_AFTER_UPDATE"] =
        readAfterUpdateErr?.message ?? "Updated value mismatch";
      results.message = "READ_AFTER_UPDATE failed: field value mismatch";
      return results;
    }
    results.READ_AFTER_UPDATE = "PASS";

    // F. DELETE
    const { error: deleteErr } = await client
      .from("medicines")
      .delete()
      .eq("slug", testSlug);

    if (deleteErr) {
      results.DELETE = "FAIL";
      results.details!["DELETE"] = deleteErr.message;
      results.message = `DELETE failed: ${deleteErr.message}`;
      return results;
    }
    results.DELETE = "PASS";

    // G. FINAL READ
    const { data: finalRead, error: finalReadErr } = await client
      .from("medicines")
      .select("*")
      .eq("slug", testSlug)
      .maybeSingle();

    if (finalReadErr || finalRead !== null) {
      results.FINAL_READ = "FAIL";
      results.details!["FINAL_READ"] =
        finalReadErr?.message ?? "Record still exists after delete";
      results.message = "FINAL_READ failed: record still exists";
      return results;
    }
    results.FINAL_READ = "PASS";
    results.overall = "PASS";
    return results;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    results.details!["UNEXPECTED"] = msg;
    results.message = `Unexpected error: ${msg}`;
    return results;
  } finally {
    // H. CLEANUP
    try {
      const { error: cleanupErr } = await client
        .from("medicines")
        .delete()
        .eq("slug", testSlug);
      results.cleanup = !cleanupErr ? "PASS" : "FAIL";
      if (cleanupErr) {
        results.details!["cleanup"] = cleanupErr.message;
      }
    } catch (cleanErr: unknown) {
      results.cleanup = "FAIL";
      results.details!["cleanup"] = String(cleanErr);
    }
  }
}

// Backward compatibility alias
export const runPersistenceTest = MEDIVAULT_DB_PERSISTENCE_TEST;
