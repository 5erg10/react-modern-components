import { SVGProps } from "react";

export type SunglassesVariant = "duotone" | "fill" | "light";

export interface SunglassesProps extends SVGProps<SVGSVGElement> {
  variant?: SunglassesVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40ZM91.22,179.22a8,8,0,0,1-11.31,0L58.34,157.66a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,91.22,179.22Zm120,0a8,8,0,0,1-11.31,0l-21.57-21.56a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,211.22,179.22Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,42a6,6,0,0,0,0,12,18,18,0,0,1,18,18v58H38V72A18,18,0,0,1,56,54a6,6,0,0,0,0-12A30,30,0,0,0,26,72v92a42,42,0,0,0,84,0V142h36v22a42,42,0,0,0,84,0V72A30,30,0,0,0,200,42ZM38,164V142.48L84.53,189A30,30,0,0,1,38,164Zm60,0a29.83,29.83,0,0,1-5,16.53L54.48,142H98Zm60,0V142.48L204.53,189A30,30,0,0,1,158,164Zm55,16.53L174.48,142H218v22A29.83,29.83,0,0,1,213,180.53Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40Zm12.63,137.31L179.31,144H216v20A27.8,27.8,0,0,1,212.63,177.31ZM40,164V147.31l41.31,41.32A28,28,0,0,1,40,164Zm56,0a27.8,27.8,0,0,1-3.37,13.31L59.31,144H96Zm64,0V147.31l41.31,41.32A28,28,0,0,1,160,164Z\"/>";
const SECONDARY_PATHS = "<path d=\"M32,136h72v28a36,36,0,0,1-72,0Zm120,0v28a36,36,0,0,0,72,0V136Z\"/>";

export const Sunglasses = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SunglassesProps) => {
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
