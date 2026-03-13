import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cancel" | "success" | "warning";
  size?: 'sm' | "md" | "l" | "xl" | "no-limit";
  ellipsis?: boolean,
  icon?: string,
  iconPosition?: "right" | "left",
  outline?: boolean,
  onClick?: () => void
}