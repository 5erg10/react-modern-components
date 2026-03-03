import { SVGProps } from "react";

export type NetworkVariant = "duotone" | "fill" | "light";

export interface NetworkProps extends SVGProps<SVGSVGElement> {
  variant?: NetworkVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,120a8,8,0,0,1-8,8H200v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h96V88h-8A16,16,0,0,1,96,72V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16h-8v24h96A8,8,0,0,1,240,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,114H134V86h10a14,14,0,0,0,14-14V40a14,14,0,0,0-14-14H112A14,14,0,0,0,98,40V72a14,14,0,0,0,14,14h10v28H24a6,6,0,0,0,0,12H58v36H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H70V126H186v36H176a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H198V126h34a6,6,0,0,0,0-12ZM110,72V40a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V72a2,2,0,0,1-2,2H112A2,2,0,0,1,110,72ZM82,176v32a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80A2,2,0,0,1,82,176Zm128,0v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2h32A2,2,0,0,1,210,176Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,112H136V88h8a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H112A16,16,0,0,0,96,40V72a16,16,0,0,0,16,16h8v24H24a8,8,0,0,0,0,16H56v32H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H72V128H184v32h-8a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V128h32a8,8,0,0,0,0-16ZM112,40h32V72H112ZM80,208H48V176H80Zm128,0H176V176h32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,40V72a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h32A8,8,0,0,1,152,40ZM80,168H48a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V176A8,8,0,0,0,80,168Zm128,0H176a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176A8,8,0,0,0,208,168Z\"/>";

export const Network = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NetworkProps) => {
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
