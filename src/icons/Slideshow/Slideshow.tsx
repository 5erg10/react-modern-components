import { SVGProps } from "react";

export type SlideshowVariant = "duotone" | "fill" | "light";

export interface SlideshowProps extends SVGProps<SVGSVGElement> {
  variant?: SlideshowVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,64V192a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192A16,16,0,0,1,208,64Zm24-16a8,8,0,0,0-8,8V200a8,8,0,0,0,16,0V56A8,8,0,0,0,232,48ZM24,48a8,8,0,0,0-8,8V200a8,8,0,0,0,16,0V56A8,8,0,0,0,24,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,50H64A14,14,0,0,0,50,64V192a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V64A14,14,0,0,0,192,50Zm2,142a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2ZM238,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0ZM30,56V200a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,48H64A16,16,0,0,0,48,64V192a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64A16,16,0,0,0,192,48Zm0,144H64V64H192V192ZM240,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM32,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,64V192a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H192A8,8,0,0,1,200,64Z\"/>";

export const Slideshow = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SlideshowProps) => {
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
