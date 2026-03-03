import { SVGProps } from "react";

export type ArrowUpLeftVariant = "duotone" | "fill" | "light";

export interface ArrowUpLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowUpLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M197.66,197.66a8,8,0,0,1-11.32,0L116,127.31,69.66,173.66A8,8,0,0,1,56,168V64a8,8,0,0,1,8-8H168a8,8,0,0,1,5.66,13.66L127.31,116l70.35,70.34A8,8,0,0,1,197.66,197.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M196.24,196.24a6,6,0,0,1-8.48,0L70,78.48V168a6,6,0,0,1-12,0V64a6,6,0,0,1,6-6H168a6,6,0,0,1,0,12H78.48L196.24,187.76A6,6,0,0,1,196.24,196.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M197.66,186.34,127.31,116l46.35-46.34A8,8,0,0,0,168,56H64a8,8,0,0,0-8,8V168a8,8,0,0,0,13.66,5.66L116,127.31l70.34,70.35a8,8,0,0,0,11.32-11.32ZM72,72h76.69l-38.34,38.34h0L72,148.69Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,64,64,168V64Z\"/>";

export const ArrowUpLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowUpLeftProps) => {
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
