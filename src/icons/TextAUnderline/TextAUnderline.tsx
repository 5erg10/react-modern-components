import { SVGProps } from "react";

export type TextAUnderlineVariant = "duotone" | "fill" | "light";

export interface TextAUnderlineProps extends SVGProps<SVGSVGElement> {
  variant?: TextAUnderlineVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M148.73,120H107.27L128,75.09ZM216,32V224a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8H208A8,8,0,0,1,216,32ZM76.65,167.26a8,8,0,0,0,10.61-3.91L99.89,136h56.22l12.63,27.35a8,8,0,0,0,14.52-6.7l-48-104a8,8,0,0,0-14.52,0l-48,104A8,8,0,0,0,76.65,167.26ZM200,192a8,8,0,0,0-8-8H64a8,8,0,0,0,0,16H192A8,8,0,0,0,200,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M61.45,173.43a6,6,0,0,0,8-2.88L86.63,134h82.74l17.2,36.55A6,6,0,0,0,192,174a5.92,5.92,0,0,0,2.55-.57,6,6,0,0,0,2.88-8l-64-136a6,6,0,0,0-10.86,0l-64,136A6,6,0,0,0,61.45,173.43ZM128,46.09,163.72,122H92.28ZM222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M60.59,175.24a8,8,0,0,0,10.65-3.83L87.9,136h80.2l16.66,35.41a8,8,0,1,0,14.48-6.82l-64-136a8,8,0,0,0-14.48,0l-64,136A8,8,0,0,0,60.59,175.24ZM128,50.79,160.57,120H95.43ZM224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M173.18,128H82.82L128,32Z\"/>";

export const TextAUnderline = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextAUnderlineProps) => {
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
