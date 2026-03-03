import { SVGProps } from "react";

export type ChecksVariant = "duotone" | "fill" | "light";

export interface ChecksProps extends SVGProps<SVGSVGElement> {
  variant?: ChecksVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM72,168a8,8,0,0,1-5.66-2.34l-24-24a8,8,0,0,1,11.32-11.32L72,148.69l58.34-58.35a8,8,0,0,1,11.32,11.32l-64,64A8,8,0,0,1,72,168Zm141.66-66.34-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L144,148.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M148.2,84.28l-89.6,88a6,6,0,0,1-8.4,0L11.8,134.57A6,6,0,1,1,20.2,126l34.2,33.58,85.4-83.87a6,6,0,1,1,8.4,8.56Zm96.08-8.48a6,6,0,0,0-8.48-.08l-85.4,83.87-20.23-19.87a6,6,0,1,0-8.41,8.56l24.44,24a6,6,0,0,0,8.4,0l89.6-88A6,6,0,0,0,244.28,75.8Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,64V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H224A16,16,0,0,1,240,64Z\"/>";

export const Checks = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChecksProps) => {
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
