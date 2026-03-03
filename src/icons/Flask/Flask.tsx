import { SVGProps } from "react";

export type FlaskVariant = "duotone" | "fill" | "light";

export interface FlaskProps extends SVGProps<SVGSVGElement> {
  variant?: FlaskVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23Zm-90.08-42.91c-15.91-8.05-31.05-12.32-45.22-12.81l24.47-40.8A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167C171.4,169.34,154.29,168.34,131.61,156.86Z\"/>";
const LIGHT_INNER     = "<path d=\"M220,200.8,158,97.48V38h10a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12H98V97.48L36,200.8A14,14,0,0,0,48,222H208a14,14,0,0,0,12-21.2ZM109.15,102.23a6,6,0,0,0,.85-3.09V38h36V99.14a6,6,0,0,0,.85,3.09l39.65,66.08c-12.41,3.16-30.86,3-55.79-9.66-16.94-8.58-33-12.8-47.83-12.64ZM209.72,209a2,2,0,0,1-1.74,1H48a2,2,0,0,1-1.71-3l29-48.41c14.89-2.08,31.68,1.55,49.94,10.79C144,178.8,159.67,182,172.42,182A67.89,67.89,0,0,0,192.89,179l16.8,28A2,2,0,0,1,209.72,209Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.73,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,216H48a8,8,0,0,1-6.86-12.12l30.48-50.8h0c13.23-2.48,32-1.41,56.37,10.92,32.25,16.33,54.75,12.91,67.5,7.65h0l19.34,32.23A8,8,0,0,1,208,216Z\"/>";

export const Flask = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FlaskProps) => {
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
