import { SVGProps } from "react";

export type MarkerCircleVariant = "duotone" | "fill" | "light";

export interface MarkerCircleProps extends SVGProps<SVGSVGElement> {
  variant?: MarkerCircleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,182.37a87.89,87.89,0,0,1-80,0V176h80ZM104,160V144h48v16Zm80,35.83V176a16,16,0,0,0-16-16V144a16,16,0,0,0-13.61-15.8L143.66,76.74a16,16,0,0,0-31.32,0L101.61,128.2A16,16,0,0,0,88,144v16a16,16,0,0,0-16,16v19.83a88,88,0,1,1,112,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M200.12,55.87A102,102,0,1,0,55.88,200.12,102,102,0,1,0,200.12,55.87ZM86,207.64V176a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2v31.64a90.32,90.32,0,0,1-84,0ZM104,142h48a2,2,0,0,1,2,2v18H102V144A2,2,0,0,1,104,142Zm11.54-12L126,79.59a2,2,0,0,1,3.92,0L140.46,130Zm76.1,61.64A92.76,92.76,0,0,1,182,200V176a14,14,0,0,0-14-14h-2V144a14,14,0,0,0-13.27-14l-11-52.9a14,14,0,0,0-27.42,0l-11,52.9A14,14,0,0,0,90,144v18H88a14,14,0,0,0-14,14v24a92.76,92.76,0,0,1-9.64-8.37,90,90,0,1,1,127.28,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM88,206.37V176h80v30.37A88.38,88.38,0,0,1,88,206.37ZM104,144h48v16H104Zm14-16,10-48h0l10,48Zm72.22,62.23c-2,2-4.08,3.87-6.22,5.64V176a16,16,0,0,0-16-16V144a16,16,0,0,0-13.61-15.8L143.66,76.74a16,16,0,0,0-31.32,0L101.61,128.2A16,16,0,0,0,88,144v16a16,16,0,0,0-16,16v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,211.16Zm-96,0ZM224,128A96,96,0,1,0,80,211.16V176a8,8,0,0,1,8-8h8V144a8,8,0,0,1,8-8h4.16l12-57.63c1.77-8.49,13.89-8.49,15.66,0l12,57.63H152a8,8,0,0,1,8,8v24h8a8,8,0,0,1,8,8v35.16A96,96,0,0,0,224,128Z\"/>";

export const MarkerCircle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MarkerCircleProps) => {
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
