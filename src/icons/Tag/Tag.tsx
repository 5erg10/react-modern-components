import { SVGProps } from "react";

export type TagVariant = "duotone" | "fill" | "light";

export interface TagProps extends SVGProps<SVGSVGElement> {
  variant?: TagVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M241.91,137.42,142.59,38.1a13.94,13.94,0,0,0-9.9-4.1H40a6,6,0,0,0-6,6v92.69a13.94,13.94,0,0,0,4.1,9.9l99.32,99.32a14,14,0,0,0,19.8,0l84.69-84.69A14,14,0,0,0,241.91,137.42Zm-8.49,11.31-84.69,84.69a2,2,0,0,1-2.83,0L46.59,134.1a2,2,0,0,1-.59-1.41V46h86.69a2,2,0,0,1,1.41.59l99.32,99.31A2,2,0,0,1,233.42,148.73ZM94,84A10,10,0,1,1,84,74,10,10,0,0,1,94,84Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63Zm-96,96L48,132.69V48h84.69L232,147.31ZM96,84A12,12,0,1,1,84,72,12,12,0,0,1,96,84Z\"/>";
const SECONDARY_PATHS = "<path d=\"M237.66,153,153,237.66a8,8,0,0,1-11.31,0L42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32A8,8,0,0,1,237.66,153Z\"/>";

export const Tag = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TagProps) => {
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
