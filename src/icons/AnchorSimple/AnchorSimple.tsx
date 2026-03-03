import { SVGProps } from "react";

export type AnchorSimpleVariant = "duotone" | "fill" | "light";

export interface AnchorSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: AnchorSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,120a104,104,0,0,1-208,0,8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40.36A88.15,88.15,0,0,0,120,207.63V90.83a28,28,0,1,1,16,0v116.8A88.15,88.15,0,0,0,215.64,128H200a8,8,0,0,1,0-16h24A8,8,0,0,1,232,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,114H200a6,6,0,0,0,0,12h17.8A90.13,90.13,0,0,1,134,209.78V93.4a30,30,0,1,0-12,0V209.78A90.13,90.13,0,0,1,38.2,126H56a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6,102,102,0,0,0,204,0A6,6,0,0,0,224,114ZM110,64a18,18,0,1,1,18,18A18,18,0,0,1,110,64Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,112H200a8,8,0,0,0,0,16h15.64A88.15,88.15,0,0,1,136,207.63V95a32,32,0,1,0-16,0V207.63A88.15,88.15,0,0,1,40.36,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,64a24,24,0,1,1-24-24A24,24,0,0,1,152,64Z\"/>";

export const AnchorSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AnchorSimpleProps) => {
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
