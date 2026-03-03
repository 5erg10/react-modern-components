import { SVGProps } from "react";

export type RowsVariant = "duotone" | "fill" | "light";

export interface RowsProps extends SVGProps<SVGSVGElement> {
  variant?: RowsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H208A16,16,0,0,1,224,152ZM208,48H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,138H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,50H48A14,14,0,0,0,34,64v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V64A14,14,0,0,0,208,50Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,152v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8H208A8,8,0,0,1,216,152Zm-8-96H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V64A8,8,0,0,0,208,56Z\"/>";

export const Rows = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RowsProps) => {
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
