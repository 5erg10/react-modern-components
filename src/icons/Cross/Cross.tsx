import { SVGProps } from "react";

export type CrossVariant = "duotone" | "fill" | "light";

export interface CrossProps extends SVGProps<SVGSVGElement> {
  variant?: CrossVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,92v24a16,16,0,0,1-16,16H156v92a16,16,0,0,1-16,16H116a16,16,0,0,1-16-16V132H56a16,16,0,0,1-16-16V92A16,16,0,0,1,56,76h44V32a16,16,0,0,1,16-16h24a16,16,0,0,1,16,16V76h44A16,16,0,0,1,216,92Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,74H158V32a14,14,0,0,0-14-14H112A14,14,0,0,0,98,32V74H56A14,14,0,0,0,42,88v32a14,14,0,0,0,14,14H98v90a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V134h42a14,14,0,0,0,14-14V88A14,14,0,0,0,200,74Zm2,46a2,2,0,0,1-2,2H152a6,6,0,0,0-6,6v96a2,2,0,0,1-2,2H112a2,2,0,0,1-2-2V128a6,6,0,0,0-6-6H56a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h48a6,6,0,0,0,6-6V32a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V80a6,6,0,0,0,6,6h48a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H152a8,8,0,0,0-8,8v96H112V128a8,8,0,0,0-8-8H56V88h48a8,8,0,0,0,8-8V32h32V80a8,8,0,0,0,8,8h48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V80h48A8,8,0,0,1,208,88Z\"/>";

export const Cross = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CrossProps) => {
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
