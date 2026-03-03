import { SVGProps } from "react";

export type BrowsersVariant = "duotone" | "fill" | "light";

export interface BrowsersProps extends SVGProps<SVGSVGElement> {
  variant?: BrowsersVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,88v16H40V88Zm32,80H200V88a16,16,0,0,0-16-16H72V56H216Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,42H72A14,14,0,0,0,58,56V74H40A14,14,0,0,0,26,88V200a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V182h18a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,86H184a2,2,0,0,1,2,2v18H38V88A2,2,0,0,1,40,86ZM186,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V118H186Zm32-32a2,2,0,0,1-2,2H198V88a14,14,0,0,0-14-14H70V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88H184v16H40ZM184,200H40V120H184v80Zm32-32H200V88a16,16,0,0,0-16-16H72V56H216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,56V168a8,8,0,0,1-8,8H192V88a8,8,0,0,0-8-8H64V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z\"/>";

export const Browsers = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BrowsersProps) => {
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
