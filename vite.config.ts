// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const silenceDirectivesPlugin = () => ({
  name: "silence-directives",
  onLog(level: string, log: { code?: string; message?: string }): boolean | undefined {
    if (
      log.code === "MODULE_LEVEL_DIRECTIVE" ||
      log.message?.includes("use client") ||
      log.message?.includes("MODULE_LEVEL_DIRECTIVE")
    ) {
      return false;
    }
    return undefined;
  },
});

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/_shell.html",
        crawlLinks: false,
        retryCount: 2,
        failOnError: true,
      },
    },
  },
  vite: {
    base: isGitHubPages ? "/Medicine-/" : "/",
    envPrefix: ["VITE_", "NEXT_PUBLIC_"],
    plugins: [silenceDirectivesPlugin()],
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (
            warning.code === "MODULE_LEVEL_DIRECTIVE" ||
            (typeof warning.message === "string" &&
              warning.message.includes("MODULE_LEVEL_DIRECTIVE"))
          ) {
            return;
          }
          defaultHandler(warning);
        },
      },
    },
  },
});
