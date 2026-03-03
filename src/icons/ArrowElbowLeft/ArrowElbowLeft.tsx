import { SVGProps } from "react";

export type ArrowElbowLeftVariant = "duotone" | "fill" | "light";

export interface ArrowElbowLeftProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowElbowLeftVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M237.66,101.66l-96,96a8,8,0,0,1-11.32,0L60,127.31,29.66,157.66A8,8,0,0,1,16,152V80a8,8,0,0,1,8-8H96a8,8,0,0,1,5.66,13.66L71.31,116,136,180.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.24,100.24l-96,96a6,6,0,0,1-8.48,0L30,94.48V152a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H96a6,6,0,0,1,0,12H38.48L136,183.51l91.76-91.75a6,6,0,0,1,8.48,8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.66,90.34a8,8,0,0,0-11.32,0L136,180.69,71.31,116l30.35-30.34A8,8,0,0,0,96,72H24a8,8,0,0,0-8,8v72a8,8,0,0,0,13.66,5.66L60,127.31l70.34,70.35a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,237.66,90.34ZM32,132.69V88H76.69Z\"/>";
const SECONDARY_PATHS = "<path d=\"M96,80,24,152V80Z\"/>";

export const ArrowElbowLeft = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowElbowLeftProps) => {
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
