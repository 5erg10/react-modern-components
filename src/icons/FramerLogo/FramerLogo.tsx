import { SVGProps } from "react";

export type FramerLogoVariant = "duotone" | "fill" | "light";

export interface FramerLogoProps extends SVGProps<SVGSVGElement> {
  variant?: FramerLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,112H149l56.27,50A8,8,0,0,1,200,176H136v64a8,8,0,0,1-13.66,5.66l-72-72A8,8,0,0,1,48,168V104a8,8,0,0,1,8-8h51L50.69,46A8,8,0,0,1,56,32H200a8,8,0,0,1,8,8v64A8,8,0,0,1,200,112Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,104V40a6,6,0,0,0-6-6H56a6,6,0,0,0-4,10.48L112.22,98H56a6,6,0,0,0-6,6v64a6,6,0,0,0,1.76,4.24l72,72A6,6,0,0,0,134,240V174h66a6,6,0,0,0,4-10.48L143.78,110H200A6,6,0,0,0,206,104Zm-21.78,58H128a6,6,0,0,0-6,6v57.51l-60-60V110h63.72ZM194,98H130.28L71.78,46H194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,104V40a8,8,0,0,0-8-8H56a8,8,0,0,0-5.31,14L107,96H56a8,8,0,0,0-8,8v64a8,8,0,0,0,2.34,5.66l72,72A8,8,0,0,0,136,240V176h64a8,8,0,0,0,5.31-14L149,112h51A8,8,0,0,0,208,104Zm-29,56H128a8,8,0,0,0-8,8v52.69l-56-56V112h61Zm13-64H131L77,48H192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,104H128L56,40H200ZM56,168l72,72V168h72l-72-64H56Z\"/>";

export const FramerLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FramerLogoProps) => {
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
