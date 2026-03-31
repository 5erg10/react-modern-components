import React, { forwardRef } from "react";
import { CheckboxProps } from "./Checkbox.types";
import "./Checkbox.css";
import { Icon } from "../../icons";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ type = "checkbox", name, value, disabled, ambient = 'dark', color, backgroundColor, darkColor, darkBackgroundColor, onChange, ...props }, ref) => {
    const resolvedColor = ambient === 'dark' ? (color ?? '#f3f4f6') : (darkColor ?? '#333333');
    const resolvedBg    = ambient === 'dark' ? (backgroundColor ?? '#374151') : (darkBackgroundColor ?? '#dedede');

    const colorStyle = {
      '--checkbox-text-color': resolvedColor,
      '--checkbox-bg-color': resolvedBg,
      '--checkbox-border-color': resolvedColor,
    } as React.CSSProperties;

    return (
      <div className={`modern-input-checkbox ${disabled ? 'modern-input-checkbox__disabled' : ''}`} style={colorStyle} data-checkbox-input-type={type} data-checkbox-ambient={ambient}>
          <input
            disabled={disabled}
            ref={ref}
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange?.({check: e.currentTarget.checked as boolean, name: name as string | undefined, value: value as string | undefined})}
            {...props}
          />
          <div className="modern-input-checkbox__check">
            <Icon className="modern-input-checkbox__check_icon" name='check' variant='light'/>
            <Icon className="modern-input-checkbox__radio_icon" name='circle' variant='fill'/>
          </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
