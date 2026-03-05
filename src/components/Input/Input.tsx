import { forwardRef } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", disabled, onChange, ...props }, ref) => {
    return (
      <div
        className={`modern-input ${disabled ? "modern-input__disabled" : ""}`}
        data-input-type={type}
      >
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <div className="modern-input__display" />
      </div>
    );
  }
);

Input.displayName = "Input";
