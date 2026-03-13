import { forwardRef, useCallback, useState } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";
import { Icon } from "../../icons";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", onChange, onSearchButtonClick, ...props }, ref) => {

    const [value, setValue] = useState("");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      onChange?.(e);
    }, [onChange]);

    const searchButtonClick = () => {
      if (!value) {
        setValue('');
      }
      onSearchButtonClick?.({
        target: { value: value }
      } as React.ChangeEvent<HTMLInputElement>);
    }

    const iconsByType = {
      'color': 'palette',
      'date': 'calendar-dots',
      'search': 'magnifying-glass',
      'text': 'pencil',
      'number': 'numpad',
      'password': 'asterisk',
      'email': 'envelope-simple-open',
      'tel': 'phone'
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
            <div className="modern-input__input-icon" onClick={() => type == 'search' ? searchButtonClick() : {}}>
                <Icon name={type != 'search' ? iconsByType[type] : !!value ? 'x' : iconsByType[type]} variant="light"/>
            </div>
          </div>
      </div>
    );
  }
);

Input.displayName = "Input";
