import { SVGProps } from "react";

export type BarnVariant = "duotone" | "fill" | "light";

export interface BarnProps extends SVGProps<SVGSVGElement> {
  variant?: BarnVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,192h-8V130.57l1.49,2.08a8,8,0,1,0,13-9.3l-40-56a8,8,0,0,0-2-1.94L137,18.77l-.1-.07a16,16,0,0,0-17.76,0l-.1.07L51.45,65.42a8,8,0,0,0-2,1.94l-40,56a8,8,0,1,0,13,9.3L24,130.57V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM112,80h32a8,8,0,1,1,0,16H112a8,8,0,1,1,0-16Zm52.64,40L128,146.17,91.36,120ZM72,125.83,114.24,156,72,186.17ZM91.36,192,128,165.83,164.64,192ZM184,186.17,141.76,156,184,125.83Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,194H230V124.32l5.12,7.17a6,6,0,1,0,9.76-7l-40-56a6.14,6.14,0,0,0-1.47-1.45L135.77,20.35a14,14,0,0,0-15.62.06L52.59,67.06a6.14,6.14,0,0,0-1.47,1.45l-40,56a6,6,0,1,0,9.76,7L26,124.32V194H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,107.52,60.27,76.34l66.62-46a2,2,0,0,1,2.14-.06l66.7,46.06L218,107.52V194H190V120a6,6,0,0,0-6-6H72a6,6,0,0,0-6,6v74H38Zm90,45.11L90.72,126h74.56Zm50-21v56.68L138.32,160ZM117.68,160,78,188.34V131.66ZM128,167.37,165.28,194H90.72ZM106,88a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,88Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,192h-8V130.57l1.49,2.08a8,8,0,1,0,13-9.3l-40-56a8,8,0,0,0-2-1.94L137,18.77l-.1-.07a16,16,0,0,0-17.76,0l-.1.07L51.45,65.42a8,8,0,0,0-2,1.94l-40,56a8,8,0,1,0,13,9.3L24,130.57V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,108.17,61.7,77.79,128,32l66.3,45.78L216,108.17V192H192V120a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v72H40Zm88,42L97,128H159Zm48-14.62v48.91L141.76,160ZM114.24,160,80,184.46V135.55ZM128,169.83,159,192H97ZM104,88a8,8,0,0,1,8-8h32a8,8,0,1,1,0,16H112A8,8,0,0,1,104,88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,120v80H72V120Z\"/>";

export const Barn = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BarnProps) => {
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
