import { SVGProps } from "react";

export type HandArrowUpVariant = "duotone" | "fill" | "light";

export interface HandArrowUpProps extends SVGProps<SVGSVGElement> {
  variant?: HandArrowUpVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a7.35,7.35,0,0,0,1.2-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM154.34,61.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L200,43.31V104a8,8,0,0,1-16,0V43.31L165.66,61.66A8,8,0,0,1,154.34,61.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M229.12,142.65a22.43,22.43,0,0,0-19.55-3.88l-45.24,10.4A26,26,0,0,0,140,114H89.94a29.78,29.78,0,0,0-21.21,8.79L45.52,146H16A14,14,0,0,0,2,160v40a14,14,0,0,0,14,14H120a6,6,0,0,0,1.46-.18l64-16a7.16,7.16,0,0,0,.89-.3L225.17,181a2.52,2.52,0,0,0,.33-.15,22.6,22.6,0,0,0,3.62-38.18ZM14,200V160a2,2,0,0,1,2-2H42v44H16A2,2,0,0,1,14,200Zm206.28-30-38.2,16.27L119.26,202H54V154.49l23.21-23.22A17.88,17.88,0,0,1,89.94,126H140a14,14,0,0,1,0,28H112a6,6,0,0,0,0,12h32a6,6,0,0,0,1.34-.15l67-15.41.24-.06A10.6,10.6,0,0,1,220.28,170ZM155.76,60.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0l32,32a6,6,0,1,1-8.48,8.48L198,38.49V104a6,6,0,0,1-12,0V38.49L164.24,60.24A6,6,0,0,1,155.76,60.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a7.35,7.35,0,0,0,1.2-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9ZM154.34,61.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L200,43.31V104a8,8,0,0,1-16,0V43.31L165.66,61.66A8,8,0,0,1,154.34,61.66Z\"/>";
const SECONDARY_PATHS = "<path d=\"M48,152v56H16a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8Z\"/>";

export const HandArrowUp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandArrowUpProps) => {
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
