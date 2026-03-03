import { SVGProps } from "react";

export type FolderSimpleLockVariant = "duotone" | "fill" | "light";

export interface FolderSimpleLockProps extends SVGProps<SVGSVGElement> {
  variant?: FolderSimpleLockVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,160h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Zm-24,0H176v-4a12,12,0,0,1,24,0Zm32-72v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,88v16a6,6,0,0,1-12,0V88a2,2,0,0,0-2-2H130.67a14,14,0,0,1-8.4-2.8L94.53,62.4a2,2,0,0,0-1.2-.4H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2h72a6,6,0,0,1,0,12H40a14,14,0,0,1-14-14V64A14,14,0,0,1,40,50H93.33a14,14,0,0,1,8.4,2.8l27.74,20.8a2,2,0,0,0,1.2.4H216A14,14,0,0,1,230,88Zm0,80v40a6,6,0,0,1-6,6H152a6,6,0,0,1-6-6V168a6,6,0,0,1,6-6h10v-6a26,26,0,0,1,52,0v6h10A6,6,0,0,1,230,168Zm-56-6h28v-6a14,14,0,0,0-28,0Zm44,12H158v28h60Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,88v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Zm0,80v40a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8h8v-4a28,28,0,0,1,56,0v4h8A8,8,0,0,1,232,168Zm-56-8h24v-4a12,12,0,0,0-24,0Zm40,16H160v24h56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,168v40H152V168Z\"/>";

export const FolderSimpleLock = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FolderSimpleLockProps) => {
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
