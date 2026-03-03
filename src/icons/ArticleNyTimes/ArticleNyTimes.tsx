import { SVGProps } from "react";

export type ArticleNyTimesVariant = "duotone" | "fill" | "light";

export interface ArticleNyTimesProps extends SVGProps<SVGSVGElement> {
  variant?: ArticleNyTimesVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM64,92a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8V92a8,8,0,0,1-16,0V88H100v48h4a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16h4V88H64Zm136,92H80a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,98H232a6,6,0,0,1,0,12H128a6,6,0,0,1,0-12Zm104,32H128a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12Zm0,32H80a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM96,142a6,6,0,0,0,0-12H86V62h36V72a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V72a6,6,0,0,0,12,0V62H74v68H64a6,6,0,0,0,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,96H232a8,8,0,0,1,0,16H128a8,8,0,0,1,0-16Zm104,32H128a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,0-16H88V64h32v8a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V72a8,8,0,0,0,16,0V64H72v64H64a8,8,0,0,0,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,104v96H80V168h48V104Z\"/>";

export const ArticleNyTimes = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArticleNyTimesProps) => {
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
