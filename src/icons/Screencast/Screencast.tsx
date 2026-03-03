import { SVGProps } from "react";

export type ScreencastVariant = "duotone" | "fill" | "light";

export interface ScreencastProps extends SVGProps<SVGSVGElement> {
  variant?: ScreencastVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M56,208a8,8,0,0,1-8.24,8A8.28,8.28,0,0,1,40,207.76,8,8,0,0,0,32.24,200,8.28,8.28,0,0,1,24,192.24,8,8,0,0,1,32,184,24,24,0,0,1,56,208ZM32,152a8,8,0,0,0-8,8.65A8.17,8.17,0,0,0,32.24,168,40,40,0,0,1,72,207.76,8.17,8.17,0,0,0,79.36,216,8,8,0,0,0,88,208,56.06,56.06,0,0,0,32,152Zm0-32a8,8,0,0,0-8,8.6,8.22,8.22,0,0,0,8.3,7.4A72.08,72.08,0,0,1,104,207.68a8.22,8.22,0,0,0,7.4,8.3,8,8,0,0,0,8.6-8A88.1,88.1,0,0,0,32,120ZM216,40H40A16,16,0,0,0,24,56v44.08a4,4,0,0,0,4.15,4A104.11,104.11,0,0,1,135.93,211.85a4,4,0,0,0,4,4.15H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,56V200a14,14,0,0,1-14,14H144a6,6,0,0,1,0-12h72a2,2,0,0,0,2-2V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V96a6,6,0,0,1-12,0V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56ZM32,186a6,6,0,0,0,0,12,10,10,0,0,1,10,10,6,6,0,0,0,12,0A22,22,0,0,0,32,186Zm0-32a6,6,0,0,0,0,12,42,42,0,0,1,42,42,6,6,0,0,0,12,0A54.06,54.06,0,0,0,32,154Zm0-32a6,6,0,0,0,0,12,74.09,74.09,0,0,1,74,74,6,6,0,0,0,12,0A86.1,86.1,0,0,0,32,122Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,56V200a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h72V56H40V96a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM32,184a8,8,0,0,0,0,16,8,8,0,0,1,8,8,8,8,0,0,0,16,0A24,24,0,0,0,32,184Zm0-32a8,8,0,0,0,0,16,40,40,0,0,1,40,40,8,8,0,0,0,16,0A56.06,56.06,0,0,0,32,152Zm0-32a8,8,0,0,0,0,16,72.08,72.08,0,0,1,72,72,8,8,0,0,0,16,0A88.1,88.1,0,0,0,32,120Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V200a8,8,0,0,1-8,8H48a16,16,0,0,0-16-16V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const Screencast = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ScreencastProps) => {
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
