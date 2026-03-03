import { SVGProps } from "react";

export type FlowerTulipVariant = "duotone" | "fill" | "light";

export interface FlowerTulipProps extends SVGProps<SVGSVGElement> {
  variant?: FlowerTulipVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,48a87.48,87.48,0,0,0-35.36,7.43c-15.1-25.37-39.92-38-41.06-38.59a8,8,0,0,0-7.16,0c-1.14.58-26,13.22-41.06,38.59A87.48,87.48,0,0,0,48,48a8,8,0,0,0-8,8V96a88.11,88.11,0,0,0,80,87.63v35.43L83.58,200.84a8,8,0,1,0-7.16,14.32l48,24a8,8,0,0,0,7.16,0l48-24a8,8,0,0,0-7.16-14.32L136,219.06V183.63A88.11,88.11,0,0,0,216,96V56A8,8,0,0,0,208,48ZM56,96V64.44A72.1,72.1,0,0,1,120,136v31.56A72.1,72.1,0,0,1,56,96Zm144,0a72.1,72.1,0,0,1-64,71.56V136a72.1,72.1,0,0,1,64-71.56Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,50a85.52,85.52,0,0,0-36.17,8c-14.67-25.9-40-38.79-41.15-39.37a6,6,0,0,0-5.36,0C124.18,19.21,98.84,32.1,84.17,58A85.52,85.52,0,0,0,48,50a6,6,0,0,0-6,6V96a86.1,86.1,0,0,0,80,85.77v40.52L82.68,202.63a6,6,0,0,0-5.36,10.74l48,24a6,6,0,0,0,5.36,0l48-24a6,6,0,1,0-5.36-10.74L134,222.29V181.77A86.1,86.1,0,0,0,214,96V56A6,6,0,0,0,208,50ZM128,30.88c6.46,3.84,23.07,15,33.33,32.94A86.5,86.5,0,0,0,128,104.5,86.5,86.5,0,0,0,94.67,63.82C104.93,45.83,121.54,34.71,128,30.88ZM54,96V62.24A74.11,74.11,0,0,1,122,136v33.76A74.1,74.1,0,0,1,54,96Zm148,0a74.1,74.1,0,0,1-68,73.76V136a74.11,74.11,0,0,1,68-73.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,48a87.48,87.48,0,0,0-35.36,7.43c-15.1-25.37-39.92-38-41.06-38.59a8,8,0,0,0-7.16,0c-1.14.58-26,13.22-41.06,38.59A87.48,87.48,0,0,0,48,48a8,8,0,0,0-8,8V96a88.11,88.11,0,0,0,80,87.63v35.43L83.58,200.84a8,8,0,1,0-7.16,14.32l48,24a8,8,0,0,0,7.16,0l48-24a8,8,0,0,0-7.16-14.32L136,219.06V183.63A88.11,88.11,0,0,0,216,96V56A8,8,0,0,0,208,48ZM128,33.21c6.65,4.08,21.08,14.19,30.64,30A88.46,88.46,0,0,0,128,99.36,88.4,88.4,0,0,0,97.36,63.19C106.93,47.4,121.35,37.29,128,33.21ZM56,96V64.44A72.1,72.1,0,0,1,120,136v31.56A72.1,72.1,0,0,1,56,96Zm144,0a72.1,72.1,0,0,1-64,71.56V136a72.1,72.1,0,0,1,64-71.56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M169.23,66v0A80,80,0,0,0,128,136,80,80,0,0,0,86.77,66v0C100,38,128,24,128,24S156,38,169.23,66Z\"/>";

export const FlowerTulip = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlowerTulipProps) => {
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
