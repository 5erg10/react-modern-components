import { SVGProps } from "react";

export type SeatbeltVariant = "duotone" | "fill" | "light";

export interface SeatbeltProps extends SVGProps<SVGSVGElement> {
  variant?: SeatbeltVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,112a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,112Zm72,104H77.16L197.29,110a8.17,8.17,0,0,0,1.1-1.19,8.07,8.07,0,0,0,1.61-5.08A8,8,0,0,0,186.71,98l-24.54,21.65A80,80,0,0,0,49,179.25a8.33,8.33,0,0,0-.1,1.1L48,223.83A8,8,0,0,0,56,232H200a8,8,0,0,0,0-16Zm-11.88-73a8,8,0,0,0-6.25,1.94L119.47,200H200a8,8,0,0,0,8-8,79.6,79.6,0,0,0-14.27-45.62A8,8,0,0,0,188.12,143Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,110A42,42,0,1,0,86,68,42,42,0,0,0,128,110Zm0-72A30,30,0,1,1,98,68,30,30,0,0,1,128,38Zm78,186a6,6,0,0,1-6,6H56a6,6,0,0,1-4-10.5l100.58-88.75a66,66,0,0,0-89.78,50.72,6,6,0,0,1-5.91,5.05,6.2,6.2,0,0,1-1-.07,6,6,0,0,1-5-6.88A78,78,0,0,1,162.49,122L188,99.5a6,6,0,1,1,7.94,9L71.87,218H200A6,6,0,0,1,206,224Zm-13.92-76.48A77.53,77.53,0,0,1,206,192a6,6,0,0,1-12,0,65.62,65.62,0,0,0-11.77-37.63,6,6,0,0,1,9.85-6.85Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M172,68a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,68ZM128,96a28,28,0,1,1,28-28A28,28,0,0,1,128,96Zm80,128a8,8,0,0,1-8,8H56a8,8,0,0,1-5.29-14l98.07-86.54a64,64,0,0,0-84,50.33A8,8,0,0,1,49,179.25a80,80,0,0,1,113.16-59.59L186.71,98a8,8,0,0,1,10.58,12L77.16,216H200A8,8,0,0,1,208,224Zm-14.27-77.62A79.6,79.6,0,0,1,208,192a8,8,0,0,1-16,0,63.67,63.67,0,0,0-11.41-36.49,8,8,0,0,1,13.14-9.13Z\"/>";
const SECONDARY_PATHS = "<path d=\"M92,68a36,36,0,1,1,36,36A36,36,0,0,1,92,68Zm36,52a72,72,0,0,0-72,72v32H200V192A72,72,0,0,0,128,120Z\"/>";

export const Seatbelt = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SeatbeltProps) => {
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
