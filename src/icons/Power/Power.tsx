import { SVGProps } from "react";

export type PowerVariant = "duotone" | "fill" | "light";

export interface PowerProps extends SVGProps<SVGSVGElement> {
  variant?: PowerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm-8,40a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0Zm8,144A80,80,0,0,1,83.55,61.48a8,8,0,1,1,8.9,13.29,64,64,0,1,0,71.1,0,8,8,0,1,1,8.9-13.29A80,80,0,0,1,128,208Z\"/>";
const LIGHT_INNER     = "<path d=\"M122,128V48a6,6,0,0,1,12,0v80a6,6,0,0,1-12,0Zm57.28-77A6,6,0,0,0,172.72,61C196.41,76.47,210,100.88,210,128a82,82,0,0,1-164,0c0-27.12,13.59-51.53,37.28-67A6,6,0,0,0,76.72,51C49.57,68.68,34,96.75,34,128a94,94,0,0,0,188,0C222,96.75,206.43,68.68,179.28,51Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120,128V48a8,8,0,0,1,16,0v80a8,8,0,0,1-16,0Zm60.37-78.7a8,8,0,0,0-8.74,13.4C194.74,77.77,208,101.57,208,128a80,80,0,0,1-160,0c0-26.43,13.26-50.23,36.37-65.3a8,8,0,0,0-8.74-13.4C47.9,67.38,32,96.06,32,128a96,96,0,0,0,192,0C224,96.06,208.1,67.38,180.37,49.3Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z\"/>";

export const Power = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PowerProps) => {
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
