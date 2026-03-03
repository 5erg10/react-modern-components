import { SVGProps } from "react";

export type DropSimpleVariant = "duotone" | "fill" | "light";

export interface DropSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: DropSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Z\"/>";
const LIGHT_INNER     = "<path d=\"M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM128,218a74.09,74.09,0,0,1-74-74c0-59.62,59-108.93,74-120.51C143,35.07,202,84.38,202,144A74.09,74.09,0,0,1,128,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,144a80,80,0,0,1-160,0c0-72,80-128,80-128S208,72,208,144Z\"/>";

export const DropSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DropSimpleProps) => {
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
