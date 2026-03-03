import { SVGProps } from "react";

export type PersonSimpleThrowVariant = "duotone" | "fill" | "light";

export interface PersonSimpleThrowProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleThrowVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M96,56a32,32,0,1,1,32,32A32,32,0,0,1,96,56ZM221,99.36c-1.5-1.2-37.22-29-89.51,6.57C86,136.84,59.57,126.23,59.32,126.12a8,8,0,1,0-6.63,14.56c.61.28,7.49,3.27,19.67,3.27,14.21,0,35.64-4.11,62.77-21.29-2.28,29.41-12.73,83.47-73.43,101.68a8,8,0,1,0,4.6,15.32c34.83-10.45,59.45-32.34,73.2-65.08a141.86,141.86,0,0,0,5.1-14.33l22.08,18.4-14.27,42.82a8,8,0,0,0,15.18,5.06l16-48a8,8,0,0,0-2.47-8.68l-32.42-27a215.91,215.91,0,0,0,3-30.34c36.18-18.57,59-.85,59.28-.65a8,8,0,1,0,10-12.48ZM64,112A16,16,0,1,0,48,96,16,16,0,0,0,64,112Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,86A30,30,0,1,0,98,56,30,30,0,0,0,128,86Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,38ZM50,96a14,14,0,1,1,14,14A14,14,0,0,1,50,96Zm170.68,13.35a6,6,0,0,1-8.41,1c-1.17-.92-25.06-18.91-62.52.94a214.64,214.64,0,0,1-3.23,32.38l33.32,27.77a6,6,0,0,1,1.85,6.51l-16,48a6,6,0,0,1-11.38-3.8L169,178l-25.49-21.25a141,141,0,0,1-5.86,17.07C124.15,206,100,227.48,65.73,237.75A6.14,6.14,0,0,1,64,238a6,6,0,0,1-1.72-11.75c64.82-19.45,73.42-78.76,75.11-107.41C109,137.65,86.8,142,72.39,142c-11.71,0-18.29-2.86-18.88-3.13a6,6,0,1,1,5-10.92c.21.09,27.6,11.28,74.14-20.35,26.44-18,48.5-19,62.36-16.67,15.37,2.57,24.39,9.7,24.76,10A6,6,0,0,1,220.68,109.35Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,88A32,32,0,1,0,96,56,32,32,0,0,0,128,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,40ZM48,96a16,16,0,1,1,16,16A16,16,0,0,1,48,96Zm174.24,14.61A8,8,0,0,1,211,111.87c-1.15-.89-23.71-17.7-59.32.61a214.93,214.93,0,0,1-3,30.35l32.43,27a8,8,0,0,1,2.47,8.68l-16,48a8,8,0,0,1-15.18-5.06l14.27-42.82-22.08-18.4a141.86,141.86,0,0,1-5.1,14.33c-13.75,32.74-38.38,54.63-73.2,65.08a8,8,0,0,1-4.6-15.32c60.68-18.21,71.14-72.22,73.42-101.65C108,139.88,86.57,144,72.36,144a59.59,59.59,0,0,1-19.67-3.27A8,8,0,0,1,56,125.4a7.82,7.82,0,0,1,3.31.73s26.76,10.68,72.19-20.2c52.29-35.54,88-7.77,89.51-6.57A8,8,0,0,1,222.24,110.61Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,56a24,24,0,1,1-24-24A24,24,0,0,1,152,56Z\"/>";

export const PersonSimpleThrow = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleThrowProps) => {
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
