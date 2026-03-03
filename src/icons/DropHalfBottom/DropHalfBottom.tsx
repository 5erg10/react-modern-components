import { SVGProps } from "react";

export type DropHalfBottomVariant = "duotone" | "fill" | "light";

export interface DropHalfBottomProps extends SVGProps<SVGSVGElement> {
  variant?: DropHalfBottomVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,26c14.16,11.1,56.86,47.74,68.84,94H59.16C71.14,73.76,113.84,37.12,128,26Z\"/>";
const LIGHT_INNER     = "<path d=\"M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM188.88,186H67.12a74.05,74.05,0,0,1-9.78-20H198.66A74.05,74.05,0,0,1,188.88,186ZM54.69,154A75,75,0,0,1,54,144a92.09,92.09,0,0,1,.56-10H201.44a92.09,92.09,0,0,1,.56,10,75,75,0,0,1-.69,10ZM128,23.49c13.13,10.12,59.83,49.06,71.39,98.51H56.61C68.17,72.55,114.87,33.61,128,23.49ZM77.48,198h101a73.81,73.81,0,0,1-101,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,26c14.16,11.1,56.86,47.74,68.84,94H59.16C71.14,73.76,113.84,37.12,128,26Zm0,190a72.08,72.08,0,0,1-72-72q0-4,.36-8H199.64q.36,4,.36,8A72.08,72.08,0,0,1,128,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,144a80,80,0,0,1-160,0,100.8,100.8,0,0,1,1.3-16H206.7A100.8,100.8,0,0,1,208,144Z\"/>";

export const DropHalfBottom = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DropHalfBottomProps) => {
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
