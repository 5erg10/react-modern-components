import { SVGProps } from "react";

export type NumberSquareEightVariant = "duotone" | "fill" | "light";

export interface NumberSquareEightProps extends SVGProps<SVGSVGElement> {
  variant?: NumberSquareEightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M112,100a16,16,0,1,1,16,16A16,16,0,0,1,112,100Zm16,32a20,20,0,1,0,20,20A20,20,0,0,0,128,132Zm96-84V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM164,152a35.93,35.93,0,0,0-14.19-28.61,32,32,0,1,0-43.62,0A36,36,0,1,0,164,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-63.43-84.46a30,30,0,1,0-37.14,0,34,34,0,1,0,37.14,0ZM110,100a18,18,0,1,1,18,18A18,18,0,0,1,110,100Zm18,74a22,22,0,1,1,22-22A22,22,0,0,1,128,174Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-58.19-84.61a32,32,0,1,0-43.62,0,36,36,0,1,0,43.62,0ZM112,100a16,16,0,1,1,16,16A16,16,0,0,1,112,100Zm16,72a20,20,0,1,1,20-20A20,20,0,0,1,128,172Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z\"/>";

export const NumberSquareEight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberSquareEightProps) => {
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
