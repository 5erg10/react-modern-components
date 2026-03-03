import { SVGProps } from "react";

export type ArrowBendDownLeftVariant = "duotone" | "fill" | "light";

export interface ArrowBendDownLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowBendDownLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,56A104.11,104.11,0,0,1,128,160H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,104v40h40a88.1,88.1,0,0,0,88-88,8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,56A102.12,102.12,0,0,1,128,158H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,146H128a90.1,90.1,0,0,0,90-90,6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,48a8,8,0,0,0-8,8,88.1,88.1,0,0,1-88,88H88V104a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,200V160h40A104.11,104.11,0,0,0,232,56,8,8,0,0,0,224,48ZM72,180.69,43.31,152,72,123.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M80,104v96L32,152Z\"/>";

export const ArrowBendDownLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowBendDownLeftProps) => {
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
