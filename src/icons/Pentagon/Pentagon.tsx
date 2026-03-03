import { SVGProps } from "react";

export type PentagonVariant = "duotone" | "fill" | "light";

export interface PentagonProps extends SVGProps<SVGSVGElement> {
  variant?: PentagonVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M231.26,105.19l-32,107.54-.06.17A15.94,15.94,0,0,1,184,224H72A15.94,15.94,0,0,1,56.8,212.9l-.06-.17-32-107.54a16,16,0,0,1,5.7-17.63l87.92-68.31.18-.14a15.93,15.93,0,0,1,18.92,0l.18.14,87.92,68.31A16,16,0,0,1,231.26,105.19Z\"/>";
const LIGHT_INNER     = "<path d=\"M224.35,89.15,136.41,20.82l-.13-.1a14,14,0,0,0-16.56,0l-.13.1L31.65,89.15a14,14,0,0,0-5,15.45l32,107.56c0,.05,0,.09,0,.13A14,14,0,0,0,72,222H184a14,14,0,0,0,13.33-9.71s0-.08,0-.13l32-107.56A14,14,0,0,0,224.35,89.15ZM217.9,101s0,.08,0,.12l-32,107.54A2,2,0,0,1,184,210H72a2,2,0,0,1-1.89-1.34l-32-107.54s0-.08,0-.12a2,2,0,0,1,.72-2.23l.13-.1,87.91-68.3a2,2,0,0,1,2.28,0l87.91,68.3.13.1A2,2,0,0,1,217.9,101Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M225.56,87.56,137.64,19.25l-.18-.14a15.93,15.93,0,0,0-18.92,0l-.18.14L30.44,87.56a16,16,0,0,0-5.7,17.63l32,107.54.06.17A15.94,15.94,0,0,0,72,224H184a15.94,15.94,0,0,0,15.23-11.1l.06-.17,32-107.54A16,16,0,0,0,225.56,87.56Zm-9.62,13L184,208H72l-32-107.44-.06-.17h0l.18-.14L128,32l87.82,68.23.18.14Z\"/>";
const SECONDARY_PATHS = "<path d=\"M223.61,102.83l-32,107.62A8,8,0,0,1,184,216H72a8,8,0,0,1-7.62-5.55l-32-107.62a8,8,0,0,1,2.88-8.9l88-68.38a8,8,0,0,1,9.46,0l88,68.38A8,8,0,0,1,223.61,102.83Z\"/>";

export const Pentagon = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PentagonProps) => {
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
