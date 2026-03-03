import { SVGProps } from "react";

export type HeartbeatVariant = "duotone" | "fill" | "light";

export interface HeartbeatProps extends SVGProps<SVGSVGElement> {
  variant?: HeartbeatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0c-3.35-1.8-63.55-34.69-92.68-80.89A4,4,0,0,1,34.92,144H72a8,8,0,0,0,6.66-3.56l9.34-14,25.34,38a8,8,0,0,0,9.16,3.16,8.23,8.23,0,0,0,4.28-3.34L140.28,144H160a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H136a8,8,0,0,0-6.66,3.56l-9.34,14-25.34-38a8,8,0,0,0-9.17-3.16,8.25,8.25,0,0,0-4.27,3.34L67.72,128H23.53a4,4,0,0,1-3.83-2.81A76.93,76.93,0,0,1,16,102,62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z\"/>";
const LIGHT_INNER     = "<path d=\"M72,142H32a6,6,0,0,1,0-12H68.79L83,108.67a6,6,0,0,1,10,0l27,40.51,11-16.51a6,6,0,0,1,5-2.67h24a6,6,0,0,1,0,12H139.21L125,163.33a6,6,0,0,1-10,0L88,122.82,77,139.33A6,6,0,0,1,72,142ZM178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60q0,1.09,0,2.19a6,6,0,0,0,12-.38c0-.6,0-1.21,0-1.81A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48c0,55.73-81.61,105.65-98,115.11-9.84-5.66-43.09-25.82-68.16-53.16a6,6,0,1,0-8.84,8.1c30.94,33.77,72.41,56.29,74.16,57.23a6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M72,144H32a8,8,0,0,1,0-16H67.72l13.62-20.44a8,8,0,0,1,13.32,0l25.34,38,9.34-14A8,8,0,0,1,136,128h24a8,8,0,0,1,0,16H140.28l-13.62,20.44a8,8,0,0,1-13.32,0L88,126.42l-9.34,14A8,8,0,0,1,72,144ZM178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,.75,0,1.5,0,2.25a8,8,0,1,0,16-.5c0-.58,0-1.17,0-1.75A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46c0,53.61-77.76,102.15-96,112.8-10.83-6.31-42.63-26-66.68-52.21a8,8,0,1,0-11.8,10.82c31.17,34,72.93,56.68,74.69,57.63a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z\"/>";

export const Heartbeat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HeartbeatProps) => {
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
