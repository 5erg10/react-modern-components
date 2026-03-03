import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "url";
import { dirname, resolve, basename } from "path";
import fg from "fast-glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ── Entradas de componentes ───────────────────────────────────────────────────
const componentEntries: Record<string, string> = {};
fg.sync("src/components/*/index.ts").forEach((file) => {
  const name = basename(dirname(file)).toLowerCase();
  componentEntries[name] = resolve(__dirname, file);
});

// ── Entradas de iconos (un chunk por icono para tree-shaking) ─────────────────
fg.sync("src/icons/*/index.ts").forEach((file) => {
  const iconName = basename(dirname(file)).toLowerCase();
  componentEntries[`icons/${iconName}`] = resolve(__dirname, file);
});

// ── Barrel raíz de iconos ─────────────────────────────────────────────────────
if (fg.sync("src/icons/index.ts").length > 0) {
  componentEntries["icons/index"] = resolve(__dirname, "src/icons/index.ts");
}

// ── Entrada raíz ─────────────────────────────────────────────────────────────
componentEntries["index"] = resolve(__dirname, "src/index.ts");

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: componentEntries,
      formats: ["es", "cjs"],
      name: "ModernReactComponents",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "[name][extname]";
          return "assets/[name][extname]";
        },
      },
    },
  },
});
