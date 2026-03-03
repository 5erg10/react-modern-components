import { SVGProps } from "react";

export type MatrixLogoVariant = "duotone" | "fill" | "light";

export interface MatrixLogoProps extends SVGProps<SVGSVGElement> {
  variant?: MatrixLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H72V184h8a8,8,0,0,1,0,16Zm80-40a8,8,0,0,1-8-8V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.65A23.94,23.94,0,0,1,128,102.13,24,24,0,0,1,168,120v32A8,8,0,0,1,160,160Zm40,32a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V72h-8a8,8,0,0,1,0-16h16a8,8,0,0,1,8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M46,46V210H64a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H64a6,6,0,0,1,0,12ZM216,34H192a6,6,0,0,0,0,12h18V210H192a6,6,0,0,0,0,12h24a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM152,90a30,30,0,0,0-24,12,30,30,0,0,0-42-6v0a6,6,0,0,0-12,0v64a6,6,0,0,0,12,0V120a18,18,0,0,1,36,0v40a6,6,0,0,0,12,0V120a18,18,0,0,1,36,0v40a6,6,0,0,0,12,0V120A30,30,0,0,0,152,90Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M72,216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H64a8,8,0,0,1,0,16H48V208H64A8,8,0,0,1,72,216ZM216,32H192a8,8,0,0,0,0,16h16V208H192a8,8,0,0,0,0,16h24a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-32,88a32,32,0,0,0-56-21.13,31.93,31.93,0,0,0-40.71-6.15A8,8,0,0,0,72,96v64a8,8,0,0,0,16,0V120a16,16,0,0,1,32,0v40a8,8,0,0,0,16,0V120a16,16,0,0,1,32,0v40a8,8,0,0,0,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216H40V40Z\"/>";

export const MatrixLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MatrixLogoProps) => {
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
