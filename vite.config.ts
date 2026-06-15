// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Detect build environment. Inside Lovable's sandbox we target Cloudflare Workers
// via the custom SSR entry in src/server.ts. Outside Lovable (e.g. self-hosted
// on Vercel after exporting to GitHub) we hand the build to Nitro so it can
// auto-detect the target platform (Vercel sets VERCEL=1) and emit the right
// deployment artifacts.
const isLovableBuild =
  !!process.env.LOVABLE_SANDBOX || !!process.env.DEV_SERVER__PROJECT_PATH;
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  // Custom Cloudflare-shaped SSR entry — only valid inside Lovable.
  tanstackStart: isLovableBuild ? { server: { entry: "server" } } : undefined,
  // Force-enable Nitro outside Lovable so deploy targets work standalone.
  // Pin Vercel explicitly when VERCEL=1, otherwise let Nitro auto-detect
  // (Netlify, Cloudflare Pages, Node server, etc.).
  nitro: isLovableBuild
    ? undefined
    : isVercel
      ? { preset: "vercel" }
      : true,
});
