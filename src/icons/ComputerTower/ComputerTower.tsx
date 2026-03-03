import { SVGProps } from "react";

export type ComputerTowerVariant = "duotone" | "fill" | "light";

export interface ComputerTowerProps extends SVGProps<SVGSVGElement> {
  variant?: ComputerTowerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24ZM128,192a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm32-80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M166,72a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,72Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm46-58V216a14,14,0,0,1-14,14H64a14,14,0,0,1-14-14V40A14,14,0,0,1,64,26H192A14,14,0,0,1,206,40Zm-12,0a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H192a2,2,0,0,0,2-2ZM128,170a10,10,0,1,0,10,10A10,10,0,0,0,128,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,72Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40Zm-16,0H64V216H192ZM128,168a12,12,0,1,0,12,12A12,12,0,0,0,128,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,40V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H192A8,8,0,0,1,200,40Z\"/>";

export const ComputerTower = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ComputerTowerProps) => {
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
