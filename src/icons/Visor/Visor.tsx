import { SVGProps } from "react";

export type VisorVariant = "duotone" | "fill" | "light";

export interface VisorProps extends SVGProps<SVGSVGElement> {
  variant?: VisorVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M183.05,56H72A72,72,0,0,0,.08,131.4c1.69,36.69,31.76,66.79,68.45,68.52,15.84.72,32-5.9,49.38-20.3a15.87,15.87,0,0,1,20.24,0C148.72,188.39,165,200,184,200a72,72,0,0,0,72-72.95C255.49,87.87,222.76,56,183.05,56ZM176,104H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M183.05,58H72A70,70,0,0,0,2.08,131.3C3.72,167,33,196.24,68.62,197.92c15.31.71,31-5.77,48-19.84a17.89,17.89,0,0,1,22.8,0C149.75,186.66,165.6,198,184,198a70,70,0,0,0,70-70.93C253.5,89,221.67,58,183.05,58Zm42.23,110.74A57.57,57.57,0,0,1,184,186c-14.53,0-28-9.77-36.93-17.13a29.9,29.9,0,0,0-38.09,0h0c-14.58,12.09-27.6,17.67-39.78,17.1a58.36,58.36,0,0,1-55.12-55.18A58,58,0,0,1,72,70H183.05c32.09,0,58.54,25.67,58.95,57.23A57.62,57.62,0,0,1,225.28,168.74ZM182,96a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,96Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M183.05,56H72A72,72,0,0,0,.08,131.4c1.69,36.69,31.76,66.79,68.45,68.52,15.85.74,32-5.9,49.38-20.3a15.88,15.88,0,0,1,20.24,0C148.72,188.39,165,200,184,200a72,72,0,0,0,72-72.95C255.49,87.87,222.76,56,183.05,56Zm40.81,111.34A55.63,55.63,0,0,1,184,184c-13.88,0-27-9.51-35.65-16.67a31.91,31.91,0,0,0-40.65,0C93.52,179,81,184.49,69.28,183.94a56.36,56.36,0,0,1-53.22-53.28A56,56,0,0,1,72,72H183.05c31,0,56.55,24.79,56.95,55.25A55.66,55.66,0,0,1,223.86,167.34ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,127.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5a23.91,23.91,0,0,0-30.45-.05c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05C218.22,64,247.54,92,248,127.15Z\"/>";

export const Visor = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: VisorProps) => {
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
