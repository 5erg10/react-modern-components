import { SVGProps } from "react";

export type KnifeVariant = "duotone" | "fill" | "light";

export interface KnifeProps extends SVGProps<SVGSVGElement> {
  variant?: KnifeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M236,49a25,25,0,0,0-42.63-17.66L143.16,81.54,18.34,206.4a8,8,0,0,0,3.86,13.45A160.67,160.67,0,0,0,58.4,224c32.95,0,65.91-10.2,96.94-30.23,31.76-20.5,50.19-43.82,51-44.8a8,8,0,0,0-.64-10.59L181.31,114l47.38-47.39A24.84,24.84,0,0,0,236,49ZM146.23,180.6c-34.43,22.1-69.94,30.92-105.76,26.3L146,101.34l43.09,43.1A220.09,220.09,0,0,1,146.23,180.6Z\"/>";
const LIGHT_INNER     = "<path d=\"M230.46,33.55a25.81,25.81,0,0,0-36.49,0L19.76,207.82a6,6,0,0,0,2.89,10.09A158.88,158.88,0,0,0,58.39,222c32.57,0,65.17-10.1,95.87-29.91,31.49-20.32,49.72-43.39,50.48-44.36a6,6,0,0,0-.49-7.94L182.49,118l48-48A25.86,25.86,0,0,0,230.46,33.55Zm-38.6,110.82A221,221,0,0,1,147.75,182C111.5,205.4,74,214.23,36.23,208.32L146,98.5ZM222,61.56l-48,48L154.49,90l48-48A13.81,13.81,0,0,1,222,61.56Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231.87,32.13a27.84,27.84,0,0,0-39.32,0L18.34,206.4a8,8,0,0,0,3.86,13.45A160.67,160.67,0,0,0,58.4,224c32.95,0,65.92-10.2,96.95-30.23,31.76-20.5,50.19-43.82,51-44.81a8,8,0,0,0-.64-10.59L185.32,118l46.55-46.56A27.85,27.85,0,0,0,231.87,32.13ZM189.1,144.44a220.41,220.41,0,0,1-42.86,36.16c-34.43,22.1-69.94,30.92-105.77,26.3L146,101.33Zm31.46-84.3L174,106.7,157.32,90l46.55-46.56a11.8,11.8,0,0,1,16.69,16.69Z\"/>";
const SECONDARY_PATHS = "<path d=\"M226.2,65.8,174,118,146,90l52.2-52.2a19.8,19.8,0,0,1,28,0h0A19.8,19.8,0,0,1,226.2,65.8Z\"/>";

export const Knife = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: KnifeProps) => {
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
