import { SVGProps } from "react";

export type UserRectangleVariant = "duotone" | "fill" | "light";

export interface UserRectangleProps extends SVGProps<SVGSVGElement> {
  variant?: UserRectangleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm60-64V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H54.68a80,80,0,0,1,29.41-34.84,4,4,0,0,1,4.83.31,59.82,59.82,0,0,0,78.16,0,4,4,0,0,1,4.83-.31A80,80,0,0,1,201.32,200H216Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM69.21,202a66,66,0,0,1,117.58,0ZM218,200a2,2,0,0,1-2,2H200a78.18,78.18,0,0,0-46.55-43.71,46,46,0,1,0-50.9,0A78.18,78.18,0,0,0,56,202H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM72.57,200a64,64,0,0,1,110.86,0ZM216,200H201.33a80.14,80.14,0,0,0-43.69-42.28,48,48,0,1,0-59.28,0A80.14,80.14,0,0,0,54.67,200H40V56H216V200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V200a8,8,0,0,1-8,8H195.9A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-67.9,48H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const UserRectangle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UserRectangleProps) => {
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
