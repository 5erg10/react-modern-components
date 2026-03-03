import { SVGProps } from "react";

export type GitForkVariant = "duotone" | "fill" | "light";

export interface GitForkProps extends SVGProps<SVGSVGElement> {
  variant?: GitForkVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM144,192a16,16,0,1,1-16-16A16,16,0,0,1,144,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,64a30,30,0,1,0-36,29.4V112a10,10,0,0,1-10,10H80a10,10,0,0,1-10-10V93.4a30,30,0,1,0-12,0V112a22,22,0,0,0,22,22h42v28.6a30,30,0,1,0,12,0V134h42a22,22,0,0,0,22-22V93.4A30.05,30.05,0,0,0,222,64ZM46,64A18,18,0,1,1,64,82,18,18,0,0,1,46,64ZM146,192a18,18,0,1,1-18-18A18,18,0,0,1,146,192ZM192,82a18,18,0,1,1,18-18A18,18,0,0,1,192,82Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V95a32,32,0,1,0-16,0v17a24,24,0,0,0,24,24h40v25a32,32,0,1,0,16,0V136h40a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,224,64ZM48,64A16,16,0,1,1,64,80,16,16,0,0,1,48,64Zm96,128a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M88,64A24,24,0,1,1,64,40,24,24,0,0,1,88,64ZM192,40a24,24,0,1,0,24,24A24,24,0,0,0,192,40Z\"/>";

export const GitFork = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GitForkProps) => {
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
