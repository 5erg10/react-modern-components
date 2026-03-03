import { SVGProps } from "react";

export type BookUserVariant = "duotone" | "fill" | "light";

export interface BookUserProps extends SVGProps<SVGSVGElement> {
  variant?: BookUserVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,80V200a8,8,0,0,1-8,8H160a24,24,0,0,0-24,23.94,7.9,7.9,0,0,1-5.12,7.55A8,8,0,0,1,120,232a24,24,0,0,0-24-24H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H88a32,32,0,0,1,32,32v63.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V104a32,32,0,0,1,32-32h64A8,8,0,0,1,240,80ZM88.81,56H89a47.92,47.92,0,0,1,36,17.4,4,4,0,0,0,6.08,0A47.92,47.92,0,0,1,167,56h.19a4,4,0,0,0,3.54-5.84,48,48,0,0,0-85.46,0A4,4,0,0,0,88.81,56Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,74H160a38,38,0,0,0-32,17.55A38,38,0,0,0,96,74H24a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H96a26,26,0,0,1,26,26,6,6,0,0,0,12,0,26,26,0,0,1,26-26h72a6,6,0,0,0,6-6V80A6,6,0,0,0,232,74ZM96,194H30V86H96a26,26,0,0,1,26,26v92.31A37.86,37.86,0,0,0,96,194Zm130,0H160a37.83,37.83,0,0,0-26,10.33V112a26,26,0,0,1,26-26h66ZM91.2,44.4a46,46,0,0,1,73.6,0,6,6,0,1,1-9.6,7.2,34,34,0,0,0-54.4,0,6,6,0,1,1-9.6-7.2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,72H160a40,40,0,0,0-32,16A40,40,0,0,0,96,72H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V80A8,8,0,0,0,232,72ZM96,192H32V88H96a24,24,0,0,1,24,24v88A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V112a24,24,0,0,1,24-24h64ZM89.6,43.19a48,48,0,0,1,76.8,0,8,8,0,0,1-12.79,9.62,32,32,0,0,0-51.22,0A8,8,0,1,1,89.6,43.19Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,80V200H160a32,32,0,0,0-32,32,32,32,0,0,0-32-32H24V80H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32Z\"/>";

export const BookUser = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BookUserProps) => {
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
