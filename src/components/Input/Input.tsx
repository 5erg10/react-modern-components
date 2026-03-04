
import { InputProps } from "./Input.types";
import "./Input.css";

export const Input = ({type = 'text', ...props}: InputProps ) => {
    return (
        <>
            <label>
                <input
                    data-input-type={type}
                    aria-label="input-type-aria-label"
                    className="modern-input"
                    type={type}
                    {...props}/>
            </label>
        </>
    )    
};
