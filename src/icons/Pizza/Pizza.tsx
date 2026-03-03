import { SVGProps } from "react";

export type PizzaVariant = "duotone" | "fill" | "light";

export interface PizzaProps extends SVGProps<SVGSVGElement> {
  variant?: PizzaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63Zm-55.1,68.53a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.6,63.47a13.91,13.91,0,0,0-6.35-8.67,199.48,199.48,0,0,0-206.5,0A14,14,0,0,0,20.05,74l96,157.27a14,14,0,0,0,24,0L236,74A13.81,13.81,0,0,0,237.6,63.47ZM61.07,118.2A26,26,0,1,1,87.17,161Zm91,70.32a26,26,0,0,1,26.91-44.1Zm33.2-54.4A37.65,37.65,0,0,0,168,130a38,38,0,0,0-22.25,68.8l-16,26.24a2,2,0,0,1-3.46,0L93.59,171.49A38,38,0,1,0,54.66,107.7L46.05,93.59a154.14,154.14,0,0,1,163.9,0Zm40.49-66.35L216.2,83.35a166.11,166.11,0,0,0-176.4,0L30.29,67.77h0a1.88,1.88,0,0,1-.23-1.47A2,2,0,0,1,31,65.06a187.46,187.46,0,0,1,194,0,2,2,0,0,1,.92,1.24A1.88,1.88,0,0,1,225.71,67.77Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0L194,146.53v0l43.61-71.45A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M218,91.76,187.13,142.4A32,32,0,1,0,154,196.78l-19.13,31.38a8,8,0,0,1-13.7,0L84.3,167.71a32,32,0,1,0-30.48-50L38,91.76a159.77,159.77,0,0,1,180,0Z\"/>";

export const Pizza = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PizzaProps) => {
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
