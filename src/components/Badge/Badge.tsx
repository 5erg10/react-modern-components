import { BadgeProps } from "./Badge.types";
import "./Badge.css";

export const Badge = ({
  variant = "default",
  size = "md",
  label,
  icon,
  dismissible = false,
  onDismiss,
}: BadgeProps) => {
  return (
    <span
      className="badge"
      data-variant={variant}
      data-size={size}
      role="status"
    >
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__label">{label}</span>
      {dismissible && (
        <button
          className="badge__dismiss"
          onClick={onDismiss}
          aria-label={`Dismiss ${label}`}
          type="button"
        >
          ×
        </button>
      )}
    </span>
  );
};