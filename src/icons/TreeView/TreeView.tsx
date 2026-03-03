import { SVGProps } from "react";

export type TreeViewVariant = "duotone" | "fill" | "light";

export interface TreeViewProps extends SVGProps<SVGSVGElement> {
  variant?: TreeViewVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M160,136v-8H88v64a8,8,0,0,0,8,8h64v-8a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16v-8H96a24,24,0,0,1-24-24V80H64A16,16,0,0,1,48,64V32A16,16,0,0,1,64,16H96a16,16,0,0,1,16,16V64A16,16,0,0,1,96,80H88v32h72v-8a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H176A16,16,0,0,1,160,136Z\"/>";
const LIGHT_INNER     = "<path d=\"M176,150h32a14,14,0,0,0,14-14V104a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H86V78H96a14,14,0,0,0,14-14V32A14,14,0,0,0,96,18H64A14,14,0,0,0,50,32V64A14,14,0,0,0,64,78H74V192a22,22,0,0,0,22,22h66v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V192a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14v10H96a10,10,0,0,1-10-10V126h76v10A14,14,0,0,0,176,150ZM62,64V32a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H64A2,2,0,0,1,62,64ZM174,192a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Zm0-88a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,152h32a16,16,0,0,0,16-16V104a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H88V80h8a16,16,0,0,0,16-16V32A16,16,0,0,0,96,16H64A16,16,0,0,0,48,32V64A16,16,0,0,0,64,80h8V192a24,24,0,0,0,24,24h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V192a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96a8,8,0,0,1-8-8V128h72v8A16,16,0,0,0,176,152ZM64,32H96V64H64ZM176,192h32v32H176Zm0-88h32v32H176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,32V64a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8H96A8,8,0,0,1,104,32ZM208,96H176a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V104A8,8,0,0,0,208,96Zm0,88H176a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V192A8,8,0,0,0,208,184Z\"/>";

export const TreeView = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TreeViewProps) => {
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
