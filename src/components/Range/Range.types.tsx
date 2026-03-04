
export interface RangeProps {
    min: number,
    max: number,
    step: number,
    value: number,
    onChange: (value: number) => void,
    disabled: boolean,
    showTooltip: boolean
}
