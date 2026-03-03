import { SVGProps } from "react";

export type SelectionPlusVariant = "duotone" | "fill" | "light";

export interface SelectionPlusProps extends SVGProps<SVGSVGElement> {
  variant?: SelectionPlusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM56,72A16,16,0,0,1,72,56H96a8,8,0,0,1,0,16H72V96a8,8,0,0,1-16,0Zm56,112H72a16,16,0,0,1-16-16V136a8,8,0,0,1,16,0v32h40a8,8,0,0,1,0,16ZM128,64a8,8,0,0,1,8-8h32a16,16,0,0,1,16,16v40a8,8,0,0,1-16,0V72H136A8,8,0,0,1,128,64Zm72,120H184v16a8,8,0,0,1-16,0V184H152a8,8,0,0,1,0-16h16V152a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M150,40a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,40Zm-6,170H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM210,48V72a6,6,0,0,0,12,0V48a14,14,0,0,0-14-14H184a6,6,0,0,0,0,12h24A2,2,0,0,1,210,48Zm6,58a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,216,106ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM72,34H48A14,14,0,0,0,34,48V72a6,6,0,0,0,12,0V48a2,2,0,0,1,2-2H72a6,6,0,0,0,0-12ZM240,210H222V192a6,6,0,0,0-12,0v18H192a6,6,0,0,0,0,12h18v18a6,6,0,0,0,12,0V222h18a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,40a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,40Zm-8,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,48V72a8,8,0,0,0,16,0V48a16,16,0,0,0-16-16H184a8,8,0,0,0,0,16Zm8,56a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM72,32H48A16,16,0,0,0,32,48V72a8,8,0,0,0,16,0V48H72a8,8,0,0,0,0-16ZM240,208H224V192a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V224h16a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,40V216H40V40Z\"/>";

export const SelectionPlus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SelectionPlusProps) => {
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
