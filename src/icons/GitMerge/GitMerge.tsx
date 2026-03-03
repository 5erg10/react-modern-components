import { SVGProps } from "react";

export type GitMergeVariant = "duotone" | "fill" | "light";

export interface GitMergeProps extends SVGProps<SVGSVGElement> {
  variant?: GitMergeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,112a32.05,32.05,0,0,0-30.69,23l-42.21-6a8,8,0,0,1-4.95-2.71L94.43,84.55A32,32,0,1,0,72,87v82a32,32,0,1,0,16,0V101.63l30,35a24,24,0,0,0,14.83,8.14l44,6.28A32,32,0,1,0,208,112ZM96,200a16,16,0,1,1-16-16A16,16,0,0,1,96,200Zm112-40a16,16,0,1,1,16-16A16,16,0,0,1,208,160Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,114a30,30,0,0,0-29.21,23.19l-44-6.28a10,10,0,0,1-6.18-3.39L91.18,83.83A30,30,0,1,0,74,85.4v85.2a30,30,0,1,0,12,0V96.22l33.52,39.11a22,22,0,0,0,13.6,7.46l45.35,6.48A30,30,0,1,0,208,114ZM62,56A18,18,0,1,1,80,74,18,18,0,0,1,62,56ZM98,200a18,18,0,1,1-18-18A18,18,0,0,1,98,200Zm110-38a18,18,0,1,1,18-18A18,18,0,0,1,208,162Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,112a32.05,32.05,0,0,0-30.69,23l-42.21-6a8,8,0,0,1-4.95-2.71L94.43,84.55A32,32,0,1,0,72,87v82a32,32,0,1,0,16,0V101.63l30,35a24,24,0,0,0,14.83,8.14l44,6.28A32,32,0,1,0,208,112ZM64,56A16,16,0,1,1,80,72,16,16,0,0,1,64,56ZM96,200a16,16,0,1,1-16-16A16,16,0,0,1,96,200Zm112-40a16,16,0,1,1,16-16A16,16,0,0,1,208,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,56A24,24,0,1,1,80,32,24,24,0,0,1,104,56Z\"/>";

export const GitMerge = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GitMergeProps) => {
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
