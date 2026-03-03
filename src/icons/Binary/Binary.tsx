import { SVGProps } from "react";

export type BinaryVariant = "duotone" | "fill" | "light";

export interface BinaryProps extends SVGProps<SVGSVGElement> {
  variant?: BinaryVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M168,168c0,4.75-1.11,9.16-3.05,12.11A7.77,7.77,0,0,1,158,184c-9.72,0-10-14.36-10-16,0-4.74,1.11-9.16,3.05-12.11A7.77,7.77,0,0,1,158,152C167.72,152,168,166.36,168,168ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM140.84,75.58a8,8,0,0,0,10.74,3.58L156,76.94V112a8,8,0,0,0,16,0V64a8,8,0,0,0-11.58-7.16l-16,8A8,8,0,0,0,140.84,75.58ZM112,144a8,8,0,0,0-11.58-7.16l-16,8a8,8,0,0,0,7.16,14.32L96,156.94V192a8,8,0,0,0,16,0Zm16-56c0-18.84-10.69-32-26-32S76,69.16,76,88s10.69,32,26,32S128,106.84,128,88Zm56,80c0-18.84-10.69-32-26-32s-26,13.16-26,32,10.69,32,26,32S184,186.84,184,168ZM102,72a7.77,7.77,0,0,0-7,3.89c-1.94,3-3,7.37-3,12.11,0,1.64.28,16,10,16a7.77,7.77,0,0,0,7-3.89c1.94-3,3-7.36,3-12.11C112,86.36,111.72,72,102,72Z\"/>";
const LIGHT_INNER     = "<path d=\"M121.75,41.21C115.22,31.26,105.62,26,94,26S72.78,31.26,66.25,41.21C60.93,49.31,58,60.25,58,72s2.93,22.69,8.25,30.79C72.78,112.74,82.38,118,94,118s21.22-5.26,27.75-15.21c5.32-8.1,8.25-19,8.25-30.79S127.07,49.31,121.75,41.21ZM94,106c-19,0-24-21.37-24-34s5-34,24-34,24,21.37,24,34S113,106,94,106Zm99.75,47.21C187.22,143.26,177.62,138,166,138s-21.22,5.26-27.75,15.21c-5.32,8.1-8.25,19-8.25,30.79s2.93,22.69,8.25,30.79c6.53,10,16.13,15.21,27.75,15.21s21.22-5.26,27.75-15.21c5.32-8.1,8.25-19,8.25-30.79S199.07,161.31,193.75,153.21ZM166,218c-18.95,0-24-21.37-24-34s5.05-34,24-34,24,21.37,24,34S185,218,166,218ZM146.75,48.25a6,6,0,0,1,2.34-8.16l24-13.34A6,6,0,0,1,182,32v80a6,6,0,0,1-12,0V42.2l-15.09,8.38A6,6,0,0,1,146.75,48.25ZM102,144v80a6,6,0,0,1-12,0V154.2l-15.09,8.38a6,6,0,1,1-5.82-10.49l24-13.34A6,6,0,0,1,102,144Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M94,24C71.63,24,56,43.74,56,72s15.63,48,38,48,38-19.74,38-48S116.37,24,94,24Zm0,80c-17.37,0-22-20.11-22-32s4.63-32,22-32,22,20.11,22,32S111.37,104,94,104Zm72,32c-22.37,0-38,19.74-38,48s15.63,48,38,48,38-19.74,38-48S188.37,136,166,136Zm0,80c-17.37,0-22-20.11-22-32s4.63-32,22-32,22,20.11,22,32S183.37,216,166,216ZM145,49.22a8,8,0,0,1,3.11-10.88l24-13.33A8,8,0,0,1,184,32v80a8,8,0,0,1-16,0V45.6l-12.12,6.73A8,8,0,0,1,145,49.22ZM104,144v80a8,8,0,0,1-16,0V157.6l-12.12,6.73a8,8,0,0,1-7.76-14l24-13.33A8,8,0,0,1,104,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z\"/>";

export const Binary = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BinaryProps) => {
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
