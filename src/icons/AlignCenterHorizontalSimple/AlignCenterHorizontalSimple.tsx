import { SVGProps } from "react";

export type AlignCenterHorizontalSimpleVariant = "duotone" | "fill" | "light";

export interface AlignCenterHorizontalSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: AlignCenterHorizontalSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,96v64a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V176H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80h72V48a8,8,0,0,1,16,0V80h72A16,16,0,0,1,224,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,82H134V48a6,6,0,0,0-12,0V82H48A14,14,0,0,0,34,96v64a14,14,0,0,0,14,14h74v34a6,6,0,0,0,12,0V174h74a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,78a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,80H136V48a8,8,0,0,0-16,0V80H48A16,16,0,0,0,32,96v64a16,16,0,0,0,16,16h72v32a8,8,0,0,0,16,0V176h72a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,80H48V96H208v64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,96v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z\"/>";

export const AlignCenterHorizontalSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignCenterHorizontalSimpleProps) => {
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
