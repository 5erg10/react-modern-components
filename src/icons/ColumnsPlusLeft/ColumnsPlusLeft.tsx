import { SVGProps } from "react";

export type ColumnsPlusLeftVariant = "duotone" | "fill" | "light";

export interface ColumnsPlusLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ColumnsPlusLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,48V208a16,16,0,0,1-16,16H104a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h24A16,16,0,0,1,144,48Zm56-16H176a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32ZM64,120H48V104a8,8,0,0,0-16,0v16H16a8,8,0,0,0,0,16H32v16a8,8,0,0,0,16,0V136H64a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,34H104A14,14,0,0,0,90,48V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,128,34Zm2,174a2,2,0,0,1-2,2H104a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2ZM200,34H176a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2ZM70,128a6,6,0,0,1-6,6H46v18a6,6,0,0,1-12,0V134H16a6,6,0,0,1,0-12H34V104a6,6,0,0,1,12,0v18H64A6,6,0,0,1,70,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,32H104A16,16,0,0,0,88,48V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,128,32Zm0,176H104V48h24ZM200,32H176a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H176V48h24ZM72,128a8,8,0,0,1-8,8H48v16a8,8,0,0,1-16,0V136H16a8,8,0,0,1,0-16H32V104a8,8,0,0,1,16,0v16H64A8,8,0,0,1,72,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136,48V208a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h24A8,8,0,0,1,136,48Zm64-8H176a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V48A8,8,0,0,0,200,40Z\"/>";

export const ColumnsPlusLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ColumnsPlusLeftProps) => {
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
