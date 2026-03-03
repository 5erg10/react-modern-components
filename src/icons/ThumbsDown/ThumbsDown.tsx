import { SVGProps } from "react";

export type ThumbsDownVariant = "duotone" | "fill" | "light";

export interface ThumbsDownProps extends SVGProps<SVGSVGElement> {
  variant?: ThumbsDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.83,157.27l-12-96A22,22,0,0,0,204,42H32A14,14,0,0,0,18,56v88a14,14,0,0,0,14,14H76.29l38.34,76.68A6,6,0,0,0,120,238a38,38,0,0,0,38-38V182h58a22,22,0,0,0,21.83-24.73ZM74,146H32a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H74Zm149.5,20.62A9.89,9.89,0,0,1,216,170H152a6,6,0,0,0-6,6v24a26,26,0,0,1-22.42,25.75L86,150.58V54H204a10,10,0,0,1,9.92,8.76l12,96A9.89,9.89,0,0,1,223.5,166.62Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z\"/>";
const SECONDARY_PATHS = "<path d=\"M80,48V152H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z\"/>";

export const ThumbsDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ThumbsDownProps) => {
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
