import { SVGProps } from "react";

export type NumberCircleNineVariant = "duotone" | "fill" | "light";

export interface NumberCircleNineProps extends SVGProps<SVGSVGElement> {
  variant?: NumberCircleNineVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M145.33,118l0,0A20,20,0,1,1,138,90.68,20,20,0,0,1,145.31,118ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM146,76.82A36,36,0,1,0,127.94,144q.94,0,1.89-.06l-16.7,28a8,8,0,0,0,2.77,11,8,8,0,0,0,11-2.77L159.18,126A36.05,36.05,0,0,0,146,76.82Z\"/>";
const LIGHT_INNER     = "<path d=\"M145,78.55A34,34,0,1,0,127.94,142a33.56,33.56,0,0,0,5.67-.49l-18.76,31.42a6,6,0,0,0,10.3,6.16L157.45,125A34,34,0,0,0,145,78.55ZM147.06,119v0A22,22,0,1,1,139,89,22,22,0,0,1,147.05,119ZM128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM146,76.82A36,36,0,1,0,127.94,144q.94,0,1.89-.06l-16.7,28a8,8,0,0,0,2.77,11,8,8,0,0,0,11-2.77L159.18,126A36.05,36.05,0,0,0,146,76.82ZM145.33,118l0,0A20,20,0,1,1,138,90.68,20,20,0,0,1,145.31,118Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z\"/>";

export const NumberCircleNine = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NumberCircleNineProps) => {
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
