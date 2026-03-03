import { select, confirm } from '@inquirer/prompts';
import { rm } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const componentsDir = path.resolve('./src/components');
const registryPath  = path.resolve('./sandbox/registry.tsx');
const pkgPath       = path.resolve('./package.json');
const indexPath     = path.resolve('./src/index.ts');

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

// ─── 4. Borrar carpeta del componente ────────────────────────────────────────
try {
    const componentPath = path.join(componentsDir, componentName);
    await rm(componentPath, { recursive: true, force: true });
    console.log(chalk.green(`\n ✅ Carpeta src/components/${componentName} eliminada.`));
} catch (error) {
    console.error(chalk.red('\n Error al eliminar la carpeta: \n' + error));
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

// ─── 6. Actualizar registry.tsx ───────────────────────────────────────────────
try {
    let src = fs.readFileSync(registryPath, 'utf-8');

    // 6a. Eliminar import
    src = src.replace(
        new RegExp(`import\\s*\\{[^}]*${componentName}[^}]*\\}\\s*from\\s*["'][^"']*${componentName}["'];?\\n?`, 'g'),
        ''
    );

    // 6b. Eliminar bloque de la Entry (desde el comentario AUTO-GENERATED hasta el }; siguiente)
    // Funciona tanto si el bloque tiene comentario AUTO-GENERATED como si no
    const entryBlockRegex = new RegExp(
        `(\\/\\* AUTO-GENERATED: ${componentName}[\\s\\S]*?\\*\\/\\n)?` +
        `const ${componentName}Entry[\\s\\S]*?\\n\\};\\n`,
        'g'
    );
    src = src.replace(entryBlockRegex, '');

    // 6c. Eliminar referencia en el array componentRegistry
    src = src.replace(new RegExp(`,?\\s*${componentName}Entry,?`, 'g'), '');

    // 6d. Limpiar comas dobles o comas huérfanas que puedan quedar en el array
    const registryArrayMarker = 'export const componentRegistry: ComponentEntry[] = [';
    const arrayStart = src.indexOf(registryArrayMarker);
    const closingIdx = src.indexOf('];', arrayStart);
    const arrayBody  = src.slice(arrayStart + registryArrayMarker.length, closingIdx);
    const refs = [...arrayBody.matchAll(/(\w+Entry)/g)].map((m) => m[1]);
    const cleanArrayBody = '\n' + refs.map((ref) => '  ' + ref).join(',\n') + '\n';
    src =
        src.slice(0, arrayStart + registryArrayMarker.length) +
        cleanArrayBody +
        src.slice(closingIdx);

    fs.writeFileSync(registryPath, src);
    console.log(chalk.green(` ✅ registry.tsx: "${componentName}Entry" eliminado.`));
} catch (error) {
    console.error(chalk.red('\n Error al actualizar registry.tsx: \n' + error));
    process.exit(1);
}

// ─── 7. Actualizar src/index.ts ───────────────────────────────────────────────
try {
    const remaining = fs
        .readdirSync(componentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

    const indexContent = remaining
        .map((name) => `export { ${name} } from "./components/${name}";`)
        .join('\n') + '\n';

    fs.writeFileSync(indexPath, indexContent);
    console.log(chalk.green(` ✅ src/index.ts: export de "${componentName}" eliminado.\n`));
} catch (error) {
    console.error(chalk.red('\n Error al actualizar src/index.ts: \n' + error));
    process.exit(1);
}

console.log(chalk.grey(`Recuerda ejecutar "${chalk.white('npm run build')}" para reflejar los cambios en el paquete compilado.\n`));
