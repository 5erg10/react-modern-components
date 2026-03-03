import { SVGProps } from "react";

export type CursorClickVariant = "duotone" | "fill" | "light";

export interface CursorClickProps extends SVGProps<SVGSVGElement> {
  variant?: CursorClickVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M220.49,190.83a12,12,0,0,1,0,17L207.8,220.49a12,12,0,0,1-17,0l-56.56-56.57L115,214.09c0,.1-.08.21-.13.32a15.83,15.83,0,0,1-14.6,9.59l-.79,0a15.83,15.83,0,0,1-14.41-11L32.8,52.92A16,16,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.32.13-50.17,19.27ZM96,32a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0v8A8,8,0,0,0,96,32ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM124.42,39.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.31-7.16l-8,16A8,8,0,0,0,124.42,39.16Zm-96,81.69-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31Z\"/>";
const LIGHT_INNER     = "<path d=\"M90,24V16a6,6,0,0,1,12,0v8a6,6,0,0,1-12,0ZM16,102h8a6,6,0,0,0,0-12H16a6,6,0,0,0,0,12ZM125.32,37.37a6,6,0,0,0,8.05-2.69l8-16a6,6,0,0,0-10.74-5.37l-8,16A6,6,0,0,0,125.32,37.37Zm-96,85.26-16,8a6,6,0,0,0,5.36,10.74l16-8a6,6,0,1,0-5.36-10.74ZM217.9,185.41a14,14,0,0,1,0,19.8L205.21,217.9a14,14,0,0,1-19.8,0L134.1,166.59a2,2,0,0,0-3.21.54l-17.75,46.24a2.44,2.44,0,0,0-.1.24A13.85,13.85,0,0,1,100.26,222c-.23,0-.45,0-.68,0A13.85,13.85,0,0,1,87,212.38L34.7,52.3A14,14,0,0,1,52.3,34.7L212.38,87A14,14,0,0,1,213.61,113l-.24.09-46.25,17.76a2,2,0,0,0-.53,3.21Zm-8.49,8.49L158.1,142.59h0a14,14,0,0,1,4.32-22.74l.24-.1L208.91,102a2,2,0,0,0-.26-3.61L48.58,46.11a2.33,2.33,0,0,0-.65-.11,2,2,0,0,0-1.82,2.58L98.38,208.65a1.84,1.84,0,0,0,1.77,1.35,1.81,1.81,0,0,0,1.84-1.09l17.76-46.25.1-.24a14,14,0,0,1,22.74-4.32l51.31,51.31a2,2,0,0,0,2.83,0l12.68-12.68A2,2,0,0,0,209.41,193.9Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM16,104h8a8,8,0,0,0,0-16H16a8,8,0,0,0,0,16ZM124.42,39.16a8,8,0,0,0,10.74-3.58l8-16a8,8,0,0,0-14.31-7.16l-8,16A8,8,0,0,0,124.42,39.16Zm-96,81.69-16,8a8,8,0,0,0,7.16,14.31l16-8a8,8,0,1,0-7.16-14.31ZM219.31,184a16,16,0,0,1,0,22.63l-12.68,12.68a16,16,0,0,1-22.63,0L132.7,168,115,214.09c0,.1-.08.21-.13.32a15.83,15.83,0,0,1-14.6,9.59l-.79,0a15.83,15.83,0,0,1-14.41-11L32.8,52.92A16,16,0,0,1,52.92,32.8L213,85.07a16,16,0,0,1,1.41,29.8l-.32.13L168,132.69ZM208,195.31,156.69,144h0a16,16,0,0,1,4.93-26l.32-.14,45.95-17.64L48,48l52.2,159.86,17.65-46c0-.11.08-.22.13-.33a16,16,0,0,1,11.69-9.34,16.72,16.72,0,0,1,3-.28,16,16,0,0,1,11.3,4.69L195.31,208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M213.66,201,201,213.66a8,8,0,0,1-11.31,0l-51.31-51.31a8,8,0,0,0-13,2.46l-17.82,46.41a8,8,0,0,1-14.85-.71L40.41,50.44a8,8,0,0,1,10-10L210.51,92.68a8,8,0,0,1,.71,14.85l-46.41,17.82a8,8,0,0,0-2.46,13l51.31,51.31A8,8,0,0,1,213.66,201Z\"/>";

export const CursorClick = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CursorClickProps) => {
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
