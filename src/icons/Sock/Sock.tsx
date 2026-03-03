import { SVGProps } from "react";

export type SockVariant = "duotone" | "fill" | "light";

export interface SockProps extends SVGProps<SVGSVGElement> {
  variant?: SockVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V56H104V32Zm-2.34,119L157.8,182.88a48,48,0,0,1,34.2-70.2v32.69A8,8,0,0,1,189.66,151Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,18H104A14,14,0,0,0,90,32v77.51L50.67,148.85a56.91,56.91,0,1,0,80.48,80.48l68.41-68.4A21.88,21.88,0,0,0,206,145.37V32A14,14,0,0,0,192,18ZM104,30h88a2,2,0,0,1,2,2V50H102V32A2,2,0,0,1,104,30Zm18.67,190.85a44.92,44.92,0,0,1-63.52-63.52l41.09-41.09A6,6,0,0,0,102,112V62h92v44.34A54.07,54.07,0,0,0,146,160a53.39,53.39,0,0,0,8.47,29Zm68.4-68.41L163.22,180.3A41.54,41.54,0,0,1,158,160a42.05,42.05,0,0,1,36-41.56v26.93A9.93,9.93,0,0,1,191.07,152.44Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V48H104V32ZM121.25,219.43a42.91,42.91,0,1,1-60.68-60.68l41.09-41.09A8,8,0,0,0,104,112V64h88v40.58A56.09,56.09,0,0,0,144,160a55.4,55.4,0,0,0,7.93,28.76ZM189.66,151l-25.91,25.91A39.6,39.6,0,0,1,160,160a40.05,40.05,0,0,1,32-39.19v24.56A8,8,0,0,1,189.66,151Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,112v33.37a16,16,0,0,1-4.69,11.32l-33,33A48,48,0,0,1,200,112Zm-8-88H104a8,8,0,0,0-8,8V56H200V32A8,8,0,0,0,192,24Z\"/>";

export const Sock = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SockProps) => {
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
