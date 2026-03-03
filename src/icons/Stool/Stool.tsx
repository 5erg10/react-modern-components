import { SVGProps } from "react";

export type StoolVariant = "duotone" | "fill" | "light";

export interface StoolProps extends SVGProps<SVGSVGElement> {
  variant?: StoolVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V64A16,16,0,0,0,72,80h6.64L56.1,222.75a8,8,0,0,0,6.65,9.15A7.82,7.82,0,0,0,64,232a8,8,0,0,0,7.89-6.75L79.68,176h96.64l7.78,49.25A8,8,0,0,0,192,232a7.82,7.82,0,0,0,1.26-.1,8,8,0,0,0,6.65-9.15L177.36,80H184A16,16,0,0,0,200,64Zm-26.21,96H82.21L94.84,80h66.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M198,64V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V64A14,14,0,0,0,72,78h9L58.07,223.06a6,6,0,0,0,5,6.87,6,6,0,0,0,6.86-5L78,174H178l8,50.93a6,6,0,1,0,11.86-1.87L175,78h9A14,14,0,0,0,198,64ZM70,64V40a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H72A2,2,0,0,1,70,64Zm106.14,98H79.86L93.13,78h69.74Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V64A16,16,0,0,0,72,80h6.64L56.1,222.75a8,8,0,0,0,6.65,9.15A7.82,7.82,0,0,0,64,232a8,8,0,0,0,7.89-6.75L79.68,176h96.64l7.78,49.25A8,8,0,0,0,192,232a7.82,7.82,0,0,0,1.26-.1,8,8,0,0,0,6.65-9.15L177.36,80H184A16,16,0,0,0,200,64ZM72,40H184V64H72ZM173.79,160H82.21L94.84,80h66.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,40V64a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H184A8,8,0,0,1,192,40Z\"/>";

export const Stool = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StoolProps) => {
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
