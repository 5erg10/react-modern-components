import { SVGProps } from "react";

export type WineVariant = "duotone" | "fill" | "light";

export interface WineProps extends SVGProps<SVGSVGElement> {
  variant?: WineVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M205.33,103.67,183.56,29.74A8,8,0,0,0,175.89,24H80.11a8,8,0,0,0-7.67,5.74L50.67,103.67a63.46,63.46,0,0,0,17.42,64.67A87.41,87.41,0,0,0,120,191.63V232H88a8,8,0,1,0,0,16h80a8,8,0,1,0,0-16H136V191.63a87.39,87.39,0,0,0,51.91-23.29A63.48,63.48,0,0,0,205.33,103.67ZM86.09,40h83.82L190,108.19c.09.3.17.6.25.9-21.42,7.68-45.54-1.6-58.63-8.23C106.43,88.11,86.43,86.49,71.68,88.93Z\"/>";
const LIGHT_INNER     = "<path d=\"M203.41,104.23,181.64,30.3a6,6,0,0,0-5.75-4.3H80.11a6,6,0,0,0-5.75,4.3L52.59,104.23a61.48,61.48,0,0,0,16.87,62.65A85.35,85.35,0,0,0,122,189.77V234H88a6,6,0,1,0,0,12h80a6,6,0,1,0,0-12H134V189.77a85.38,85.38,0,0,0,52.54-22.89A61.48,61.48,0,0,0,203.41,104.23ZM84.6,38h86.8l20.51,69.63c.26.9.5,1.8.71,2.7-22.54,9.07-48.17-.73-61.91-7.68C104.1,89.17,83.48,88.34,68.83,91.52Zm93.75,120.11a73.67,73.67,0,0,1-100.7,0,49.53,49.53,0,0,1-13.56-50.48l.74-2.51c12.34-4.46,32.26-6.05,60.46,8.23,11,5.55,28.65,12.64,47.52,12.64A65.56,65.56,0,0,0,194,122.62,49.22,49.22,0,0,1,178.35,158.11Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M205.33,103.67,183.56,29.74A8,8,0,0,0,175.89,24H80.11a8,8,0,0,0-7.67,5.74L50.67,103.67a63.46,63.46,0,0,0,17.42,64.67A87.41,87.41,0,0,0,120,191.63V232H88a8,8,0,1,0,0,16h80a8,8,0,1,0,0-16H136V191.63a87.39,87.39,0,0,0,51.91-23.29A63.48,63.48,0,0,0,205.33,103.67ZM86.09,40h83.82L190,108.19c.09.3.17.6.25.9-21.42,7.68-45.54-1.6-58.63-8.23C106.43,88.11,86.43,86.49,71.68,88.93ZM177,156.65a71.69,71.69,0,0,1-98,0,47.55,47.55,0,0,1-13-48.46l.45-1.52c12-4.06,31.07-5.14,57.93,8.47,11.15,5.65,29.16,12.85,48.43,12.85a68.64,68.64,0,0,0,19.05-2.6A47.2,47.2,0,0,1,177,156.65Z\"/>";
const SECONDARY_PATHS = "<path d=\"M182.48,162.5a79.77,79.77,0,0,1-109,0A55.86,55.86,0,0,1,58.3,105.93l1.57-5.31h0C72.49,95.21,95.2,91.4,128,108c35.86,18.16,59.67,11.89,71.42,5.84h0A55.72,55.72,0,0,1,182.48,162.5Z\"/>";

export const Wine = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WineProps) => {
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
