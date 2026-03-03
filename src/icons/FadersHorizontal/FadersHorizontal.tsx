import { SVGProps } from "react";

export type FadersHorizontalVariant = "duotone" | "fill" | "light";

export interface FadersHorizontalProps extends SVGProps<SVGSVGElement> {
  variant?: FadersHorizontalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,80a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H192A8,8,0,0,1,184,80ZM40,88h96v16a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8V72H40a8,8,0,0,0,0,16Zm176,80H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM96,144H80a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H72v16a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V152A8,8,0,0,0,96,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M178,80a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H184A6,6,0,0,1,178,80ZM40,86H146v18a6,6,0,0,0,12,0V56a6,6,0,0,0-12,0V74H40a6,6,0,0,0,0,12Zm176,84H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12ZM88,146a6,6,0,0,0-6,6v18H40a6,6,0,0,0,0,12H82v18a6,6,0,0,0,12,0V152A6,6,0,0,0,88,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,80a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H184A8,8,0,0,1,176,80ZM40,88H144v16a8,8,0,0,0,16,0V56a8,8,0,0,0-16,0V72H40a8,8,0,0,0,0,16Zm176,80H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16ZM88,144a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H80v16a8,8,0,0,0,16,0V152A8,8,0,0,0,88,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,80v96H40V80Z\"/>";

export const FadersHorizontal = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FadersHorizontalProps) => {
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
