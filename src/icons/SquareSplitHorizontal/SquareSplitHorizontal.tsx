import { SVGProps } from "react";

export type SquareSplitHorizontalVariant = "duotone" | "fill" | "light";

export interface SquareSplitHorizontalProps extends SVGProps<SVGSVGElement> {
  variant?: SquareSplitHorizontalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,44V212a4,4,0,0,1-4,4H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h60A4,4,0,0,1,120,44Zm80-4H140a4,4,0,0,0-4,4V212a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,42H56A14,14,0,0,0,42,56V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42ZM54,200V56a2,2,0,0,1,2-2h66V202H56A2,2,0,0,1,54,200Zm148,0a2,2,0,0,1-2,2H134V54h66a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM56,56h64V200H56ZM200,200H136V56h64V200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,56V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z\"/>";

export const SquareSplitHorizontal = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SquareSplitHorizontalProps) => {
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
