import { SVGProps } from "react";

export type DropSlashVariant = "duotone" | "fill" | "light";

export interface DropSlashProps extends SVGProps<SVGSVGElement> {
  variant?: DropSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.92,210.62a8,8,0,1,1-11.84,10.76l-12.9-14.19A87.71,87.71,0,0,1,128,232c-48,0-87.49-38.93-88-86.88-.27-24.34,8.22-49.84,24.73-74.81L42.3,45.63a8.23,8.23,0,0,1,.14-11.38,8,8,0,0,1,11.48.37Zm-10.07-34.86a4,4,0,0,0,6.7-1.27A87.66,87.66,0,0,0,216,144c0-31.4-14.51-64.68-42-96.25a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A251.26,251.26,0,0,0,87.17,42a4,4,0,0,0,0,5.41Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44l23.7,26.07C50.51,94.93,42,119.77,42,144a86,86,0,0,0,147.28,60.33L203.56,220a6,6,0,0,0,8.88-8.08ZM128,218a74.09,74.09,0,0,1-74-74c0-21,7.27-42.76,21.59-64.73L181.18,195.42A73.81,73.81,0,0,1,128,218ZM91.4,49.07a6,6,0,0,1-.2-8.49,245.6,245.6,0,0,1,33.36-29.49,6,6,0,0,1,6.88,0,251.42,251.42,0,0,1,41.09,38C199.66,80.26,214,113.09,214,144a86.2,86.2,0,0,1-3.08,22.87,6,6,0,0,1-5.78,4.41,6.2,6.2,0,0,1-1.59-.21,6,6,0,0,1-4.2-7.38A74,74,0,0,0,202,144c0-59.63-59-108.94-74-120.52A253.83,253.83,0,0,0,99.88,48.86,6,6,0,0,1,91.4,49.07Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L64.72,70.29C48.32,95,40,119.78,40,144a88,88,0,0,0,149.21,63.22l12.87,14.16a8,8,0,1,0,11.84-10.76ZM128,216a72.08,72.08,0,0,1-72-72c0-19.93,6.68-40.57,19.86-61.46L178.43,195.36A71.84,71.84,0,0,1,128,216ZM90,50.51a8,8,0,0,1-.27-11.31A247.8,247.8,0,0,1,123.41,9.45a8,8,0,0,1,9.18,0C136,11.83,216,68.7,216,144a88.08,88.08,0,0,1-3.15,23.4,8,8,0,0,1-7.71,5.88A7.79,7.79,0,0,1,203,173a8,8,0,0,1-5.59-9.83A72.55,72.55,0,0,0,200,144c0-57.24-55.48-105-72-118a252.23,252.23,0,0,0-26.66,24.23A8,8,0,0,1,90,50.51Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,144a80,80,0,0,1-160,0c0-72,80-128,80-128S208,72,208,144Z\"/>";

export const DropSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DropSlashProps) => {
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
