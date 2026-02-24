import { input } from '@inquirer/prompts';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { 
    generateIndexTemplate,
    generateTsxTemplate,
    generateTypesTemplate
} from './templates/templates.js'

const validCharacters = /[^a-zA-Z0-9]/;
let validName = false;
let inputName, componentName;

const formatComponentName = (name) => {
    if (!name) return '';

    return name
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

while(!validName) {
    inputName = await input({message: 'nombre del componente(utiliza camel case si el nombre es compuesto): '});
    if (!validCharacters.test(inputName)) {
        componentName = formatComponentName(inputName);
        validName = true;
    } else {
        console.log(chalk.red('\n El nombre no es valido, no debe contener caracteres especiales \n'));
    }
}

try {
    const componentPath = await path.join(`${process.cwd()}/src/components`, componentName);
    await mkdir(componentPath, { recursive: true });
    await writeFile(await path.join(componentPath, `${componentName}.css`), ``);
    await writeFile(await path.join(componentPath, `${componentName}.tsx`), generateTsxTemplate(componentName));
    await writeFile(await path.join(componentPath, `${componentName}.types.tsx`), generateTypesTemplate(componentName));
    await writeFile(await path.join(componentPath, `index.ts`), generateIndexTemplate(componentName));
    console.log(chalk.green('\n componente creado y registrado!! \n'));
    console.log(chalk.grey(`Recuerda ejecutar "${chalk.white("npm run build")}" para actualizar en el registro los cambios que hagas en el componente. \n`))
} catch (error) {
    console.error(chalk.red('\n Error al crear la carpeta: \n' + error));
}




