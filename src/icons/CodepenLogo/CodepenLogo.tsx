import { SVGProps } from "react";

export type CodepenLogoVariant = "duotone" | "fill" | "light";

export interface CodepenLogoProps extends SVGProps<SVGSVGElement> {
  variant?: CodepenLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7L114.1,217.6a4,4,0,0,0,5.9-3.52v-57.3L66.55,128,32,146.61V109.39L66.55,128l16.88-9.09L40.87,96,120,53.39V99.22L83.43,118.91l44.57,24,44.57-24L189.45,128,224,109.39v37.22L189.45,128,136,156.78v57.3a4,4,0,0,0,5.9,3.52L235.79,167a8,8,0,0,0,4.21-7V96A8,8,0,0,0,235.79,89Zm-63.22,30L136,99.22V53.39L215.13,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M234.85,90.72h0l-104-56a6,6,0,0,0-5.68,0l-104,56h0A6,6,0,0,0,18,96v64a6,6,0,0,0,3.15,5.28h0l104,56a6,6,0,0,0,5.68,0l104-56h0A6,6,0,0,0,238,160V96A6,6,0,0,0,234.85,90.72ZM226,150,185.23,128l40.77-22Zm-53.43-28.77L134,100.42V50l85.34,46Zm-44.57,24L96.08,128,128,110.81,159.92,128ZM122,50v50.38L83.43,121.18,36.66,96Zm-92,56,40.77,22L30,150Zm53.43,28.76L122,155.58V206L36.66,160ZM134,206V155.58l38.57-20.77L219.34,160Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7.05l104,56a8,8,0,0,0,7.58,0l104-56A8,8,0,0,0,240,160V96A8,8,0,0,0,235.79,89ZM224,146.61,189.45,128,224,109.39Zm-51.43-27.7L136,99.22V53.39L215.13,96Zm-44.57,24L100.3,128,128,113.09,155.7,128Zm-8-89.52V99.22L83.43,118.91,40.87,96Zm-88,56L66.55,128,32,146.61Zm51.43,27.7L120,156.78v45.83L40.87,160ZM136,202.61V156.78l36.57-19.69L215.13,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,160,128,216,24,160l104-56Z\"/>";

export const CodepenLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CodepenLogoProps) => {
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
