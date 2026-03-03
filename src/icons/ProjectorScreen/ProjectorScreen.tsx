import { SVGProps } from "react";

export type ProjectorScreenVariant = "duotone" | "fill" | "light";

export interface ProjectorScreenProps extends SVGProps<SVGSVGElement> {
  variant?: ProjectorScreenVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8,8,0,0,1,128,240ZM40,48H216V64H40Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,78a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V64A14,14,0,0,0,40,78h2V178H32a6,6,0,0,0,0,12h90v20.84a22,22,0,1,0,12,0V190h90a6,6,0,0,0,0-12H214V78ZM138,232a10,10,0,1,1-10-10A10,10,0,0,1,138,232ZM38,64V48a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2V64a2,2,0,0,1-2,2H40A2,2,0,0,1,38,64ZM202,178H54V78H202Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8,8,0,0,1,128,240ZM40,48H216V64H40ZM200,176H56V80H200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,72V184H48V72Z\"/>";

export const ProjectorScreen = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ProjectorScreenProps) => {
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
