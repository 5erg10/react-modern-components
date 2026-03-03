import { SVGProps } from "react";

export type OnigiriVariant = "duotone" | "fill" | "light";

export interface OnigiriProps extends SVGProps<SVGSVGElement> {
  variant?: OnigiriVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M231.53,146.57,175.68,50.66l-.11-.19a56,56,0,0,0-95.14,0l-.11.19L24.47,146.57A56,56,0,0,0,72.09,232H183.91a56,56,0,0,0,47.62-85.43Zm-12.68,48.88A39.49,39.49,0,0,1,183.91,216H176V168a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v48H72.09a40,40,0,0,1-34-61.09,2,2,0,0,0,.11-.2l55.85-95.9a40,40,0,0,1,67.84,0l55.85,95.9a2,2,0,0,0,.11.2A39.5,39.5,0,0,1,218.85,195.45Z\"/>";
const LIGHT_INNER     = "<path d=\"M229.82,147.6,174,51.67l-.09-.15a54,54,0,0,0-91.74,0l-.09.15L26.18,147.6A54,54,0,0,0,72.09,230H183.91a54,54,0,0,0,45.91-82.4ZM162,218H94V168a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Zm58.61-21.58A41.47,41.47,0,0,1,183.91,218H174V168a14,14,0,0,0-14-14H96a14,14,0,0,0-14,14v50H72.09a42,42,0,0,1-35.67-64.15l.08-.14L92.37,57.78a42,42,0,0,1,71.26,0l55.87,95.93.08.14A41.48,41.48,0,0,1,220.6,196.42Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231.53,146.57,175.68,50.66l-.11-.19a56,56,0,0,0-95.14,0l-.11.19L24.47,146.57A56,56,0,0,0,72.09,232H183.91a56,56,0,0,0,47.62-85.43ZM160,216H96V168h64Zm58.86-20.55A39.49,39.49,0,0,1,183.91,216H176V168a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v48H72.09a40,40,0,0,1-34-61.09,2,2,0,0,0,.11-.2l55.85-95.9a40,40,0,0,1,67.84,0l55.85,95.9a2,2,0,0,0,.11.2A39.5,39.5,0,0,1,218.85,195.45Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,168v56H88V168a8,8,0,0,1,8-8h64A8,8,0,0,1,168,168Z\"/>";

export const Onigiri = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: OnigiriProps) => {
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
