import { SVGProps } from "react";

export type HourglassSimpleLowVariant = "duotone" | "fill" | "light";

export interface HourglassSimpleLowProps extends SVGProps<SVGSVGElement> {
  variant?: HourglassSimpleLowVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.69,59.31a1.59,1.59,0,0,1,.13.13L116.43,128,44.82,196.56a1.59,1.59,0,0,1-.13.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0ZM158.21,168H97.79L128,139.08ZM200,48l-72,68.92L56,48Z\"/>";
const LIGHT_INNER     = "<path d=\"M209.8,198l-73.12-70L209.8,58l.09-.09A14,14,0,0,0,200,34H56a14,14,0,0,0-9.9,23.9l.09.09,73.12,70L46.2,198l-.09.09A14,14,0,0,0,56,222H200a14,14,0,0,0,9.9-23.9ZM54.56,49.38A2,2,0,0,1,56,46H200a2,2,0,0,1,1.45,3.38L128,119.69ZM128,136.31,163.19,170H92.81Zm73.84,72.46A1.91,1.91,0,0,1,200,210H56a2,2,0,0,1-1.45-3.38L80.28,182h95.44l25.72,24.62A1.91,1.91,0,0,1,201.84,208.77Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.69,59.31a1.59,1.59,0,0,1,.13.13L116.43,128,44.82,196.56a1.59,1.59,0,0,1-.13.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0ZM158.21,168H97.79L128,139.08ZM200,48l-72,68.92L56,48ZM56,208l25.06-24h93.84L200,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,216H56a8,8,0,0,1-5.66-13.66L77.87,176H178.13l27.51,26.34A8,8,0,0,1,200,216Z\"/>";

export const HourglassSimpleLow = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HourglassSimpleLowProps) => {
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
