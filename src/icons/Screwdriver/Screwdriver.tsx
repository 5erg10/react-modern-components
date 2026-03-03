import { SVGProps } from "react";

export type ScrewdriverVariant = "duotone" | "fill" | "light";

export interface ScrewdriverProps extends SVGProps<SVGSVGElement> {
  variant?: ScrewdriverVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M233.23,22.75a50.46,50.46,0,0,0-71.31,0L108.68,76A15.92,15.92,0,0,0,104,87.3V104H87.17a16.14,16.14,0,0,0-9.66,3.24,8,8,0,0,0-.82.72l-8,8a16,16,0,0,0,0,22.63l18.7,18.71-77,77.05a8,8,0,0,0,11.32,11.32l77-77.06,18.71,18.71a16,16,0,0,0,22.62,0l8-8a8.08,8.08,0,0,0,.72-.83,16,16,0,0,0,3.25-9.66V152h16.69A15.86,15.86,0,0,0,180,147.3l53.23-53.23a50.43,50.43,0,0,0,0-71.32ZM205.66,61.64l-56,56a8,8,0,0,1-11.32-11.31l56-56a8,8,0,0,1,11.32,11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M204.24,51.74a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48-8.49l56-56A6,6,0,0,1,204.24,51.74ZM246,58.41a48.12,48.12,0,0,1-14.18,34.24l-53.24,53.24a13.9,13.9,0,0,1-9.89,4.1H152a2,2,0,0,0-2,2v16.83a14.07,14.07,0,0,1-2.84,8.45,6.48,6.48,0,0,1-.54.62l-8,8a14,14,0,0,1-19.8,0L98.7,165.77,20.24,244.24a6,6,0,0,1-8.48-8.48l78.46-78.47L70.1,137.17h0a14,14,0,0,1,0-19.8l8-8a4.53,4.53,0,0,1,.62-.54A14,14,0,0,1,87.17,106H104a2,2,0,0,0,2-2V87.3a13.92,13.92,0,0,1,4.1-9.9l53.23-53.24A48.43,48.43,0,0,1,246,58.41Zm-12,0a36.43,36.43,0,0,0-62.18-25.76L118.58,85.88A2,2,0,0,0,118,87.3V104a14,14,0,0,1-14,14H87.17a2.1,2.1,0,0,0-1,.25l-7.61,7.61a2,2,0,0,0,0,2.83h0l48.73,48.73a2,2,0,0,0,2.82,0l7.62-7.61a2.1,2.1,0,0,0,.25-1V152a14,14,0,0,1,14-14h16.69a2,2,0,0,0,1.41-.59l53.23-53.23A36.19,36.19,0,0,0,234,58.41Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M205.66,50.32a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32-11.31l56-56A8,8,0,0,1,205.66,50.32ZM248,58.41a50.13,50.13,0,0,1-14.77,35.66L180,147.3A15.86,15.86,0,0,1,168.69,152H152v16.83a16,16,0,0,1-3.25,9.66,8.08,8.08,0,0,1-.72.83l-8,8a16,16,0,0,1-22.62,0L98.7,168.6l-77,77.06a8,8,0,0,1-11.32-11.32l77.05-77.05-18.7-18.71a16,16,0,0,1,0-22.63l8-8a8,8,0,0,1,.82-.72A16.14,16.14,0,0,1,87.17,104H104V87.3A15.92,15.92,0,0,1,108.68,76l53.24-53.23A50.43,50.43,0,0,1,248,58.41Zm-16,0a34.43,34.43,0,0,0-58.77-24.35L120,87.3V104a16,16,0,0,1-16,16H87.28L80,127.27,128.72,176l7.28-7.28V152a16,16,0,0,1,16-16h16.69l53.23-53.24A34.21,34.21,0,0,0,232,58.41Z\"/>";
const SECONDARY_PATHS = "<path d=\"M227.57,88.43l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0L74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0A42.42,42.42,0,0,1,227.57,88.43Z\"/>";

export const Screwdriver = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ScrewdriverProps) => {
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
