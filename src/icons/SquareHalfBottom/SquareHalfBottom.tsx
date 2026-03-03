import { SVGProps } from "react";

export type SquareHalfBottomVariant = "duotone" | "fill" | "light";

export interface SquareHalfBottomProps extends SVGProps<SVGSVGElement> {
  variant?: SquareHalfBottomVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v72H56V56Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM56,54H200a2,2,0,0,1,2,2v66H54V56A2,2,0,0,1,56,54Zm50,80v68H86V134Zm12,0h20v68H118Zm32,0h20v68H150ZM54,200V134H74v68H56A2,2,0,0,1,54,200Zm146,2H182V134h20v66A2,2,0,0,1,200,202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,16v64H56V56Zm0,144H56V136H200v64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z\"/>";

export const SquareHalfBottom = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SquareHalfBottomProps) => {
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
