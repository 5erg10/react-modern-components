import { SVGProps } from "react";

export type CookieVariant = "duotone" | "fill" | "light";

export interface CookieProps extends SVGProps<SVGSVGElement> {
  variant?: CookieVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,120a40,40,0,0,1-40-40,8,8,0,0,0-8-8,40,40,0,0,1-40-40,8,8,0,0,0-8-8A104,104,0,1,0,232,128,8,8,0,0,0,224,120ZM75.51,99.51a12,12,0,1,1,0,17A12,12,0,0,1,75.51,99.51Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.49,172.49Zm23-40a12,12,0,1,1,17,0A12,12,0,0,1,123.51,132.49Zm41,48a12,12,0,1,1,0-17A12,12,0,0,1,164.49,180.49Z\"/>";
const LIGHT_INNER     = "<path d=\"M163.07,164.93a10,10,0,1,1-14.14,0A10,10,0,0,1,163.07,164.93Zm-78.14-8a10,10,0,1,0,14.14,0A10,10,0,0,0,84.93,156.93Zm6.14-41.86a10,10,0,1,0-14.14,0A10,10,0,0,0,91.07,115.07Zm33.86,1.86a10,10,0,1,0,14.14,0A10,10,0,0,0,124.93,116.93ZM230,128A102,102,0,1,1,128,26a6,6,0,0,1,6,6,42,42,0,0,0,42,42,6,6,0,0,1,6,6,42,42,0,0,0,42,42A6,6,0,0,1,230,128Zm-12.18,5.65A54.09,54.09,0,0,1,170.3,85.7a54.09,54.09,0,0,1-48-47.53,90,90,0,1,0,95.47,95.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96,48,48,0,0,0,48,48A48,48,0,0,0,224,128Z\"/>";

export const Cookie = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CookieProps) => {
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
