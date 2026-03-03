import { SVGProps } from "react";

export type SimCardVariant = "duotone" | "fill" | "light";

export interface SimCardProps extends SVGProps<SVGSVGElement> {
  variant?: SimCardVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM184,192a8,8,0,0,1-8,8H160a4,4,0,0,1-4-4V160.27a8.17,8.17,0,0,0-7.47-8.25,8,8,0,0,0-8.53,8v36a4,4,0,0,1-4,4H120a4,4,0,0,1-4-4V160.27a8.17,8.17,0,0,0-7.47-8.25,8,8,0,0,0-8.53,8v36a4,4,0,0,1-4,4H80a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM202,216a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h93.52L202,90.49ZM74,120v72a6,6,0,0,0,6,6h96a6,6,0,0,0,6-6V120a6,6,0,0,0-6-6H80A6,6,0,0,0,74,120Zm12,6h84v60H150V152a6,6,0,0,0-12,0v34H118V152a6,6,0,0,0-12,0v34H86Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM200,216H56V40h92.69L200,91.31V216ZM176,112H80a8,8,0,0,0-8,8v72a8,8,0,0,0,8,8h96a8,8,0,0,0,8-8V120A8,8,0,0,0,176,112Zm-8,72H152V152a8,8,0,0,0-16,0v32H120V152a8,8,0,0,0-16,0v32H88V128h80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,120v72H80V120Z\"/>";

export const SimCard = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SimCardProps) => {
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
