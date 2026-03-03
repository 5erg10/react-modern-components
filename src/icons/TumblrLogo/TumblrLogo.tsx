import { SVGProps } from "react";

export type TumblrLogoVariant = "duotone" | "fill" | "light";

export interface TumblrLogoProps extends SVGProps<SVGSVGElement> {
  variant?: TumblrLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,120v48a8,8,0,0,0,8,8h32a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H152a64.07,64.07,0,0,1-64-64V120H64a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8,40,40,0,0,0,40-40,8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,118a6,6,0,0,0,6-6V72a6,6,0,0,0-6-6H150V24a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6A42,42,0,0,1,64,66a6,6,0,0,0-6,6v40a6,6,0,0,0,6,6H90v58a62.07,62.07,0,0,0,62,62h40a6,6,0,0,0,6-6V184a6,6,0,0,0-6-6H160a10,10,0,0,1-10-10V118Zm-32,72h26v36H152a50.06,50.06,0,0,1-50-50V112a6,6,0,0,0-6-6H70V77.67A54.12,54.12,0,0,0,117.67,30H138V72a6,6,0,0,0,6,6h42v28H144a6,6,0,0,0-6,6v56A22,22,0,0,0,160,190Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,120a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8H152V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8A40,40,0,0,1,64,64a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H88v56a64.07,64.07,0,0,0,64,64h40a8,8,0,0,0,8-8V184a8,8,0,0,0-8-8H160a8,8,0,0,1-8-8V120Zm-32,72h24v32H152a48.05,48.05,0,0,1-48-48V112a8,8,0,0,0-8-8H72V79.43A56.13,56.13,0,0,0,119.43,32H136V72a8,8,0,0,0,8,8h40v24H144a8,8,0,0,0-8,8v56A24,24,0,0,0,160,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M144,112v56a16,16,0,0,0,16,16h32v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40Z\"/>";

export const TumblrLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TumblrLogoProps) => {
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
