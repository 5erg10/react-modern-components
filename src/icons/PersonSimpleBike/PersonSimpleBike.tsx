import { SVGProps } from "react";

export type PersonSimpleBikeVariant = "duotone" | "fill" | "light";

export interface PersonSimpleBikeProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleBikeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,52a28,28,0,1,1,28,28A28,28,0,0,1,136,52ZM240,176a40,40,0,1,1-40-40A40,40,0,0,1,240,176Zm-16,0a24,24,0,1,0-24,24A24,24,0,0,0,224,176Zm-24-64a8,8,0,0,0-8-8H155.31L125.66,74.34a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,0,11.32L120,155.31V200a8,8,0,0,0,16,0V152a8,8,0,0,0-2.34-5.66L99.31,112,120,91.31l26.34,26.35A8,8,0,0,0,152,120h40A8,8,0,0,0,200,112ZM96,176a40,40,0,1,1-40-40A40,40,0,0,1,96,176Zm-16,0a24,24,0,1,0-24,24A24,24,0,0,0,80,176Z\"/>";
const LIGHT_INNER     = "<path d=\"M164,78a26,26,0,1,0-26-26A26,26,0,0,0,164,78Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,38Zm36,100a38,38,0,1,0,38,38A38,38,0,0,0,200,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,200,202ZM56,138a38,38,0,1,0,38,38A38,38,0,0,0,56,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,56,202Zm136-84H152a6,6,0,0,1-4.24-1.76L120,88.49,96.49,112l35.75,35.76A6,6,0,0,1,134,152v48a6,6,0,0,1-12,0V154.49L83.76,116.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0L154.49,106H192a6,6,0,0,1,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,200,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,200,200ZM56,136a40,40,0,1,0,40,40A40,40,0,0,0,56,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,56,200Zm136-80H152a8,8,0,0,1-5.66-2.34L120,91.31,99.31,112l34.35,34.34A8,8,0,0,1,136,152v48a8,8,0,0,1-16,0V155.31L82.34,117.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0L155.31,104H192a8,8,0,0,1,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,176a32,32,0,1,1-32-32A32,32,0,0,1,232,176ZM56,144a32,32,0,1,0,32,32A32,32,0,0,0,56,144Z\"/>";

export const PersonSimpleBike = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleBikeProps) => {
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
