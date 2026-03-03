import { SVGProps } from "react";

export type FileCloudVariant = "duotone" | "fill" | "light";

export interface FileCloudProps extends SVGProps<SVGSVGElement> {
  variant?: FileCloudVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M160,181a52.06,52.06,0,0,1-52,51H60.72C40.87,232,24,215.77,24,195.92a36,36,0,0,1,19.28-31.79,4,4,0,0,1,5.77,4.33,63.53,63.53,0,0,0-1,11.15A8.22,8.22,0,0,0,55.55,188,8,8,0,0,0,64,180a47.55,47.55,0,0,1,4.37-20h0A48,48,0,0,1,160,181Zm56-93V216a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V96H152a8,8,0,0,1-8-8V40H56v88a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v88a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2H176a6,6,0,0,0,0,12h24a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM108,130a50,50,0,0,0-46.66,32H60a34,34,0,0,0,0,68h48a50,50,0,0,0,0-100Zm0,88H60a22,22,0,0,1-1.65-43.94c-.06.47-.1.93-.15,1.4a6,6,0,1,0,12,1.08A38.57,38.57,0,0,1,71.3,170a5.71,5.71,0,0,0,.24-.86A38,38,0,1,1,108,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM108,128a52,52,0,0,0-48,32,36,36,0,0,0,0,72h48a52,52,0,0,0,0-104Zm0,88H60a20,20,0,0,1-3.81-39.64,8,8,0,0,0,16,.36,38,38,0,0,1,1.06-6.09,7.56,7.56,0,0,0,.27-1A36,36,0,1,1,108,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32ZM108,136a44,44,0,0,0-42.34,32v0H60a28,28,0,0,0,0,56h48a44,44,0,0,0,0-88Z\"/>";

export const FileCloud = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FileCloudProps) => {
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
