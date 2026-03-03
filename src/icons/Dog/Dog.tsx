import { SVGProps } from "react";

export type DogVariant = "duotone" | "fill" | "light";

export interface DogProps extends SVGProps<SVGSVGElement> {
  variant?: DogVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM176,208H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.93,56h40.14L200,123.11V184A24,24,0,0,1,176,208Zm-72-68a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z\"/>";
const LIGHT_INNER     = "<path d=\"M102,140a10,10,0,1,1-10-10A10,10,0,0,1,102,140Zm62-10a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm65.77,10.72a14.24,14.24,0,0,1-5.89,1.29,13.72,13.72,0,0,1-9.88-4.23V184a38,38,0,0,1-38,38H80a38,38,0,0,1-38-38V137.78A13.76,13.76,0,0,1,32.11,142a14.23,14.23,0,0,1-5.88-1.29,13.82,13.82,0,0,1-8-15.34l16.42-88a14,14,0,0,1,17.16-11l.24.07L104.86,42h46.28l52.79-15.51.24-.07a14,14,0,0,1,17.16,11l16.42,88A13.81,13.81,0,0,1,229.77,140.72ZM93.88,51.27,48.84,38a1.9,1.9,0,0,0-1.49.27,2,2,0,0,0-.88,1.32l-16.42,88a2,2,0,0,0,3.54,1.61ZM202,184V122.43L149.06,54H106.94L54,122.43V184a26,26,0,0,0,26,26h42V194.48l-14.24-14.24a6,6,0,0,1,8.48-8.48L128,183.51l11.76-11.75a6,6,0,0,1,8.48,8.48L134,194.48V210h42A26,26,0,0,0,202,184ZM226,127.6l-16.42-88a2,2,0,0,0-.88-1.31,2.07,2.07,0,0,0-1.49-.27l-45,13.23,60.32,78A2,2,0,0,0,226,127.6Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.93,56h40.14L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,120.38V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V120.38L104,48h48Z\"/>";

export const Dog = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DogProps) => {
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
