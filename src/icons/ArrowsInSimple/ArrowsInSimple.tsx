import { SVGProps } from "react";

export type ArrowsInSimpleVariant = "duotone" | "fill" | "light";

export interface ArrowsInSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowsInSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,144v48a8,8,0,0,1-13.66,5.66L88,179.31,53.66,213.66a8,8,0,0,1-11.32-11.32L76.69,168,58.34,149.66A8,8,0,0,1,64,136h48A8,8,0,0,1,120,144ZM213.66,42.34a8,8,0,0,0-11.32,0L168,76.69,149.66,58.34A8,8,0,0,0,136,64v48a8,8,0,0,0,8,8h48a8,8,0,0,0,5.66-13.66L179.31,88l34.35-34.34A8,8,0,0,0,213.66,42.34Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.24,52.24,158.48,106H192a6,6,0,0,1,0,12H144a6,6,0,0,1-6-6V64a6,6,0,0,1,12,0V97.52l53.76-53.76a6,6,0,0,1,8.48,8.48ZM112,138H64a6,6,0,0,0,0,12H97.52L43.76,203.76a6,6,0,1,0,8.48,8.48L106,158.48V192a6,6,0,0,0,12,0V144A6,6,0,0,0,112,138Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.66,53.66,163.31,104H192a8,8,0,0,1,0,16H144a8,8,0,0,1-8-8V64a8,8,0,0,1,16,0V92.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM112,136H64a8,8,0,0,0,0,16H92.69L42.34,202.34a8,8,0,0,0,11.32,11.32L104,163.31V192a8,8,0,0,0,16,0V144A8,8,0,0,0,112,136Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z\"/>";

export const ArrowsInSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowsInSimpleProps) => {
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
