import { SVGProps } from "react";

export type ListPlusVariant = "duotone" | "fill" | "light";

export interface ListPlusProps extends SVGProps<SVGSVGElement> {
  variant?: ListPlusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM64,72H192a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm56,112H64a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm16-48H64a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm64,32H184v16a8,8,0,0,1-16,0V168H152a8,8,0,0,1,0-16h16V136a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm104,52H40a6,6,0,0,0,0,12H144a6,6,0,0,0,0-12Zm88,0H214V168a6,6,0,0,0-12,0v18H184a6,6,0,0,0,0,12h18v18a6,6,0,0,0,12,0V198h18a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm104,48H40a8,8,0,0,0,0,16H144a8,8,0,0,0,0-16Zm88,0H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,64V192H40V64Z\"/>";

export const ListPlus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ListPlusProps) => {
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
