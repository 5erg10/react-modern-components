import { SVGProps } from "react";

export type BracketsRoundVariant = "duotone" | "fill" | "light";

export interface BracketsRoundProps extends SVGProps<SVGSVGElement> {
  variant?: BracketsRoundVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM99.61,176.86a8,8,0,0,1-7.19,14.3A71.23,71.23,0,0,1,56,128,71.23,71.23,0,0,1,92.42,64.84a8,8,0,0,1,7.18,14.3C98.37,79.78,72,93.76,72,128S98.48,176.28,99.61,176.86Zm64,14.3a8,8,0,1,1-7.16-14.32c1.1-.56,27.58-14.52,27.58-48.84s-26.48-48.28-27.61-48.86a8,8,0,0,1,7.19-14.3A71.23,71.23,0,0,1,200,128,71.23,71.23,0,0,1,163.58,191.16Z\"/>";
const LIGHT_INNER     = "<path d=\"M56.52,64C44.23,81.46,38,103,38,128s6.23,46.54,18.52,64c9.17,13,18.49,18.81,18.59,18.87a6,6,0,0,1-6.2,10.27C67.16,220.09,26,194.63,26,128S67.16,35.91,68.91,34.86a6,6,0,0,1,6.2,10.27C75,45.19,65.69,51,56.52,64ZM187.09,34.86a6,6,0,0,0-6.2,10.27c.1.06,9.42,5.84,18.59,18.87C211.77,81.46,218,103,218,128s-6.23,46.54-18.52,64c-9.17,13-18.49,18.81-18.57,18.85a6,6,0,1,0,6.18,10.29c1.75-1,42.91-26.51,42.91-93.14S188.84,35.91,187.09,34.86Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M40,128c0,58.29,34.67,80.25,36.15,81.16a8,8,0,0,1-8.27,13.7C66.09,221.78,24,195.75,24,128S66.09,34.22,67.88,33.14a8,8,0,0,1,8.26,13.7C74.54,47.83,40,69.82,40,128ZM188.12,33.14a8,8,0,0,0-8.27,13.7C181.33,47.75,216,69.71,216,128s-34.67,80.25-36.12,81.14a8,8,0,0,0,8.24,13.72C189.91,221.78,232,195.75,232,128S189.91,34.22,188.12,33.14Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128c0,64-40,88-40,88H72s-40-24-40-88S72,40,72,40H184S224,64,224,128Z\"/>";

export const BracketsRound = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BracketsRoundProps) => {
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
