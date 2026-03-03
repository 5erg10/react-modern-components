import { SVGProps } from "react";

export type RssVariant = "duotone" | "fill" | "light";

export interface RssProps extends SVGProps<SVGSVGElement> {
  variant?: RssVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm44,0a8,8,0,0,1-8-8,40,40,0,0,0-40-40,8,8,0,0,1,0-16,56.06,56.06,0,0,1,56,56A8,8,0,0,1,120,192Zm32,0a8,8,0,0,1-8-8,72.08,72.08,0,0,0-72-72,8,8,0,0,1,0-16,88.1,88.1,0,0,1,88,88A8,8,0,0,1,152,192Zm32,0a8,8,0,0,1-8-8A104.11,104.11,0,0,0,72,80a8,8,0,0,1,0-16A120.13,120.13,0,0,1,192,184,8,8,0,0,1,184,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M105.5,150.5A69.54,69.54,0,0,1,126,200a6,6,0,0,1-12,0,58,58,0,0,0-58-58,6,6,0,0,1,0-12A69.54,69.54,0,0,1,105.5,150.5ZM56,82a6,6,0,0,0,0,12A106,106,0,0,1,162,200a6,6,0,0,0,12,0A118,118,0,0,0,56,82Zm117.38.62A164.92,164.92,0,0,0,56,34a6,6,0,0,0,0,12A153,153,0,0,1,164.89,91.11,153,153,0,0,1,210,200a6,6,0,0,0,12,0A164.92,164.92,0,0,0,173.38,82.62ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M106.91,149.09A71.53,71.53,0,0,1,128,200a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,106.91,149.09ZM56,80a8,8,0,0,0,0,16A104,104,0,0,1,160,200a8,8,0,0,0,16,0A120,120,0,0,0,56,80Zm118.79,1.21A166.89,166.89,0,0,0,56,32a8,8,0,0,0,0,16A151,151,0,0,1,163.48,92.52,151,151,0,0,1,208,200a8,8,0,0,0,16,0A166.9,166.9,0,0,0,174.79,81.21ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,200H56V40A160,160,0,0,1,216,200Z\"/>";

export const Rss = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RssProps) => {
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
