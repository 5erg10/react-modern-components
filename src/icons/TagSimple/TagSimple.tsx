import { SVGProps } from "react";

export type TagSimpleVariant = "duotone" | "fill" | "light";

export interface TagSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: TagSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88h0l45.63-68.44A8,8,0,0,0,246.66,123.56Z\"/>";
const LIGHT_INNER     = "<path d=\"M245,124.67,199.37,56.23A14,14,0,0,0,187.72,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H187.72a14,14,0,0,0,11.65-6.23L245,131.33A6,6,0,0,0,245,124.67Zm-55.61,68.44a2,2,0,0,1-1.66.89H40a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H187.72a2,2,0,0,1,1.66.89L232.79,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H40V64H187.72l42.66,64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,128l-45.62,68.44a8,8,0,0,1-6.66,3.56H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H187.72a8,8,0,0,1,6.66,3.56Z\"/>";

export const TagSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TagSimpleProps) => {
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
