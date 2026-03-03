import { SVGProps } from "react";

export type ResizeVariant = "duotone" | "fill" | "light";

export interface ResizeProps extends SVGProps<SVGSVGElement> {
  variant?: ResizeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8h88A8,8,0,0,1,144,120Zm64,56a8,8,0,0,0-8,8v16H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V184A8,8,0,0,0,208,176Zm0-72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,208,104Zm-8-64H184a8,8,0,0,0,0,16h16V72a8,8,0,0,0,16,0V56A16,16,0,0,0,200,40Zm-56,0H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM48,88a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H56A16,16,0,0,0,40,56V80A8,8,0,0,0,48,88Z\"/>";
const LIGHT_INNER     = "<path d=\"M136,114H48a6,6,0,0,0-6,6v88a6,6,0,0,0,6,6h88a6,6,0,0,0,6-6V120A6,6,0,0,0,136,114Zm-6,88H54V126h76Zm84-18v16a14,14,0,0,1-14,14H176a6,6,0,0,1,0-12h24a2,2,0,0,0,2-2V184a6,6,0,0,1,12,0Zm0-72v32a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm0-56V72a6,6,0,0,1-12,0V56a2,2,0,0,0-2-2H184a6,6,0,0,1,0-12h16A14,14,0,0,1,214,56Zm-64-8a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,48ZM42,80V56A14,14,0,0,1,56,42H72a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2V80a6,6,0,0,1-12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M136,112H48a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V120A8,8,0,0,0,136,112Zm-8,88H56V128h72Zm88-16v16a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V184a8,8,0,0,1,16,0Zm0-72v32a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm0-56V72a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h16A16,16,0,0,1,216,56Zm-64-8a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,48ZM40,80V56A16,16,0,0,1,56,40H72a8,8,0,0,1,0,16H56V80a8,8,0,0,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136,120v88H48V120Z\"/>";

export const Resize = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ResizeProps) => {
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
