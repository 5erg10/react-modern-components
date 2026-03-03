import { SVGProps } from "react";

export type EqualizerVariant = "duotone" | "fill" | "light";

export interface EqualizerProps extends SVGProps<SVGSVGElement> {
  variant?: EqualizerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm72,24H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm32-48h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16ZM72,120H24a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V128A8,8,0,0,0,72,120ZM232,88H184a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V96A8,8,0,0,0,232,88Zm-80,64H104a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,152,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M78,96a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H72A6,6,0,0,1,78,96Zm-6,26H24a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm0,32H24a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm0,32H24a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm80-64H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm80-96H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12ZM184,70h48a6,6,0,0,0,0-12H184a6,6,0,0,0,0,12Zm48,52H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M80,96a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm-8,24H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm0,32H24a8,8,0,0,0,0,16H72a8,8,0,0,0,0-16Zm80-64H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm80-96H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM184,72h48a8,8,0,0,0,0-16H184a8,8,0,0,0,0,16Zm48,48H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm0,32H184a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,64V192H24V80A16,16,0,0,1,40,64Z\"/>";

export const Equalizer = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EqualizerProps) => {
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
