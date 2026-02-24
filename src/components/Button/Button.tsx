import { ButtonProps } from "./Button.types";

export const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button data-variant={variant} {...props}>
      {children}
    </button>
  );
};