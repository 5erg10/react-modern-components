import { SVGProps } from "react";

export type CarrotVariant = "duotone" | "fill" | "light";

export interface CarrotProps extends SVGProps<SVGSVGElement> {
  variant?: CarrotVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,80H199.44a64,64,0,0,1-10.19,77.26c-8.52,8.69-19.61,16.92-31.85,24.51a4,4,0,0,1-4.91-.59l-34.84-34.84a8,8,0,0,0-11.49.18,8.23,8.23,0,0,0,.41,11.38l29.88,29.88a4,4,0,0,1-1,6.39C95.74,214.79,53,228.54,46.78,230.48a16,16,0,0,1-21.26-21.26c2.73-8.71,29-90.27,64.86-133.35a4,4,0,0,1,5.9-.26l42.05,42.06a8,8,0,0,0,11.71-.43,8.19,8.19,0,0,0-.6-11.1L108.08,64.78a4,4,0,0,1,.63-6.18,64,64,0,0,1,67.28-2V24a8,8,0,0,1,8.54-8A8.18,8.18,0,0,1,192,24.28V52.69l26.34-26.35a8,8,0,0,1,11.32,11.32L203.31,64h28.41A8.18,8.18,0,0,1,240,71.47,8,8,0,0,1,232,80Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,66H198.48l29.76-29.76a6,6,0,1,0-8.48-8.48L190,57.52V24a6,6,0,0,0-12,0V60.15a62,62,0,0,0-77.8,8l0,0h0C60.17,107.4,30.05,201.45,27.38,210a14,14,0,0,0,18.67,18.67c8.5-2.67,102.62-32.81,141.79-72.77a62,62,0,0,0,8-77.84H232a6,6,0,0,0,0-12Zm-52.69,81.41C170,157,157,166,142.69,174.24l-26.46-26.47a6,6,0,1,0-8.49,8.49l24,24c-41.69,22-89,36.82-89.73,37a6.57,6.57,0,0,0-1.06.44,2,2,0,0,1-2.7-2.7A6.57,6.57,0,0,0,38.7,214C39,213,67.55,121.72,104.48,81l35.27,35.26a6,6,0,1,0,8.48-8.48l-35.1-35.1a50,50,0,0,1,66.18,74.74Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,64H203.31l26.35-26.34a8,8,0,0,0-11.32-11.32L192,52.69V24a8,8,0,0,0-16,0V56.57a64,64,0,0,0-77.2,10.12l0,0,0,0,0,0c-40.1,39.39-70.25,133.08-73.19,142.45a16,16,0,0,0,21.26,21.26c9.37-2.94,103.18-33.13,142.47-73.21A64,64,0,0,0,199.43,80H232a8,8,0,0,0,0-16Zm-54.12,82c-8.94,9.12-21.25,17.8-34.85,25.73l-25.38-25.39a8,8,0,0,0-11.32,11.32l22.09,22.09c-40.87,21.19-86.32,35.42-87,35.63A7.93,7.93,0,0,0,40,216a7.93,7.93,0,0,0,.59-1.41c.29-.93,28-89.58,64-130.67l33.77,33.77a8,8,0,0,0,11.32-11.32L116.18,72.88A48,48,0,0,1,177.88,146Z\"/>";
const SECONDARY_PATHS = "<path d=\"M183.6,151.6C144,192,43.81,223,43.81,223A8,8,0,0,1,33,212.19S64,112,104.4,72.4a56,56,0,0,1,79.2,79.2Z\"/>";

export const Carrot = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CarrotProps) => {
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
