import { SVGProps } from "react";

export type HamburgerVariant = "duotone" | "fill" | "light";

export interface HamburgerProps extends SVGProps<SVGSVGElement> {
  variant?: HamburgerVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M35.58,98.06a16,16,0,0,1-3.23-13.44C39.78,49.5,80,24,128,24s88.22,25.5,95.65,60.62A16,16,0,0,1,207.93,104H48.07A16,16,0,0,1,35.58,98.06Zm193.68,54.42-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM24,136H232a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M48.07,102H207.93a14,14,0,0,0,13.76-17C214.45,50.83,175.05,26,128,26S41.55,50.83,34.31,85a14,14,0,0,0,13.76,17Zm-2-14.48C52,59.29,87.25,38,128,38S204,59.29,210,87.52a2,2,0,0,1-2,2.48H48.07a2,2,0,0,1-2-2.48ZM230,154.36,188.1,169.58l-37.87-15.15a6,6,0,0,0-4.46,0L108,169.54,70.23,154.43a6,6,0,0,0-4.28-.07l-44,16A6,6,0,0,0,24,182a6.11,6.11,0,0,0,2.05-.36l16-5.8V184a38,38,0,0,0,38,38h96a38,38,0,0,0,38-38V172.93l20.05-7.29a6,6,0,0,0-4.1-11.28ZM202,184a26,26,0,0,1-26,26H80a26,26,0,0,1-26-26V171.48l13.9-5.06,37.87,15.15a6,6,0,0,0,4.46,0L148,166.46l37.77,15.11a6,6,0,0,0,4.28.07L202,177.29ZM18,128a6,6,0,0,1,6-6H232a6,6,0,0,1,0,12H24A6,6,0,0,1,18,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M188,176l20-7.27V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V167.27L68,160l40,16,40-16Zm27.82-89.72C209.32,55.55,172.48,32,128,32S46.68,55.55,40.18,86.28A8,8,0,0,0,48.07,96H207.93A8,8,0,0,0,215.82,86.28Z\"/>";

export const Hamburger = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HamburgerProps) => {
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
