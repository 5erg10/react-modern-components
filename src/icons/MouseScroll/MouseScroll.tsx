import { SVGProps } from "react";

export type MouseScrollVariant = "duotone" | "fill" | "light";

export interface MouseScrollProps extends SVGProps<SVGSVGElement> {
  variant?: MouseScrollVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm2.34,146.34a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32L136,83.31v89.38Z\"/>";
const LIGHT_INNER     = "<path d=\"M144,18H112A62.07,62.07,0,0,0,50,80v96a62.07,62.07,0,0,0,62,62h32a62.07,62.07,0,0,0,62-62V80A62.07,62.07,0,0,0,144,18Zm50,158a50.06,50.06,0,0,1-50,50H112a50.06,50.06,0,0,1-50-50V80a50.06,50.06,0,0,1,50-50h32a50.06,50.06,0,0,1,50,50ZM134,78.49v99l13.76-13.75a6,6,0,0,1,8.48,8.48l-24,24a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L122,177.51v-99L108.24,92.24a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0l24,24a6,6,0,1,1-8.48,8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,83.31v89.38l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,172.69V83.31L109.66,93.66A8,8,0,0,1,98.34,82.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,80v96a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V80a56,56,0,0,1,56-56h32A56,56,0,0,1,200,80Z\"/>";

export const MouseScroll = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MouseScrollProps) => {
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
