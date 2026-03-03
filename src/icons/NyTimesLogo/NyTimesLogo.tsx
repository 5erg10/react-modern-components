import { SVGProps } from "react";

export type NyTimesLogoVariant = "duotone" | "fill" | "light";

export interface NyTimesLogoProps extends SVGProps<SVGSVGElement> {
  variant?: NyTimesLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M172,136a12,12,0,1,1-12,12A12,12,0,0,1,172,136Zm12.62-32.75L118.91,72.59A71.95,71.95,0,0,0,56.06,141.3l68.18-36.36A8,8,0,0,1,136,112V215.55a71.64,71.64,0,0,0,60.71-50A8,8,0,0,1,212,170.4,88,88,0,1,1,51.74,100.1,36,36,0,0,1,68,32a8.05,8.05,0,0,1,3.38.75L189.63,87.93A20,20,0,0,0,188,48a8,8,0,0,1,0-16,36,36,0,0,1,0,72A8.05,8.05,0,0,1,184.62,103.25ZM96,208.47V138.13L57.51,158.66A72.23,72.23,0,0,0,96,208.47ZM96.13,62,66.37,48.07a20,20,0,0,0-5.2,38.71c.6-.71,1.2-1.42,1.84-2.11A88,88,0,0,1,96.13,62Z\"/>";
const LIGHT_INNER     = "<path d=\"M172,138a10,10,0,1,1-10,10A10,10,0,0,1,172,138Zm13.46-36.56L119.24,70.53A74,74,0,0,0,54,144c0,.22,0,.44,0,.66l71.16-37.95A6,6,0,0,1,134,112V217.76a73.63,73.63,0,0,0,64.61-51.56,6,6,0,0,1,11.45,3.6A86,86,0,1,1,54.57,99.23,34,34,0,0,1,68,34a6,6,0,0,1,2.54.56L189.26,90A22,22,0,0,0,188,46a6,6,0,0,1,0-12,34,34,0,0,1,0,68A6,6,0,0,1,185.46,101.44ZM102,213.27a73.47,73.47,0,0,0,20,4.47V122l-20,10.67ZM55.27,157.59A74.22,74.22,0,0,0,90,207.47v-68.4Zm46.14-95.38L66.74,46a22,22,0,0,0-4.93,43.05c.86-1,1.75-2.06,2.67-3.07A86,86,0,0,1,101.41,62.21Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M172,136a12,12,0,1,1-12,12A12,12,0,0,1,172,136Zm12.62-32.75L118.91,72.59A71.95,71.95,0,0,0,56.06,141.3l68.18-36.36A8,8,0,0,1,136,112V215.55a71.64,71.64,0,0,0,60.71-50A8,8,0,0,1,212,170.4,88,88,0,1,1,51.74,100.1,36,36,0,0,1,68,32a8.05,8.05,0,0,1,3.38.75L189.63,87.93A20,20,0,0,0,188,48a8,8,0,0,1,0-16,36,36,0,0,1,0,72A8.05,8.05,0,0,1,184.62,103.25ZM88,203.83V142.4L57.51,158.66A72.15,72.15,0,0,0,88,203.83Zm32-78.5-16,8.54v78a71,71,0,0,0,16,3.67ZM96.13,62,66.37,48.07a20,20,0,0,0-5.2,38.71c.6-.71,1.2-1.42,1.84-2.11A88,88,0,0,1,96.13,62Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,112V224a79.58,79.58,0,0,1-32-6.66V129.07Z\"/>";

export const NyTimesLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NyTimesLogoProps) => {
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
