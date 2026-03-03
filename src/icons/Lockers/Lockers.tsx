import { SVGProps } from "react";

export type LockersVariant = "duotone" | "fill" | "light";

export interface LockersProps extends SVGProps<SVGSVGElement> {
  variant?: LockersVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V224a8,8,0,0,0,16,0V208h72v16a8,8,0,0,0,16,0V208h72v16a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32ZM96,112H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm40,104a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Zm64-72H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M190,72a6,6,0,0,1-6,6H160a6,6,0,0,1,0-12h24A6,6,0,0,1,190,72Zm-6,26H160a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12ZM72,78H96a6,6,0,0,0,0-12H72a6,6,0,0,0,0,12ZM96,98H72a6,6,0,0,0,0,12H96a6,6,0,0,0,0-12ZM222,48V224a6,6,0,0,1-12,0V206H134v18a6,6,0,0,1-12,0V206H46v18a6,6,0,0,1-12,0V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM122,194V46H48a2,2,0,0,0-2,2V194Zm12,0h76V48a2,2,0,0,0-2-2H134Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,72a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h24A8,8,0,0,1,192,72Zm-8,24H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM72,80H96a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16ZM96,96H72a8,8,0,0,0,0,16H96a8,8,0,0,0,0-16ZM224,48V224a8,8,0,0,1-16,0V208H136v16a8,8,0,0,1-16,0V208H48v16a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM120,192V48H48V192Zm16,0h72V48H136Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V200H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z\"/>";

export const Lockers = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LockersProps) => {
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
