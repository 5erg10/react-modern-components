import { SVGProps } from "react";

export type PintGlassVariant = "duotone" | "fill" | "light";

export interface PintGlassProps extends SVGProps<SVGSVGElement> {
  variant?: PintGlassVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M206,26.69A8,8,0,0,0,200,24H56a8,8,0,0,0-7.94,9l23.15,193A16,16,0,0,0,87.1,240h81.8a16,16,0,0,0,15.89-14.09L207.94,33A8,8,0,0,0,206,26.69ZM191,40,188.1,64H67.9L65,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M204.49,28A6,6,0,0,0,200,26H56a6,6,0,0,0-6,6.71l23.16,193A14,14,0,0,0,87.1,238h81.8a14,14,0,0,0,13.9-12.33L206,32.71A6,6,0,0,0,204.49,28ZM193.24,38l-3.36,28H66.12L62.76,38ZM170.89,224.24a2,2,0,0,1-2,1.76H87.1a2,2,0,0,1-2-1.76L67.56,78H188.44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M206,26.69A8,8,0,0,0,200,24H56a8,8,0,0,0-7.94,9l23.15,193A16,16,0,0,0,87.1,240h81.8a16,16,0,0,0,15.89-14.09L207.94,33A8,8,0,0,0,206,26.69ZM191,40,188.1,64H67.9L65,40ZM168.9,224H87.1L69.82,80H186.18Z\"/>";
const SECONDARY_PATHS = "<path d=\"M195.2,72,176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225L60.8,72Z\"/>";

export const PintGlass = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PintGlassProps) => {
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
