import { SVGProps } from "react";

export type AvocadoVariant = "duotone" | "fill" | "light";

export interface AvocadoProps extends SVGProps<SVGSVGElement> {
  variant?: AvocadoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M211,130.66,181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,114a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,114Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,194Zm81.1-62.68L179.3,47.11A54,54,0,0,0,77.08,46h0L47.56,129.52a86,86,0,1,0,161.54,1.8ZM128,234A74.05,74.05,0,0,1,58.8,133.72c0-.05,0-.09.05-.13L88.39,50h0a42,42,0,0,1,79.53.92s0,.08.05.13l29.82,84.28A74.06,74.06,0,0,1,128,234Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,112Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,192Zm83-61.34L181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,232a72.05,72.05,0,0,1-67.33-97.57,1.34,1.34,0,0,1,.07-.18L90.28,50.66h0a40,40,0,0,1,75.74.88l.06.18L195.9,136A72.05,72.05,0,0,1,128,232Z\"/>";
const SECONDARY_PATHS = "<path d=\"M203.45,133.33,173.63,49.05a48,48,0,0,0-90.9-1L53.19,131.59a80,80,0,1,0,150.26,1.74ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z\"/>";

export const Avocado = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AvocadoProps) => {
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
