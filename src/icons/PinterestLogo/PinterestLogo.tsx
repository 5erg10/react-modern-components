import { SVGProps } from "react";

export type PinterestLogoVariant = "duotone" | "fill" | "light";

export interface PinterestLogoProps extends SVGProps<SVGSVGElement> {
  variant?: PinterestLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,128.7c-.38,56.49-46.46,102.73-102.94,103.29a104.16,104.16,0,0,1-25.94-3,4,4,0,0,1-2.91-4.86l8.64-34.55A60.57,60.57,0,0,0,144,196c37,0,66.7-33.45,63.81-73.36A72,72,0,1,0,69.24,155,8,8,0,0,0,80,159.29a8.19,8.19,0,0,0,4-10.49,56,56,0,1,1,107.86-24.93C194,154.4,171.73,180,144,180a44.87,44.87,0,0,1-23.14-6.44l14.9-59.62a8,8,0,0,0-15.52-3.88L93.38,217.51a4,4,0,0,1-5.71,2.59A104,104,0,0,1,32,126.88C32.6,70.52,78.67,24.52,135,24A104,104,0,0,1,240,128.7Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,112c0,22.05-7.7,42.19-21.68,56.73C187.32,182.25,169.71,190,152,190c-19.42,0-31.55-7.07-38.63-13.64l-11.53,49A6,6,0,0,1,96,230a5.89,5.89,0,0,1-1.37-.16,6,6,0,0,1-4.47-7.21l32-136a6,6,0,1,1,11.68,2.74L116.75,162c2.8,4.33,12.46,16,35.25,16,28.51,0,58-24.69,58-66A74,74,0,1,0,71.9,149a6,6,0,1,1-10.39,6A86,86,0,1,1,222,112Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07h0L128,88l13.14-55.83h0A80,80,0,0,1,216,112Z\"/>";

export const PinterestLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PinterestLogoProps) => {
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
