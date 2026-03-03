import { SVGProps } from "react";

export type WaveformSlashVariant = "duotone" | "fill" | "light";

export interface WaveformSlashProps extends SVGProps<SVGSVGElement> {
  variant?: WaveformSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,96a8,8,0,0,1,16,0v50.75a8,8,0,0,1-16,0Zm-32,8a8,8,0,0,1,16,0v10.75a8,8,0,0,1-16,0ZM72,152a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm125.66,45.66a8,8,0,0,1-11.32,0L136,147.31V168a8,8,0,0,1-16,0V131.31l-16-16V184a8,8,0,0,1-16,0V99.5c0-.06,0-.12,0-.18L58.34,69.66A8,8,0,0,1,69.66,58.34l128,128A8,8,0,0,1,197.66,197.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M54,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM52.44,36A6,6,0,0,0,43.56,44L82,86.32V224a6,6,0,0,0,12,0V99.52l28,30.8V192a6,6,0,0,0,12,0V143.52L203.56,220a6,6,0,0,0,8.88-8.08ZM88,42.43a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0v4.43A6,6,0,0,0,88,42.43Zm40,44a6,6,0,0,0,6-6V64a6,6,0,0,0-12,0V80.43A6,6,0,0,0,128,86.43Zm40,44a6,6,0,0,0,6-6V96a6,6,0,0,0-12,0v28.43A6,6,0,0,0,168,130.43ZM208,74a6,6,0,0,0-6,6v88.43a6,6,0,0,0,12,0V80A6,6,0,0,0,208,74Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM53.92,34.62A8,8,0,1,0,42.08,45.38L80,87.09V224a8,8,0,0,0,16,0V104.69l24,26.4V192a8,8,0,0,0,16,0V148.69l66.08,72.69a8,8,0,1,0,11.84-10.76ZM88,44.43a8,8,0,0,0,8-8V32a8,8,0,0,0-16,0v4.43A8,8,0,0,0,88,44.43Zm40,44a8,8,0,0,0,8-8V64a8,8,0,0,0-16,0V80.43A8,8,0,0,0,128,88.43Zm40,44a8,8,0,0,0,8-8V96a8,8,0,0,0-16,0v28.43A8,8,0,0,0,168,132.43ZM208,72a8,8,0,0,0-8,8v88.43a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,96v64H48V96Z\"/>";

export const WaveformSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WaveformSlashProps) => {
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
