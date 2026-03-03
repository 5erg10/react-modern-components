import { SVGProps } from "react";

export type HandDepositVariant = "duotone" | "fill" | "light";

export interface HandDepositProps extends SVGProps<SVGSVGElement> {
  variant?: HandDepositVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,198.65V240a8,8,0,0,1-16,0V198.65A74.84,74.84,0,0,0,192,144v58.35a8,8,0,0,1-14.69,4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12,12,0,0,0-20.89,11.83l22.13,33.79a8,8,0,0,1-13.39,8.76l-22.26-34-.24-.38c-.38-.66-.73-1.33-1.05-2H56a8,8,0,0,1-8-8V96A16,16,0,0,1,64,80h48v48a8,8,0,0,0,16,0V80h48a16,16,0,0,1,16,16v27.62A90.89,90.89,0,0,1,232,198.65ZM128,35.31l18.34,18.35a8,8,0,0,0,11.32-11.32l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,93.66,53.66L112,35.31V80h16Z\"/>";
const LIGHT_INNER     = "<path d=\"M126,30.49V128a6,6,0,0,1-12,0V30.49L92.24,52.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48Zm64,94.2V96a14,14,0,0,0-14-14H160a6,6,0,0,0,0,12h16a2,2,0,0,1,2,2v86.14A26,26,0,0,0,133.49,209c0,.1.11.19.17.29l22.26,34a6,6,0,0,0,10-6.58L143.8,202.87A14,14,0,0,1,168.13,189a2.75,2.75,0,0,0,.17.29L179,205.59a6,6,0,0,0,11-3.28V139.57a76.83,76.83,0,0,1,28,59.08V240a6,6,0,0,0,12,0V198.65A88.88,88.88,0,0,0,190,124.69ZM80,82H64A14,14,0,0,0,50,96V200a6,6,0,0,0,12,0V96a2,2,0,0,1,2-2H80a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,35.31V128a8,8,0,0,1-16,0V35.31L93.66,53.66A8,8,0,0,1,82.34,42.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32Zm64,88.31V96a16,16,0,0,0-16-16H160a8,8,0,0,0,0,16h16v80.4A28,28,0,0,0,131.75,210l.24.38,22.26,34a8,8,0,0,0,13.39-8.76l-22.13-33.79A12,12,0,0,1,166.4,190c.07.13.15.26.23.38l10.68,16.31A8,8,0,0,0,192,202.31V144a74.84,74.84,0,0,1,24,54.69V240a8,8,0,0,0,16,0V198.65A90.89,90.89,0,0,0,192,123.62ZM80,80H64A16,16,0,0,0,48,96V200a8,8,0,0,0,16,0V96H80a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,96V202.31L173.32,186a20,20,0,0,0-36.9,14H56V96a8,8,0,0,1,8-8H176A8,8,0,0,1,184,96Z\"/>";

export const HandDeposit = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandDepositProps) => {
  const svgStyle = { width: "1em", height: "1em", ...style };

  if (variant === "fill") return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill={primaryColor} style={svgStyle} {...props}>
      <g dangerouslySetInnerHTML={{ __html: FILL_INNER }} />
    </svg>
  );

  if (variant === "light") return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill={primaryColor} style={svgStyle} {...props}>
      <g dangerouslySetInnerHTML={{ __html: LIGHT_INNER }} />
    </svg>
  );

  const secColor   = secondaryColor ?? primaryColor;
  const secOpacity = secondaryColor ? 1 : 0.2;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" style={svgStyle} {...props}>
      <g fill={secColor} opacity={secOpacity} dangerouslySetInnerHTML={{ __html: SECONDARY_PATHS }} />
      <g fill={primaryColor} dangerouslySetInnerHTML={{ __html: PRIMARY_PATHS }} />
    </svg>
  );
};
