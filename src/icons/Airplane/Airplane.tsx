import { SVGProps } from "react";

export type AirplaneVariant = "duotone" | "fill" | "light";

export interface AirplaneProps extends SVGProps<SVGSVGElement> {
  variant?: AirplaneVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,136v32a8,8,0,0,1-8,8,7.61,7.61,0,0,1-1.57-.16L156,161v23.73l17.66,17.65A8,8,0,0,1,176,208v24a8,8,0,0,1-11,7.43l-37-14.81L91,239.43A8,8,0,0,1,80,232V208a8,8,0,0,1,2.34-5.66L100,184.69V161L25.57,175.84A7.61,7.61,0,0,1,24,176a8,8,0,0,1-8-8V136a8,8,0,0,1,4.42-7.16L100,89.06V44a28,28,0,0,1,56,0V89.06l79.58,39.78A8,8,0,0,1,240,136Z\"/>";
const LIGHT_INNER     = "<path d=\"M234.68,130.63,158,92.29V48a30,30,0,0,0-60,0V92.29L21.32,130.63A6,6,0,0,0,18,136v32a6,6,0,0,0,7.18,5.88L98,159.32v22.19L83.76,195.76A6,6,0,0,0,82,200v32a6,6,0,0,0,8.23,5.57L128,222.46l37.77,15.11A6,6,0,0,0,174,232V200a6,6,0,0,0-1.76-4.24L158,181.51V159.32l72.82,14.56A6,6,0,0,0,238,168V136A6,6,0,0,0,234.68,130.63ZM226,160.68l-72.82-14.56A6,6,0,0,0,146,152v32a6,6,0,0,0,1.76,4.24L162,202.49v20.65l-31.77-12.71a6,6,0,0,0-4.46,0L94,223.14V202.49l14.24-14.25A6,6,0,0,0,110,184V152a6,6,0,0,0-7.18-5.88L30,160.68v-21l76.68-38.34A6,6,0,0,0,110,96V48a18,18,0,0,1,36,0V96a6,6,0,0,0,3.32,5.37L226,139.71Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M235.58,128.84,160,91.06V48a32,32,0,0,0-64,0V91.06L20.42,128.84A8,8,0,0,0,16,136v32a8,8,0,0,0,9.57,7.84L96,161.76v18.93L82.34,194.34A8,8,0,0,0,80,200v32a8,8,0,0,0,11,7.43l37-14.81,37,14.81A8,8,0,0,0,176,232V200a8,8,0,0,0-2.34-5.66L160,180.69V161.76l70.43,14.08A8,8,0,0,0,240,168V136A8,8,0,0,0,235.58,128.84ZM224,158.24l-70.43-14.08A8,8,0,0,0,144,152v32a8,8,0,0,0,2.34,5.66L160,203.31v16.87l-29-11.61a8,8,0,0,0-5.94,0L96,220.18V203.31l13.66-13.65A8,8,0,0,0,112,184V152a8,8,0,0,0-9.57-7.84L32,158.24v-17.3l75.58-37.78A8,8,0,0,0,112,96V48a16,16,0,0,1,32,0V96a8,8,0,0,0,4.42,7.16L224,140.94Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,152v32l16,16v32l-40-16L88,232V200l16-16V152L24,168V136l80-40V48a24,24,0,0,1,48,0V96l80,40v32Z\"/>";

export const Airplane = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AirplaneProps) => {
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
