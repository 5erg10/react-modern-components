import { SVGProps } from "react";

export type NumpadVariant = "duotone" | "fill" | "light";

export interface NumpadProps extends SVGProps<SVGSVGElement> {
  variant?: NumpadVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM80,164a12,12,0,1,1,12-12A12,12,0,0,1,80,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,80,124Zm0-40A12,12,0,1,1,92,72,12,12,0,0,1,80,84Zm48,120a12,12,0,1,1,12-12A12,12,0,0,1,128,204Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,84Zm48,80a12,12,0,1,1,12-12A12,12,0,0,1,176,164Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,124Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,176,84Z\"/>";
const LIGHT_INNER     = "<path d=\"M78,48A14,14,0,1,1,64,34,14,14,0,0,1,78,48Zm50-14a14,14,0,1,0,14,14A14,14,0,0,0,128,34Zm64,28a14,14,0,1,0-14-14A14,14,0,0,0,192,62ZM64,90a14,14,0,1,0,14,14A14,14,0,0,0,64,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,90Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,192,90ZM64,146a14,14,0,1,0,14,14A14,14,0,0,0,64,146Zm64,0a14,14,0,1,0,14,14A14,14,0,0,0,128,146Zm0,56a14,14,0,1,0,14,14A14,14,0,0,0,128,202Zm64-56a14,14,0,1,0,14,14A14,14,0,0,0,192,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M80,48A16,16,0,1,1,64,32,16,16,0,0,1,80,48Zm48-16a16,16,0,1,0,16,16A16,16,0,0,0,128,32Zm64,32a16,16,0,1,0-16-16A16,16,0,0,0,192,64ZM64,88a16,16,0,1,0,16,16A16,16,0,0,0,64,88Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,128,88Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,192,88ZM64,144a16,16,0,1,0,16,16A16,16,0,0,0,64,144Zm64,0a16,16,0,1,0,16,16A16,16,0,0,0,128,144Zm0,56a16,16,0,1,0,16,16A16,16,0,0,0,128,200Zm64-56a16,16,0,1,0,16,16A16,16,0,0,0,192,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,48V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V48Z\"/>";

export const Numpad = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumpadProps) => {
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
