import { SVGProps } from "react";

export type NumberCircleEightVariant = "duotone" | "fill" | "light";

export interface NumberCircleEightProps extends SVGProps<SVGSVGElement> {
  variant?: NumberCircleEightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M148,152a20,20,0,1,1-20-20A20,20,0,0,1,148,152Zm-20-36a16,16,0,1,0-16-16A16,16,0,0,0,128,116Zm104,12A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-68,24a35.93,35.93,0,0,0-14.19-28.61,32,32,0,1,0-43.62,0A36,36,0,1,0,164,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm18.57-94.46a30,30,0,1,0-37.14,0,34,34,0,1,0,37.14,0ZM110,100a18,18,0,1,1,18,18A18,18,0,0,1,110,100Zm18,74a22,22,0,1,1,22-22A22,22,0,0,1,128,174Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm21.81-92.61a32,32,0,1,0-43.62,0,36,36,0,1,0,43.62,0ZM112,100a16,16,0,1,1,16,16A16,16,0,0,1,112,100Zm16,72a20,20,0,1,1,20-20A20,20,0,0,1,128,172Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const NumberCircleEight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberCircleEightProps) => {
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
