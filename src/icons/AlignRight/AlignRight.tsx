import { SVGProps } from "react";

export type AlignRightVariant = "duotone" | "fill" | "light";

export interface AlignRightProps extends SVGProps<SVGSVGElement> {
  variant?: AlignRightVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm-48,8H80A16,16,0,0,0,64,64v40a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V64A16,16,0,0,0,176,48Zm0,88H40a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V152A16,16,0,0,0,176,136Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM190,64v40a14,14,0,0,1-14,14H80a14,14,0,0,1-14-14V64A14,14,0,0,1,80,50h96A14,14,0,0,1,190,64Zm-12,0a2,2,0,0,0-2-2H80a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2h96a2,2,0,0,0,2-2Zm12,88v40a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V152a14,14,0,0,1,14-14H176A14,14,0,0,1,190,152Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H176a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM192,64v40a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V64A16,16,0,0,1,80,48h96A16,16,0,0,1,192,64Zm-16,0H80v40h96Zm16,88v40a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H176A16,16,0,0,1,192,152Zm-16,0H40v40H176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,64v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8h96A8,8,0,0,1,184,64Zm-8,80H40a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8H176a8,8,0,0,0,8-8V152A8,8,0,0,0,176,144Z\"/>";

export const AlignRight = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AlignRightProps) => {
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
