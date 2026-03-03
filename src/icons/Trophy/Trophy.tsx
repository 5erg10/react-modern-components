import { SVGProps } from "react";

export type TrophyVariant = "duotone" | "fill" | "light";

export interface TrophyProps extends SVGProps<SVGSVGElement> {
  variant?: TrophyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,66H206V48a6,6,0,0,0-6-6H56a6,6,0,0,0-6,6V66H24A14,14,0,0,0,10,80V96a38,38,0,0,0,38,38h5.14A78,78,0,0,0,122,189.75V218H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V189.75c32.44-2.52,59.43-25.3,68.62-55.75H208a38,38,0,0,0,38-38V80A14,14,0,0,0,232,66ZM48,122A26,26,0,0,1,22,96V80a2,2,0,0,1,2-2H50v34a80.87,80.87,0,0,0,.65,10Zm146-10.9c0,36.62-29.38,66.63-65.5,66.9A66,66,0,0,1,62,112V54H194ZM234,96a26,26,0,0,1-26,26h-2.77a78.45,78.45,0,0,0,.77-10.9V78h26a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,48v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112V48Z\"/>";

export const Trophy = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TrophyProps) => {
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
