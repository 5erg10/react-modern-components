import { SVGProps } from "react";

export type MartiniVariant = "duotone" | "fill" | "light";

export interface MartiniProps extends SVGProps<SVGSVGElement> {
  variant?: MartiniVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31Zm-25,2.34-16,16H59.31l-16-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.24,44.24A6,6,0,0,0,232,34H24a6,6,0,0,0-4.24,10.24L122,146.49V210H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12H134V146.49ZM70.49,78h115L128,135.51Zm147-32-20,20h-139l-20-20Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31ZM75.31,80H180.69L128,132.69ZM212.69,48l-16,16H59.31l-16-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,72l-72,72L56,72Z\"/>";

export const Martini = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MartiniProps) => {
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
