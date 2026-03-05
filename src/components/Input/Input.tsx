import { forwardRef, useRef, useCallback } from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, style, onChange, ...props }, ref) => {

    const innerRef = useRef<HTMLInputElement>(null);

    // Allows both the forwarded ref and the internal ref to work together
    const setRefs = useCallback(
      (node: HTMLInputElement | null) => {
        (innerRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
        }
      },
      [ref]
    );

    // Forward click from visible div to the hidden native input
    const handleDivClick = () => {
      innerRef.current?.focus();
    };

    return (
      <div
        className={`modern-input${className ? ` ${className}` : ""}`}
        style={style}
        onClick={handleDivClick}
        data-input-type={type}
        aria-hidden="true"
      >
        {/* Native input: invisible but fully functional — preserves all
            native behaviour (onChange, value, validation, accessibility) */}
        <input
          ref={setRefs}
          type={type}
          className="modern-input__native"
          onChange={onChange}
          aria-label={props["aria-label"] ?? "input"}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
