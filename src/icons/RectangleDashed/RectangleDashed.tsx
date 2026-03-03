import { SVGProps } from "react";

export type RectangleDashedVariant = "duotone" | "fill" | "light";

export interface RectangleDashedProps extends SVGProps<SVGSVGElement> {
  variant?: RectangleDashedVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM80,192H64a16,16,0,0,1-16-16V144a8,8,0,0,1,16,0v32H80a8,8,0,0,1,0,16ZM80,80H64v32a8,8,0,0,1-16,0V80A16,16,0,0,1,64,64H80a8,8,0,0,1,0,16Zm64,112H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm0-112H112a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm64,96a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h16V144a8,8,0,0,1,16,0Zm0-64a8,8,0,0,1-16,0V80H176a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M78,48a6,6,0,0,1-6,6H40a2,2,0,0,0-2,2V72a6,6,0,0,1-12,0V56A14,14,0,0,1,40,42H72A6,6,0,0,1,78,48ZM32,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,32,150Zm40,52H40a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v16a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12Zm72,0H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm80-24a6,6,0,0,0-6,6v16a2,2,0,0,1-2,2H184a6,6,0,0,0,0,12h32a14,14,0,0,0,14-14V184A6,6,0,0,0,224,178Zm0-72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,224,106Zm-8-64H184a6,6,0,0,0,0,12h32a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V56A14,14,0,0,0,216,42Zm-72,0H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M80,48a8,8,0,0,1-8,8H40V72a8,8,0,0,1-16,0V56A16,16,0,0,1,40,40H72A8,8,0,0,1,80,48ZM32,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,32,152Zm40,48H40V184a8,8,0,0,0-16,0v16a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16Zm72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm80-24a8,8,0,0,0-8,8v16H184a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V184A8,8,0,0,0,224,176Zm0-72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,224,104Zm-8-64H184a8,8,0,0,0,0,16h32V72a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Zm-72,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const RectangleDashed = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RectangleDashedProps) => {
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
