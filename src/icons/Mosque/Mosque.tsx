import { SVGProps } from "react";

export type MosqueVariant = "duotone" | "fill" | "light";

export interface MosqueProps extends SVGProps<SVGSVGElement> {
  variant?: MosqueVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,128a23.84,23.84,0,0,0-8,1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16,41.06,136,33,136,24a8,8,0,0,0-16,0c0,9-12.16,17.06-26.24,26.44C71.07,65.54,40,86.22,40,128v1.38A24,24,0,0,0,8,152v56a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V176a16,16,0,0,1,32,0v32a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V176a16,16,0,0,1,32,0v32a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8V152A24,24,0,0,0,224,128ZM40,200H24V152a8,8,0,0,1,16,0Zm192,0H216V152a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,130a21.84,21.84,0,0,0-10,2.41V128c0-40.71-29.31-60.22-52.87-75.9C146.57,42.41,134,34,134,24a6,6,0,0,0-12,0c0,10-12.57,18.41-27.13,28.1C71.31,67.78,42,87.29,42,128v4.41A22,22,0,0,0,10,152v56a6,6,0,0,0,6,6H80a6,6,0,0,0,6-6V176a10,10,0,0,1,20,0v32a6,6,0,0,0,6,6h32a6,6,0,0,0,6-6V176a10,10,0,0,1,20,0v32a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V152A22,22,0,0,0,224,130ZM101.52,62.09c10.37-6.9,20.38-13.56,26.48-21.57,6.1,8,16.11,14.67,26.48,21.57C175.41,76,199,91.71,201.73,122H54.27C57,91.71,80.59,76,101.52,62.09ZM22,152a10,10,0,0,1,20,0v50H22Zm138,2a22,22,0,0,0-22,22v26H118V176a22,22,0,0,0-44,0v26H54V134H202v68H182V176A22,22,0,0,0,160,154Zm74,48H214V152a10,10,0,0,1,20,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,128a23.84,23.84,0,0,0-8,1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16,41.06,136,33,136,24a8,8,0,0,0-16,0c0,9-12.16,17.06-26.24,26.44C71.07,65.54,40,86.22,40,128v1.38A24,24,0,0,0,8,152v56a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V176a8,8,0,0,1,16,0v32a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V152A24,24,0,0,0,224,128ZM40,200H24V152a8,8,0,0,1,16,0ZM102.63,63.76c9.67-6.44,19-12.68,25.37-20,6.34,7.35,15.7,13.59,25.37,20,20,13.32,42.48,28.29,46.11,56.24h-143C60.15,92.05,82.6,77.08,102.63,63.76ZM200,200H184V176a24,24,0,0,0-48,0v24H120V176a24,24,0,0,0-48,0v24H56V136H200Zm32,0H216V152a8,8,0,0,1,16,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,128H48c0-64,80-72,80-104C128,56,208,64,208,128Z\"/>";

export const Mosque = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MosqueProps) => {
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
