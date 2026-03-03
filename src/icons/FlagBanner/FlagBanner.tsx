import { SVGProps } from "react";

export type FlagBannerVariant = "duotone" | "fill" | "light";

export interface FlagBannerProps extends SVGProps<SVGSVGElement> {
  variant?: FlagBannerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.07,52.8A6,6,0,0,0,232,50H40a6,6,0,0,0-4.24,10.24L79.51,104,35.76,147.76A6,6,0,0,0,40,158H176.78l-30.2,63.42a6,6,0,0,0,10.84,5.16l80-168A6,6,0,0,0,237.07,52.8ZM182.5,146h-128l37.75-37.76a6,6,0,0,0,0-8.48L54.49,62h168Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M238.76,51.73A8,8,0,0,0,232,48H40a8,8,0,0,0-5.66,13.66L76.69,104,34.34,146.34A8,8,0,0,0,40,160H173.62l-28.84,60.56a8,8,0,1,0,14.44,6.88l80-168A8,8,0,0,0,238.76,51.73ZM181.23,144H59.31l34.35-34.34a8,8,0,0,0,0-11.32L59.31,64h160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,56l-45.71,96H40l48-48L40,56Z\"/>";

export const FlagBanner = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlagBannerProps) => {
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
