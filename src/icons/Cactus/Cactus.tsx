import { SVGProps } from "react";

export type CactusVariant = "duotone" | "fill" | "light";

export interface CactusProps extends SVGProps<SVGSVGElement> {
  variant?: CactusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H88V136H80A64.07,64.07,0,0,1,16,72,24.07,24.07,0,0,1,40.08,48h.4A23.55,23.55,0,0,1,64,71.52V72h0A16,16,0,0,0,80,88h8V56a40,40,0,0,1,80,0v72h8a16,16,0,0,0,16-16h0v-.48A23.55,23.55,0,0,1,215.52,88h.4A24.07,24.07,0,0,1,240,112a64.07,64.07,0,0,1-64,64h-8v32h48A8,8,0,0,1,224,216Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,210H166V182h6a66.08,66.08,0,0,0,66-66,26,26,0,0,0-52,0,14,14,0,0,1-14,14h-6V56a38,38,0,0,0-76,0V90H84A14,14,0,0,1,70,76a26,26,0,0,0-52,0,66.08,66.08,0,0,0,66,66h6v68H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM96,130H84A54.06,54.06,0,0,1,30,76a14,14,0,0,1,28,0,26,26,0,0,0,26,26H96a6,6,0,0,0,6-6V56a26,26,0,0,1,52,0v80a6,6,0,0,0,6,6h12a26,26,0,0,0,26-26,14,14,0,0,1,28,0,54.06,54.06,0,0,1-54,54H160a6,6,0,0,0-6,6v34H102V136A6,6,0,0,0,96,130Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,208H168V184h4a68.07,68.07,0,0,0,68-68,28,28,0,0,0-56,0,12,12,0,0,1-12,12h-4V56a40,40,0,0,0-80,0V88H84A12,12,0,0,1,72,76a28,28,0,0,0-56,0,68.07,68.07,0,0,0,68,68h4v64H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM96,128H84A52.06,52.06,0,0,1,32,76a12,12,0,0,1,24,0,28,28,0,0,0,28,28H96a8,8,0,0,0,8-8V56a24,24,0,0,1,48,0v80a8,8,0,0,0,8,8h12a28,28,0,0,0,28-28,12,12,0,0,1,24,0,52.06,52.06,0,0,1-52,52H160a8,8,0,0,0-8,8v32H104V136A8,8,0,0,0,96,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,116h0a60,60,0,0,1-60,60H160v40H96V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76,20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20,20,20,0,0,1,20-20h0A20,20,0,0,1,232,116Z\"/>";

export const Cactus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CactusProps) => {
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
