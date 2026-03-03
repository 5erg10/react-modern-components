import { SVGProps } from "react";

export type SelectionAllVariant = "duotone" | "fill" | "light";

export interface SelectionAllProps extends SVGProps<SVGSVGElement> {
  variant?: SelectionAllVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M104,40a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,40Zm40,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V72a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32Zm8,72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104Zm0,72a8,8,0,0,0-8,8v24H184a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V184A8,8,0,0,0,216,176ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM40,80a8,8,0,0,0,8-8V48H72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V72A8,8,0,0,0,40,80Zm144,96V80a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h96A8,8,0,0,0,184,176Z\"/>";
const LIGHT_INNER     = "<path d=\"M106,40a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,40Zm38,170H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM208,34H184a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V48A14,14,0,0,0,208,34Zm8,72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,216,106Zm0,72a6,6,0,0,0-6,6v24a2,2,0,0,1-2,2H184a6,6,0,0,0,0,12h24a14,14,0,0,0,14-14V184A6,6,0,0,0,216,178ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM40,78a6,6,0,0,0,6-6V48a2,2,0,0,1,2-2H72a6,6,0,0,0,0-12H48A14,14,0,0,0,34,48V72A6,6,0,0,0,40,78ZM176,182H80a6,6,0,0,1-6-6V80a6,6,0,0,1,6-6h96a6,6,0,0,1,6,6v96A6,6,0,0,1,176,182Zm-6-96H86v84h84Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M104,40a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,40Zm40,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V72a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32Zm8,72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104Zm0,72a8,8,0,0,0-8,8v24H184a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V184A8,8,0,0,0,216,176ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM40,80a8,8,0,0,0,8-8V48H72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V72A8,8,0,0,0,40,80ZM176,184H80a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v96A8,8,0,0,1,176,184Zm-8-96H88v80h80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,80v96H80V80Z\"/>";

export const SelectionAll = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SelectionAllProps) => {
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
