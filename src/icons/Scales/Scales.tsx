import { SVGProps } from "react";

export type ScalesVariant = "duotone" | "fill" | "light";

export interface ScalesProps extends SVGProps<SVGSVGElement> {
  variant?: ScalesVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239.43,133l-32-80A8,8,0,0,0,200,48a8.27,8.27,0,0,0-1.73.21L136,62V40a8,8,0,0,0-16,0V65.58L54.27,80.21A8,8,0,0,0,48.57,85l-32,80a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133Zm-160,35H32.62L56,109.54Zm97.24-32L200,77.54,223.38,136Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.57,133.77l-32-80h0a6,6,0,0,0-6.86-3.63L134,64.52V40a6,6,0,0,0-12,0V67.19l-67.3,15a6,6,0,0,0-4.27,3.63h0v0l-32,80A6.1,6.1,0,0,0,18,168c0,21.86,23.31,30,38,30s38-8.14,38-30a6.1,6.1,0,0,0-.43-2.23L64.19,92.33,122,79.48V210H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12H134V76.81l56.21-12.49-27.78,69.45A6.1,6.1,0,0,0,162,136c0,21.86,23.31,30,38,30s38-8.14,38-30A6.1,6.1,0,0,0,237.57,133.77ZM56,186a36.89,36.89,0,0,1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91,26,64.91C81.06,182.85,62.58,186,56,186Zm144-32a36.89,36.89,0,0,1-17.48-4.56c-5.37-3.13-8.15-7.18-8.49-12.37l26-64.91,26,64.91C225.06,150.85,206.58,154,200,154Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z\"/>";
const SECONDARY_PATHS = "<path d=\"M56,88l32,80c0,17.67-20,24-32,24s-32-6.33-32-24ZM200,56l-32,80c0,17.67,20,24,32,24s32-6.33,32-24Z\"/>";

export const Scales = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ScalesProps) => {
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
