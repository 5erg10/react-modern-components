import { SVGProps } from "react";

export type ArrowsCounterClockwiseVariant = "duotone" | "fill" | "light";

export interface ArrowsCounterClockwiseProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowsCounterClockwiseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M88,104H40a8,8,0,0,1-8-8V48a8,8,0,0,1,13.66-5.66L64,60.7a95.42,95.42,0,0,1,66-26.76h.53a95.36,95.36,0,0,1,67.07,27.33,8,8,0,0,1-11.18,11.44,79.52,79.52,0,0,0-55.89-22.77h-.45A79.48,79.48,0,0,0,75.35,72L93.66,90.34A8,8,0,0,1,88,104Zm128,48H168a8,8,0,0,0-5.66,13.66L180.65,184a79.48,79.48,0,0,1-54.72,22.09h-.45a79.52,79.52,0,0,1-55.89-22.77,8,8,0,1,0-11.18,11.44,95.36,95.36,0,0,0,67.07,27.33H126a95.42,95.42,0,0,0,66-26.76l18.36,18.36A8,8,0,0,0,224,208V160A8,8,0,0,0,216,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M88,102H40a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0V81.52l18-18a93.45,93.45,0,0,1,66-27.53h.52A93.39,93.39,0,0,1,196.19,62.7a6,6,0,0,1-8.38,8.58A82,82,0,0,0,72.53,72L54.48,90H88a6,6,0,0,1,0,12Zm128,52H168a6,6,0,0,0,0,12h33.52l-18.05,18a81.51,81.51,0,0,1-57.53,24h-.46a81.5,81.5,0,0,1-57.29-23.34,6,6,0,0,0-8.38,8.58,93.39,93.39,0,0,0,65.67,26.76H126a93.45,93.45,0,0,0,66-27.53l18-18.05V208a6,6,0,0,0,12,0V160A6,6,0,0,0,216,154Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,104H40a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V76.69L62.63,62.06A95.43,95.43,0,0,1,130,33.94h.53a95.36,95.36,0,0,1,67.07,27.33,8,8,0,0,1-11.18,11.44,79.52,79.52,0,0,0-55.89-22.77h-.45A79.56,79.56,0,0,0,73.94,73.37L59.31,88H88a8,8,0,0,1,0,16Zm128,48H168a8,8,0,0,0,0,16h28.69l-14.63,14.63a79.56,79.56,0,0,1-56.13,23.43h-.45a79.52,79.52,0,0,1-55.89-22.77,8,8,0,1,0-11.18,11.44,95.36,95.36,0,0,0,67.07,27.33H126a95.43,95.43,0,0,0,67.36-28.12L208,179.31V208a8,8,0,0,0,16,0V160A8,8,0,0,0,216,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z\"/>";

export const ArrowsCounterClockwise = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowsCounterClockwiseProps) => {
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
