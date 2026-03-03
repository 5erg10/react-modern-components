import { SVGProps } from "react";

export type PokerChipVariant = "duotone" | "fill" | "light";

export interface PokerChipProps extends SVGProps<SVGSVGElement> {
  variant?: PokerChipVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM60.4,71.72,77.47,88.79a63.66,63.66,0,0,0-13,31.21H40.37A87.6,87.6,0,0,1,60.4,71.72ZM40.37,136H64.52a63.66,63.66,0,0,0,13,31.21L60.4,184.28A87.6,87.6,0,0,1,40.37,136ZM120,215.63a87.6,87.6,0,0,1-48.28-20l17.07-17.07A63.66,63.66,0,0,0,120,191.48Zm0-151.11a63.66,63.66,0,0,0-31.21,13L71.72,60.4a87.6,87.6,0,0,1,48.28-20ZM215.63,120H191.48a63.66,63.66,0,0,0-12.95-31.21L195.6,71.72A87.6,87.6,0,0,1,215.63,120ZM136,40.37a87.6,87.6,0,0,1,48.28,20L167.21,77.47a63.66,63.66,0,0,0-31.21-13Zm0,175.26V191.48a63.66,63.66,0,0,0,31.21-12.95l17.07,17.07A87.6,87.6,0,0,1,136,215.63Zm59.6-31.35-17.07-17.07A63.66,63.66,0,0,0,191.48,136h24.15A87.6,87.6,0,0,1,195.6,184.28Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,152a50,50,0,1,1,50-50A50.06,50.06,0,0,1,128,178Zm39.37-97.86A61.68,61.68,0,0,0,134,66.3V38.2a89.64,89.64,0,0,1,53.22,22.09ZM122,66.3A61.68,61.68,0,0,0,88.63,80.14L68.78,60.29A89.64,89.64,0,0,1,122,38.2ZM80.14,88.63A61.68,61.68,0,0,0,66.3,122H38.2A89.61,89.61,0,0,1,60.29,68.78ZM66.3,134a61.68,61.68,0,0,0,13.84,33.37L60.29,187.22A89.61,89.61,0,0,1,38.2,134Zm22.33,41.86A61.68,61.68,0,0,0,122,189.7v28.1a89.64,89.64,0,0,1-53.22-22.09ZM134,189.7a61.68,61.68,0,0,0,33.37-13.84l19.85,19.85A89.64,89.64,0,0,1,134,217.8Zm41.86-22.33A61.68,61.68,0,0,0,189.7,134h28.1a89.61,89.61,0,0,1-22.09,53.22ZM189.7,122a61.68,61.68,0,0,0-13.84-33.37l19.85-19.85A89.61,89.61,0,0,1,217.8,122Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,152a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm39.21-98.53a63.66,63.66,0,0,0-31.21-13V40.37a87.6,87.6,0,0,1,48.28,20ZM120,64.52a63.66,63.66,0,0,0-31.21,13L71.72,60.4a87.6,87.6,0,0,1,48.28-20ZM77.47,88.79a63.66,63.66,0,0,0-13,31.21H40.37a87.6,87.6,0,0,1,20-48.28ZM64.52,136a63.66,63.66,0,0,0,13,31.21L60.4,184.28a87.6,87.6,0,0,1-20-48.28Zm24.27,42.53A63.66,63.66,0,0,0,120,191.48v24.15a87.6,87.6,0,0,1-48.28-20ZM136,191.48a63.66,63.66,0,0,0,31.21-12.95l17.07,17.07a87.6,87.6,0,0,1-48.28,20Zm42.53-24.27A63.66,63.66,0,0,0,191.48,136h24.15a87.6,87.6,0,0,1-20,48.28ZM191.48,120a63.66,63.66,0,0,0-12.95-31.21L195.6,71.72a87.6,87.6,0,0,1,20,48.28Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm0,152a56,56,0,1,1,56-56A56,56,0,0,1,128,184Z\"/>";

export const PokerChip = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PokerChipProps) => {
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
