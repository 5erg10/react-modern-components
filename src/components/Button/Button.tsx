import { ButtonProps } from "./Button.types";
import "./Button.css";

export const Button = ({ variant = "primary", size = "md",  ellipsis = false, children, ...props }: ButtonProps) => {
  return (
    <button data-variant={variant} data-size={size} {...props}>
      <span data-ellipsis={ellipsis}>{children}</span>
    </button>
  );
};
