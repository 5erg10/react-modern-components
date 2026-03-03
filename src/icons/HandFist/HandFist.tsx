import { SVGProps } from "react";

export type HandFistVariant = "duotone" | "fill" | "light";

export interface HandFistProps extends SVGProps<SVGSVGElement> {
  variant?: HandFistVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,120v8A104,104,0,0,1,127.63,232c-54-.19-98-42.06-103.12-94.78a4,4,0,0,1,5.56-4A35.94,35.94,0,0,0,72,122.59a35.92,35.92,0,0,0,53.94,2.33,40.36,40.36,0,0,0,12.87,13A47.94,47.94,0,0,0,120,176a8,8,0,0,0,8.67,8,8.21,8.21,0,0,0,7.33-8.26A32,32,0,0,1,168,144a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H160a24,24,0,0,1-24-24V88h64A32,32,0,0,1,232,120ZM44.73,120C55.57,119.6,64,110.37,64,99.52v-23C64,65.63,55.57,56.4,44.73,56A20,20,0,0,0,24,76v24A20,20,0,0,0,44.73,120Zm56,0c10.84-.39,19.27-9.62,19.27-20.47v-47c0-10.85-8.43-20.08-19.27-20.47A20,20,0,0,0,80,52v48A20,20,0,0,0,100.73,120ZM176,52a20,20,0,0,0-20.73-20C144.43,32.4,136,41.63,136,52.48V72h36a4,4,0,0,0,4-4Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,82H182V64a30,30,0,0,0-54-18A30,30,0,0,0,74,64v0A30,30,0,0,0,26,88v40a102,102,0,0,0,204,0V112A30,30,0,0,0,200,82ZM152,46a18,18,0,0,1,18,18V82H136a14.71,14.71,0,0,0-2,.16V64A18,18,0,0,1,152,46ZM86,64a18,18,0,0,1,36,0v40a18,18,0,0,1-36,0ZM38,88a18,18,0,0,1,36,0v16a18,18,0,0,1-36,0Zm180,40a90,90,0,0,1-180,0h0a30,30,0,0,0,42-6,30,30,0,0,0,45.12,3.3A30.18,30.18,0,0,0,140,139.51,45.92,45.92,0,0,0,122,176a6,6,0,0,0,12,0,34,34,0,0,1,34-34,6,6,0,0,0,0-12H152a18,18,0,0,1-18-18V96a2,2,0,0,1,2-2h64a18,18,0,0,1,18,18Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,80H184V64a32,32,0,0,0-56-21.13A32,32,0,0,0,72.21,60.42,32,32,0,0,0,24,88v40a104,104,0,0,0,208,0V112A32,32,0,0,0,200,80ZM152,48a16,16,0,0,1,16,16V80H136V64A16,16,0,0,1,152,48ZM88,64a16,16,0,0,1,32,0v40a16,16,0,0,1-32,0ZM40,88a16,16,0,0,1,32,0v16a16,16,0,0,1-32,0Zm176,40a88,88,0,0,1-175.92,3.75A31.93,31.93,0,0,0,80,125.13a31.93,31.93,0,0,0,44.58,3.35,32.21,32.21,0,0,0,11.8,11.44A47.88,47.88,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,0-16H152a16,16,0,0,1-16-16V96h64a16,16,0,0,1,16,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,112v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0V64a24,24,0,0,1,48,0,24,24,0,0,1,48,0V88h24A24,24,0,0,1,224,112Z\"/>";

export const HandFist = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandFistProps) => {
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
