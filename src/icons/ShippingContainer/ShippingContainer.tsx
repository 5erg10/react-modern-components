import { SVGProps } from "react";

export type ShippingContainerVariant = "duotone" | "fill" | "light";

export interface ShippingContainerProps extends SVGProps<SVGSVGElement> {
  variant?: ShippingContainerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M236.4,70.65,130.2,40.31a8,8,0,0,0-3.33-.23L21.74,55.1A16.08,16.08,0,0,0,8,70.94V185.06A16.08,16.08,0,0,0,21.74,200.9l105.13,15A8.47,8.47,0,0,0,128,216a7.85,7.85,0,0,0,2.2-.31l106.2-30.34A16.07,16.07,0,0,0,248,170V86A16.07,16.07,0,0,0,236.4,70.65ZM64,120H48a8,8,0,0,0,0,16H64v54.78l-40-5.72V70.94l40-5.72Zm56,78.78-40-5.72V136H96a8,8,0,0,0,0-16H80V62.94l40-5.72Z\"/>";
const LIGHT_INNER     = "<path d=\"M235.85,72.57,129.65,42.23a6,6,0,0,0-2.5-.17L22,57.08A14.07,14.07,0,0,0,10,70.94V185.06a14.07,14.07,0,0,0,12,13.86l105.13,15a6.07,6.07,0,0,0,.85.06,6.14,6.14,0,0,0,1.65-.23l106.2-30.34A14.06,14.06,0,0,0,246,170V86A14.06,14.06,0,0,0,235.85,72.57ZM96,122H78V61.2l44-6.28V201.08L78,194.8V134H96a6,6,0,0,0,0-12ZM22,185.06V70.94a2,2,0,0,1,1.72-2l42.28-6V122H48a6,6,0,0,0,0,12H66v59.08l-42.28-6A2,2,0,0,1,22,185.06ZM234,170a2,2,0,0,1-1.45,1.92L134,200.05V56l98.55,28.16A2,2,0,0,1,234,86Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M236.4,70.65,130.2,40.31a8,8,0,0,0-3.33-.23L21.74,55.1A16.08,16.08,0,0,0,8,70.94V185.06A16.08,16.08,0,0,0,21.74,200.9l105.13,15A8.47,8.47,0,0,0,128,216a7.85,7.85,0,0,0,2.2-.31l106.2-30.34A16.07,16.07,0,0,0,248,170V86A16.07,16.07,0,0,0,236.4,70.65ZM96,120H80V62.94l40-5.72V198.78l-40-5.72V136H96a8,8,0,0,0,0-16ZM24,70.94l40-5.72V120H48a8,8,0,0,0,0,16H64v54.78l-40-5.72ZM136,197.39V58.61L232,86V170Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,86V170a8,8,0,0,1-5.8,7.69L128,208V48L234.2,78.34A8,8,0,0,1,240,86Z\"/>";

export const ShippingContainer = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShippingContainerProps) => {
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
