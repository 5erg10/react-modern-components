import { SVGProps } from "react";

export type CameraRotateVariant = "duotone" | "fill" | "light";

export interface CameraRotateProps extends SVGProps<SVGSVGElement> {
  variant?: CameraRotateVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56ZM156.81,166.4A48.21,48.21,0,0,1,96,163.77V168a8,8,0,0,1-16,0V144a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16h-5.15a32.12,32.12,0,0,0,40.34,1.61,8,8,0,0,1,9.62,12.79ZM176,120a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h5.15a32.12,32.12,0,0,0-40.34-1.61A8,8,0,0,1,99.19,97.6,48.21,48.21,0,0,1,160,100.23V96a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM174,96v24a6,6,0,0,1-6,6H144a6,6,0,0,1,0-12h10l-2-2.09a34.12,34.12,0,0,0-44.38-3.12,6,6,0,1,1-7.22-9.59,46.2,46.2,0,0,1,60.14,4.27.47.47,0,0,0,.1.1L162,105V96a6,6,0,0,1,12,0Zm-17.2,60.4a6,6,0,0,1-1.19,8.4,46.18,46.18,0,0,1-60.14-4.27l-.1-.1L94,159v9a6,6,0,0,1-12,0V144a6,6,0,0,1,6-6h24a6,6,0,0,1,0,12H102l2,2.09a34.12,34.12,0,0,0,44.38,3.12A6,6,0,0,1,156.8,156.4Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM176,96v24a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h5.15a32.12,32.12,0,0,0-40.34-1.61A8,8,0,0,1,99.19,97.6,48.21,48.21,0,0,1,160,100.23V96a8,8,0,0,1,16,0Zm-17.61,59.2a8,8,0,0,1-1.58,11.2A48.21,48.21,0,0,1,96,163.77V168a8,8,0,0,1-16,0V144a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16h-5.15a32.12,32.12,0,0,0,40.34,1.61A8,8,0,0,1,158.39,155.2Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,80V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32A16,16,0,0,1,224,80Z\"/>";

export const CameraRotate = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CameraRotateProps) => {
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
