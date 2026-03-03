import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cancel" | "succes" | "warning";
  size?: 'sm' | "md" | "l" | "xl" | "no-limit";
  ellipsis?: boolean
}