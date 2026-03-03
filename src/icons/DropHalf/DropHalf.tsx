import { SVGProps } from "react";

export type DropHalfVariant = "duotone" | "fill" | "light";

export interface DropHalfProps extends SVGProps<SVGSVGElement> {
  variant?: DropHalfVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM56,144c0-57.23,55.47-105,72-118V216A72.08,72.08,0,0,1,56,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM202,144a75,75,0,0,1-.69,10H134V134h67.44A92.09,92.09,0,0,1,202,144ZM186.8,90H134V70h39.89A176,176,0,0,1,186.8,90ZM134,198h44.52A73.76,73.76,0,0,1,134,217.74Zm0-12V166h64.66a74.05,74.05,0,0,1-9.78,20Zm0-64V102h58.7a117.43,117.43,0,0,1,6.69,20Zm30.29-64H134V28.3A257.09,257.09,0,0,1,164.29,58ZM54,144c0-53.42,47.35-98.56,68-115.7V217.74A74.09,74.09,0,0,1,54,144Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM56,144c0-50,42.26-92.71,64-111.4V215.54A72.08,72.08,0,0,1,56,144Zm80,71.54V32.6C157.74,51.29,200,94,200,144A72.08,72.08,0,0,1,136,215.54Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,144a80,80,0,0,1-80,80V16S208,72,208,144Z\"/>";

export const DropHalf = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DropHalfProps) => {
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
