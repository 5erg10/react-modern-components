import { SVGProps } from "react";

export type ArrowElbowUpRightVariant = "duotone" | "fill" | "light";

export interface ArrowElbowUpRightProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowElbowUpRightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.66,85.66l-48,48A8,8,0,0,1,160,128V88H80V224a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h88V32a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,221.66,85.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.24,84.24l-48,48a6,6,0,0,1-8.48-8.48L201.51,86H78V224a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H201.51L163.76,36.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,220.24,84.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.66,74.34l-48-48A8,8,0,0,0,160,32V72H72a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V88h80v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,221.66,74.34ZM176,108.69V51.31L204.69,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,80l-48,48V32Z\"/>";

export const ArrowElbowUpRight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowElbowUpRightProps) => {
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
