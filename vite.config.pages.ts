import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * GitHub Pages build only.
 *
 * This deliberately does NOT load Nitro/server entry configuration.
 * GitHub Pages is static hosting, so TanStack Start SPA mode generates
 * a client-side application shell that can be served from a CDN.
 */
export default defineConfig({
  base: '/Medicine-/',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
        prerender: {
          outputPath: '/_shell.html',
          crawlLinks: false,
          retryCount: 2,
        },
      },
      prerender: {
        failOnError: false,
      },
    }),
    viteReact(),
  ],
})
