import { SVGProps } from "react";

export type CheeseVariant = "duotone" | "fill" | "light";

export interface CheeseProps extends SVGProps<SVGSVGElement> {
  variant?: CheeseVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,32a7.81,7.81,0,0,0-2.3.34l-160,48h0A8,8,0,0,0,16,88v16a8,8,0,0,0,8,8h7.46c13.45,0,24.79,11,24.54,24.46A24,24,0,0,1,32,160H24a8,8,0,0,0-8,8v24a8,8,0,0,0,8,8H224a16,16,0,0,0,16-16V88A56.06,56.06,0,0,0,184,32ZM80,184a32,32,0,0,1,64,0Zm88-48a32,32,0,0,1-31-40h62a32,32,0,0,1-31,40ZM78.51,80,185.12,48a40.06,40.06,0,0,1,38.07,32Z\"/>";
const LIGHT_INNER     = "<path d=\"M184,34a5.92,5.92,0,0,0-1.72.25l-160,48h0A6,6,0,0,0,18,88v24a6,6,0,0,0,6,6h8a18.09,18.09,0,0,1,18,17.65,17.59,17.59,0,0,1-5.15,12.7A18.91,18.91,0,0,1,31.46,154H24a6,6,0,0,0-6,6v32a6,6,0,0,0,6,6H224a14,14,0,0,0,14-14V88A54.06,54.06,0,0,0,184,34Zm.85,12a42.07,42.07,0,0,1,40.72,36H64.88ZM194,104a26,26,0,1,1-50-10h48A25.87,25.87,0,0,1,194,104Zm-56,82H86v-2a26,26,0,0,1,52,0Zm88-2a2,2,0,0,1-2,2H150v-2a38,38,0,0,0-76,0v2H30V166h1.46a31,31,0,0,0,22-9.25A29.45,29.45,0,0,0,62,135.42,30.14,30.14,0,0,0,32,106H30V94H131.34a38,38,0,1,0,73.32,0H226Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,32a7.81,7.81,0,0,0-2.3.34l-160,48h0A8,8,0,0,0,16,88v24a8,8,0,0,0,8,8h8a16.08,16.08,0,0,1,16,15.69A15.6,15.6,0,0,1,43.42,147a16.87,16.87,0,0,1-12,5.05H24a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H224a16,16,0,0,0,16-16V88A56.06,56.06,0,0,0,184,32Zm1.12,16a40.06,40.06,0,0,1,38.07,32H78.51ZM192,104a24,24,0,1,1-46.62-8h45.24A23.86,23.86,0,0,1,192,104ZM88,184a24,24,0,0,1,48,0Zm136,0H152a40,40,0,0,0-80,0H32V168a33,33,0,0,0,22.84-9.85A31.39,31.39,0,0,0,64,135.38,32.15,32.15,0,0,0,32,104V96h96.81a40,40,0,1,0,78.38,0H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M184,40,24,88v24h8a24,24,0,0,1,24,23.54C56.25,149,44.91,160,31.46,160H24v32H80v-8a32,32,0,0,1,64,0v8h80a8,8,0,0,0,8-8V88A48,48,0,0,0,184,40Zm-16,96a32,32,0,0,1-27.72-48h55.44A32,32,0,0,1,168,136Z\"/>";

export const Cheese = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CheeseProps) => {
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
