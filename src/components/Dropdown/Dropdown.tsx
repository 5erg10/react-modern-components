
import { DropdownProps } from "./Dropdown.types";
import "./Dropdown.css";

export const Dropdown = (
{ options, ...props }: DropdownProps ) => {
    return (
        <>
            <select className="modern-input" {...props}>
                {options.map((o) => (
                    <option>
                        {o}
                    </option>
                ))}
            </select>
        </> 
    )    
};
