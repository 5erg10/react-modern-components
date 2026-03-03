import { SVGProps } from "react";

export type GarageVariant = "duotone" | "fill" | "light";

export interface GarageProps extends SVGProps<SVGSVGElement> {
  variant?: GarageVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM136,128h56v24H136Zm-16,24H64V128h56ZM64,168h56v24H64Zm72,0h56v24H136Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,194H230V98.67A14,14,0,0,0,223.77,87l-88-58.66a14,14,0,0,0-15.54,0L32.23,87A14,14,0,0,0,26,98.67V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,98.67A2,2,0,0,1,38.89,97l88-58.67a2,2,0,0,1,2.22,0l88,58.67a2,2,0,0,1,.89,1.66V194H190V136a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v58H38ZM178,142v20H134V142Zm-56,20H78V142h44ZM78,174h44v20H78Zm56,0h44v20H134Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,192h-8V98.67a16,16,0,0,0-7.12-13.31l-88-58.67a16,16,0,0,0-17.75,0l-88,58.67A16,16,0,0,0,24,98.67V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,98.67,128,40l88,58.66V192H192V136a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v56H40ZM176,144v16H136V144Zm-56,16H80V144h40ZM80,176h40v16H80Zm56,0h40v16H136Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,136v64H72V136Z\"/>";

export const Garage = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GarageProps) => {
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
