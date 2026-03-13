import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";
import { Icon } from "../../icons";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", ellipsis = false, icon, iconPosition = "left", outline = "false", onClick,  children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className="modern-button"
        data-variant={variant}
        data-button-size={size}
        data-icon-position={iconPosition}
        data-button-outline={outline}
        onClick={onClick}
        {...props}>
        {!!icon ? (
          <div className="modern-button-icon" data-variant={variant}>
            <Icon name={icon} variant="fill" style={{ fontSize: 15 }} />
          </div>
        ) : null}
        <div data-ellipsis={ellipsis} className="modern-button-text">{children}</div>
        <div className="modern-button-decorator" />
      </button>
    );
  }
);

Button.displayName = "Button";
