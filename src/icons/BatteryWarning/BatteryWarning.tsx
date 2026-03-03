import { SVGProps } from "react";

export type BatteryWarningVariant = "duotone" | "fill" | "light";

export interface BatteryWarningProps extends SVGProps<SVGSVGElement> {
  variant?: BatteryWarningVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56ZM108,88a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,116,176ZM256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,58H32A22,22,0,0,0,10,80v96a22,22,0,0,0,22,22H200a22,22,0,0,0,22-22V80A22,22,0,0,0,200,58Zm10,118a10,10,0,0,1-10,10H32a10,10,0,0,1-10-10V80A10,10,0,0,1,32,70H200a10,10,0,0,1,10,10Zm44-80v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM110,124V96a6,6,0,0,1,12,0v28a6,6,0,0,1-12,0Zm16,32a10,10,0,1,1-10-10A10,10,0,0,1,126,156Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM108,124V96a8,8,0,0,1,16,0v28a8,8,0,0,1-16,0Zm20,32a12,12,0,1,1-12-12A12,12,0,0,1,128,156Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,80v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H200A16,16,0,0,1,216,80Z\"/>";

export const BatteryWarning = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BatteryWarningProps) => {
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
