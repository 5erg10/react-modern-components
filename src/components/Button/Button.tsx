import { ButtonProps } from "./Button.types";
import "./Button.css";

export const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button data-variant={variant} {...props}>
      {children}
    </button>
  );
};
