import { SVGProps } from "react";

export type StudentVariant = "duotone" | "fill" | "light";

export interface StudentProps extends SVGProps<SVGSVGElement> {
  variant?: StudentVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M225.9,58.31l-96-32a6,6,0,0,0-3.8,0l-96,32A6,6,0,0,0,26,64v80a6,6,0,0,0,12,0V72.32l38.68,12.9A62,62,0,0,0,99,174.75c-19.25,6.53-36,19.59-48,38A6,6,0,0,0,61,219.28C76.47,195.59,100.88,182,128,182s51.53,13.59,67,37.28A6,6,0,0,0,205,212.72c-12-18.38-28.73-31.44-48-38a62,62,0,0,0,22.27-89.53L225.9,69.69a6,6,0,0,0,0-11.38ZM178,120A50,50,0,1,1,88.63,89.2l37.47,12.49a6,6,0,0,0,3.8,0L167.37,89.2A49.78,49.78,0,0,1,178,120ZM128,89.68,51,64l77-25.68L205,64Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32a8,8,0,0,0-5.4,6.75A5,5,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,64,128,96,32,64l96-32Z\"/>";

export const Student = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StudentProps) => {
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
