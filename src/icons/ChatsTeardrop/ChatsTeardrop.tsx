import { SVGProps } from "react";

export type ChatsTeardropVariant = "duotone" | "fill" | "light";

export interface ChatsTeardropProps extends SVGProps<SVGSVGElement> {
  variant?: ChatsTeardropVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M168.16,74.42A78,78,0,0,0,18,104v64a14,14,0,0,0,14,14H88a78.15,78.15,0,0,0,72,48h64a14,14,0,0,0,14-14V152A78,78,0,0,0,168.16,74.42ZM30,168V104a66,66,0,1,1,66,66H32A2,2,0,0,1,30,168Zm196,48a2,2,0,0,1-2,2H160a66.13,66.13,0,0,1-58.89-36.19,77.92,77.92,0,0,0,71-94.68A66,66,0,0,1,226,152Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM32,104a64,64,0,1,1,64,64H32ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,152v64a8,8,0,0,1-8,8H160a72,72,0,0,1-67.9-48H96a72,72,0,0,0,72-72h0a71.83,71.83,0,0,0-4.07-23.88h0A72,72,0,0,1,232,152Z\"/>";

export const ChatsTeardrop = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChatsTeardropProps) => {
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
