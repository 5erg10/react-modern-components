import { forwardRef, useState } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";
import { Icon } from "../../icons";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", onChange,  ...props }, ref) => {
    const [value, setValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      onChange?.(e);
    };
    const iconsByType = {
      'color': 'palette',
      'date': 'calendar-dots',
      'search': 'magnifying-glass',
      'text': '',
      'number': '',
      'password': '',
      'email': '',
      'tel': ''
    }
    return (
      <div className="modern-input" data-input-type={type}>
          <div className="modern-input__input-mask"> 
             <input
              ref={ref}
              aria-label="input-type-aria-label"
              className="modern-input__inputbox"
              type={type}
              onChange={handleChange}
              {...props}
            />
            { ['search', 'color', 'date'].includes(type)? 
              <div className="modern-input__input-icon">
                <Icon name={iconsByType[type]} variant="light"/>
            </div> : <></>
            }
          </div>
      </div>
    );
  }
);

Input.displayName = "Input";
