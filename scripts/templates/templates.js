

export const generateTsxTemplate = (name) => {
    return `
import { ${name}Props } from "./${name}.types";
import "./${name}.css";

export const ${name} = ({
}: ${name}Props ) => {
    return (
        <div>${name} works!!</div>
    )    
};
`;
}

export const generateTypesTemplate = (name) => {
    return `
export interface ${name}Props {}
`;
}

export const generateIndexTemplate = (name) => {
    return `
export * from "./${name}";
export * from "./${name}.types";
`;
}