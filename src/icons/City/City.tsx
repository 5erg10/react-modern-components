import { SVGProps } from "react";

export type CityVariant = "duotone" | "fill" | "light";

export interface CityProps extends SVGProps<SVGSVGElement> {
  variant?: CityVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,184a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm64,96a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm64,0a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,210H230V88a6,6,0,0,0-6-6H160a6,6,0,0,0-6,6v42H102V40a6,6,0,0,0-6-6H32a6,6,0,0,0-6,6V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM166,94h52V210H166Zm-12,48v68H102V142ZM38,46H90V210H38ZM70,72V88a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm0,48v16a6,6,0,0,1-12,0V168a6,6,0,0,1,12,0Zm52,16V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm64,0V168a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Zm0-48V120a6,6,0,0,1,12,0v16a6,6,0,0,1-12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM168,96h48V208H168Zm-16,48v64H104V144ZM40,48H88V208H40ZM72,72V88a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0,48v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm48,16V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm64,0V168a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Zm0-48V120a8,8,0,0,1,16,0v16a8,8,0,0,1-16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M32,40H96V216H32ZM160,88V216h64V88Z\"/>";

export const City = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CityProps) => {
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
