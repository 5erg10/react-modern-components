import { SVGProps } from "react";

export type LadderSimpleVariant = "duotone" | "fill" | "light";

export interface LadderSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: LadderSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,24a8,8,0,0,0-8,8v8H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0v-8H184v8a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,26a6,6,0,0,0-6,6V66H70V32a6,6,0,0,0-12,0V224a6,6,0,0,0,12,0V190H186v34a6,6,0,0,0,12,0V32A6,6,0,0,0,192,26Zm-6,52v44H70V78ZM70,178V134H186v44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,24a8,8,0,0,0-8,8V64H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0V192H184v32a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24Zm-8,56v40H72V80ZM72,176V136H184v40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,32V224H64V32Z\"/>";

export const LadderSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LadderSimpleProps) => {
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
