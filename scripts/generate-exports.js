import fs from "fs";
import path from "path";

// Ruta a src/components
const componentsDir = path.resolve("./src/components");

// Leer carpetas de componentes
const components = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name); // conservar capitalización (Button, Modal)

// Leer package.json actual
const pkgPath = path.resolve("./package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// Generar exports automáticos
const exportsObj = {
  ".": {
    types: "./dist/index.d.ts",
    import: "./dist/index.es.js",
    require: "./dist/index.cjs.js"
  }
};

components.forEach(name => {
  const lower = name.toLowerCase();
  // Export del componente: JS, types y CSS unidos en la misma entrada
  exportsObj[`./${lower}`] = {
    types: `./dist/components/${name}/index.d.ts`,
    style: `./dist/components/${name}/${name}.css`,
    import: `./dist/components/${name}/index.es.js`,
    require: `./dist/components/${name}/index.cjs.js`
  };
});

// Actualizar package.json
pkg.exports = exportsObj;

// sideEffects: marcar todos los CSS como side-effects para evitar tree-shaking
pkg.sideEffects = ["**/*.css"];

// Escribir package.json actualizado
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log("✅ package.json exports y sideEffects actualizados automáticamente");
