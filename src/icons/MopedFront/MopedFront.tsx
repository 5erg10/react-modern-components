import { SVGProps } from "react";

export type MopedFrontVariant = "duotone" | "fill" | "light";

export interface MopedFrontProps extends SVGProps<SVGSVGElement> {
  variant?: MopedFrontVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,40H167.2a40,40,0,0,0-78.4,0H48a8,8,0,0,0,0,16H88.8a40,40,0,0,0,12.58,21.82A64.08,64.08,0,0,0,64,136v64a16,16,0,0,0,16,16H96a32,32,0,0,0,64,0h16a16,16,0,0,0,16-16V136a64.08,64.08,0,0,0-37.38-58.18A40,40,0,0,0,167.2,56H208a8,8,0,0,0,0-16ZM144,216a16,16,0,0,1-32,0V168a16,16,0,0,1,32,0ZM128,72a24,24,0,1,1,24-24A24,24,0,0,1,128,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,42H165.52a38,38,0,0,0-75,0H48a6,6,0,0,0,0,12H90.48a38,38,0,0,0,14.71,24.37A62.09,62.09,0,0,0,66,136v64a14,14,0,0,0,14,14H98v2a30,30,0,0,0,60,0v-2h18a14,14,0,0,0,14-14V136a62.09,62.09,0,0,0-39.19-57.63A38,38,0,0,0,165.52,54H208a6,6,0,0,0,0-12ZM146,216a18,18,0,0,1-36,0V168a18,18,0,0,1,36,0Zm32-80v64a2,2,0,0,1-2,2H158V168a30,30,0,0,0-60,0v34H80a2,2,0,0,1-2-2V136a50,50,0,0,1,100,0ZM128,74a26,26,0,1,1,26-26A26,26,0,0,1,128,74Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,40H167.2a40,40,0,0,0-78.4,0H48a8,8,0,0,0,0,16H88.8a40,40,0,0,0,12.58,21.82A64.08,64.08,0,0,0,64,136v64a16,16,0,0,0,16,16H96a32,32,0,0,0,64,0h16a16,16,0,0,0,16-16V136a64.08,64.08,0,0,0-37.38-58.18A40,40,0,0,0,167.2,56H208a8,8,0,0,0,0-16ZM144,216a16,16,0,0,1-32,0V168a16,16,0,0,1,32,0Zm32-80v64H160V168a32,32,0,0,0-64,0v32H80V136a48,48,0,0,1,96,0ZM104,48a24,24,0,1,1,24,24A24,24,0,0,1,104,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,168v48a24,24,0,0,1-48,0V168a24,24,0,0,1,48,0ZM128,80A32,32,0,1,0,96,48,32,32,0,0,0,128,80Z\"/>";

export const MopedFront = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MopedFrontProps) => {
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
