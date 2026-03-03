import { SVGProps } from "react";

export type ShrimpVariant = "duotone" | "fill" | "light";

export interface ShrimpProps extends SVGProps<SVGSVGElement> {
  variant?: ShrimpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,116a12,12,0,1,1,12,12A12,12,0,0,1,136,116ZM240,60a28,28,0,0,1-16.2,25.38A80.09,80.09,0,0,1,144,160H112a12,12,0,0,0,0,24h56a8,8,0,0,1,0,16H120v16h32a8,8,0,0,1,0,16H96A80,80,0,0,1,96,72H212a12,12,0,0,0,0-24H128a24,24,0,0,1-24-24,8,8,0,0,1,16,0,8,8,0,0,0,8,8h84A28,28,0,0,1,240,60ZM85.72,182.2a8,8,0,0,0-11.16-1.86l-15.36,11a8,8,0,0,0,9.3,13l15.36-11A8,8,0,0,0,85.72,182.2Zm-1.5-35.62L45.55,129a8,8,0,1,0-6.62,14.56L77.6,161.15a8,8,0,0,0,10.59-4A8,8,0,0,0,84.22,146.58ZM207.5,88H120v56h24A64.09,64.09,0,0,0,207.5,88Z\"/>";
const LIGHT_INNER     = "<path d=\"M138,116a10,10,0,1,1,10,10A10,10,0,0,1,138,116Zm83.9-32A78.1,78.1,0,0,1,144,158H112a14,14,0,0,0,0,28h56a6,6,0,0,1,0,12H118v20h34a6,6,0,0,1,0,12H96A78,78,0,0,1,96,74H212a14,14,0,0,0,0-28H128a22,22,0,0,1-22-22,6,6,0,0,1,12,0,10,10,0,0,0,10,10h84a26,26,0,0,1,9.9,50ZM50.65,199.88l35.48-25.34A23.74,23.74,0,0,1,86,172a25.92,25.92,0,0,1,1.46-8.57L31.51,138a65.8,65.8,0,0,0,19.14,61.88ZM90.3,186.3,60.49,207.59A65.56,65.56,0,0,0,96,218h10V197.29A26.05,26.05,0,0,1,90.3,186.3ZM106,146.71V86H96a66.1,66.1,0,0,0-60.86,40.47L94,153.24A25.86,25.86,0,0,1,106,146.71ZM209.73,86H118v60h26A66.09,66.09,0,0,0,209.73,86Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,116a12,12,0,1,1,12,12A12,12,0,0,1,136,116Zm87.8-30.62A80.09,80.09,0,0,1,144,160H112a12,12,0,0,0,0,24h56a8,8,0,0,1,0,16H120v16h32a8,8,0,0,1,0,16H96A80,80,0,0,1,96,72H212a12,12,0,0,0,0-24H128a24,24,0,0,1-24-24,8,8,0,0,1,16,0,8,8,0,0,0,8,8h84a28,28,0,0,1,11.8,53.38Zm-173,111.91,33.22-23.73c0-.51,0-1,0-1.56a28,28,0,0,1,1-7.48L33,140.87a63.74,63.74,0,0,0,17.84,56.42Zm39-8.2L64.12,207.46A63.6,63.6,0,0,0,96,216h8V198.83A28.13,28.13,0,0,1,89.84,189.09ZM104,145.17V88H96a64.07,64.07,0,0,0-58.22,37.48l55.87,25.39A28,28,0,0,1,104,145.17ZM207.5,88H120v56h24A64.09,64.09,0,0,0,207.5,88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M112,80h0v72a20,20,0,0,0,0,40v32H96A72,72,0,0,1,96,80Z\"/>";

export const Shrimp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShrimpProps) => {
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
