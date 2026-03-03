import { SVGProps } from "react";

export type RankingVariant = "duotone" | "fill" | "light";

export interface RankingProps extends SVGProps<SVGSVGElement> {
  variant?: RankingVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,200h-8V144a16,16,0,0,0-16-16H176V56a16,16,0,0,0-16-16H96A16,16,0,0,0,80,56V88H40a16,16,0,0,0-16,16v96H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,200H40V104H80Zm60-64a8,8,0,0,1-16,0V107.1l-1.47.49a8,8,0,0,1-5.06-15.18l12-4A8,8,0,0,1,140,96Zm76,64H176V144h40Z\"/>";
const LIGHT_INNER     = "<path d=\"M114.31,101.9a6,6,0,0,1,3.79-7.59l12-4A6,6,0,0,1,138,96v40a6,6,0,0,1-12,0V104.32l-4.1,1.37A6,6,0,0,1,114.31,101.9ZM246,208a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H26V104A14,14,0,0,1,40,90H82V56A14,14,0,0,1,96,42h64a14,14,0,0,1,14,14v74h42a14,14,0,0,1,14,14v58h10A6,6,0,0,1,246,208Zm-72-66v60h44V144a2,2,0,0,0-2-2ZM94,202h68V56a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2Zm-56,0H82V102H40a2,2,0,0,0-2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M112.41,102.53a8,8,0,0,1,5.06-10.12l12-4A8,8,0,0,1,140,96v40a8,8,0,0,1-16,0V107.1l-1.47.49A8,8,0,0,1,112.41,102.53ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16h8V104A16,16,0,0,1,40,88H80V56A16,16,0,0,1,96,40h64a16,16,0,0,1,16,16v72h40a16,16,0,0,1,16,16v56h8A8,8,0,0,1,248,208Zm-72-64v56h40V144ZM96,200h64V56H96Zm-56,0H80V104H40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M40,96H88V208H32V104A8,8,0,0,1,40,96Zm176,40H168v72h56V144A8,8,0,0,0,216,136Z\"/>";

export const Ranking = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RankingProps) => {
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
