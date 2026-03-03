import { SVGProps } from "react";

export type AlignBottomVariant = "duotone" | "fill" | "light";

export interface AlignBottomProps extends SVGProps<SVGSVGElement> {
  variant?: AlignBottomVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm-88,0h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm-84-40V80a14,14,0,0,1,14-14h40a14,14,0,0,1,14,14v96a14,14,0,0,1-14,14H152A14,14,0,0,1,138,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2ZM50,176V40A14,14,0,0,1,64,26h40a14,14,0,0,1,14,14V176a14,14,0,0,1-14,14H64A14,14,0,0,1,50,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M64,192h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192ZM64,40h40V176H64ZM224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm0-112h40v96H152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,80v96a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h40A8,8,0,0,1,200,80ZM104,32H64a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V40A8,8,0,0,0,104,32Z\"/>";

export const AlignBottom = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignBottomProps) => {
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
