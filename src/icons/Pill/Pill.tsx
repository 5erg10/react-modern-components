import { SVGProps } from "react";

export type PillVariant = "duotone" | "fill" | "light";

export interface PillProps extends SVGProps<SVGSVGElement> {
  variant?: PillVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216.43,39.6a53.27,53.27,0,0,0-75.33,0L39.6,141.09a53.26,53.26,0,0,0,75.32,75.31L216.43,114.91A53.32,53.32,0,0,0,216.43,39.6Zm-11.32,64-50.75,50.74-52.69-52.68,50.75-50.75a37.26,37.26,0,0,1,52.69,52.69ZM189.68,82.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,1,1-11.31-11.32l24-24A8,8,0,0,1,189.68,82.34Z\"/>";
const LIGHT_INNER     = "<path d=\"M215,41a51.28,51.28,0,0,0-72.5,0L41,142.5A51.26,51.26,0,0,0,113.49,215L215,113.5A51.31,51.31,0,0,0,215,41ZM105,206.5A39.26,39.26,0,0,1,49.48,151L96,104.49,151.52,160ZM206.52,105,160,151.51,104.48,96,151,49.5A39.26,39.26,0,0,1,206.52,105ZM188.26,83.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.49-8.48l24-24A6,6,0,0,1,188.26,83.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216.43,39.6a53.27,53.27,0,0,0-75.33,0L39.6,141.09a53.26,53.26,0,0,0,75.32,75.31L216.43,114.91A53.32,53.32,0,0,0,216.43,39.6ZM103.61,205.09h0a37.26,37.26,0,0,1-52.7-52.69L96,107.31,148.7,160ZM205.11,103.6,160,148.69,107.32,96l45.1-45.09a37.26,37.26,0,0,1,52.69,52.69ZM189.68,82.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,1,1-11.31-11.32l24-24A8,8,0,0,1,189.68,82.34Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,160l-50.75,50.75a45.26,45.26,0,0,1-64,0h0a45.26,45.26,0,0,1,0-64L96,96Z\"/>";

export const Pill = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PillProps) => {
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
