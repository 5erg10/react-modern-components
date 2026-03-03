import { SVGProps } from "react";

export type ArrowsInCardinalVariant = "duotone" | "fill" | "light";

export interface ArrowsInCardinalProps extends SVGProps<SVGSVGElement> {
  variant?: ArrowsInCardinalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M101.66,133.66l-32,32A8,8,0,0,1,56,160V136H24a8,8,0,0,1,0-16H56V96a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,101.66,133.66Zm20.68-32a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,160,56H136V24a8,8,0,0,0-16,0V56H96a8,8,0,0,0-5.66,13.66Zm11.32,52.68a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,200h24v32a8,8,0,0,0,16,0V200h24a8,8,0,0,0,5.66-13.66ZM232,120H200V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,200,160V136h32a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M91.76,68.24a6,6,0,0,1,8.48-8.48L122,81.51V24a6,6,0,0,1,12,0V81.51l21.76-21.75a6,6,0,0,1,8.48,8.48l-32,32a6,6,0,0,1-8.48,0Zm40.48,87.52a6,6,0,0,0-8.48,0l-32,32a6,6,0,0,0,8.48,8.48L122,174.49V232a6,6,0,0,0,12,0V174.49l21.76,21.75a6,6,0,0,0,8.48-8.48ZM232,122H174.49l21.75-21.76a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48l32,32a6,6,0,0,0,8.48-8.48L174.49,134H232a6,6,0,0,0,0-12Zm-131.76,1.76-32-32a6,6,0,0,0-8.48,8.48L81.51,122H24a6,6,0,0,0,0,12H81.51L59.76,155.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,100.24,123.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M90.34,69.66a8,8,0,0,1,11.32-11.32L120,76.69V24a8,8,0,0,1,16,0V76.69l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0Zm43.32,84.68a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L120,179.31V232a8,8,0,0,0,16,0V179.31l18.34,18.35a8,8,0,0,0,11.32-11.32ZM232,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H232a8,8,0,0,0,0-16Zm-130.34,2.34-32-32a8,8,0,0,0-11.32,11.32L76.69,120H24a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,101.66,122.34Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z\"/>";

export const ArrowsInCardinal = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ArrowsInCardinalProps) => {
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
