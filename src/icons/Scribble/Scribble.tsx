import { SVGProps } from "react";

export type ScribbleVariant = "duotone" | "fill" | "light";

export interface ScribbleProps extends SVGProps<SVGSVGElement> {
  variant?: ScribbleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM193.66,169.66l-8,8a9,9,0,0,0,0,12.68l4,4a8,8,0,0,1-11.32,11.32l-4-4a25,25,0,0,1,0-35.32l8-8a9,9,0,0,0,0-12.68,9,9,0,0,0-12.68,0l-48,48a25,25,0,0,1-35.32-35.32l72-72a9,9,0,0,0,0-12.68,9,9,0,0,0-12.68,0l-48,48A25,25,0,0,1,62.34,86.34l28-28a8,8,0,0,1,11.32,11.32l-28,28a9,9,0,0,0,0,12.68,9,9,0,0,0,12.68,0l48-48a25,25,0,0,1,35.32,35.32l-72,72a9,9,0,0,0,0,12.68,9,9,0,0,0,12.68,0l48-48a25,25,0,0,1,35.32,35.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M204.25,188.24a16.63,16.63,0,0,0,0,23.52,6,6,0,1,1-8.48,8.48,28.61,28.61,0,0,1,0-40.48l9.37-9.38a16.63,16.63,0,0,0-23.52-23.51l-66.75,66.75a28.63,28.63,0,0,1-40.49-40.49l98.76-98.75a16.63,16.63,0,0,0-23.52-23.51L82.86,117.62A28.63,28.63,0,0,1,42.37,77.13L83.75,35.76a6,6,0,1,1,8.49,8.48L50.86,85.62a16.63,16.63,0,0,0,23.52,23.51l66.75-66.75a28.63,28.63,0,0,1,40.49,40.49L82.86,181.62a16.63,16.63,0,0,0,23.52,23.51l66.76-66.75a28.63,28.63,0,0,1,40.49,40.49Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M205.67,189.66a14.61,14.61,0,0,0,0,20.68,8,8,0,0,1-11.32,11.32,30.64,30.64,0,0,1,0-43.32l9.38-9.37A14.63,14.63,0,0,0,183,148.28L116.28,215A30.63,30.63,0,0,1,73,171.72L171.72,73A14.63,14.63,0,0,0,151,52.28L84.28,119A30.63,30.63,0,0,1,41,75.72L82.34,34.34A8,8,0,0,1,93.65,45.66L52.27,87A14.63,14.63,0,0,0,73,107.72L139.72,41A30.63,30.63,0,0,1,183,84.28L84.28,183A14.63,14.63,0,0,0,105,203.72L171.72,137A30.63,30.63,0,0,1,215,180.28Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z\"/>";

export const Scribble = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ScribbleProps) => {
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
