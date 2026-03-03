import { SVGProps } from "react";

export type WheelchairVariant = "duotone" | "fill" | "light";

export interface WheelchairProps extends SVGProps<SVGSVGElement> {
  variant?: WheelchairVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M250.53,199.59l-24,8a8,8,0,0,1-9.69-4L187.05,144H104a8,8,0,0,1-8-8V106.34A56,56,0,0,0,112,216c25.91,0,50.09-18.05,56.25-42a8,8,0,1,1,15.5,4c-8.06,31.3-38.23,54-71.75,54A72,72,0,0,1,96,89.81v-19a28,28,0,1,1,16,0V88h56a8,8,0,0,1,0,16H112v24h80a8,8,0,0,1,7.15,4.42l28.9,57.8,17.42-5.81a8,8,0,0,1,5.06,15.18Z\"/>";
const LIGHT_INNER     = "<path d=\"M253.69,190.1a6,6,0,0,0-7.59-3.79L227,192.66l-29.68-59.34A6,6,0,0,0,192,130H110V102.05c.66,0,1.33,0,2,0h56a6,6,0,0,0,0-12H112c-.67,0-1.33,0-2,0V77.4a30,30,0,1,0-12,0v14A70,70,0,0,0,112,230c32.62,0,62-22.08,69.81-52.5a6,6,0,0,0-11.62-3c-6.49,25.21-31,43.5-58.19,43.5A58,58,0,0,1,98,103.72V136a6,6,0,0,0,6,6h84.29l30.34,60.68a6,6,0,0,0,7.27,3l24-8A6,6,0,0,0,253.69,190.1ZM86,48a18,18,0,1,1,18,18A18,18,0,0,1,86,48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M255.59,189.47a8,8,0,0,0-10.12-5.06l-17.42,5.81-28.9-57.8A8,8,0,0,0,192,128H112V104h56a8,8,0,0,0,0-16H112V79a32,32,0,1,0-16,0V89.81A72,72,0,0,0,112,232c33.52,0,63.69-22.71,71.75-54a8,8,0,1,0-15.5-4C162.09,198,137.91,216,112,216A56,56,0,0,1,96,106.34V136a8,8,0,0,0,8,8h83.05l29.79,59.58a8,8,0,0,0,9.69,4l24-8A8,8,0,0,0,255.59,189.47ZM88,48a16,16,0,1,1,16,16A16,16,0,0,1,88,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,48a24,24,0,1,1-24-24A24,24,0,0,1,128,48Z\"/>";

export const Wheelchair = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WheelchairProps) => {
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
