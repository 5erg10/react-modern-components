import { SVGProps } from "react";

export type ExcludeSquareVariant = "duotone" | "fill" | "light";

export interface ExcludeSquareProps extends SVGProps<SVGSVGElement> {
  variant?: ExcludeSquareVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M88,88v80H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H160a8,8,0,0,1,8,8V88Zm128,0H168v80H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,90H166V40a6,6,0,0,0-6-6H40a6,6,0,0,0-6,6V160a6,6,0,0,0,6,6H90v50a6,6,0,0,0,6,6H216a6,6,0,0,0,6-6V96A6,6,0,0,0,216,90ZM162.48,210l-44-44h39l44,44ZM46,54.48l44,44v39l-44-44ZM93.52,46l44,44h-39l-44-44ZM102,154V102h52v52Zm64,3.52v-39l44,44v39Zm44-12L166.48,102H210Zm-56-56L110.48,46H154Zm-108,21L89.52,154H46Zm56,56L145.52,210H102Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm104-48v48H104V104Zm56,104H104V168h56a8,8,0,0,0,8-8V104h40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M96,96v64H40V40H160V96Zm64,0v64H96v56H216V96Z\"/>";

export const ExcludeSquare = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ExcludeSquareProps) => {
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
