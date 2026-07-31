import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      // Custom server entry: src/server.ts wraps SSR responses so unhandled
      // errors render a friendly error page instead of a raw 500.
      server: { entry: "./src/server.ts" },
    }),
    viteReact(),
    nitro(),
  ],
});
