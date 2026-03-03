
import { InputProps } from "./Input.types";
import "./Input.css";

export const Input = ({type = 'text', options = []}: InputProps ) => {
    return (
        <>
            <label>
                <span>label</span>
                { type == 'select' ? <>
                    <select>
                        {options.map((o) => (
                            <option key={o} value={o}>
                            {o}
                            </option>
                        ))}
                    </select>
                </> : 
                <input
                    aria-label="input-type-aria-label"
                    type={type}/>
                }
            </label>
        </>
    )    
};
