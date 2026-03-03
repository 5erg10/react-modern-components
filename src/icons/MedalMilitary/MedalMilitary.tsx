import { SVGProps } from "react";

export type MedalMilitaryVariant = "duotone" | "fill" | "light";

export interface MedalMilitaryProps extends SVGProps<SVGSVGElement> {
  variant?: MedalMilitaryVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M207,40H49A17,17,0,0,0,32,57v49.21a17,17,0,0,0,10,15.47l62.6,28.45a48,48,0,1,0,46.88,0L214,121.68a17,17,0,0,0,10-15.47V57A17,17,0,0,0,207,40ZM96,56h64v72.67l-32,14.54L96,128.67Zm32,168a32,32,0,1,1,32-32A32,32,0,0,1,128,224Z\"/>";
const LIGHT_INNER     = "<path d=\"M207,42H49A15,15,0,0,0,34,57v49.21a15,15,0,0,0,8.79,13.65L109.19,150a46,46,0,1,0,37.62,0l66.4-30.18A15,15,0,0,0,222,106.21V57A15,15,0,0,0,207,42ZM162,54v76l-34,15.45L94,130V54ZM46,106.21V57a3,3,0,0,1,3-3H82v70.5L47.76,108.94A3,3,0,0,1,46,106.21ZM162,192a34,34,0,1,1-34-34A34,34,0,0,1,162,192Zm48-85.79a3,3,0,0,1-1.76,2.73L174,124.5V54h33a3,3,0,0,1,3,3Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M207,40H49A17,17,0,0,0,32,57v49.21a17,17,0,0,0,10,15.47l62.6,28.45a48,48,0,1,0,46.88,0L214,121.68a17,17,0,0,0,10-15.47V57A17,17,0,0,0,207,40ZM160,56v72.67l-32,14.54L96,128.67V56ZM48,106.21V57a1,1,0,0,1,1-1H80v65.39L48.59,107.12A1,1,0,0,1,48,106.21ZM128,224a32,32,0,1,1,32-32A32,32,0,0,1,128,224Zm80-117.79a1,1,0,0,1-.59.91L176,121.39V56h31a1,1,0,0,1,1,1Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,192a40,40,0,1,1-40-40A40,40,0,0,1,168,192ZM207,48H168v85.82l42.72-19.42a9,9,0,0,0,5.28-8.2V57A9,9,0,0,0,207,48ZM88,48H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2L88,133.82Z\"/>";

export const MedalMilitary = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MedalMilitaryProps) => {
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
