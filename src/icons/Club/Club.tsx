import { SVGProps } from "react";

export type ClubVariant = "duotone" | "fill" | "light";

export interface ClubProps extends SVGProps<SVGSVGElement> {
  variant?: ClubVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,144a56,56,0,0,1-84.81,48h-4.44l8.91,29.7A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l8.91-29.7h-4.44A56,56,0,1,1,72,88c.78,0,1.55,0,2.33,0a56,56,0,1,1,107.34,0c.77,0,1.55,0,2.33,0A56.06,56.06,0,0,1,240,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M184,90q-2.59,0-5.16.24a54,54,0,1,0-101.69,0C75.45,90.08,73.73,90,72,90A54,54,0,1,0,99.85,190.28l-9.6,32A6,6,0,0,0,96,230h64a6,6,0,0,0,5.75-7.72l-9.6-32A54,54,0,1,0,184,90Zm0,96a41.92,41.92,0,0,1-35.06-18.87,6,6,0,0,0-10.76,5L151.94,218H104.06l13.76-45.84a6,6,0,0,0-10.76-5,42,42,0,1,1-20.91-62.69,6,6,0,0,0,7-9,42,42,0,1,1,69.72,0,6,6,0,0,0,7,9A42,42,0,1,1,184,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,88c-.78,0-1.56,0-2.33,0a56,56,0,1,0-107.34,0c-.78,0-1.55,0-2.33,0A56,56,0,1,0,96.54,194.35l-8.2,27.35A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3l-8.2-27.35A56,56,0,1,0,184,88Zm0,96a40,40,0,0,1-33.4-18,8,8,0,0,0-14.33,6.71l13,43.26h-42.5l13-43.26A8,8,0,0,0,105.4,166a40,40,0,1,1-19.93-59.71,8,8,0,0,0,9.33-12,40,40,0,1,1,66.4,0,8,8,0,0,0,9.33,12A40,40,0,1,1,184,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,144a48,48,0,0,1-88.07,26.44L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0A48,48,0,0,1,232,144Z\"/>";

export const Club = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ClubProps) => {
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
