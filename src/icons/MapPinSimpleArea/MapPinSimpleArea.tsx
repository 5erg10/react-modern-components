import { SVGProps } from "react";

export type MapPinSimpleAreaVariant = "duotone" | "fill" | "light";

export interface MapPinSimpleAreaProps extends SVGProps<SVGSVGElement> {
  variant?: MapPinSimpleAreaVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M88,64a40,40,0,1,1,48,39.19V176a8,8,0,0,1-16,0V103.19A40.05,40.05,0,0,1,88,64Zm130,82.59c-12.26-6.94-29.12-12.27-48.77-15.42A8,8,0,1,0,166.73,147c17.54,2.82,33,7.63,43.42,13.55C219,165.5,224,171.14,224,176c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-4.86,5-10.5,13.85-15.49,10.46-5.92,25.88-10.73,43.42-13.55a8,8,0,1,0-2.54-15.79c-19.65,3.15-36.51,8.48-48.77,15.42C19.81,156.87,16,168.26,16,176c0,31.18,57.71,48,112,48s112-16.82,112-48C240,168.26,236.19,156.87,218,146.59Z\"/>";
const LIGHT_INNER     = "<path d=\"M122,101.52V176a6,6,0,0,0,12,0V101.52a38,38,0,1,0-12,0ZM128,38a26,26,0,1,1-26,26A26,26,0,0,1,128,38ZM238,176c0,13.34-12.18,25.38-34.31,33.88C183.38,217.7,156.5,222,128,222s-55.38-4.3-75.69-12.12C30.18,201.38,18,189.34,18,176c0-19.6,26.46-36,69.05-42.86A6,6,0,0,1,89,145c-18,2.89-33.27,7.66-44.09,13.78C35.28,164.2,30,170.32,30,176c0,16.08,40.25,34,98,34s98-17.92,98-34c0-5.68-5.28-11.8-14.86-17.23-10.82-6.12-26.07-10.89-44.09-13.78a6,6,0,0,1,1.9-11.85C211.54,140,238,156.4,238,176Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M120,103.2V176a8,8,0,0,0,16,0V103.2a40,40,0,1,0-16,0ZM128,40a24,24,0,1,1-24,24A24,24,0,0,1,128,40ZM240,176c0,31.18-57.71,48-112,48S16,207.18,16,176c0-7.74,3.81-19.13,22-29.41,12.26-6.94,29.12-12.27,48.77-15.42A8,8,0,1,1,89.27,147c-17.54,2.82-33,7.63-43.42,13.55C37.05,165.5,32,171.14,32,176c0,13.36,36.52,32,96,32s96-18.64,96-32c0-4.86-5.05-10.5-13.85-15.49-10.46-5.92-25.88-10.73-43.42-13.55a8,8,0,1,1,2.54-15.79c19.65,3.15,36.51,8.48,48.77,15.42C236.19,156.87,240,168.26,240,176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,64a32,32,0,1,1-32-32A32,32,0,0,1,160,64Z\"/>";

export const MapPinSimpleArea = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MapPinSimpleAreaProps) => {
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
