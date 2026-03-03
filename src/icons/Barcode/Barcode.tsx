import { SVGProps } from "react";

export type BarcodeVariant = "duotone" | "fill" | "light";

export interface BarcodeProps extends SVGProps<SVGSVGElement> {
  variant?: BarcodeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,40H32a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V48A8,8,0,0,0,224,40ZM40,64a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H56V96a8,8,0,0,1-16,0ZM80,200H48a8,8,0,0,1-8-8V160a8,8,0,0,1,16,0v24H80a8,8,0,0,1,0,16Zm24-48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm24,8a8,8,0,0,1-8-8V104a8,8,0,0,1,16,0v48A8,8,0,0,1,160,160Zm56,32a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h24V160a8,8,0,0,1,16,0Zm0-96a8,8,0,0,1-16,0V72H176a8,8,0,0,1,0-16h32a8,8,0,0,1,8,8Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,48V88a6,6,0,0,1-12,0V54H184a6,6,0,0,1,0-12h40A6,6,0,0,1,230,48ZM72,202H38V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H72a6,6,0,0,0,0-12Zm152-40a6,6,0,0,0-6,6v34H184a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,224,162ZM32,94a6,6,0,0,0,6-6V54H72a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6V88A6,6,0,0,0,32,94ZM80,82a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,80,82Zm102,86V88a6,6,0,0,0-12,0v80a6,6,0,0,0,12,0ZM144,82a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,144,82Zm-32,0a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,112,82Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM80,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm104,88V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0ZM144,80a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,144,80Zm-32,0a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8,8,0,0,0,112,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208H32V48Z\"/>";

export const Barcode = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BarcodeProps) => {
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
