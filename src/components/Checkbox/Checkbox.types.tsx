export interface CheckboxProps {
    type?: "checkbox" | "radio",
    name?: string,
    value?: string,
    disabled?: boolean,
    ambient?: 'dark' | 'light',
    color?: string,
    backgroundColor?: string,
    darkColor?: string,
    darkBackgroundColor?: string,
    onChange?: ({check, name, value}: {check: boolean, name: string | undefined, value: string | undefined}) => void
}
