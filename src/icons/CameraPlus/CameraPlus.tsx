import { SVGProps } from "react";

export type CameraPlusVariant = "duotone" | "fill" | "light";

export interface CameraPlusProps extends SVGProps<SVGSVGElement> {
  variant?: CameraPlusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,56H180.28L169,39.12A16,16,0,0,0,155.72,32H100.28A16,16,0,0,0,87,39.12L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-48,88H136v24a8,8,0,0,1-16,0V144H96a8,8,0,0,1,0-16h24V104a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M166,136a6,6,0,0,1-6,6H134v26a6,6,0,0,1-12,0V142H96a6,6,0,0,1,0-12h26V104a6,6,0,0,1,12,0v26h26A6,6,0,0,1,166,136Zm64-56V192a22,22,0,0,1-22,22H48a22,22,0,0,1-22-22V80A22,22,0,0,1,48,58H76.79L88.63,40.23A14,14,0,0,1,100.28,34h55.44a14,14,0,0,1,11.65,6.23L179.21,58H208A22,22,0,0,1,230,80Zm-12,0a10,10,0,0,0-10-10H176a6,6,0,0,1-5-2.67L157.38,46.89a2,2,0,0,0-1.66-.89H100.28a2,2,0,0,0-1.66.89L85,67.33A6,6,0,0,1,80,70H48A10,10,0,0,0,38,80V192a10,10,0,0,0,10,10H208a10,10,0,0,0,10-10Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M168,136a8,8,0,0,1-8,8H136v24a8,8,0,0,1-16,0V144H96a8,8,0,0,1,0-16h24V104a8,8,0,0,1,16,0v24h24A8,8,0,0,1,168,136Zm64-56V192a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V80A24,24,0,0,1,48,56H75.72L87,39.12A16,16,0,0,1,100.28,32h55.44A16,16,0,0,1,169,39.12L180.28,56H208A24,24,0,0,1,232,80Zm-16,0a8,8,0,0,0-8-8H176a8,8,0,0,1-6.66-3.56L155.72,48H100.28L86.66,68.44A8,8,0,0,1,80,72H48a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,80V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L93.62,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.66,3.56L176,64h32A16,16,0,0,1,224,80Z\"/>";

export const CameraPlus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CameraPlusProps) => {
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
