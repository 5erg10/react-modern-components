import { SVGProps } from "react";

export type FoldersVariant = "duotone" | "fill" | "light";

export interface FoldersProps extends SVGProps<SVGSVGElement> {
  variant?: FoldersVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,64H154.67L126.93,43.2a16.12,16.12,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.89A15.13,15.13,0,0,0,208,200.89V184h16.89A15.13,15.13,0,0,0,240,168.89V80A16,16,0,0,0,224,64Zm0,104H208V112a16,16,0,0,0-16-16H122.67L94.93,75.2a16.12,16.12,0,0,0-9.6-3.2H72V56h45.33L147.2,78.4A8,8,0,0,0,152,80h72Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,66H154L125.73,44.8a14,14,0,0,0-8.4-2.8H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H192.89A13.12,13.12,0,0,0,206,200.89V182h18.89A13.12,13.12,0,0,0,238,168.89V80A14,14,0,0,0,224,66ZM194,200.89a1.11,1.11,0,0,1-1.11,1.11H40a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2H85.33a2,2,0,0,1,1.2.4l29.87,22.4A6,6,0,0,0,120,110h72a2,2,0,0,1,2,2Zm32-32a1.11,1.11,0,0,1-1.11,1.11H206V112a14,14,0,0,0-14-14H122L93.73,76.8a14,14,0,0,0-8.4-2.8H70V56a2,2,0,0,1,2-2h45.33a2,2,0,0,1,1.2.4L148.4,76.8A6,6,0,0,0,152,78h72a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,64H154.67L126.93,43.2a16.12,16.12,0,0,0-9.6-3.2H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H192.89A15.13,15.13,0,0,0,208,200.89V184h16.89A15.13,15.13,0,0,0,240,168.89V80A16,16,0,0,0,224,64ZM192,200H40V88H85.33l29.87,22.4A8,8,0,0,0,120,112h72Zm32-32H208V112a16,16,0,0,0-16-16H122.67L94.93,75.2a16.12,16.12,0,0,0-9.6-3.2H72V56h45.33L147.2,78.4A8,8,0,0,0,152,80h72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,80v88.89a7.11,7.11,0,0,1-7.11,7.11H200V112a8,8,0,0,0-8-8H120L90.13,81.6a8,8,0,0,0-4.8-1.6H64V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72A8,8,0,0,1,232,80Z\"/>";

export const Folders = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FoldersProps) => {
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
