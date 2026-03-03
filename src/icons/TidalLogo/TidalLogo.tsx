import { SVGProps } from "react";

export type TidalLogoVariant = "duotone" | "fill" | "light";

export interface TidalLogoProps extends SVGProps<SVGSVGElement> {
  variant?: TidalLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M253.66,101.66l-36,36a8,8,0,0,1-11.32,0l-36-36-.34-.38-.34.38L135.31,136l34.35,34.34a8,8,0,0,1,0,11.32l-36,36a8,8,0,0,1-11.32,0l-36-36a8,8,0,0,1,0-11.32L120.69,136,86.34,101.66l-.34-.38-.34.38-36,36a8,8,0,0,1-11.32,0l-36-36a8,8,0,0,1,0-11.32l36-36a8,8,0,0,1,11.32,0l36,36,.34.38.34-.38,36-36a8,8,0,0,1,11.32,0l36,36,.34.38.34-.38,36-36a8,8,0,0,1,11.32,0l36,36A8,8,0,0,1,253.66,101.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M252.24,91.76l-40-40a6,6,0,0,0-8.48,0L168,87.52,132.24,51.76a6,6,0,0,0-8.48,0L88,87.52,52.24,51.76a6,6,0,0,0-8.48,0l-40,40a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0L88,104.48,119.52,136,83.76,171.76a6,6,0,0,0,0,8.48l40,40a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0,0-8.48L136.48,136,168,104.48l35.76,35.76a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,252.24,91.76ZM48,127.51,16.49,96,48,64.49,79.51,96Zm80,80L96.49,176,128,144.49,159.51,176Zm0-80L96.49,96,128,64.49,159.51,96Zm80,0L176.49,96,208,64.49,239.51,96Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M253.66,90.34l-40-40a8,8,0,0,0-11.32,0L168,84.69,133.66,50.34a8,8,0,0,0-11.32,0L88,84.69,53.66,50.34a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0L88,107.31,116.69,136,82.34,170.34a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32L139.31,136,168,107.31l34.34,34.35a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,253.66,90.34ZM48,124.69,19.31,96,48,67.31,76.69,96Zm80,80L99.31,176,128,147.31,156.69,176Zm0-80L99.31,96,128,67.31,156.69,96Zm80,0L179.31,96,208,67.31,236.69,96Z\"/>";
const SECONDARY_PATHS = "<path d=\"M48,56,88,96,48,136,8,96ZM88,96l40,40,40-40L128,56Zm40,120,40-40-40-40L88,176ZM208,56,168,96l40,40,40-40Z\"/>";

export const TidalLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TidalLogoProps) => {
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
