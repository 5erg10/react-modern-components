import { SVGProps } from "react";

export type MicroscopeVariant = "duotone" | "fill" | "light";

export interface MicroscopeProps extends SVGProps<SVGSVGElement> {
  variant?: MicroscopeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,216a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H181.25A72,72,0,0,0,144,80.46V136a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V32A16,16,0,0,1,80,16h48a16,16,0,0,1,16,16V64.37A88.05,88.05,0,0,1,203.94,208H224A8,8,0,0,1,232,216Zm-96-32a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,210H199.53A85.2,85.2,0,0,0,222,152a86.1,86.1,0,0,0-80-85.77V32a14,14,0,0,0-14-14H80A14,14,0,0,0,66,32V136a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V78.26A74,74,0,0,1,182,210H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Zm-94-74a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V32a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2ZM72,182a6,6,0,0,1,0-12h64a6,6,0,0,1,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,208H203.94A88.05,88.05,0,0,0,144,64.37V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V136a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V80.46A72,72,0,0,1,181.25,208H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-96-72H80V32h48V136ZM72,184a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136,32V136a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8h48A8,8,0,0,1,136,32Z\"/>";

export const Microscope = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MicroscopeProps) => {
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
