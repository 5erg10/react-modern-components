import { SVGProps } from "react";

export type FileDashedVariant = "duotone" | "fill" | "light";

export interface FileDashedProps extends SVGProps<SVGSVGElement> {
  variant?: FileDashedVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H120a8,8,0,0,0,0,16h24V88a8,8,0,0,0,8,8h48v40a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M78,224a6,6,0,0,1-6,6H56a14,14,0,0,1-14-14V184a6,6,0,0,1,12,0v32a2,2,0,0,0,2,2H72A6,6,0,0,1,78,224ZM214,88v48a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H120a6,6,0,0,1,0-12h32a6,6,0,0,1,4.24,1.76l56,56A6,6,0,0,1,214,88Zm-56-6h35.51L158,46.49ZM80,26H56A14,14,0,0,0,42,40V64a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2H80a6,6,0,0,0,0-12ZM208,170a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14V176A6,6,0,0,0,208,170ZM48,150a6,6,0,0,0,6-6V104a6,6,0,0,0-12,0v40A6,6,0,0,0,48,150Zm104,68H112a6,6,0,0,0,0,12h40a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M80,224a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V184a8,8,0,0,1,16,0v32H72A8,8,0,0,1,80,224ZM216,88v48a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H120a8,8,0,0,1,0-16h32a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,24H56A16,16,0,0,0,40,40V64a8,8,0,0,0,16,0V40H80a8,8,0,0,0,0-16ZM208,168a8,8,0,0,0-8,8v40h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V176A8,8,0,0,0,208,168ZM48,152a8,8,0,0,0,8-8V104a8,8,0,0,0-16,0v40A8,8,0,0,0,48,152Zm104,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FileDashed = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FileDashedProps) => {
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
