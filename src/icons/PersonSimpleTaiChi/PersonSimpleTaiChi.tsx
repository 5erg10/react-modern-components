import { SVGProps } from "react";

export type PersonSimpleTaiChiVariant = "duotone" | "fill" | "light";

export interface PersonSimpleTaiChiProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleTaiChiVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M96,48a32,32,0,1,1,32,32A32,32,0,0,1,96,48ZM216,96H40a8,8,0,0,0,0,16h80v28.44L42.65,210.05A8,8,0,0,0,53.35,222l76.2-68.58L176,173.28V216a8,8,0,0,0,16,0V168a8,8,0,0,0-4.85-7.35L136,138.72V112h80a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,78A30,30,0,1,0,98,48,30,30,0,0,0,128,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,30Zm94,74a6,6,0,0,1-6,6H134v30l52.36,22.45A6,6,0,0,1,190,168v48a6,6,0,0,1-12,0V172L129.16,151,52,220.46a6,6,0,0,1-8-8.92l78-70.21V110H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,104Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,80A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm96,72a8,8,0,0,1-8,8H136v26.72l51.15,21.93A8,8,0,0,1,192,168v48a8,8,0,0,1-16,0V173.28l-46.45-19.91L53.35,222a8,8,0,1,1-10.7-11.9L120,140.44V112H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,104Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,48a24,24,0,1,1-24-24A24,24,0,0,1,152,48Z\"/>";

export const PersonSimpleTaiChi = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleTaiChiProps) => {
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
