import { SVGProps } from "react";

export type AlignCenterVerticalVariant = "duotone" | "fill" | "light";

export interface AlignCenterVerticalProps extends SVGProps<SVGSVGElement> {
  variant?: AlignCenterVerticalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,128a8,8,0,0,1-8,8H208v48a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V136H120v72a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V136H32a8,8,0,0,1,0-16H48V48A16,16,0,0,1,64,32h40a16,16,0,0,1,16,16v72h16V72a16,16,0,0,1,16-16h40a16,16,0,0,1,16,16v48h16A8,8,0,0,1,232,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,122H206V72a14,14,0,0,0-14-14H152a14,14,0,0,0-14,14v50H118V48a14,14,0,0,0-14-14H64A14,14,0,0,0,50,48v74H32a6,6,0,0,0,0,12H50v74a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V134h20v50a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V134h18a6,6,0,0,0,0-12ZM106,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Zm88-24a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,120H208V72a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v48H120V48a16,16,0,0,0-16-16H64A16,16,0,0,0,48,48v72H32a8,8,0,0,0,0,16H48v72a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V136h16v48a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V136h16a8,8,0,0,0,0-16ZM104,208H64V48h40Zm88-24H152V72h40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,72V184a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h40A8,8,0,0,1,200,72ZM104,40H64a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V48A8,8,0,0,0,104,40Z\"/>";

export const AlignCenterVertical = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignCenterVerticalProps) => {
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
