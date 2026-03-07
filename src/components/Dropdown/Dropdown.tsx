
import { forwardRef } from "react";
import { DropdownProps, Option } from "./Dropdown.types";
import "./Dropdown.css";

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
({ options, label, ...props }, ref) => {
    return (
        <>
            <select 
                className="modern-input"
                {...props} 
                ref={ref}>
                { options.map((o: Option, i: number) => (
                    <option key={i} value={JSON.stringify(o)}>
                        { String(o[label]) }
                    </option>
                ))}
            </select>
        </> 
    )    
});
