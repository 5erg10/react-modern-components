import { SVGProps } from "react";

export type ShareVariant = "duotone" | "fill" | "light";

export interface ShareProps extends SVGProps<SVGSVGElement> {
  variant?: ShareVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M229.66,109.66l-48,48A8,8,0,0,1,168,152V112h-3a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h3V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V216a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.24,108.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,110H165a89.94,89.94,0,0,0-87.17,67.5,6,6,0,0,1-11.62-3A101.94,101.94,0,0,1,165,98h44.53L171.76,60.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,108.24ZM192,210H38V88a6,6,0,0,0-12,0V216a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M229.66,98.34l-48-48A8,8,0,0,0,168,56V96h-3A103.94,103.94,0,0,0,64.25,174a8,8,0,0,0,15.5,4A88,88,0,0,1,165,112h3v40a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,229.66,98.34ZM184,132.69V75.31L212.69,104ZM200,216a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0V208H192A8,8,0,0,1,200,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,104l-48,48V56Z\"/>";

export const Share = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ShareProps) => {
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
