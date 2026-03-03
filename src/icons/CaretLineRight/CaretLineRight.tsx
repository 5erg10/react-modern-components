import { SVGProps } from "react";

export type CaretLineRightVariant = "duotone" | "fill" | "light";

export interface CaretLineRightProps extends SVGProps<SVGSVGElement> {
  variant?: CaretLineRightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M149.66,122.34a8,8,0,0,1,0,11.32l-80,80A8,8,0,0,1,56,208V48a8,8,0,0,1,13.66-5.66ZM184,40a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V48A8,8,0,0,0,184,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M148.24,123.76a6,6,0,0,1,0,8.48l-80,80a6,6,0,0,1-8.48-8.48L135.51,128,59.76,52.24a6,6,0,0,1,8.48-8.48ZM184,42a6,6,0,0,0-6,6V208a6,6,0,0,0,12,0V48A6,6,0,0,0,184,42Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M69.66,42.34A8,8,0,0,0,56,48V208a8,8,0,0,0,13.66,5.66l80-80a8,8,0,0,0,0-11.32ZM72,188.69V67.31L132.69,128ZM192,48V208a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,128,64,208V48Z\"/>";

export const CaretLineRight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CaretLineRightProps) => {
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
