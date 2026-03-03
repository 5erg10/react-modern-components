import { SVGProps } from "react";

export type EyeglassesVariant = "duotone" | "fill" | "light";

export interface EyeglassesProps extends SVGProps<SVGSVGElement> {
  variant?: EyeglassesVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,72v92a44,44,0,0,1-87.81,4H111.81A44,44,0,0,1,24,164V72A32,32,0,0,1,56,40a8,8,0,0,1,0,16A16,16,0,0,0,40,72v58.08A44,44,0,0,1,110.32,152h35.36A44,44,0,0,1,216,130.08V72a16,16,0,0,0-16-16,8,8,0,0,1,0-16A32,32,0,0,1,232,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,42a6,6,0,0,0,0,12,18,18,0,0,1,18,18v62.65A42,42,0,0,0,147.21,154H108.79A42,42,0,0,0,38,134.65V72A18,18,0,0,1,56,54a6,6,0,0,0,0-12A30,30,0,0,0,26,72v92a42,42,0,0,0,84,2h36.1A42,42,0,0,0,230,164V72A30,30,0,0,0,200,42ZM68,194a30,30,0,1,1,30-30A30,30,0,0,1,68,194Zm120,0a30,30,0,1,1,30-30A30,30,0,0,1,188,194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v58.08A44,44,0,0,0,145.68,152H110.32A44,44,0,0,0,40,130.08V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,87.81,4h32.38A44,44,0,0,0,232,164V72A32,32,0,0,0,200,40ZM68,192a28,28,0,1,1,28-28A28,28,0,0,1,68,192Zm120,0a28,28,0,1,1,28-28A28,28,0,0,1,188,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,164a36,36,0,1,1-36-36A36,36,0,0,1,104,164Zm84-36a36,36,0,1,0,36,36A36,36,0,0,0,188,128Z\"/>";

export const Eyeglasses = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EyeglassesProps) => {
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
