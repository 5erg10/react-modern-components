import { SVGProps } from "react";

export type GradientVariant = "duotone" | "fill" | "light";

export interface GradientProps extends SVGProps<SVGSVGElement> {
  variant?: GradientVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M80,192a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H72A8,8,0,0,1,80,192Zm144-8H184a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm-72,0H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM32,168h80a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16Zm192-16H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0-96H32a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Zm0,56H32a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8v-8A8,8,0,0,0,224,112Z\"/>";
const LIGHT_INNER     = "<path d=\"M26,104a6,6,0,0,1,6-6h80a6,6,0,0,1,0,12H32A6,6,0,0,1,26,104Zm198-6H144a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12ZM72,138H32a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm152,0H184a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12ZM98,144a6,6,0,0,0,6,6h48a6,6,0,0,0,0-12H104A6,6,0,0,0,98,144ZM56,178H32a6,6,0,0,0,0,12H56a6,6,0,0,0,0-12Zm56,0H88a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm56,0H144a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Zm56,0H200a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12ZM32,70H224a6,6,0,0,0,0-12H32a6,6,0,0,0,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M24,104a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H32A8,8,0,0,1,24,104Zm200-8H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16ZM72,136H32a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm152,0H184a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H104A8,8,0,0,0,96,144ZM56,176H32a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm56,0H88a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm56,0H144a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm56,0H200a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM32,72H224a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,64V184H32V64Z\"/>";

export const Gradient = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GradientProps) => {
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
