import { SVGProps } from "react";

export type TrainRegionalVariant = "duotone" | "fill" | "light";

export interface TrainRegionalProps extends SVGProps<SVGSVGElement> {
  variant?: TrainRegionalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M168,88a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,88Zm55.72,34.1-22.39,82.11A16,16,0,0,1,185.89,216H176l14.4,19.2a8,8,0,1,1-12.8,9.6L156,216H100L78.4,244.8a8,8,0,1,1-12.8-9.6L80,216H70.11a16,16,0,0,1-15.44-11.79L32.28,122.1a8.08,8.08,0,0,1,0-4.2L54.67,35.79A16,16,0,0,1,70.11,24H185.89a16,16,0,0,1,15.44,11.79l22.39,82.11A8.08,8.08,0,0,1,223.72,122.1ZM136,152a8,8,0,0,0-16,0v40a8,8,0,0,0,16,0Zm70-38.31L185.89,40H70.11L50,113.69l78,14.18Z\"/>";
const LIGHT_INNER     = "<path d=\"M221.79,118.42,199.4,36.32A14,14,0,0,0,185.89,26H70.11A14,14,0,0,0,56.6,36.32l-22.39,82.1a6,6,0,0,0,0,3.16l22.39,82.1A14,14,0,0,0,70.11,214H84L67.2,236.4a6,6,0,1,0,9.6,7.2L99,214h58l22.2,29.6a6,6,0,0,0,9.6-7.2L172,214h13.89a14,14,0,0,0,13.51-10.32l22.39-82.1A6,6,0,0,0,221.79,118.42ZM68.18,39.47A2,2,0,0,1,70.11,38H185.89a2,2,0,0,1,1.93,1.47l20.67,75.8L128,129.9,47.51,115.27Zm0,161.06L48.29,127.61,122,141v61H70.11A2,2,0,0,1,68.18,200.53Zm119.64,0a2,2,0,0,1-1.93,1.47H134V141l73.71-13.4ZM90,88a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,88Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M223.72,117.9,201.33,35.79A16,16,0,0,0,185.89,24H70.11A16,16,0,0,0,54.67,35.79L32.28,117.9a8.08,8.08,0,0,0,0,4.2l22.39,82.11A16,16,0,0,0,70.11,216H80L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h9.89a16,16,0,0,0,15.44-11.79l22.39-82.11A8.08,8.08,0,0,0,223.72,117.9ZM70.11,40H185.89L206,113.69l-78,14.18L50,113.69Zm-19,90.14L120,142.68V200H70.11ZM185.89,200H136V142.68l68.94-12.54ZM88,88a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,88Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,120l-22.39,82.1a8,8,0,0,1-7.72,5.9H70.11a8,8,0,0,1-7.72-5.9L40,120l88,16Z\"/>";

export const TrainRegional = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TrainRegionalProps) => {
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
