import fs from "fs";
import path from "path";

// Ruta a src/components
const componentsDir = path.resolve("./src/components");

// Leer carpetas de componentes
const components = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name.toLowerCase()); // usar lowercase para subpaths

// Leer package.json actual
const pkgPath = path.resolve("./package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// Generar exports automáticos
const exportsObj = { ".": { types: "./dist/index.d.ts", import: "./dist/index.es.js", require: "./dist/index.cjs.js" } };

components.forEach(name => {
  exportsObj[`./${name}`] = {
    types: `./dist/components/${name.charAt(0).toUpperCase() + name.slice(1)}/index.d.ts`,
    import: `./dist/components/${name.charAt(0).toUpperCase() + name.slice(1)}/index.es.js`,
    require: `./dist/components/${name.charAt(0).toUpperCase() + name.slice(1)}/index.cjs.js`
  };
});

// Actualizar package.json
pkg.exports = exportsObj;

// Escribir package.json
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

console.log("✅ package.json exports actualizados automáticamente");