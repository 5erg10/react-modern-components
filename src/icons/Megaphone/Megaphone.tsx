import { SVGProps } from "react";

export type MegaphoneVariant = "duotone" | "fill" | "light";

export interface MegaphoneProps extends SVGProps<SVGSVGElement> {
  variant?: MegaphoneVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,72H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48,48,0,0,0,200,72ZM179,207.89l0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z\"/>";
const LIGHT_INNER     = "<path d=\"M246,120a46.05,46.05,0,0,0-46-46H160.15c-2.58-.15-54.1-3.57-103.15-44.71A14,14,0,0,0,34,40V200a13.85,13.85,0,0,0,8.07,12.68A14.16,14.16,0,0,0,48,214a13.9,13.9,0,0,0,9-3.3c40-33.52,81.57-42,97-44.07v34a14,14,0,0,0,6.23,11.65l11,7.33a14,14,0,0,0,21.32-8.17l12.13-45.71A46.07,46.07,0,0,0,246,120ZM49.29,201.52A2,2,0,0,1,46,200V40a1.9,1.9,0,0,1,1.15-1.8A2.08,2.08,0,0,1,48,38a1.91,1.91,0,0,1,1.26.48c44,36.92,89,45.19,104.71,47v69C138.29,156.33,93.3,164.61,49.29,201.52Zm131.64,7a2,2,0,0,1-3.05,1.18l-11-7.33a2,2,0,0,1-.89-1.67V166h26.2ZM200,154H166V86h34a34,34,0,1,1,0,68Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,120a40,40,0,0,1-40,40H160V80h40A40,40,0,0,1,240,120Z\"/>";

export const Megaphone = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MegaphoneProps) => {
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
