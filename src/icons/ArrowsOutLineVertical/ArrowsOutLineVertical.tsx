import { SVGProps } from "react";

export type ArrowsOutLineVerticalVariant = "duotone" | "fill" | "light";

export interface ArrowsOutLineVerticalProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowsOutLineVerticalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M88.61,51.06a8,8,0,0,1,1.73-8.72l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,160,56H136V96a8,8,0,0,1-16,0V56H96A8,8,0,0,1,88.61,51.06ZM216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-56,80H136V160a8,8,0,0,0-16,0v40H96a8,8,0,0,0-5.66,13.66l32,32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,200Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM100.24,52.24,122,30.49V96a6,6,0,0,0,12,0V30.49l21.76,21.75a6,6,0,0,0,8.48-8.48l-32-32a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48Zm55.52,151.52L134,225.51V160a6,6,0,0,0-12,0v65.51l-21.76-21.75a6,6,0,0,0-8.48,8.48l32,32a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0-8.48-8.48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM101.66,53.66,120,35.31V96a8,8,0,0,0,16,0V35.31l18.34,18.35a8,8,0,0,0,11.32-11.32l-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32Zm52.68,148.68L136,220.69V160a8,8,0,0,0-16,0v60.69l-18.34-18.35a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,32V224a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V32A16,16,0,0,1,56,16H200A16,16,0,0,1,216,32Z\"/>";

export const ArrowsOutLineVertical = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowsOutLineVerticalProps) => {
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
