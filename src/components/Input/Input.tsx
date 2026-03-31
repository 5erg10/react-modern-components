import { forwardRef, useCallback, useId, useImperativeHandle, useRef, useState } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";
import { Icon } from "../../icons";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", onChange, onSearchButtonClick, onKeyDown, label, id, ambient = 'dark', color, backgroundColor, darkColor, darkBackgroundColor, error, errorLabel, ...props }, ref) => {

    const generatedId = useId();
    const inputId = id || generatedId;

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current!);

    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      onChange?.(e);
    }, [onChange]);

    const searchButtonClick = () => {
      setValue('');
      if (inputRef.current) {
        inputRef.current.value = '';
        onChange?.({ target: inputRef.current, currentTarget: inputRef.current } as React.ChangeEvent<HTMLInputElement>);
      }
      onSearchButtonClick?.({
        target: { value: '' }
      } as React.ChangeEvent<HTMLInputElement>);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (type === 'number' || type === 'tel') {
        const isDigit = /^\d$/.test(e.key);
        const isControl = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Enter', 'Home', 'End'].includes(e.key);
        const isShortcut = e.ctrlKey || e.metaKey;
        if (!isDigit && !isControl && !isShortcut) {
          e.preventDefault();
        }
      }
      onKeyDown?.(e);
    };

    const handleIconClick = () => {
      if (type === 'search') {
        searchButtonClick();
      } else if (type === 'date') {
        inputRef.current?.showPicker();
      } else if (type === 'password' && !!value) {
        setShowPassword(prev => !prev);
      }
    };

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

    const getIconName = () => {
      if (type === 'search') return !!value ? 'x' : iconsByType['search'];
      if (type === 'password') return !!value ? (showPassword ? 'eye-slash' : 'eye') : 'asterisk';
      return iconsByType[type];
    };

    const resolvedType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    const formatDateDisplay = (dateValue: string) => {
      if (!dateValue) return '';
      return new Date(dateValue + 'T00:00:00').toLocaleDateString();
    };

    const resolvedColor = ambient === 'dark' ? (color ?? '#f3f4f6') : (darkColor ?? '#333333');
    const resolvedBg    = ambient === 'dark' ? (backgroundColor ?? '#374151') : (darkBackgroundColor ?? '#dedede');

    const colorStyle = {
      '--input-text-color': resolvedColor,
      '--input-bg-color': resolvedBg,
      '--input-border-color': error ? '#c24c4c' : resolvedColor,
    } as React.CSSProperties;

    return (
      <div className="modern-input" style={colorStyle} data-input-type={type} data-has-value={!!value} data-input-ambient={ambient}>
          <div className="modern-input__input-mask" onClick={() => type === 'date' ? inputRef.current?.showPicker() : undefined}>
            {type === 'date' && (
              <span className="modern-input__date-display">
                {formatDateDisplay(value) || props.placeholder || ''}
              </span>
            )}
             <input
              ref={inputRef}
              id={inputId}
              aria-label="input-type-aria-label"
              className="modern-input__inputbox"
              type={resolvedType}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              {...props}
            />
            <div className="modern-input__input-icon" onClick={handleIconClick}>
                <Icon name={getIconName()} variant="light"/>
            </div>
          </div>
          {label && <label className="modern-input__label" htmlFor={inputId}>{label}</label>}
          {error && errorLabel && <span className="modern-input__error-label">{errorLabel}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
