export type BadgeVariant = "default" | "success" | "warning" | "error" | "info";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  /** Visual style of the badge */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
  /** Text label displayed inside the badge */
  label: string;
  /** Optional icon rendered before the label */
  icon?: string;
  /** When true, shows a dismiss (×) button and calls onDismiss when clicked */
  dismissible?: boolean;
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
}