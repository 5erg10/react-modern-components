import { SVGProps } from "react";

export type FilePngVariant = "duotone" | "fill" | "light";

export interface FilePngProps extends SVGProps<SVGSVGElement> {
  variant?: FilePngVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152ZM60,144H44a8,8,0,0,0-8,8v55.72A8.17,8.17,0,0,0,43.47,216,8,8,0,0,0,52,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,60,144Zm-.35,40H52V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,59.65,184ZM224,200.87a8,8,0,0,1-2.26,5.57A30.07,30.07,0,0,1,200,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.36,29.36,0,0,1,16.09,4.86,8.21,8.21,0,0,1,3,10.64,8,8,0,0,1-11.55,2.88A13.21,13.21,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.57,13.57,0,0,0,8-2.72V192a8,8,0,0,1-8-8.53,8.17,8.17,0,0,1,8.25-7.47H216a8,8,0,0,1,8,8ZM156,152v55.76a8.22,8.22,0,0,1-4.12,7.24,8,8,0,0,1-10.39-2.35L116,177v30.76a8.17,8.17,0,0,1-7.47,8.26,8,8,0,0,1-8.53-8V152.31a8.27,8.27,0,0,1,4.53-7.52,8,8,0,0,1,10,2.56L140,183V152.27a8.17,8.17,0,0,1,7.47-8.25A8,8,0,0,1,156,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M60,146H44a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V198H60a26,26,0,0,0,0-52Zm0,40H50V158H60a14,14,0,0,1,0,28Zm162,14.87a6,6,0,0,1-1.67,4.15A28.06,28.06,0,0,1,200,214c-16.54,0-30-15.25-30-34s13.46-34,30-34a27.43,27.43,0,0,1,15.36,4.77,6,6,0,0,1-6.72,9.95A15.25,15.25,0,0,0,200,158c-9.93,0-18,9.87-18,22s8.07,22,18,22a15.75,15.75,0,0,0,10-3.73V190h-2a6,6,0,0,1,0-12h8a6,6,0,0,1,6,6ZM154,152v56a6,6,0,0,1-4.17,5.71A5.78,5.78,0,0,1,148,214a6,6,0,0,1-4.88-2.51L114,170.72V208a6,6,0,0,1-12,0V152a6,6,0,0,1,10.88-3.49L142,189.28V152a6,6,0,0,1,12,0ZM48,118a6,6,0,0,0,6-6V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,0,0,12,0V88a6,6,0,0,0-1.76-4.24l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72A6,6,0,0,0,48,118ZM158,46.48,193.52,82H158Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M60,144H44a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40H52V160h8a12,12,0,0,1,0,24Zm164,16.87a8,8,0,0,1-2.22,5.53A30.06,30.06,0,0,1,200,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.45,29.45,0,0,1,16.48,5.11,8,8,0,0,1-9,13.27A13.21,13.21,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.57,13.57,0,0,0,8-2.72V192a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8ZM156,152v56a8,8,0,0,1-5.56,7.62A7.91,7.91,0,0,1,148,216a8,8,0,0,1-6.51-3.35L116,177v31a8,8,0,0,1-16,0V152a8,8,0,0,1,14.51-4.65L140,183V152a8,8,0,0,1,16,0ZM48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,88H152V32Z\"/>";

export const FilePng = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FilePngProps) => {
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
