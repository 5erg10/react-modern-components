import { SVGProps } from "react";

export type TeaBagVariant = "duotone" | "fill" | "light";

export interface TeaBagProps extends SVGProps<SVGSVGElement> {
  variant?: TeaBagVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M112,136V72h19.47a16.09,16.09,0,0,1,13.72,7.77L165.72,114a16.06,16.06,0,0,1,2.28,8.24V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V122.22A16.06,16.06,0,0,1,42.28,114L62.81,79.77A16.09,16.09,0,0,1,76.53,72H96v64a8,8,0,0,0,16,0Zm112,24a16,16,0,0,1-16-16V64A56,56,0,0,0,96,64v8h16V64a40,40,0,0,1,80,0v80a32,32,0,0,0,32,32,8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,162a18,18,0,0,1-18-18V64A54,54,0,0,0,98,64V74H76.53a14.07,14.07,0,0,0-12,6.8L44,115a14,14,0,0,0-2,7.21V216a14,14,0,0,0,14,14h96a14,14,0,0,0,14-14V122.22a14,14,0,0,0-2-7.21L143.48,80.8a14.07,14.07,0,0,0-12-6.8H110V64a42,42,0,0,1,84,0v80a30,30,0,0,0,30,30,6,6,0,0,0,0-12ZM131.47,86a2,2,0,0,1,1.72,1l20.53,34.22a2,2,0,0,1,.28,1V216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V122.22a2,2,0,0,1,.29-1L74.81,87a2,2,0,0,1,1.72-1H98v50a6,6,0,0,0,12,0V86Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,160a16,16,0,0,1-16-16V64A56,56,0,0,0,96,64v8H76.53a16.09,16.09,0,0,0-13.72,7.77L42.28,114A16.06,16.06,0,0,0,40,122.22V216a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V122.22a16.06,16.06,0,0,0-2.28-8.24L145.19,79.77A16.09,16.09,0,0,0,131.47,72H112V64a40,40,0,0,1,80,0v80a32,32,0,0,0,32,32,8,8,0,0,0,0-16ZM131.47,88,152,122.22V216H56V122.22L76.53,88H96v48a8,8,0,0,0,16,0V88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,122.22V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V122.22a8,8,0,0,1,1.14-4.12L69.67,83.88A8,8,0,0,1,76.53,80h54.94a8,8,0,0,1,6.86,3.88l20.53,34.22A8,8,0,0,1,160,122.22Z\"/>";

export const TeaBag = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TeaBagProps) => {
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
