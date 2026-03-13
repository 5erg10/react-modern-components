export interface CheckboxProps {
    type?: "checkbox" | "radio",
    name?: string,
    value?: string,
    disabled?: boolean
    onChange?: ({check, name, value}: {check: boolean, name: string | undefined, value: string | undefined}) => void
}
