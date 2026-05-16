// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/** Vite plugin that writes an additional server.js entry in the SSR output so
 *  TanStack Start's prerender preview server can find the expected entry file. */
const fixServerEntryPlugin = () => ({
  name: "fix-server-entry",
  generateBundle(_options, bundle) {
    if (bundle["index.js"]) {
      this.emitFile({
        type: "asset",
        fileName: "server.js",
        source: `export { default } from "./index.js";\n`,
      });
    }
  },
});

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      routes: ["/", "/podcast"],
      enabled: true,
    },
  },
  vite: {
    build: {
      outDir: "dist",
    },
    plugins: [fixServerEntryPlugin()],
  },
});
