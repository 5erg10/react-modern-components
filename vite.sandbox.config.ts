import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

/**
 * Vite config exclusivo para el sandbox de desarrollo.
 * Arranca una SPA normal (NO modo librería) apuntando
 * al index.html del sandbox.
 *
 * Uso: npm run sandbox
 */
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, "sandbox"),
  // Permite resolver imports desde la raíz del proyecto
  // (por ejemplo "../src/components/Button")
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
