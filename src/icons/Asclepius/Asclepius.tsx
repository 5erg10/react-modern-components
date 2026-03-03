import { SVGProps } from "react";

export type AsclepiusVariant = "duotone" | "fill" | "light";

export interface AsclepiusProps extends SVGProps<SVGSVGElement> {
  variant?: AsclepiusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,128v72h11.62A12.25,12.25,0,0,0,160,188.53a12,12,0,0,0-5.93-10.87,4.08,4.08,0,0,1-2.06-3.49v-8.79a4,4,0,0,1,5.25-3.81A28.06,28.06,0,0,1,176,187.71c.16,15.56-13,28.29-28.59,28.29H136v16a8,8,0,0,1-16,0V216H96a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,96.27,200H120V128H104.46c-8.6,0-16,6.6-16.44,15.19a16,16,0,0,0,12.87,16.51,3.94,3.94,0,0,1,3.11,3.89V172a4,4,0,0,1-4,4,36,36,0,0,1-36-36.87C64.47,119.48,81,104,100.68,104H120V24a8,8,0,0,1,16,0v80h32a16,16,0,0,0,16-16.81C183.56,78.6,176.14,72,167.54,72H156a4,4,0,0,1-4-4V44a4,4,0,0,1,4-4h15.22c24.62,0,45.2,20.15,44.77,44.76A44,44,0,0,1,172,128ZM92.66,72H100a4,4,0,0,0,4-4V44a4,4,0,0,0-4-4H64A40,40,0,0,0,24,80v8a8,8,0,0,0,8,8H56A40,40,0,0,0,92.66,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M214,79v1a38,38,0,0,1-38,38H134v84h10a18,18,0,0,0,12-31.42,6,6,0,1,1,8-8.94A30,30,0,0,1,144,214H134v18a6,6,0,0,1-12,0V214H96a6,6,0,0,1,0-12h26V118H96a18,18,0,0,0,0,36,6,6,0,0,1,0,12,30,30,0,0,1,0-60h26V24a6,6,0,0,1,12,0v82h42a26,26,0,0,0,26-26V79a25,25,0,0,0-25-25H160a6,6,0,0,1,0-12h17a37,37,0,0,1,37,37ZM56,94H32a6,6,0,0,1-6-6V80A38,38,0,0,1,64,42H96a6,6,0,0,1,0,12H94v2A38,38,0,0,1,56,94ZM82,54H64A26,26,0,0,0,38,80v2H56A26,26,0,0,0,82,56Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,79v1a40,40,0,0,1-40,40H136v80h8a16,16,0,0,0,10.67-27.93,8,8,0,0,1,10.66-11.92A32,32,0,0,1,144,216h-8v16a8,8,0,0,1-16,0V216H96a8,8,0,0,1,0-16h24V120H96a16,16,0,0,0,0,32,8,8,0,0,1,0,16,32,32,0,0,1,0-64h24V24a8,8,0,0,1,16,0v80h40a24,24,0,0,0,24-24V79a23,23,0,0,0-23-23H160a8,8,0,0,1,0-16h17a39,39,0,0,1,39,39ZM56,96H32a8,8,0,0,1-8-8V80A40,40,0,0,1,64,40H96a8,8,0,0,1,0,16A40,40,0,0,1,56,96ZM80,56H64A24,24,0,0,0,40,80H56A24,24,0,0,0,80,56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M88,48v8A32,32,0,0,1,56,88H32V80A32,32,0,0,1,64,48Z\"/>";

export const Asclepius = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AsclepiusProps) => {
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
