import { SVGProps } from "react";

export type CaretDoubleUpVariant = "duotone" | "fill" | "light";

export interface CaretDoubleUpProps extends SVGProps<SVGSVGElement> {
  variant?: CaretDoubleUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.66,194.34A8,8,0,0,1,208,208H48a8,8,0,0,1-5.66-13.66L108.69,128H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,208,128H147.31Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.24,195.76a6,6,0,1,1-8.48,8.48L128,128.49,52.24,204.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0Zm-160-71.52L128,48.49l75.76,75.75a6,6,0,0,0,8.48-8.48l-80-80a6,6,0,0,0-8.48,0l-80,80a6,6,0,0,0,8.48,8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M133.66,114.34a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,208H208a8,8,0,0,0,5.66-13.66ZM67.31,192,128,131.31,188.69,192Zm-25-66.34a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1-11.32,11.32L128,51.31,53.66,125.66A8,8,0,0,1,42.34,125.66Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,200H48l80-80Z\"/>";

export const CaretDoubleUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CaretDoubleUpProps) => {
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
