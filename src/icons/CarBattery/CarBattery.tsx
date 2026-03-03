import { SVGProps } from "react";

export type CarBatteryVariant = "duotone" | "fill" | "light";

export interface CarBatteryProps extends SVGProps<SVGSVGElement> {
  variant?: CarBatteryVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,72H208V56a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V72H112V56A16,16,0,0,0,96,40H64A16,16,0,0,0,48,56V72H32A16,16,0,0,0,16,88v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V88A16,16,0,0,0,224,72ZM64,56H96V72H64Zm40,88H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm80,0h-8v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm8-72H160V56h32Z\"/>";
const LIGHT_INNER     = "<path d=\"M190,136a6,6,0,0,1-6,6H174v10a6,6,0,0,1-12,0V142H152a6,6,0,0,1,0-12h10V120a6,6,0,0,1,12,0v10h10A6,6,0,0,1,190,136Zm-86-6H72a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM238,88v96a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V88A14,14,0,0,1,32,74H50V56A14,14,0,0,1,64,42H96a14,14,0,0,1,14,14V74h36V56a14,14,0,0,1,14-14h32a14,14,0,0,1,14,14V74h18A14,14,0,0,1,238,88ZM158,74h36V56a2,2,0,0,0-2-2H160a2,2,0,0,0-2,2ZM62,74H98V56a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2ZM226,88a2,2,0,0,0-2-2H32a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,136a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0v-8h-8a8,8,0,0,1,0-16h8v-8a8,8,0,0,1,16,0v8h8A8,8,0,0,1,192,136Zm-88-8H72a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM240,88v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V88A16,16,0,0,1,32,72H48V56A16,16,0,0,1,64,40H96a16,16,0,0,1,16,16V72h32V56a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72h16A16,16,0,0,1,240,88ZM160,72h32V56H160ZM64,72H96V56H64ZM224,184V88H32v96H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,88v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H224A8,8,0,0,1,232,88Z\"/>";

export const CarBattery = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CarBatteryProps) => {
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
