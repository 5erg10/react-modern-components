import { SVGProps } from "react";

export type CallBellVariant = "duotone" | "fill" | "light";

export interface CallBellProps extends SVGProps<SVGSVGElement> {
  variant?: CallBellVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M16,176a8,8,0,0,1,8-8h8V152a96.12,96.12,0,0,1,88-95.66V40H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16H136V56.34A96.12,96.12,0,0,1,224,152v16h8a8,8,0,0,1,0,16H24A8,8,0,0,1,16,176Zm216,24H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M24,182H232a6,6,0,0,0,0-12H222V152a94.1,94.1,0,0,0-88-93.8V38h18a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12h18V58.2A94.1,94.1,0,0,0,34,152v18H24a6,6,0,0,0,0,12Zm22-30a82,82,0,0,1,164,0v18H46Zm192,56a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H232A6,6,0,0,1,238,208Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M24,184H232a8,8,0,0,0,0-16h-8V152a96.12,96.12,0,0,0-88-95.66V40h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56.34A96.12,96.12,0,0,0,32,152v16H24a8,8,0,0,0,0,16Zm24-32a80,80,0,0,1,160,0v16H48Zm192,56a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H232A8,8,0,0,1,240,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,152v24H40V152a88,88,0,0,1,176,0Z\"/>";

export const CallBell = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CallBellProps) => {
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
