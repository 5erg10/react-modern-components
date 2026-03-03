import { SVGProps } from "react";

export type StandardDefinitionVariant = "duotone" | "fill" | "light";

export interface StandardDefinitionProps extends SVGProps<SVGSVGElement> {
  variant?: StandardDefinitionVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,128a32,32,0,0,1-32,32h-8V96h8A32,32,0,0,1,192,128Zm40-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,148c0-19.88-19.92-25.35-34.47-29.34-12.06-3.31-20-5.84-20-10.66,0-6.73,8.1-12,18.44-12,8,0,14.85,3.13,17.42,8a8,8,0,1,0,14.13-7.51C110.16,86.31,98.07,80,84,80c-19.64,0-34.44,12-34.44,28,0,17.38,17.6,22.21,31.74,26.09,16,4.39,22.7,7.3,22.7,13.91,0,5.68-8.21,12-20,12s-20-6.32-20-12a8,8,0,0,0-16,0c0,15.7,15.81,28,36,28S120,163.7,120,148Zm88-20a48.05,48.05,0,0,0-48-48H144a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h16A48.05,48.05,0,0,0,208,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M144,74a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h24a54,54,0,0,0,0-108Zm66,54a42,42,0,0,1-42,42H150V86h18A42,42,0,0,1,210,128ZM26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM230,208a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208ZM106,152c0-11.21-10.7-15.1-28.33-20.18-15.89-4.58-33.89-9.77-33.89-27.82,0-17.1,15.57-30,36.22-30,15,0,27.74,6.88,33.34,18a6,6,0,0,1-10.71,5.42C99.08,90.36,90.41,86,80,86c-13.81,0-24.22,7.74-24.22,18,0,8.41,9.52,11.76,25.21,16.29C97.48,125,118,131,118,152c0,16.54-17,30-38,30s-38-13.46-38-30a6,6,0,0,1,12,0c0,9.76,11.91,18,26,18S106,161.76,106,152Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M144,72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h20a56,56,0,0,0,0-112Zm60,56a40,40,0,0,1-40,40H152V88h12A40,40,0,0,1,204,128ZM24,48a8,8,0,0,1,8-8H224a8,8,0,0,1,0,16H32A8,8,0,0,1,24,48ZM232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208ZM104,152c0-9.48-8.61-13-26.88-18.26C61.37,129.2,41.78,123.55,41.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C97.64,91.94,89.65,88,80,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C97.78,123,120,129.45,120,152c0,17.64-17.94,32-40,32s-40-14.36-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16S104,160.67,104,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208H32V48Z\"/>";

export const StandardDefinition = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StandardDefinitionProps) => {
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
