import { SVGProps } from "react";

export type ParkVariant = "duotone" | "fill" | "light";

export interface ParkProps extends SVGProps<SVGSVGElement> {
  variant?: ParkVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-128,0H64V176h40Zm0-32H64V144h40Zm12-64A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,194H198V166h26a6,6,0,0,0,5.82-7.46l-32-128a6,6,0,0,0-11.64,0l-32,128A6,6,0,0,0,160,166h26v28H118V174h10a6,6,0,0,0,0-12H118V142h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50v20H40a6,6,0,0,0,0,12H50v20H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM192,56.74,216.32,154H167.68ZM62,142h44v20H62Zm0,32h44v20H62Zm54-80A26,26,0,1,0,90,68,26,26,0,0,0,116,94Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,116,54Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,192H200V168h24a8,8,0,0,0,7.76-9.94l-32-128a8,8,0,0,0-15.52,0l-32,128A8,8,0,0,0,160,168h24v24H120V176h8a8,8,0,0,0,0-16h-8V144h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8v16H40a8,8,0,0,0,0,16h8v16H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM192,65l21.75,87h-43.5ZM64,144h40v16H64Zm0,32h40v16H64Zm52-80A28,28,0,1,0,88,68,28,28,0,0,0,116,96Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,116,56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,160H160L192,32Z\"/>";

export const Park = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ParkProps) => {
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
