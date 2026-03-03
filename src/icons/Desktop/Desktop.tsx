import { SVGProps } from "react";

export type DesktopVariant = "duotone" | "fill" | "light";

export interface DesktopProps extends SVGProps<SVGSVGElement> {
  variant?: DesktopVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm0,144H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,42H48A22,22,0,0,0,26,64V176a22,22,0,0,0,22,22h74v20H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V198h74a22,22,0,0,0,22-22V64A22,22,0,0,0,208,42ZM48,54H208a10,10,0,0,1,10,10v82H38V64A10,10,0,0,1,48,54ZM208,186H48a10,10,0,0,1-10-10V158H218v18A10,10,0,0,1,208,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,64v88H32V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z\"/>";

export const Desktop = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DesktopProps) => {
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
