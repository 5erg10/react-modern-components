export interface CheckboxProps {
    type: "checkbox" | "radio",
    checked?: boolean,
    name?: string,
    value?: string,
    onChange?: ({check, name, value}: {check: boolean, name: string | undefined, value: string | undefined}) => void
}
