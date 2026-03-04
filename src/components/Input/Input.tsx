import { forwardRef } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", ...props }, ref) => {
    return (
      <label>
        <input
          ref={ref}
          data-input-type={type}
          aria-label="input-type-aria-label"
          className="modern-input"
          type={type}
          {...props}
        />
      </label>
    );
  }
);

Input.displayName = "Input";
