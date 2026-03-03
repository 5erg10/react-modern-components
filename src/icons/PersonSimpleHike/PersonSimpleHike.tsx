import { SVGProps } from "react";

export type PersonSimpleHikeVariant = "duotone" | "fill" | "light";

export interface PersonSimpleHikeProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleHikeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,48a32,32,0,1,1,32,32A32,32,0,0,1,120,48Zm72,88c-23.37,0-28.92-8.56-36.6-20.4-3.65-5.64-7.79-12-14.16-17.55a40.92,40.92,0,0,0-8-5.47,8,8,0,0,0-11,3.92L64.66,228.81a8,8,0,0,0,4.15,10.52A7.84,7.84,0,0,0,72,240a8,8,0,0,0,7.34-4.81l33.59-77.27L144,180.12V232a8,8,0,0,0,16,0V176a8,8,0,0,0-3.35-6.51l-37.2-26.57,13.4-30.81c3.57,3.62,6.28,7.8,9.13,12.19,7.67,11.84,16.27,25.11,42,27.36V232a8,8,0,0,0,16,0V144A8,8,0,0,0,192,136ZM72,152a8,8,0,0,0,7.36-4.85l24-56a8,8,0,0,0-4.2-10.5l-28-12a8,8,0,0,0-10.5,4.2l-24,56a8,8,0,0,0,4.2,10.5l28,12A8,8,0,0,0,72,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M152,78a30,30,0,1,0-30-30A30,30,0,0,0,152,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,30Zm46,114v88a6,6,0,0,1-12,0V149.81c-26.23-1.73-34.76-14.89-42.35-26.59-3.43-5.3-6.68-10.31-11.5-14.52L117,143.61l38.52,27.51A6,6,0,0,1,158,176v56a6,6,0,0,1-12,0V179.09l-33.92-24.23L77.5,234.39a6,6,0,0,1-11-4.78L124,97.29a6,6,0,0,1,8.25-2.94,38.89,38.89,0,0,1,7.65,5.21c6.15,5.34,10,11.33,13.79,17.13C161.44,128.59,167.54,138,192,138A6,6,0,0,1,198,144ZM72,150a6,6,0,0,0,5.52-3.64l24-56a6,6,0,0,0-3.16-7.88l-28-12a6,6,0,0,0-7.87,3.16l-24,56a6,6,0,0,0,3.15,7.87l28,12A6,6,0,0,0,72,150ZM51.88,128.85l19.27-45,17,7.27-19.27,45Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm48,112v88a8,8,0,0,1-16,0V151.66c-25.75-2.25-34.35-15.52-42-27.36-2.85-4.39-5.56-8.57-9.13-12.19l-13.4,30.81,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.15-10.52L122.19,96.5a8,8,0,0,1,11-3.92,40.92,40.92,0,0,1,8,5.47c6.37,5.52,10.51,11.91,14.16,17.55,7.68,11.84,13.23,20.4,36.6,20.4A8,8,0,0,1,200,144ZM72,152a8,8,0,0,0,7.36-4.85l24-56a8,8,0,0,0-4.2-10.5l-28-12a8,8,0,0,0-10.5,4.2l-24,56a8,8,0,0,0,4.2,10.5l28,12A8,8,0,0,0,72,152ZM54.51,127.8,72.2,86.5l13.3,5.7L67.8,133.49Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,48a24,24,0,1,1-24-24A24,24,0,0,1,176,48ZM44,132l28,12L96,88,68,76Z\"/>";

export const PersonSimpleHike = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleHikeProps) => {
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
