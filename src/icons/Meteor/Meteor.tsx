import { SVGProps } from "react";

export type MeteorVariant = "duotone" | "fill" | "light";

export interface MeteorProps extends SVGProps<SVGSVGElement> {
  variant?: MeteorVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,160a40,40,0,1,1-40-40A40,40,0,0,1,136,160Zm74.34-37.66-48,48a8,8,0,0,0,11.32,11.32l48-48a8,8,0,0,0-11.32-11.32Zm-20.68-12.68a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,11.32,11.32Zm40-51.32a8,8,0,0,0-11.32,0l-16,16a8,8,0,0,0,11.32,11.32l16-16A8,8,0,0,0,229.66,58.34ZM122.34,101.66a8,8,0,0,0,11.32,0l72-72a8,8,0,1,0-11.32-11.32l-72,72A8,8,0,0,0,122.34,101.66ZM135.6,199.6a56,56,0,0,1-79.2-79.2l82.75-82.74a8,8,0,1,0-11.32-11.32L45.09,109.09A72,72,0,1,0,146.91,210.91,8,8,0,0,0,135.6,199.6Z\"/>";
const LIGHT_INNER     = "<path d=\"M96,122a38,38,0,1,0,38,38A38,38,0,0,0,96,122Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,96,186Zm124.24-62.24a6,6,0,0,1,0,8.48l-48,48a6,6,0,0,1-8.48-8.48l48-48A6,6,0,0,1,220.24,123.76Zm-56,8.48a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,8.48Zm64-64-16,16a6,6,0,0,1-8.48-8.48l16-16a6,6,0,0,1,8.48,8.48ZM123.76,91.76l72-72a6,6,0,0,1,8.48,8.48l-72,72a6,6,0,1,1-8.48-8.48ZM145.5,201a6,6,0,0,1,0,8.49,70,70,0,0,1-99-99l82.75-82.74a6,6,0,1,1,8.48,8.48L55,119a58,58,0,1,0,82,82A6,6,0,0,1,145.5,201Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,120a40,40,0,1,0,40,40A40,40,0,0,0,96,120Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,96,184Zm125.66-61.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32-11.32l48-48A8,8,0,0,1,221.66,122.34Zm-56,11.32a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,11.32Zm64-64-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32ZM122.34,90.34l72-72a8,8,0,1,1,11.32,11.32l-72,72a8,8,0,0,1-11.32-11.32ZM146.91,199.6a8,8,0,0,1,0,11.31A72,72,0,1,1,45.09,109.09l82.74-82.75a8,8,0,1,1,11.32,11.32L56.4,120.4a56,56,0,0,0,79.2,79.2A8,8,0,0,1,146.91,199.6Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,160a32,32,0,1,1-32-32A32,32,0,0,1,128,160Z\"/>";

export const Meteor = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MeteorProps) => {
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
