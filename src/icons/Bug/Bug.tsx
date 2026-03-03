import { SVGProps } from "react";

export type BugVariant = "duotone" | "fill" | "light";

export interface BugProps extends SVGProps<SVGSVGElement> {
  variant?: BugVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M168,92a12,12,0,1,1-12-12A12,12,0,0,1,168,92ZM100,80a12,12,0,1,0,12,12A12,12,0,0,0,100,80Zm116,64A87.76,87.76,0,0,1,213,167l22.24,9.72A8,8,0,0,1,232,192a7.89,7.89,0,0,1-3.2-.67L207.38,182a88,88,0,0,1-158.76,0L27.2,191.33A7.89,7.89,0,0,1,24,192a8,8,0,0,1-3.2-15.33L43,167A87.76,87.76,0,0,1,40,144v-8H16a8,8,0,0,1,0-16H40v-8a87.76,87.76,0,0,1,3-23L20.8,79.33a8,8,0,1,1,6.4-14.66L48.62,74a88,88,0,0,1,158.76,0l21.42-9.36a8,8,0,0,1,6.4,14.66L213,89.05a87.76,87.76,0,0,1,3,23v8h24a8,8,0,0,1,0,16H216Zm-80,0a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0Zm64-32a72,72,0,0,0-144,0v8H200Z\"/>";
const LIGHT_INNER     = "<path d=\"M146,92a10,10,0,1,1,10,10A10,10,0,0,1,146,92ZM100,82a10,10,0,1,0,10,10A10,10,0,0,0,100,82Zm146,46a6,6,0,0,1-6,6H214v10a85.88,85.88,0,0,1-3.45,24.08L234.4,178.5a6,6,0,0,1-4.8,11l-23.23-10.15a86,86,0,0,1-156.74,0L26.4,189.5a6,6,0,1,1-4.8-11l23.85-10.42A85.88,85.88,0,0,1,42,144V134H16a6,6,0,0,1,0-12H42V112a85.88,85.88,0,0,1,3.45-24.08L21.6,77.5a6,6,0,0,1,4.8-11L49.63,76.65a86,86,0,0,1,156.74,0L229.6,66.5a6,6,0,1,1,4.8,11L210.55,87.92A85.88,85.88,0,0,1,214,112v10h26A6,6,0,0,1,246,128ZM54,122H202V112a74,74,0,0,0-148,0Zm68,95.74V134H54v10A74.09,74.09,0,0,0,122,217.74ZM202,134H134v83.74A74.09,74.09,0,0,0,202,144Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,92a12,12,0,1,1,12,12A12,12,0,0,1,144,92ZM100,80a12,12,0,1,0,12,12A12,12,0,0,0,100,80Zm116,64A87.76,87.76,0,0,1,213,167l22.24,9.72A8,8,0,0,1,232,192a7.89,7.89,0,0,1-3.2-.67L207.38,182a88,88,0,0,1-158.76,0L27.2,191.33A7.89,7.89,0,0,1,24,192a8,8,0,0,1-3.2-15.33L43,167A87.76,87.76,0,0,1,40,144v-8H16a8,8,0,0,1,0-16H40v-8a87.76,87.76,0,0,1,3-23L20.8,79.33a8,8,0,1,1,6.4-14.66L48.62,74a88,88,0,0,1,158.76,0l21.42-9.36a8,8,0,0,1,6.4,14.66L213,89.05a87.76,87.76,0,0,1,3,23v8h24a8,8,0,0,1,0,16H216ZM56,120H200v-8a72,72,0,0,0-144,0Zm64,95.54V136H56v8A72.08,72.08,0,0,0,120,215.54ZM200,144v-8H136v79.54A72.08,72.08,0,0,0,200,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,128v16a80,80,0,0,1-160,0V128Z\"/>";

export const Bug = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BugProps) => {
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
