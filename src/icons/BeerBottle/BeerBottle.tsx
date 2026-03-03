import { SVGProps } from "react";

export type BeerBottleVariant = "duotone" | "fill" | "light";

export interface BeerBottleProps extends SVGProps<SVGSVGElement> {
  variant?: BeerBottleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M245.66,42.34l-32-32a8,8,0,0,0-11.32,11.32l1.48,1.47L148.65,64.51l-38.22,7.65a8.05,8.05,0,0,0-4.09,2.18L23,157.66a24,24,0,0,0,0,33.94L64.4,233a24,24,0,0,0,33.94,0l83.32-83.31a8,8,0,0,0,2.18-4.09l7.65-38.22,41.38-55.17,1.47,1.48a8,8,0,0,0,11.32-11.32ZM81.37,224a7.94,7.94,0,0,1-5.65-2.34L34.34,180.28a8,8,0,0,1,0-11.31L40,163.31,92.69,216,87,221.66A8,8,0,0,1,81.37,224ZM177.6,99.2a7.92,7.92,0,0,0-1.44,3.23l-7.53,37.63L160,148.69,107.31,96l8.63-8.63,37.63-7.53a7.92,7.92,0,0,0,3.23-1.44l58.45-43.84,6.19,6.19Z\"/>";
const LIGHT_INNER     = "<path d=\"M244.24,43.76l-32-32a6,6,0,0,0-8.48,8.48l3.11,3.11-57.38,43-38.67,7.74a5.92,5.92,0,0,0-3.06,1.64L24.44,159.07a22,22,0,0,0,0,31.11l41.38,41.38a22,22,0,0,0,31.11,0l83.31-83.32a5.92,5.92,0,0,0,1.64-3.06l7.74-38.67,43-57.38,3.11,3.11a6,6,0,0,0,8.48-8.48ZM88.44,223.07a10,10,0,0,1-14.14,0L32.93,181.7a10,10,0,0,1,0-14.14L40,160.49,95.51,216ZM104,207.51,48.49,152,96,104.49,151.51,160ZM179.2,100.4a5.88,5.88,0,0,0-1.08,2.42L170.47,141,160,151.51,104.49,96,115,85.53l38.22-7.65a5.88,5.88,0,0,0,2.42-1.08l59.84-44.88,8.64,8.64Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M245.66,42.34l-32-32a8,8,0,0,0-11.32,11.32l1.48,1.47L148.65,64.51l-38.22,7.65a8.05,8.05,0,0,0-4.09,2.18L23,157.66a24,24,0,0,0,0,33.94L64.4,233a24,24,0,0,0,33.94,0l83.32-83.31a8,8,0,0,0,2.18-4.09l7.65-38.22,41.38-55.17,1.47,1.48a8,8,0,0,0,11.32-11.32ZM104,204.69,51.31,152,96,107.31,148.69,160ZM81.37,224a7.94,7.94,0,0,1-5.65-2.34L34.34,180.28a8,8,0,0,1,0-11.31L40,163.31,92.69,216,87,221.66A8,8,0,0,1,81.37,224ZM177.6,99.2a7.92,7.92,0,0,0-1.44,3.23l-7.53,37.63L160,148.69,107.31,96l8.63-8.63,37.63-7.53a7.92,7.92,0,0,0,3.23-1.44l58.45-43.84,6.19,6.19Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,160l-56,56L40,152,96,96Z\"/>";

export const BeerBottle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BeerBottleProps) => {
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
