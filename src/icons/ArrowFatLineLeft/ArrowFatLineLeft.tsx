import { SVGProps } from "react";

export type ArrowFatLineLeftVariant = "duotone" | "fill" | "light";

export interface ArrowFatLineLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowFatLineLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,80v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h56A8,8,0,0,1,192,80Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,216,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M184,74H126V32a6,6,0,0,0-10.24-4.24l-96,96a6,6,0,0,0,0,8.48l96,96A6,6,0,0,0,126,224V182h58a6,6,0,0,0,6-6V80A6,6,0,0,0,184,74Zm-6,96H120a6,6,0,0,0-6,6v33.51L32.49,128,114,46.49V80a6,6,0,0,0,6,6h58Zm44-90v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h56a8,8,0,0,0,8-8V80A8,8,0,0,0,184,72Zm-8,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h56Zm48-88v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,80v96H120v48L24,128l96-96V80Z\"/>";

export const ArrowFatLineLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowFatLineLeftProps) => {
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
