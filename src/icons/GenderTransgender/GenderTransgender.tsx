import { SVGProps } from "react";

export type GenderTransgenderVariant = "duotone" | "fill" | "light";

export interface GenderTransgenderProps extends SVGProps<SVGSVGElement> {
  variant?: GenderTransgenderVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M127.92,150a24,24,0,1,1-22-22A24,24,0,0,1,127.92,150ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM192,72a8,8,0,0,0-8-8H156.27A8.17,8.17,0,0,0,148,71.47,8,8,0,0,0,156,80h8.69L148,96.69,137.66,86.34a8,8,0,0,0-11.49.18,8.22,8.22,0,0,0,.41,11.37L136.69,108,126,118.64A40,40,0,1,0,137.36,130L148,119.31l10.34,10.35a8,8,0,0,0,11.71-.43,8.2,8.2,0,0,0-.6-11.1L159.31,108,176,91.31v8.42a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,34H168a6,6,0,0,0,0,12h33.52L168,79.52,148.24,59.76a6,6,0,1,0-8.48,8.49L159.52,88l-18.46,18.46a69.94,69.94,0,1,0,8.49,8.48L168,96.5l19.76,19.76a6,6,0,0,0,8.48-8.49L176.48,88,210,54.49V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM137,201a58,58,0,1,1,17-41A58,58,0,0,1,137,201Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,32H168a8,8,0,0,0,0,16h28.69L168,76.69,149.66,58.35a8,8,0,1,0-11.32,11.31L156.69,88l-15.76,15.76a71.94,71.94,0,1,0,11.32,11.31L168,99.33l18.34,18.34a8,8,0,0,0,11.32-11.31L179.31,88,208,59.32V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM135.6,199.63A56,56,0,1,1,152,160,56.08,56.08,0,0,1,135.6,199.63Z\"/>";
const SECONDARY_PATHS = "<path d=\"M141.25,205.25a64,64,0,1,1,0-90.5A64,64,0,0,1,141.25,205.25Z\"/>";

export const GenderTransgender = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GenderTransgenderProps) => {
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
