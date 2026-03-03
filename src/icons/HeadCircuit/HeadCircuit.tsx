import { SVGProps } from "react";

export type HeadCircuitVariant = "duotone" | "fill" | "light";

export interface HeadCircuitProps extends SVGProps<SVGSVGElement> {
  variant?: HeadCircuitVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,72a8,8,0,1,1,8,8A8,8,0,0,1,120,72Zm24,64a8,8,0,1,0,8-8A8,8,0,0,0,144,136Zm48.5,35.47A88.32,88.32,0,0,0,224,101.89q0-1.1-.09-2.19a4,4,0,0,0-4-3.75H195.75L172.62,123.7a24,24,0,1,1-12.28-10.25l25.51-30.62A8,8,0,0,1,192,80h23.14a4,4,0,0,0,3.77-5.35C207.27,42,176.86,18,140.74,16.08l-.59,0a4,4,0,0,0-4.15,4V49.33a24,24,0,1,1-16,0v-27a4,4,0,0,0-4.89-3.91A88.16,88.16,0,0,0,48,102L25.55,145.14l-.22.45a16,16,0,0,0,7.51,20.7l.25.12L56,176.9v31a16,16,0,0,0,16,16h40v8a8,8,0,0,0,8,8h71.77a8.42,8.42,0,0,0,4.06-1,8,8,0,0,0,4.11-8Z\"/>";
const LIGHT_INNER     = "<path d=\"M190.37,170.62A86.27,86.27,0,0,0,222,102c-1-44.68-36.76-81.51-81.34-83.86A86,86,0,0,0,50,102.51l-22.69,43.6c-.07.13-.13.26-.19.4a14,14,0,0,0,6.61,18l.18.09,24.08,11V208a14,14,0,0,0,14,14h48a6,6,0,0,0,0-12H72a2,2,0,0,1-2-2V171.81a6,6,0,0,0-3.5-5.46L39,153.78a2,2,0,0,1-.93-2.4l23.21-44.61A6,6,0,0,0,62,104a74.05,74.05,0,0,1,60-72.68V50.84a22,22,0,1,0,12,0V30.05c2-.05,4-.05,6,.06A74.29,74.29,0,0,1,206.63,82H184a6,6,0,0,0-4.61,2.16L152.94,115.9a22.06,22.06,0,1,0,9.21,7.69L186.81,94h22.5a72.44,72.44,0,0,1,.67,8.26A74.24,74.24,0,0,1,180.4,163.2a6,6,0,0,0-2.35,5.54l8,64A6,6,0,0,0,192,238a6.3,6.3,0,0,0,.75-.05,6,6,0,0,0,5.21-6.7ZM138,72a10,10,0,1,1-10-10A10,10,0,0,1,138,72Zm6,74a10,10,0,1,1,10-10A10,10,0,0,1,144,146Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192.5,171.47A88.34,88.34,0,0,0,224,101.93c-1-45.71-37.61-83.4-83.24-85.8A88,88,0,0,0,48,102L25.55,145.18c-.09.18-.18.36-.26.54a16,16,0,0,0,7.55,20.62l.25.11L56,176.94V208a16,16,0,0,0,16,16h48a8,8,0,0,0,0-16H72V171.81a8,8,0,0,0-4.67-7.28L40,152l23.07-44.34A7.9,7.9,0,0,0,64,104a72,72,0,0,1,56-70.21V49.38a24,24,0,1,0,16,0V32c1.3,0,2.6,0,3.9.1A72.26,72.26,0,0,1,203.84,80H184a8,8,0,0,0-6.15,2.88L152.34,113.5a24.06,24.06,0,1,0,12.28,10.25L187.75,96h19.79q.36,3.12.44,6.3a72.26,72.26,0,0,1-28.78,59.3,8,8,0,0,0-3.14,7.39l8,64a8,8,0,0,0,7.93,7,8.39,8.39,0,0,0,1-.06,8,8,0,0,0,6.95-8.93ZM128,80a8,8,0,1,1,8-8A8,8,0,0,1,128,80Zm16,64a8,8,0,1,1,8-8A8,8,0,0,1,144,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M215.93,100.72A80,80,0,0,0,56,104L32.65,148.87a8,8,0,0,0,3.77,10.31L64,171.81V208a8,8,0,0,0,8,8h48a16,16,0,0,0,16,16h56l-8-64A79.86,79.86,0,0,0,215.93,100.72ZM112.13,74.08a16,16,0,1,1,13.79,13.79A16,16,0,0,1,112.13,74.08Zm34,77.79a16,16,0,1,1,13.79-13.79A16,16,0,0,1,146.08,151.87Z\"/>";

export const HeadCircuit = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HeadCircuitProps) => {
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
