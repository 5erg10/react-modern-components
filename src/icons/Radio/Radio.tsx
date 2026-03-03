import { SVGProps } from "react";

export type RadioVariant = "duotone" | "fill" | "light";

export interface RadioProps extends SVGProps<SVGSVGElement> {
  variant?: RadioVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,64H86.51L194.3,31.67a8,8,0,0,0-4.6-15.33l-160,48h0A8,8,0,0,0,24,72V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM104,176H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm64,56a32,32,0,1,1,32-32A32,32,0,0,1,168,168Z\"/>";
const LIGHT_INNER     = "<path d=\"M102,104a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H96A6,6,0,0,1,102,104Zm-6,26H64a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12Zm0,32H64a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12ZM230,80V192a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V72a6,6,0,0,1,4.28-5.75l160-48a6,6,0,0,1,3.44,11.5L72.88,66H216A14,14,0,0,1,230,80Zm-12,0a2,2,0,0,0-2-2H38V192a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Zm-20,56a38,38,0,1,1-38-38A38,38,0,0,1,198,136Zm-12,0a26,26,0,1,0-26,26A26,26,0,0,0,186,136Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M104,168a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H96A8,8,0,0,1,104,168Zm-8-40H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16Zm0-32H64a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM232,80V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72a8,8,0,0,1,5.7-7.66l160-48a8,8,0,0,1,4.6,15.33L86.51,64H216A16,16,0,0,1,232,80ZM216,192V80H40V192H216Zm-16-56a40,40,0,1,1-40-40A40,40,0,0,1,200,136Zm-16,0a24,24,0,1,0-24,24A24,24,0,0,0,184,136Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,72H32V192a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V80A8,8,0,0,0,216,72Zm-56,96a32,32,0,1,1,32-32A32,32,0,0,1,160,168Z\"/>";

export const Radio = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RadioProps) => {
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
