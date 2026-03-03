import { SVGProps } from "react";

export type CardholderVariant = "duotone" | "fill" | "light";

export interface CardholderProps extends SVGProps<SVGSVGElement> {
  variant?: CardholderVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48Zm-56,72a24,24,0,0,1-48,0,8,8,0,0,0-8-8H40V96H216v16H160A8,8,0,0,0,152,120ZM48,64H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,50H48A22,22,0,0,0,26,72V184a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V72A22,22,0,0,0,208,50ZM38,94H218v20H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H38ZM48,62H208a10,10,0,0,1,10,10V82H38V72A10,10,0,0,1,48,62ZM208,194H48a10,10,0,0,1-10-10V126H90.47a38,38,0,0,0,75.06,0H218v58A10,10,0,0,1,208,194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,48H48A24,24,0,0,0,24,72V184a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V72A24,24,0,0,0,208,48ZM40,96H216v16H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H40Zm8-32H208a8,8,0,0,1,8,8v8H40V72A8,8,0,0,1,48,64ZM208,192H48a8,8,0,0,1-8-8V128H88.8a40,40,0,0,0,78.4,0H216v56A8,8,0,0,1,208,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,72v48H160a32,32,0,0,1-64,0H32V72A16,16,0,0,1,48,56H208A16,16,0,0,1,224,72Z\"/>";

export const Cardholder = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CardholderProps) => {
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
