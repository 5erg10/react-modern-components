import { SVGProps } from "react";

export type NavigationArrowVariant = "duotone" | "fill" | "light";

export interface NavigationArrowProps extends SVGProps<SVGSVGElement> {
  variant?: NavigationArrowVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,121.58a15.76,15.76,0,0,1-11.29,15l-.2.06-78,21.84-21.84,78-.06.2a15.77,15.77,0,0,1-15,11.29h-.3a15.77,15.77,0,0,1-15.07-10.67L41,61.41a1,1,0,0,1-.05-.16A16,16,0,0,1,61.25,40.9l.16.05,175.92,65.26A15.78,15.78,0,0,1,248,121.58Z\"/>";
const LIGHT_INNER     = "<path d=\"M236.65,108.1,60.72,42.83l-.13,0A14,14,0,0,0,42.78,60.59s0,.09,0,.13L108.1,236.65A13.77,13.77,0,0,0,121.28,246h.26a13.8,13.8,0,0,0,13.14-9.88l0-.15,22.14-79.1L236,134.73l.15,0a14,14,0,0,0,.53-26.58Zm-4,15.1-82.26,23a6,6,0,0,0-4.16,4.16l-23,82.26a1.85,1.85,0,0,1-1.86,1.36,1.82,1.82,0,0,1-1.92-1.35.61.61,0,0,0,0-.12L54.11,56.62a2,2,0,0,1,2.51-2.51l175.91,65.26.12,0a2,2,0,0,1,0,3.79Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M237.33,106.21,61.41,41l-.16-.05A16,16,0,0,0,40.9,61.25a1,1,0,0,0,.05.16l65.26,175.92A15.77,15.77,0,0,0,121.28,248h.3a15.77,15.77,0,0,0,15-11.29l.06-.2,21.84-78,78-21.84.2-.06a16,16,0,0,0,.62-30.38ZM149.84,144.3a8,8,0,0,0-5.54,5.54L121.3,232l-.06-.17L56,56l175.82,65.22.16.06Z\"/>";
const SECONDARY_PATHS = "<path d=\"M234.35,129,152,152,129,234.35a8,8,0,0,1-15.21.27l-65.28-176A8,8,0,0,1,58.63,48.46l176,65.28A8,8,0,0,1,234.35,129Z\"/>";

export const NavigationArrow = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NavigationArrowProps) => {
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
