import { SVGProps } from "react";

export type ArrowFatUpVariant = "duotone" | "fill" | "light";

export interface ArrowFatUpProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowFatUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M231.39,123.06A8,8,0,0,1,224,128H184v80a16,16,0,0,1-16,16H88a16,16,0,0,1-16-16V128H32a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,231.39,123.06Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.24,115.76l-96-96a6,6,0,0,0-8.48,0l-96,96A6,6,0,0,0,32,126H74v82a14,14,0,0,0,14,14h80a14,14,0,0,0,14-14V126h42a6,6,0,0,0,4.24-10.24ZM176,114a6,6,0,0,0-6,6v88a2,2,0,0,1-2,2H88a2,2,0,0,1-2-2V120a6,6,0,0,0-6-6H46.49L128,32.49,209.51,114Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.66,114.34l-96-96a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,32,128H72v80a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V128h40a8,8,0,0,0,5.66-13.66ZM176,112a8,8,0,0,0-8,8v88H88V120a8,8,0,0,0-8-8H51.31L128,35.31,204.69,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,120H176v88a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V120H32l96-96Z\"/>";

export const ArrowFatUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowFatUpProps) => {
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
