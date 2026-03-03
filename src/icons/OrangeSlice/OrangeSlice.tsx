import { SVGProps } from "react";

export type OrangeSliceVariant = "duotone" | "fill" | "light";

export interface OrangeSliceProps extends SVGProps<SVGSVGElement> {
  variant?: OrangeSliceVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M51.18,145.51A95.5,95.5,0,0,1,32,88c0-1.41,0-2.81.09-4.21a4,4,0,0,1,4-3.79H107a4,4,0,0,1,2.83,6.83ZM120,183.66V99.31L61.83,157.49A95.68,95.68,0,0,0,120,183.66Zm84.82-38.15A95.5,95.5,0,0,0,224,88c0-1.41,0-2.81-.09-4.21a4,4,0,0,0-4-3.79H149a4,4,0,0,0-2.83,6.83ZM248,80h-4.08a4,4,0,0,0-4,4.14c0,1.28.07,2.57.07,3.86A112,112,0,0,1,16,88c0-1.29,0-2.58.07-3.86a4,4,0,0,0-4-4.14H8a8,8,0,0,0-8,8,128,128,0,1,0,256,0A8,8,0,0,0,248,80ZM136,99.31v84.35a95.68,95.68,0,0,0,58.17-26.17Z\"/>";
const LIGHT_INNER     = "<path d=\"M248,82H8a6,6,0,0,0-6,6,126,126,0,0,0,252,0A6,6,0,0,0,248,82ZM74.46,150,122,102.48v67.28A81.66,81.66,0,0,1,74.46,150ZM66,141.54A81.66,81.66,0,0,1,46.24,94h67.28Zm68-39.06L181.54,150A81.66,81.66,0,0,1,134,169.76Zm56,39.06L142.48,94h67.28A81.66,81.66,0,0,1,190,141.54ZM128,202A114.14,114.14,0,0,1,14.16,94h20a94,94,0,0,0,187.6,0h20A114.14,114.14,0,0,1,128,202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,80H8a8,8,0,0,0-8,8,128,128,0,0,0,256,0A8,8,0,0,0,248,80ZM77.4,149.91l42.6-42.6V167.6A79.59,79.59,0,0,1,77.4,149.91ZM66.09,138.6A79.59,79.59,0,0,1,48.4,96h60.29ZM136,107.31l42.6,42.6A79.59,79.59,0,0,1,136,167.6Zm53.91,31.29L147.31,96H207.6A79.59,79.59,0,0,1,189.91,138.6ZM128,200A112.15,112.15,0,0,1,16.28,96H32.34a96,96,0,0,0,191.32,0h16.06A112.15,112.15,0,0,1,128,200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,88A88,88,0,0,1,40,88Z\"/>";

export const OrangeSlice = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: OrangeSliceProps) => {
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
