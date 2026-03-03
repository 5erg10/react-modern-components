import { SVGProps } from "react";

export type SelectionInverseVariant = "duotone" | "fill" | "light";

export interface SelectionInverseProps extends SVGProps<SVGSVGElement> {
  variant?: SelectionInverseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M152,216a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,216ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM224,48a16,16,0,0,0-16-16H48a15.87,15.87,0,0,0-10.66,4.11,7.67,7.67,0,0,0-1.23,1.23A15.87,15.87,0,0,0,32,48V72a8,8,0,0,0,16,0V59.31L196.69,208H184a8,8,0,0,0,0,16h24a15.91,15.91,0,0,0,10.66-4.1,7.35,7.35,0,0,0,.65-.59,6,6,0,0,0,.58-.65A15.87,15.87,0,0,0,224,208Z\"/>";
const LIGHT_INNER     = "<path d=\"M150,216a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,216ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM222,48V208a14,14,0,0,1-14,14H184a6,6,0,0,1,0-12h17.51L46,54.48V72a6,6,0,0,1-12,0V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48Zm-14-2H54.49L210,201.52V48A2,2,0,0,0,208,46Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,216a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,216ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM224,48V208a16,16,0,0,1-16,16H184a8,8,0,0,1,0-16h12.69L48,59.31V72a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-16,0H59.31L208,196.69Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V208a8,8,0,0,1-2.34,5.66L42.34,42.34A8,8,0,0,1,48,40H208A8,8,0,0,1,216,48Z\"/>";

export const SelectionInverse = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SelectionInverseProps) => {
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
