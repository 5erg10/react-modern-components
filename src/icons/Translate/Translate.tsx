import { SVGProps } from "react";

export type TranslateVariant = "duotone" | "fill" | "light";

export interface TranslateProps extends SVGProps<SVGSVGElement> {
  variant?: TranslateVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M160,129.89,175.06,160H144.94l6.36-12.7v0ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM207.16,188.42l-40-80a8,8,0,0,0-14.32,0L139.66,134.8a62.31,62.31,0,0,1-23.61-10A79.61,79.61,0,0,0,135.6,80H152a8,8,0,0,0,0-16H112V56a8,8,0,0,0-16,0v8H56a8,8,0,0,0,0,16h63.48a63.73,63.73,0,0,1-15.3,34.05,65.93,65.93,0,0,1-9-13.61,8,8,0,0,0-14.32,7.12,81.75,81.75,0,0,0,11.4,17.15A63.62,63.62,0,0,1,56,136a8,8,0,0,0,0,16,79.56,79.56,0,0,0,48.11-16.13,78.33,78.33,0,0,0,28.18,13.66l-19.45,38.89a8,8,0,0,0,14.32,7.16L136.94,176h46.12l9.78,19.58a8,8,0,1,0,14.32-7.16Z\"/>";
const LIGHT_INNER     = "<path d=\"M245.37,213.32l-56-112a6,6,0,0,0-10.74,0l-22.3,44.6A90,90,0,0,1,105,127.19,101.73,101.73,0,0,0,133.82,62H160a6,6,0,0,0,0-12H102V32a6,6,0,0,0-12,0V50H32a6,6,0,0,0,0,12h89.79A89.71,89.71,0,0,1,96,119.23,89.81,89.81,0,0,1,75.11,86,6,6,0,1,0,63.8,90,101.66,101.66,0,0,0,87,127.2,89.56,89.56,0,0,1,32,146a6,6,0,0,0,0,12,101.55,101.55,0,0,0,64-22.63,102.11,102.11,0,0,0,54.53,22.17l-27.89,55.78a6,6,0,0,0,10.74,5.36L147.71,190h72.58l14.34,28.68A6,6,0,0,0,240,222a5.87,5.87,0,0,0,2.68-.64A6,6,0,0,0,245.37,213.32ZM153.71,178,184,117.42,214.29,178Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.7,87.7,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,184H144l40-80ZM96,127.56h0A95.78,95.78,0,0,0,128,56H64A95.78,95.78,0,0,0,96,127.56Z\"/>";

export const Translate = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TranslateProps) => {
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
