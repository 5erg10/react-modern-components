import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "url";
import { dirname, resolve, basename } from "path";
import fg from "fast-glob";

// Reemplaza __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generar dinámicamente las entradas para todos los componentes
const componentEntries: Record<string, string> = {};
const files = fg.sync("src/components/*/index.ts"); // busca todos los index.ts de componentes
files.forEach(file => {
  const name = basename(dirname(file)).toLowerCase(); // button, modal, etc
  componentEntries[name] = resolve(__dirname, file);
});

// Añadir la entrada raíz
componentEntries["index"] = resolve(__dirname, "src/index.ts");

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: componentEntries,
      formats: ["es", "cjs"],
      name: "ModernReactComponents",
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});