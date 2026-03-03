import { BadgeProps } from "./Badge.types";
import "./Badge.css";
import { Icon } from "../../icons";

export const Badge = ({
  variant = "default",
  size = "md",
  label,
  icon,
  dismissible = false,
  onDismiss,
}: BadgeProps) => {
  return (
    <div
      className="badge"
      data-variant={variant}
      data-badge-size={size}
      role="status"
    >
      {icon && <Icon name={icon} style={{ fontSize: 8 }} variant="fill"></Icon>}
      <div className="badge__label">{label}</div>
      {dismissible && (
        <button
          className="badge__dismiss"
          onClick={onDismiss}
          aria-label={`Dismiss ${label}`}
          type="button"
        >
          <Icon name="x-circle" style={{fontSize: 12}} variant="light"></Icon>
        </button>
      )}
    </div>
  );
};