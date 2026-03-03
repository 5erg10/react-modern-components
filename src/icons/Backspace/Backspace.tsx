import { SVGProps } from "react";

export type BackspaceVariant = "duotone" | "fill" | "light";

export interface BackspaceProps extends SVGProps<SVGSVGElement> {
  variant?: BackspaceVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H68.53a16.12,16.12,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11h0A16.11,16.11,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM165.66,146.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.35,18.35a8,8,0,0,1-11.31-11.32L124.69,128l-18.35-18.34a8,8,0,1,1,11.31-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H68.53a14,14,0,0,0-12,6.8L10.86,124.91a6,6,0,0,0,0,6.18L56.53,207.2a14,14,0,0,0,12,6.8H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H68.53a2,2,0,0,1-1.71-1h0L23,128,66.82,55a2,2,0,0,1,1.71-1H216a2,2,0,0,1,2,2Zm-53.76-91.76L144.48,128l19.76,19.76a6,6,0,1,1-8.48,8.48L136,136.48l-19.76,19.76a6,6,0,0,1-8.48-8.48L127.52,128l-19.76-19.76a6,6,0,0,1,8.48-8.48L136,119.52l19.76-19.76a6,6,0,0,1,8.48,8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H68.53a16.08,16.08,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11A16.08,16.08,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM61.67,204.12,68.53,200h0ZM216,200H68.53l-43.2-72,43.2-72H216ZM106.34,146.34,124.69,128l-18.35-18.34a8,8,0,0,1,11.32-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128l18.35,18.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V200a8,8,0,0,1-8,8H68.53a8,8,0,0,1-6.86-3.88L16,128,61.67,51.88A8,8,0,0,1,68.53,48H216A8,8,0,0,1,224,56Z\"/>";

export const Backspace = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BackspaceProps) => {
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
