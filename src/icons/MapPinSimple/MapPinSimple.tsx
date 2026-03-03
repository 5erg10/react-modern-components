import { SVGProps } from "react";

export type MapPinSimpleVariant = "duotone" | "fill" | "light";

export interface MapPinSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: MapPinSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,127.42V232a8,8,0,0,1-16,0V127.42a56,56,0,1,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M182,72a54,54,0,1,0-60,53.66V232a6,6,0,0,0,12,0V125.66A54.07,54.07,0,0,0,182,72Zm-54,42a42,42,0,1,1,42-42A42,42,0,0,1,128,114Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,72a56,56,0,1,0-64,55.42V232a8,8,0,0,0,16,0V127.42A56.09,56.09,0,0,0,184,72Zm-56,40a40,40,0,1,1,40-40A40,40,0,0,1,128,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,72a48,48,0,1,1-48-48A48,48,0,0,1,176,72Z\"/>";

export const MapPinSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MapPinSimpleProps) => {
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
