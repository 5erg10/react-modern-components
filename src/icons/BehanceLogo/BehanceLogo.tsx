import { SVGProps } from "react";

export type BehanceLogoVariant = "duotone" | "fill" | "light";

export interface BehanceLogoProps extends SVGProps<SVGSVGElement> {
  variant?: BehanceLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M92,120H64V96H92a12,12,0,0,1,0,24Zm4,16H64v32H96a16,16,0,0,0,0-32Zm80-16a24,24,0,0,0-22.62,16h45.24A24,24,0,0,0,176,120Zm64-64V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM144,88a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H152A8,8,0,0,0,144,88Zm-16,64a32,32,0,0,0-14.13-26.53A28,28,0,0,0,92,80H56a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H96A32,32,0,0,0,128,152Zm88-8a40,40,0,1,0-13.54,30,8,8,0,0,0-10.59-12,24,24,0,0,1-38.49-10H208A8,8,0,0,0,216,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M112.15,122.36A36,36,0,0,0,90,58H32a6,6,0,0,0-6,6V192a6,6,0,0,0,6,6H94a40,40,0,0,0,18.15-75.64ZM38,70H90a24,24,0,0,1,0,48H38ZM94,186H38V130H94a28,28,0,0,1,0,56ZM162,80a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H168A6,6,0,0,1,162,80Zm38,26a46,46,0,1,0,36.8,73.61,6,6,0,0,0-9.6-7.21A34,34,0,0,1,166.53,158H240a6,6,0,0,0,6-6A46.06,46.06,0,0,0,200,106Zm-33.47,40a34,34,0,0,1,66.94,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M160,80a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H168A8,8,0,0,1,160,80Zm-24,78a42,42,0,0,1-42,42H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H90a38,38,0,0,1,25.65,66A42,42,0,0,1,136,158ZM40,116H90a22,22,0,0,0,0-44H40Zm80,42a26,26,0,0,0-26-26H40v52H94A26,26,0,0,0,120,158Zm128-6a8,8,0,0,1-8,8H169a32,32,0,0,0,56.59,11.2,8,8,0,0,1,12.8,9.61A48,48,0,1,1,248,152Zm-17-8a32,32,0,0,0-62,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,152H160a40,40,0,0,1,80,0ZM94,124H90a30,30,0,0,0,0-60H32V192H94a34,34,0,0,0,0-68Z\"/>";

export const BehanceLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BehanceLogoProps) => {
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
