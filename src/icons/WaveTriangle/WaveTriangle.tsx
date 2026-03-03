import { SVGProps } from "react";

export type WaveTriangleVariant = "duotone" | "fill" | "light";

export interface WaveTriangleProps extends SVGProps<SVGSVGElement> {
  variant?: WaveTriangleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-9.85,93.12-40,48A8,8,0,0,1,160,184h-.43a8,8,0,0,1-6.23-3.55l-58-87.09L62.15,133.12a8,8,0,0,1-12.3-10.24l40-48a8,8,0,0,1,12.81.68l58.05,87.09,33.14-39.77a8,8,0,1,1,12.3,10.24Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.86,131.51l-52,72a6,6,0,0,1-9.72,0L76,66.25,28.86,131.51a6,6,0,1,1-9.72-7l52-72a6,6,0,0,1,9.72,0L180,189.75l47.14-65.26a6,6,0,0,1,9.72,7Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M238.48,132.68l-52,72a8,8,0,0,1-13,0L76,69.66l-45.51,63a8,8,0,1,1-13-9.36l52-72a8,8,0,0,1,13,0l97.51,135,45.51-63a8,8,0,1,1,13,9.36Z\"/>";
const SECONDARY_PATHS = "<path d=\"M76,56l52,72H24Zm156,72H128l52,72Z\"/>";

export const WaveTriangle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WaveTriangleProps) => {
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
