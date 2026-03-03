import { SVGProps } from "react";

export type ArrowFatDownVariant = "duotone" | "fill" | "light";

export interface ArrowFatDownProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowFatDownVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M229.66,141.66l-96,96a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,32,128H72V48A16,16,0,0,1,88,32h80a16,16,0,0,1,16,16v80h40a8,8,0,0,1,5.66,13.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M229.54,133.7A6,6,0,0,0,224,130H182V48a14,14,0,0,0-14-14H88A14,14,0,0,0,74,48v82H32a6,6,0,0,0-4.24,10.24l96,96a6,6,0,0,0,8.48,0l96-96A6,6,0,0,0,229.54,133.7ZM128,223.51,46.49,142H80a6,6,0,0,0,6-6V48a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2v88a6,6,0,0,0,6,6h33.51Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231.39,132.94A8,8,0,0,0,224,128H184V48a16,16,0,0,0-16-16H88A16,16,0,0,0,72,48v80H32a8,8,0,0,0-5.66,13.66l96,96a8,8,0,0,0,11.32,0l96-96A8,8,0,0,0,231.39,132.94ZM128,220.69,51.31,144H80a8,8,0,0,0,8-8V48h80v88a8,8,0,0,0,8,8h28.69Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,136l-96,96L32,136H80V48a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v88Z\"/>";

export const ArrowFatDown = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowFatDownProps) => {
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
