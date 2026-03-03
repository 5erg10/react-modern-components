import { SVGProps } from "react";

export type VectorTwoVariant = "duotone" | "fill" | "light";

export interface VectorTwoProps extends SVGProps<SVGSVGElement> {
  variant?: VectorTwoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M229.66,197.66l-32,32A8,8,0,0,1,184,224V200H80a8,8,0,0,1-8-8V80H48a8,8,0,0,1-5.66-13.66l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,112,80H88V184h96V160a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,229.66,197.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.24,196.24l-32,32a6,6,0,0,1-8.48-8.48L209.51,198H80a6,6,0,0,1-6-6V54.49L52.24,76.24a6,6,0,0,1-8.48-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L86,54.49V186H209.51l-21.75-21.76a6,6,0,0,1,8.48-8.48l32,32A6,6,0,0,1,228.24,196.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.66,197.66l-32,32a8,8,0,0,1-11.32-11.32L204.69,200H80a8,8,0,0,1-8-8V59.31L53.66,77.66A8,8,0,0,1,42.34,66.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L88,59.31V184H204.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,229.66,197.66Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V192H80V40H208A16,16,0,0,1,224,56Z\"/>";

export const VectorTwo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VectorTwoProps) => {
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
