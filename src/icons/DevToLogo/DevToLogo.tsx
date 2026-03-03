import { SVGProps } from "react";

export type DevToLogoVariant = "duotone" | "fill" | "light";

export interface DevToLogoProps extends SVGProps<SVGSVGElement> {
  variant?: DevToLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M80,120v16a16,16,0,0,1-16,16V104A16,16,0,0,1,80,120ZM248,72V184a16,16,0,0,1-16,16H24A16,16,0,0,1,8,184V72A16,16,0,0,1,24,56H232A16,16,0,0,1,248,72ZM96,120A32,32,0,0,0,64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32Zm32,0V104h16a8,8,0,0,0,0-16H120a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h24a8,8,0,0,0,0-16H128V136h8a8,8,0,0,0,0-16Zm82.17-31.7a8,8,0,0,0-9.87,5.53L190,130.45,179.7,93.83a8,8,0,0,0-15.4,4.34l18,64a8,8,0,0,0,15.4,0l18-64A8,8,0,0,0,210.17,88.3Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,58H24A14,14,0,0,0,10,72V184a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V72A14,14,0,0,0,232,58Zm2,126a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2ZM126,102v20h10a6,6,0,0,1,0,12H126v20h18a6,6,0,0,1,0,12H120a6,6,0,0,1-6-6V96a6,6,0,0,1,6-6h24a6,6,0,0,1,0,12Zm87.78-4.38-18,64a6,6,0,0,1-11.56,0l-18-64a6,6,0,0,1,11.56-3.24L190,137.84l12.22-43.46a6,6,0,1,1,11.56,3.24ZM64,90H56a6,6,0,0,0-6,6v64a6,6,0,0,0,6,6h8a30,30,0,0,0,30-30V120A30,30,0,0,0,64,90Zm18,46a18,18,0,0,1-18,18H62V102h2a18,18,0,0,1,18,18Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,56H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V72A16,16,0,0,0,232,56Zm0,128H24V72H232V184ZM128,104v16h8a8,8,0,0,1,0,16h-8v16h16a8,8,0,0,1,0,16H120a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16Zm87.7-5.83-18,64a8,8,0,0,1-15.4,0l-18-64a8,8,0,0,1,15.4-4.34L190,130.45l10.3-36.62a8,8,0,1,1,15.4,4.34ZM64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32V120A32,32,0,0,0,64,88Zm16,48a16,16,0,0,1-16,16V104a16,16,0,0,1,16,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,72V184a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z\"/>";

export const DevToLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DevToLogoProps) => {
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
