import { SVGProps } from "react";

export type MicrosoftPowerpointLogoVariant = "duotone" | "fill" | "light";

export interface MicrosoftPowerpointLogoProps extends SVGProps<SVGSVGElement> {
  variant?: MicrosoftPowerpointLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,24A104.33,104.33,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24ZM72,152V104a8,8,0,0,1,8-8H96a24,24,0,0,1,0,48H88v8a8,8,0,0,1-16,0Zm56,63.63A88.36,88.36,0,0,1,75.63,192H128ZM128,64H75.63A88.36,88.36,0,0,1,128,40.37Zm16-23.63A88.13,88.13,0,0,1,223.63,120H160V80a16,16,0,0,0-16-16Zm0,175.26V192a16,16,0,0,0,16-16V136h63.63A88.13,88.13,0,0,1,144,215.63ZM96,128H88V112h8a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M96,98H80a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V142H96a22,22,0,0,0,0-44Zm0,32H86V110H96a10,10,0,0,1,0,20ZM136,26A102.35,102.35,0,0,0,55,66H40A14,14,0,0,0,26,80v96a14,14,0,0,0,14,14H55A102,102,0,1,0,136,26Zm89.8,96H158V80a14,14,0,0,0-14-14h-2V38.2A90.15,90.15,0,0,1,225.8,122ZM130,38.21V66H70.78A90.39,90.39,0,0,1,130,38.21ZM38,176V80a2,2,0,0,1,2-2H144a2,2,0,0,1,2,2v96a2,2,0,0,1-2,2H40A2,2,0,0,1,38,176Zm32.78,14H130v27.79A90.39,90.39,0,0,1,70.78,190ZM142,217.8V190h2a14,14,0,0,0,14-14V134h67.8A90.14,90.14,0,0,1,142,217.8Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,96H80a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H88V112h8a8,8,0,0,1,0,16ZM136,24A104.33,104.33,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24Zm87.63,96H160V80a16,16,0,0,0-16-16V40.37A88.13,88.13,0,0,1,223.63,120ZM128,40.37V64H75.63A88.36,88.36,0,0,1,128,40.37ZM40,80H144v47.9a.51.51,0,0,0,0,.2V176H40Zm88,112v23.63A88.36,88.36,0,0,1,75.63,192Zm16,23.63V192a16,16,0,0,0,16-16V136h63.63A88.13,88.13,0,0,1,144,215.63Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,80v96a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H144A8,8,0,0,1,152,80Z\"/>";

export const MicrosoftPowerpointLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MicrosoftPowerpointLogoProps) => {
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
