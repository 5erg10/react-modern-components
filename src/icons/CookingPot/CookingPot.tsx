import { SVGProps } from "react";

export type CookingPotVariant = "duotone" | "fill" | "light";

export interface CookingPotProps extends SVGProps<SVGSVGElement> {
  variant?: CookingPotVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm94.4,35.2a8,8,0,0,0-11.2-1.6L224,104V80a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8v24L12.8,89.6a8,8,0,0,0-9.6,12.8L32,124v60a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V124l28.8-21.6A8,8,0,0,0,254.4,91.2Z\"/>";
const LIGHT_INNER     = "<path d=\"M90,48V16a6,6,0,0,1,12,0V48a6,6,0,0,1-12,0Zm38,6a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,128,54Zm32,0a6,6,0,0,0,6-6V16a6,6,0,0,0-12,0V48A6,6,0,0,0,160,54Zm91.6,46.8L222,123v61a30,30,0,0,1-30,30H64a30,30,0,0,1-30-30V123L4.4,100.8a6,6,0,0,1,7.2-9.6L34,108V80a6,6,0,0,1,6-6H216a6,6,0,0,1,6,6v28l22.4-16.8a6,6,0,0,1,7.2,9.6ZM210,86H46v98a18,18,0,0,0,18,18H192a18,18,0,0,0,18-18Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,48V16a8,8,0,0,1,16,0V48a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,128,56Zm32,0a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V48A8,8,0,0,0,160,56Zm92.8,46.4L224,124v60a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V124L3.2,102.4a8,8,0,0,1,9.6-12.8L32,104V80a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8v24l19.2-14.4a8,8,0,0,1,9.6,12.8ZM208,88H48v96a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,80V184a24,24,0,0,1-24,24H64a24,24,0,0,1-24-24V80Z\"/>";

export const CookingPot = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CookingPotProps) => {
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
