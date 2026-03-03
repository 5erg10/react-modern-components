import { SVGProps } from "react";

export type PeaceVariant = "duotone" | "fill" | "light";

export interface PeaceProps extends SVGProps<SVGSVGElement> {
  variant?: PeaceVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,143.37l46,32.2a71.86,71.86,0,0,1-46,24ZM56,128a71.61,71.61,0,0,0,8.81,34.48L120,123.84V56.46A72.08,72.08,0,0,0,56,128Zm64,71.54V143.37l-46,32.2A71.86,71.86,0,0,0,120,199.54ZM136,56.46v67.38l55.19,38.64A72,72,0,0,0,136,56.46ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.44,89.44,0,0,1-13,46.58l-71-49.7V38.2A90.12,90.12,0,0,1,218,128ZM122,38.2v86.68l-71,49.7A90,90,0,0,1,122,38.2ZM57.92,184.4,122,139.53V217.8A89.93,89.93,0,0,1,57.92,184.4ZM134,217.8V139.53l64.08,44.87A89.93,89.93,0,0,1,134,217.8Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.48,87.48,0,0,1-11.64,43.7L136,123.84V40.37A88.11,88.11,0,0,1,216,128ZM120,40.37v83.47L51.64,171.7A88,88,0,0,1,120,40.37ZM60.84,184.79,120,143.37v72.26A87.85,87.85,0,0,1,60.84,184.79ZM136,215.63V143.37l59.16,41.42A87.85,87.85,0,0,1,136,215.63Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const Peace = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PeaceProps) => {
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
