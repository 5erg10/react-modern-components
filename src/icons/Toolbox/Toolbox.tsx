import { SVGProps } from "react";

export type ToolboxVariant = "duotone" | "fill" | "light";

export interface ToolboxProps extends SVGProps<SVGSVGElement> {
  variant?: ToolboxVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80v28a4,4,0,0,0,4,4H64V96.27A8.17,8.17,0,0,1,71.47,88,8,8,0,0,1,80,96v16h96V96.27A8.17,8.17,0,0,1,183.47,88,8,8,0,0,1,192,96v16h44a4,4,0,0,0,4-4V80A16,16,0,0,0,224,64Zm-64,0H96V56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm80,68v60a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V132a4,4,0,0,1,4-4H64v16a8,8,0,0,0,8.53,8A8.17,8.17,0,0,0,80,143.73V128h96v16a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V128h44A4,4,0,0,1,240,132Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,66H174V56a22,22,0,0,0-22-22H104A22,22,0,0,0,82,56V66H32A14,14,0,0,0,18,80V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66ZM94,56a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V66H94ZM32,78H224a2,2,0,0,1,2,2v34H190V104a6,6,0,0,0-12,0v10H78V104a6,6,0,0,0-12,0v10H30V80A2,2,0,0,1,32,78ZM224,194H32a2,2,0,0,1-2-2V126H66v10a6,6,0,0,0,12,0V126H178v10a6,6,0,0,0,12,0V126h36v66A2,2,0,0,1,224,194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM32,80H224v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32ZM224,192H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,120v72a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V120Z\"/>";

export const Toolbox = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ToolboxProps) => {
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
