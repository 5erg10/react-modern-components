import { SVGProps } from "react";

export type ArrowBendLeftUpVariant = "duotone" | "fill" | "light";

export interface ArrowBendLeftUpProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowBendLeftUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V88H56a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,152,88H112v40a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,224a6,6,0,0,1-6,6A102.12,102.12,0,0,1,98,128V46.49L60.24,84.24a6,6,0,0,1-8.48-8.48l48-48a6,6,0,0,1,8.48,0l48,48a6,6,0,1,1-8.48,8.48L110,46.49V128a90.1,90.1,0,0,0,90,90A6,6,0,0,1,206,224Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,216a88.1,88.1,0,0,1-88-88V88h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,56,88H96v40A104.11,104.11,0,0,0,200,232a8,8,0,0,0,0-16ZM104,43.31,132.69,72H75.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,80H56l48-48Z\"/>";

export const ArrowBendLeftUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowBendLeftUpProps) => {
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
