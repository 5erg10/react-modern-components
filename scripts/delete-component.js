import { select, confirm } from '@inquirer/prompts';
import { rm } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const componentsDir         = path.resolve('./src/components');
const registryComponentsDir = path.resolve('./sandbox/registryComponents');
const registryIndexPath     = path.resolve('./sandbox/registryComponents/index.ts');
const pkgPath               = path.resolve('./package.json');
const srcIndexPath          = path.resolve('./src/index.ts');

// ─── 1. Leer componentes disponibles ─────────────────────────────────────────
const available = fs
    .readdirSync(componentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

if (available.length === 0) {
    console.log(chalk.yellow('\n No hay componentes para eliminar. \n'));
    process.exit(0);
}

// ─── 2. Seleccionar componente ────────────────────────────────────────────────
const componentName = await select({
    message: 'Selecciona el componente que quieres eliminar:',
    choices: available.map((name) => ({ name, value: name })),
});

// ─── 3. Confirmación ──────────────────────────────────────────────────────────
const confirmed = await confirm({
    message: chalk.red(`¿Seguro que quieres eliminar "${componentName}"? Esta acción no se puede deshacer.`),
    default: false,
});

if (!confirmed) {
    console.log(chalk.grey('\n Operación cancelada. \n'));
    process.exit(0);
}

// ─── 4. Borrar carpeta src/components/<Name> ──────────────────────────────────
try {
    const componentPath = path.join(componentsDir, componentName);
    await rm(componentPath, { recursive: true, force: true });
    console.log(chalk.green(`\n ✅ Carpeta src/components/${componentName} eliminada.`));
} catch (error) {
    console.error(chalk.red('\n Error al eliminar la carpeta del componente: \n' + error));
    process.exit(1);
}

// ─── 5. Actualizar package.json ───────────────────────────────────────────────
try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const exportKey = `./${componentName.toLowerCase()}`;
    delete pkg.exports[exportKey];
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log(chalk.green(` ✅ package.json: entrada "${exportKey}" eliminada.`));
} catch (error) {
    console.error(chalk.red('\n Error al actualizar package.json: \n' + error));
    process.exit(1);
}

// ─── 6. Borrar fichero sandbox/registryComponents/<name>Entry.tsx ────────────
// El fichero puede tener cualquier casing en el basename (ej: digitalClockEntry),
// así que buscamos el fichero cuyo nombre, sin "Entry.tsx", coincida con
// componentName en lowercase.
try {
    const entryFile = fs
        .readdirSync(registryComponentsDir)
        .find(
            (f) =>
                f.endsWith('Entry.tsx') &&
                path.basename(f, 'Entry.tsx').toLowerCase() === componentName.toLowerCase()
        );

    if (entryFile) {
        fs.rmSync(path.join(registryComponentsDir, entryFile));
        console.log(chalk.green(` ✅ sandbox/registryComponents/${entryFile} eliminado.`));
    } else {
        console.log(chalk.yellow(` ⚠️  No se encontró fichero Entry para "${componentName}" en registryComponents/.`));
    }
} catch (error) {
    console.error(chalk.red('\n Error al eliminar el fichero Entry: \n' + error));
    process.exit(1);
}

// ─── 7. Reescribir sandbox/registryComponents/index.ts ───────────────────────
// Reconstruye el fichero completo a partir de los ficheros *Entry.tsx que
// quedan en la carpeta, respetando el orden alfabético y la estructura acordada:
//   import { XxxEntry } from './xxxEntry';
//   ...
//   export const COMPS = [ XxxEntry, ... ];
try {
    // Construir mapa componentName -> fileBaseName con los ficheros restantes
    const remainingEntries = new Map(
        fs.readdirSync(registryComponentsDir)
            .filter((f) => f.endsWith('Entry.tsx'))
            .map((f) => {
                const fileBase = path.basename(f, '.tsx');           // "digitalClockEntry"
                const base     = path.basename(f, 'Entry.tsx');      // "digitalClock"
                const compName = base.charAt(0).toUpperCase() + base.slice(1); // "DigitalClock"
                return [compName, fileBase];
            })
    );

    // Ordenar case-insensitive
    const sortedNames = [...remainingEntries.keys()]
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    const importLines = sortedNames
        .map((name) => `import { ${name}Entry } from './${remainingEntries.get(name)}';`)
        .join('\n');

    const compsItems = sortedNames
        .map((name) => `    ${name}Entry`)
        .join(',\n');

    const indexContent =
        importLines +
        '\n\n' +
        'export const COMPS = [\n' +
        compsItems + '\n' +
        '];';

    fs.writeFileSync(registryIndexPath, indexContent);
    console.log(chalk.green(` ✅ sandbox/registryComponents/index.ts actualizado.`));
} catch (error) {
    console.error(chalk.red('\n Error al actualizar registryComponents/index.ts: \n' + error));
    process.exit(1);
}

// ─── 8. Actualizar src/index.ts ───────────────────────────────────────────────
try {
    const remaining = fs
        .readdirSync(componentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

    const indexContent = remaining
        .map((name) => `export { ${name} } from "./components/${name}";`)
        .join('\n') + '\n';

    fs.writeFileSync(srcIndexPath, indexContent);
    console.log(chalk.green(` ✅ src/index.ts: export de "${componentName}" eliminado.\n`));
} catch (error) {
    console.error(chalk.red('\n Error al actualizar src/index.ts: \n' + error));
    process.exit(1);
}

console.log(chalk.grey(`Recuerda ejecutar "${chalk.white('npm run build')}" para reflejar los cambios en el paquete compilado.\n`));
