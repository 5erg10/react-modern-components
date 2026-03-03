import { SVGProps } from "react";

export type SigmaVariant = "duotone" | "fill" | "light";

export interface SigmaProps extends SVGProps<SVGSVGElement> {
  variant?: SigmaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM184,88a8,8,0,0,1-16,0V72H96l38.4,51.2a8,8,0,0,1,0,9.6L96,184h72V168a8,8,0,0,1,16,0v24a8,8,0,0,1-8,8H80a8,8,0,0,1-6.4-12.8L118,128,73.6,68.8A8,8,0,0,1,80,56h96a8,8,0,0,1,8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M186,72V54H76.48l56.21,70.25a6,6,0,0,1,0,7.5L76.48,202H186V184a6,6,0,0,1,12,0v24a6,6,0,0,1-6,6H64a6,6,0,0,1-4.69-9.75l61-76.25-61-76.25A6,6,0,0,1,64,42H192a6,6,0,0,1,6,6V72a6,6,0,0,1-12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,72V56H80.65l53.6,67a8,8,0,0,1,0,10l-53.6,67H184V184a8,8,0,0,1,16,0v24a8,8,0,0,1-8,8H64a8,8,0,0,1-6.25-13l60-75-60-75A8,8,0,0,1,64,40H192a8,8,0,0,1,8,8V72a8,8,0,0,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,48V208H64l64-80L64,48Z\"/>";

export const Sigma = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SigmaProps) => {
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
