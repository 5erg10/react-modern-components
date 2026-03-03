import { SVGProps } from "react";

export type AmbulanceVariant = "duotone" | "fill" | "light";

export interface AmbulanceProps extends SVGProps<SVGSVGElement> {
  variant?: AmbulanceVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm56-80H120v16a8,8,0,0,1-16,0V128H88a8,8,0,0,1,0-16h16V96a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Zm56,80a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm0-96V88h34.58l9.6,24Z\"/>";
const LIGHT_INNER     = "<path d=\"M82,120a6,6,0,0,1,6-6h18V96a6,6,0,0,1,12,0v18h18a6,6,0,0,1,0,12H118v18a6,6,0,0,1-12,0V126H88A6,6,0,0,1,82,120Zm172,0v64a14,14,0,0,1-14,14H221.4a30,30,0,0,1-58.8,0H109.4a30,30,0,0,1-58.8,0H32a14,14,0,0,1-14-14V72A14,14,0,0,1,32,58H184a6,6,0,0,1,6,6V74h36.58a13.93,13.93,0,0,1,13,8.8l14,35A6.1,6.1,0,0,1,254,120ZM190,86v28h49.14l-10.7-26.74A2,2,0,0,0,226.58,86ZM32,186H50.6a30,30,0,0,1,58.8,0h53.2A30.1,30.1,0,0,1,178,165.48V70H32a2,2,0,0,0-2,2V184A2,2,0,0,0,32,186Zm66,6a18,18,0,1,0-18,18A18,18,0,0,0,98,192Zm112,0a18,18,0,1,0-18,18A18,18,0,0,0,210,192Zm32-8V126H190v36.07c.66,0,1.33-.07,2-.07a30.05,30.05,0,0,1,29.4,24H240A2,2,0,0,0,242,184Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M80,120a8,8,0,0,1,8-8h16V96a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H120v16a8,8,0,0,1-16,0V128H88A8,8,0,0,1,80,120Zm176,0v64a16,16,0,0,1-16,16H223a32,32,0,0,1-62,0H111a32,32,0,0,1-62,0H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H184a8,8,0,0,1,8,8v8h34.58a15.93,15.93,0,0,1,14.86,10.06l14,35A7.92,7.92,0,0,1,256,120ZM192,88v24h44.18l-9.6-24ZM32,184H49a32,32,0,0,1,62,0h50a32.11,32.11,0,0,1,15-19.69V72H32Zm64,8a16,16,0,1,0-16,16A16,16,0,0,0,96,192Zm112,0a16,16,0,1,0-16,16A16,16,0,0,0,208,192Zm32-8V128H192v32a32.06,32.06,0,0,1,31,24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-32-22.63h0A24,24,0,0,0,168,192H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184v56Z\"/>";

export const Ambulance = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AmbulanceProps) => {
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
