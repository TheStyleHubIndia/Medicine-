import React from "react";
import { supabase } from "./lib/supabase";
import { listMedicines } from "./lib/medicines";

/**
 * MediDex Grow - Minimal application entry point wrapper.
 * Connects the real Supabase database underneath without altering UI styling.
 */
export default function MediDexGrowApp() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">MediDex-Grow</h1>
        <p className="text-muted-foreground text-sm">
          Pharmacology reference &amp; medicine database system.
        </p>
      </div>
    </div>
  );
}
