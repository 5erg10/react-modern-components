import { SVGProps } from "react";

export type WheelchairMotionVariant = "duotone" | "fill" | "light";

export interface WheelchairMotionProps extends SVGProps<SVGSVGElement> {
  variant?: WheelchairMotionVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,48a32,32,0,1,1,32,32A32,32,0,0,1,144,48Zm16,112a8,8,0,0,0-8,8,48,48,0,1,1-48-48,8,8,0,0,0,0-16,64,64,0,1,0,64,64A8,8,0,0,0,160,160Zm40-32H141.82l17.12-29.78a8,8,0,0,0-2.57-10.69A96,96,0,0,0,42.91,94a8,8,0,1,0,10.18,12.33,80.09,80.09,0,0,1,88-9.17L121.06,132A8,8,0,0,0,128,144h62.24l-14.08,70.43a8,8,0,0,0,6.27,9.41A7.77,7.77,0,0,0,184,224a8,8,0,0,0,7.83-6.43l16-80A8,8,0,0,0,200,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M176,78a30,30,0,1,0-30-30A30,30,0,0,0,176,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,176,30ZM166,168a62,62,0,1,1-62-62,6,6,0,0,1,0,12,50,50,0,1,0,50,50,6,6,0,0,1,12,0Zm38.64-35.8a6,6,0,0,1,1.24,5l-16,80A6,6,0,0,1,184,222a6.08,6.08,0,0,1-1.19-.12,6,6,0,0,1-4.7-7.06L192.68,142H128a6,6,0,0,1-5.2-9l21.07-36.68a82.05,82.05,0,0,0-92.05,8.41,6,6,0,1,1-7.64-9.25,94,94,0,0,1,111.1-6.28,6,6,0,0,1,1.92,8L138.37,130H200A6,6,0,0,1,204.64,132.2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,80a32,32,0,1,0-32-32A32,32,0,0,0,176,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,32Zm-8,136a64,64,0,1,1-64-64,8,8,0,0,1,0,16,48,48,0,1,0,48,48,8,8,0,0,1,16,0Zm38.19-37.07a8,8,0,0,1,1.65,6.64l-16,80A8,8,0,0,1,184,224a7.77,7.77,0,0,1-1.58-.16,8,8,0,0,1-6.27-9.41L190.24,144H128a8,8,0,0,1-6.94-12l20.06-34.9a80.09,80.09,0,0,0-88,9.17A8,8,0,1,1,42.91,94a96,96,0,0,1,113.46-6.42,8,8,0,0,1,2.57,10.69L141.82,128H200A8,8,0,0,1,206.19,130.93Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,48a24,24,0,1,1-24-24A24,24,0,0,1,200,48Z\"/>";

export const WheelchairMotion = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WheelchairMotionProps) => {
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
