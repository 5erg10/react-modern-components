import { SVGProps } from "react";

export type ArmchairVariant = "duotone" | "fill" | "light";

export interface ArmchairProps extends SVGProps<SVGSVGElement> {
  variant?: ArmchairVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,132a28,28,0,0,1-24,27.71V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V159.71A28,28,0,1,1,72,132v36a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V132a28,28,0,0,1,56,0ZM44,88a44.06,44.06,0,0,1,43.81,40h80.38A44.06,44.06,0,0,1,212,88a4,4,0,0,0,4-4V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V84A4,4,0,0,0,44,88Z\"/>";
const LIGHT_INNER     = "<path d=\"M214,90.48V72a38,38,0,0,0-38-38H80A38,38,0,0,0,42,72V90.48a38,38,0,0,0,0,75.05V200a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V165.53a38,38,0,0,0,0-75ZM80,46h96a26,26,0,0,1,26,26V90.48A38.05,38.05,0,0,0,170,128v2H86v-2A38.05,38.05,0,0,0,54,90.48V72A26,26,0,0,1,80,46ZM208.35,154H208a6,6,0,0,0-6,6v40a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V160h0a6,6,0,0,0-6-6h-.35A26,26,0,1,1,74,128v40a6,6,0,0,0,12,0V142h84v26a6,6,0,0,0,12,0V128a26,26,0,1,1,26.35,26Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,88.8V72a40,40,0,0,0-40-40H80A40,40,0,0,0,40,72V88.8a40,40,0,0,0,0,78.4V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V167.2a40,40,0,0,0,0-78.4ZM80,48h96a24,24,0,0,1,24,24V88.8A40.07,40.07,0,0,0,168,128H88A40.07,40.07,0,0,0,56,88.8V72A24,24,0,0,1,80,48ZM208.39,152H208a8,8,0,0,0-8,8v40H56V160a8,8,0,0,0-8-8h-.39A24,24,0,1,1,72,128v40a8,8,0,0,0,16,0V144h80v24a8,8,0,0,0,16,0V128a24,24,0,1,1,24.39,24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,128a32,32,0,0,1-32,32v40a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V160a32,32,0,0,1,0-64V72A32,32,0,0,1,80,40h96a32,32,0,0,1,32,32V96A32,32,0,0,1,240,128Z\"/>";

export const Armchair = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArmchairProps) => {
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
