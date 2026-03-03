import { SVGProps } from "react";

export type ReplitLogoVariant = "duotone" | "fill" | "light";

export interface ReplitLogoProps extends SVGProps<SVGSVGElement> {
  variant?: ReplitLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M72,160h72v56a16,16,0,0,1-16,16H72a16,16,0,0,1-16-16V176A16,16,0,0,1,72,160ZM128,24H72A16,16,0,0,0,56,40V80A16,16,0,0,0,72,96h72V40A16,16,0,0,0,128,24Zm88,72H144v64h72a16,16,0,0,0,16-16V112A16,16,0,0,0,216,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,90H150V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V88a14,14,0,0,0,14,14h66v52H72a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V166h66a14,14,0,0,0,14-14V104A14,14,0,0,0,216,90ZM138,216a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V168a2,2,0,0,1,2-2h66Zm0-126H72a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Zm80,62a2,2,0,0,1-2,2H150V102h66a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,88H152V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V88a16,16,0,0,0,16,16h64v48H72a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V168h64a16,16,0,0,0,16-16V104A16,16,0,0,0,216,88ZM136,216H72V168h64Zm0-176V88H72V40h64Zm80,112H152V104h64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M72,160h72v56a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168A8,8,0,0,1,72,160ZM216,96H144v64h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96ZM136,32H72a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8h72V40A8,8,0,0,0,136,32Z\"/>";

export const ReplitLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ReplitLogoProps) => {
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
