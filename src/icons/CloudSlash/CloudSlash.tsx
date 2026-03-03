import { SVGProps } from "react";

export type CloudSlashVariant = "duotone" | "fill" | "light";

export interface CloudSlashProps extends SVGProps<SVGSVGElement> {
  variant?: CloudSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,128.72A87.74,87.74,0,0,1,222.41,190a4,4,0,0,1-5.77-.16L103.78,65.67a4,4,0,0,1,.39-5.76A87.82,87.82,0,0,1,160.87,40C209.15,40.47,248.38,80.43,248,128.72ZM53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-.06.11A64,64,0,0,0,8,153c.53,35.12,29.84,63,65,63h87a87.65,87.65,0,0,0,31.78-5.95l10.3,11.33a8,8,0,0,0,11.33.52,8.32,8.32,0,0,0,.29-11.52Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44l40.18,44.2c-.45.87-.9,1.75-1.32,2.64A62,62,0,1,0,72,214h88a85.23,85.23,0,0,0,32.35-6.3L203.56,220a6,6,0,0,0,8.88-8.08ZM160,202H72a50,50,0,1,1,5.9-99.64A86.25,86.25,0,0,0,74,128a6,6,0,0,0,12,0,73.92,73.92,0,0,1,6.44-30.2l91.22,100.34A73.65,73.65,0,0,1,160,202Zm86-74a85.85,85.85,0,0,1-21.85,57.27,6,6,0,0,1-4.47,2,6,6,0,0,1-4.47-10,74,74,0,0,0-99-108.92,6,6,0,1,1-7.11-9.67A86,86,0,0,1,246,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L81.32,88.55l-.06.12A65,65,0,0,0,72,88a64,64,0,0,0,0,128h88a87.34,87.34,0,0,0,31.8-5.93l10.28,11.31a8,8,0,1,0,11.84-10.76ZM160,200H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.3.12A88.4,88.4,0,0,0,72,128a8,8,0,0,0,16,0,72.25,72.25,0,0,1,5.06-26.54l87,95.7A71.66,71.66,0,0,1,160,200Zm88-72a87.89,87.89,0,0,1-22.35,58.61A8,8,0,0,1,213.71,176,72,72,0,0,0,117.37,70a8,8,0,0,1-9.48-12.89A88,88,0,0,1,248,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,128a80,80,0,0,1-80,80H72A56,56,0,1,1,85.92,97.74l0,.1A80,80,0,0,1,240,128Z\"/>";

export const CloudSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CloudSlashProps) => {
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
