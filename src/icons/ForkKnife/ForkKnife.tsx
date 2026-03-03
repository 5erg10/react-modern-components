import { SVGProps } from "react";

export type ForkKnifeVariant = "duotone" | "fill" | "light";

export interface ForkKnifeProps extends SVGProps<SVGSVGElement> {
  variant?: ForkKnifeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40Zm-96.11-1.31a8,8,0,1,0-15.78,2.63L111.89,88H88V40a8,8,0,0,0-16,0V88H48.11l7.78-46.68a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z\"/>";
const LIGHT_INNER     = "<path d=\"M74,88V40a6,6,0,0,1,12,0V88a6,6,0,0,1-12,0ZM214,40V224a6,6,0,0,1-12,0V174H152a6,6,0,0,1-6-6c0-4.41.68-108.25,59.64-133.51A6,6,0,0,1,214,40ZM202,50c-36.79,24.29-42.82,91.48-43.81,112H202ZM117.92,39a6,6,0,1,0-11.84,2L114,88.48a34,34,0,0,1-68,0L53.92,41a6,6,0,0,0-11.84-2l-8,48A6.61,6.61,0,0,0,34,88a46.06,46.06,0,0,0,40,45.6V224a6,6,0,0,0,12,0V133.6A46.06,46.06,0,0,0,126,88a6.61,6.61,0,0,0-.08-1Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,40V168H152S152,64,208,40Z\"/>";

export const ForkKnife = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ForkKnifeProps) => {
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
