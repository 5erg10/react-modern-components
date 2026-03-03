import { ButtonProps } from "./Button.types";
import "./Button.css";
import { Icon } from "../../icons";

export const Button = ({ variant = "primary", size = "md", ellipsis = false, icon, iconPosition = "left", children, ...props }: ButtonProps) => {
  return (
    <button className="modern-button"  data-variant={variant} data-button-size={size} data-icon-position={iconPosition} {...props}>
      {!!icon ? <>
        <div className="modern-button-icon" data-variant={variant}>
          <Icon name={icon} variant="fill" style={{ fontSize: 15 }}/>
        </div>
      </> : <></>}
      <div data-ellipsis={ellipsis} className="modern-button-text">{children}</div>
      <div className="modern-button-decorator"></div>
    </button>
  );
};
