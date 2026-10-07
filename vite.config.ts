import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const silenceDirectivesPlugin = () => ({
  name: "silence-directives",
  onLog(level: string, log: { code?: string; message?: string }): boolean | undefined {
    if (
      log.code === "MODULE_LEVEL_DIRECTIVE" ||
      log.message?.includes("use client") ||
      log.message?.includes("MODULE_LEVEL_DIRECTIVE")
    ) return false;
    return undefined;
  },
});

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGitHubPages ? "/Medicine-/" : "/",
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "src/server.ts" },
      spa: {
        enabled: true,
        prerender: {
          outputPath: "/_shell.html",
          crawlLinks: false,
          retryCount: 2,
          failOnError: true,
        },
      },
    }),
    viteReact(),
    silenceDirectivesPlugin(),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (
          warning.code === "MODULE_LEVEL_DIRECTIVE" ||
          (typeof warning.message === "string" &&
            warning.message.includes("MODULE_LEVEL_DIRECTIVE"))
        ) return;
        defaultHandler(warning);
      },
    },
  },
});
