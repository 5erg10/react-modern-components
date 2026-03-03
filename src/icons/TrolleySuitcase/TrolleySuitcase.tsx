import { SVGProps } from "react";

export type TrolleySuitcaseVariant = "duotone" | "fill" | "light";

export interface TrolleySuitcaseProps extends SVGProps<SVGSVGElement> {
  variant?: TrolleySuitcaseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144V72A16,16,0,0,1,88,56h32V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V56h32a16,16,0,0,1,16,16v72a16,16,0,0,1-16,16H88A16,16,0,0,1,72,144Zm64-88h32V40H136Z\"/>";
const LIGHT_INNER     = "<path d=\"M88,158H216a14,14,0,0,0,14-14V72a14,14,0,0,0-14-14H182V40a14,14,0,0,0-14-14H136a14,14,0,0,0-14,14V58H88A14,14,0,0,0,74,72v72A14,14,0,0,0,88,158ZM134,40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V58H134ZM86,72a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v72a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2Zm0,152a14,14,0,1,1-14-14A14,14,0,0,1,86,224Zm144,0a14,14,0,1,1-14-14A14,14,0,0,1,230,224Zm16-40a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H42V75.31a2,2,0,0,0-.59-1.41L19.76,52.24a6,6,0,1,1,8.48-8.48L49.9,65.41a13.94,13.94,0,0,1,4.1,9.9V178H240A6,6,0,0,1,246,184Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144V72A16,16,0,0,1,88,56h32V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V56h32a16,16,0,0,1,16,16v72a16,16,0,0,1-16,16H88A16,16,0,0,1,72,144Zm64-88h32V40H136ZM88,144H216V72H88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,72v72a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H216A8,8,0,0,1,224,72Z\"/>";

export const TrolleySuitcase = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TrolleySuitcaseProps) => {
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
