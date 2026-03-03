import { SVGProps } from "react";

export type ArrowFatLeftVariant = "duotone" | "fill" | "light";

export interface ArrowFatLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowFatLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,88v80a16,16,0,0,1-16,16H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h80A16,16,0,0,1,224,88Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,74H126V32a6,6,0,0,0-10.24-4.24l-96,96a6,6,0,0,0,0,8.48l96,96A6,6,0,0,0,126,224V182h82a14,14,0,0,0,14-14V88A14,14,0,0,0,208,74Zm2,94a2,2,0,0,1-2,2H120a6,6,0,0,0-6,6v33.51L32.49,128,114,46.49V80a6,6,0,0,0,6,6h88a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,88v80a8,8,0,0,1-8,8H120v48L24,128l96-96V80h88A8,8,0,0,1,216,88Z\"/>";

export const ArrowFatLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowFatLeftProps) => {
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
