import { SVGProps } from "react";

export type OrangeVariant = "duotone" | "fill" | "light";

export interface OrangeProps extends SVGProps<SVGSVGElement> {
  variant?: OrangeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M165.87,72.58A64.06,64.06,0,0,0,200,16a8,8,0,0,0-8-8h-8a64,64,0,0,0-56,33.06A64,64,0,0,0,72,8H64a8,8,0,0,0,0,16h8a48.08,48.08,0,0,1,47.4,40.42,88,88,0,1,0,46.47,8.16ZM183.33,24a48.09,48.09,0,0,1-46.66,40A48.09,48.09,0,0,1,183.33,24Zm.56,137.32a57.5,57.5,0,0,1-46.57,46.57A8.52,8.52,0,0,1,136,208a8,8,0,0,1-1.31-15.89,41.29,41.29,0,0,0,33.43-33.43,8,8,0,0,1,15.78,2.64Z\"/>";
const LIGHT_INNER     = "<path d=\"M161.15,72.65A62.08,62.08,0,0,0,198,16a6,6,0,0,0-6-6h-8a62.08,62.08,0,0,0-56,35.42A62.08,62.08,0,0,0,72,10H64a6,6,0,0,0,0,12h8a50.06,50.06,0,0,1,49.66,44.26,85.95,85.95,0,1,0,39.49,6.39ZM184,22h1.64A50.07,50.07,0,0,1,136,66h-1.64A50.07,50.07,0,0,1,184,22ZM128,226a74,74,0,1,1,74-74A74.09,74.09,0,0,1,128,226Zm53.92-65A55.48,55.48,0,0,1,137,205.92a6.74,6.74,0,0,1-1,.08,6,6,0,0,1-1-11.92A43.29,43.29,0,0,0,170.08,159a6,6,0,1,1,11.84,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M165.87,72.58A64.06,64.06,0,0,0,200,16a8,8,0,0,0-8-8h-8a64,64,0,0,0-56,33.06A64,64,0,0,0,72,8H64a8,8,0,0,0,0,16h8a48.08,48.08,0,0,1,47.4,40.42,88,88,0,1,0,46.47,8.16ZM183.33,24a48.09,48.09,0,0,1-46.66,40A48.09,48.09,0,0,1,183.33,24ZM128,224a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,224Zm55.89-62.68a57.5,57.5,0,0,1-46.57,46.57A8.52,8.52,0,0,1,136,208a8,8,0,0,1-1.31-15.89,41.29,41.29,0,0,0,33.43-33.43,8,8,0,0,1,15.78,2.64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,152a80,80,0,1,1-80-80A80,80,0,0,1,208,152Z\"/>";

export const Orange = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: OrangeProps) => {
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
