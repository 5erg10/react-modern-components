import { SVGProps } from "react";

export type FunnelSimpleXVariant = "duotone" | "fill" | "light";

export interface FunnelSimpleXProps extends SVGProps<SVGSVGElement> {
  variant?: FunnelSimpleXVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,128a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,128Zm56,48H112a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm69.66,10.34a8,8,0,0,1-11.32,11.32L176,187.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L164.69,176l-10.35-10.34a8,8,0,0,1,11.32-11.32L176,164.69l10.34-10.35a8,8,0,0,1,11.32,11.32L187.31,176ZM208,96H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,142H64a6,6,0,0,1,0-12H192a6,6,0,0,1,0,12Zm40-60H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM128,178H104a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm92.24-6.24a6,6,0,0,0-8.48,0L192,191.51l-19.76-19.75a6,6,0,0,0-8.48,8.48L183.51,200l-19.75,19.76a6,6,0,1,0,8.48,8.48L192,208.49l19.76,19.75a6,6,0,0,0,8.48-8.48L200.49,200l19.75-19.76A6,6,0,0,0,220.24,171.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,144H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm40-64H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM128,176H104a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm93.66-5.66a8,8,0,0,0-11.32,0L192,188.69l-18.34-18.35a8,8,0,0,0-11.32,11.32L180.69,200l-18.35,18.34a8,8,0,0,0,11.32,11.32L192,211.31l18.34,18.35a8,8,0,0,0,11.32-11.32L203.31,200l18.35-18.34A8,8,0,0,0,221.66,170.34Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,56V200a16,16,0,0,1-16,16h-8l-16-16-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z\"/>";

export const FunnelSimpleX = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FunnelSimpleXProps) => {
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
