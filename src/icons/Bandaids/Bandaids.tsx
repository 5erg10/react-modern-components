import { SVGProps } from "react";

export type BandaidsVariant = "duotone" | "fill" | "light";

export interface BandaidsProps extends SVGProps<SVGSVGElement> {
  variant?: BandaidsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,116a12,12,0,1,1-12,12A12,12,0,0,1,128,116Zm84.28,39.72a40,40,0,1,1-56.56,56.56L128,184.57l-27.72,27.71a40,40,0,1,1-56.56-56.56L71.43,128,43.72,100.28a40,40,0,1,1,56.56-56.56L128,71.43l27.72-27.71a40,40,0,1,1,56.56,56.56L184.57,128Zm-95.59,17.53L82.75,139.31,55,167A24,24,0,1,0,89,201ZM161.94,128,128,94.06,94.06,128,128,161.94Zm39-39A24,24,0,1,0,167,55L139.31,82.75l33.94,33.94Z\"/>";
const LIGHT_INNER     = "<path d=\"M181.74,128l29.13-29.13a38,38,0,1,0-53.74-53.74L128,74.26,98.87,45.13A38,38,0,1,0,45.13,98.87L74.26,128,45.13,157.13a38,38,0,1,0,53.74,53.74L128,181.74l29.13,29.13a38,38,0,1,0,53.74-53.74ZM165.62,53.62h0a26,26,0,1,1,36.76,36.77l-29.13,29.13L136.49,82.75ZM164.77,128,128,164.77,91.23,128,128,91.23ZM53.62,90.38A26,26,0,1,1,90.38,53.62l29.13,29.13L82.75,119.52Zm36.76,112a26,26,0,1,1-36.76-36.76l29.13-29.13,36.76,36.76Zm112,0a26,26,0,0,1-36.76,0l-29.14-29.13,36.77-36.77,29.13,29.14a26,26,0,0,1,0,36.76ZM118,128a10,10,0,1,1,10,10A10,10,0,0,1,118,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184.57,128l27.71-27.72a40,40,0,1,0-56.56-56.56L128,71.43,100.28,43.72a40,40,0,1,0-56.56,56.56L71.43,128,43.72,155.72a40,40,0,1,0,56.56,56.56L128,184.57l27.72,27.71a40,40,0,1,0,56.56-56.56ZM167,55A24,24,0,1,1,201,89l-27.72,27.72L139.31,82.75Zm-5.09,73L128,161.94,94.06,128,128,94.06ZM55,89h0A24,24,0,1,1,89,55l27.72,27.72L82.75,116.69ZM89,201A24,24,0,1,1,55,167l27.72-27.72,33.94,33.94Zm112,0A24,24,0,0,1,167,201l-27.72-27.72,33.94-33.94L201,167A24,24,0,0,1,201,201Zm-85-73a12,12,0,1,1,12,12A12,12,0,0,1,116,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M206.63,94.63,173.25,128,128,82.75l33.37-33.38a32,32,0,0,1,45.26,45.26ZM49.37,161.37a32,32,0,0,0,45.26,45.26L128,173.25,82.75,128ZM82.75,128,128,82.75,94.63,49.37A32,32,0,0,0,49.37,94.63Zm90.5,0L128,173.25l33.37,33.38a32,32,0,0,0,45.26-45.26Z\"/>";

export const Bandaids = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BandaidsProps) => {
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
