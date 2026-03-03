import { SVGProps } from "react";

export type ArrowElbowUpLeftVariant = "duotone" | "fill" | "light";

export interface ArrowElbowUpLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowElbowUpLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,80V224a8,8,0,0,1-16,0V88H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,32V72h88A8,8,0,0,1,200,80Z\"/>";
const LIGHT_INNER     = "<path d=\"M198,80V224a6,6,0,0,1-12,0V86H62.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,1,1,8.48,8.48L62.49,74H192A6,6,0,0,1,198,80Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,72H104V32a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,104,128V88h80V224a8,8,0,0,0,16,0V80A8,8,0,0,0,192,72ZM88,108.69,59.31,80,88,51.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M96,32v96L48,80Z\"/>";

export const ArrowElbowUpLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowElbowUpLeftProps) => {
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
