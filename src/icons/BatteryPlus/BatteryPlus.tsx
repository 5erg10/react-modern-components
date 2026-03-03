import { SVGProps } from "react";

export type BatteryPlusVariant = "duotone" | "fill" | "light";

export interface BatteryPlusProps extends SVGProps<SVGSVGElement> {
  variant?: BatteryPlusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm-56,80H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20a8,8,0,0,1,0,16ZM256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M150,128a6,6,0,0,1-6,6H122v22a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h22V100a6,6,0,0,1,12,0v22h22A6,6,0,0,1,150,128Zm72-48v96a22,22,0,0,1-22,22H32a22,22,0,0,1-22-22V80A22,22,0,0,1,32,58H200A22,22,0,0,1,222,80Zm-12,0a10,10,0,0,0-10-10H32A10,10,0,0,0,22,80v96a10,10,0,0,0,10,10H200a10,10,0,0,0,10-10Zm38,10a6,6,0,0,0-6,6v64a6,6,0,0,0,12,0V96A6,6,0,0,0,248,90Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,128a8,8,0,0,1-8,8H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20A8,8,0,0,1,152,128Zm72-48v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-16,0a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Zm40,8a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,80v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H200A16,16,0,0,1,216,80Z\"/>";

export const BatteryPlus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BatteryPlusProps) => {
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
