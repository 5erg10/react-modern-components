import { SVGProps } from "react";

export type UniteSquareVariant = "duotone" | "fill" | "light";

export interface UniteSquareProps extends SVGProps<SVGSVGElement> {
  variant?: UniteSquareVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,96V216a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V168H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H160a8,8,0,0,1,8,8V88h48A8,8,0,0,1,224,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,90H166V40a6,6,0,0,0-6-6H40a6,6,0,0,0-6,6V160a6,6,0,0,0,6,6H90v50a6,6,0,0,0,6,6H216a6,6,0,0,0,6-6V96A6,6,0,0,0,216,90ZM154.48,210,46,101.52v-47L201.52,210ZM54.48,46h47L210,154.48v47ZM210,137.52,174.48,102H210Zm-56-56L118.48,46H154Zm-108,37L81.52,154H46Zm56,56L137.52,210H102Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88Zm-8,120H104V160a8,8,0,0,0-8-8H48V48H152V96a8,8,0,0,0,8,8h48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,96V216H96V160H40V40H160V96Z\"/>";

export const UniteSquare = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UniteSquareProps) => {
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
