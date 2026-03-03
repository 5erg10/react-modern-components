import { SVGProps } from "react";

export type BirdVariant = "duotone" | "fill" | "light";

export interface BirdProps extends SVGProps<SVGSVGElement> {
  variant?: BirdVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M236.44,73.34,213.21,57.86A60,60,0,0,0,156,16h-.29C122.79,16.16,96,43.47,96,76.89V96.63L11.63,197.88l-.1.12A16,16,0,0,0,24,224h88A104.11,104.11,0,0,0,216,120V100.28l20.44-13.62a8,8,0,0,0,0-13.32ZM126.15,133.12l-60,72a8,8,0,1,1-12.29-10.24l60-72a8,8,0,1,1,12.29,10.24ZM164,80a12,12,0,1,1,12-12A12,12,0,0,1,164,80Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,68a10,10,0,1,1-10-10A10,10,0,0,1,174,68Zm64,12a6,6,0,0,1-2.67,5L214,99.21V120A102.12,102.12,0,0,1,112,222H24a14,14,0,0,1-10.93-22.75l.07-.09L98,97.35V76.89C98,44.57,123.89,18.15,155.72,18H156a58,58,0,0,1,55.51,41.13L235.33,75A6,6,0,0,1,238,80Zm-16.82,0L203,67.88a6,6,0,0,1-2.48-3.48A46,46,0,0,0,156,30h-.23C130.53,30.12,110,51.16,110,76.89V99.52a6,6,0,0,1-1.39,3.85L22.43,206.78A2,2,0,0,0,24,210H51.86l71.53-85.84a6,6,0,0,1,9.22,7.68L67.48,210H112a90.1,90.1,0,0,0,90-90V96a6,6,0,0,1,2.67-5Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,68a12,12,0,1,1-12-12A12,12,0,0,1,176,68Zm64,12a8,8,0,0,1-3.56,6.66L216,100.28V120A104.11,104.11,0,0,1,112,224H24a16,16,0,0,1-12.49-26l.1-.12L96,96.63V76.89C96,43.47,122.79,16.16,155.71,16H156a60,60,0,0,1,57.21,41.86l23.23,15.48A8,8,0,0,1,240,80Zm-22.42,0L201.9,69.54a8,8,0,0,1-3.31-4.64A44,44,0,0,0,156,32h-.22C131.64,32.12,112,52.25,112,76.89V99.52a8,8,0,0,1-1.85,5.13L24,208h26.9l70.94-85.12a8,8,0,1,1,12.29,10.24L71.75,208H112a88.1,88.1,0,0,0,88-88V96a8,8,0,0,1,3.56-6.66Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,80,208,96v24a96,96,0,0,1-96,96H24a8,8,0,0,1-6.25-13L104,99.52V76.89c0-28.77,23-52.75,51.74-52.89a52,52,0,0,1,50.59,38.89Z\"/>";

export const Bird = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BirdProps) => {
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
