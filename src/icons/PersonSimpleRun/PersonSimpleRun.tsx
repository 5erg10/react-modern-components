import { SVGProps } from "react";

export type PersonSimpleRunVariant = "duotone" | "fill" | "light";

export interface PersonSimpleRunProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleRunVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,56a32,32,0,1,1,32,32A32,32,0,0,1,120,56Zm103.28,74.08a8,8,0,0,0-10.6-4c-.25.12-26.71,10.72-72.18-20.19-52.29-35.54-88-7.77-89.51-6.57a8,8,0,1,0,10,12.48c.26-.21,25.12-19.5,64.07,3.27-4.25,13.35-12.76,31.82-25.25,47-18.56,22.48-41.11,32.56-67,30A8,8,0,0,0,31.2,208a92.29,92.29,0,0,0,9.34.47c27.38,0,52-12.38,71.63-36.18.57-.69,1.14-1.4,1.69-2.1C133.31,175.29,168,190.3,168,232a8,8,0,0,0,16,0c0-24.65-10.08-45.35-29.15-59.86a104.29,104.29,0,0,0-31.31-15.81A169.31,169.31,0,0,0,139,124c26.14,16.09,46.84,20,60.69,20,12.18,0,19.06-3,19.67-3.28A8,8,0,0,0,223.28,130.08Z\"/>";
const LIGHT_INNER     = "<path d=\"M152,86a30,30,0,1,0-30-30A30,30,0,0,0,152,86Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,38Zm66.49,100.86c-.59.27-7.17,3.13-18.88,3.13-13.86,0-34.9-4-61.73-21a165.89,165.89,0,0,1-17.43,36.51c9.43,2.78,22,7.72,33.19,16.26C172.46,188.05,182,207.65,182,232a6,6,0,0,1-12,0c0-44-37.23-59.18-56.91-64.11q-1.2,1.55-2.46,3.09c-19.25,23.31-43.34,35.45-70.11,35.45A90.72,90.72,0,0,1,31.4,206,6,6,0,0,1,32.6,194c26.63,2.66,49.77-7.66,68.77-30.69,13.16-15.94,21.94-35.51,26.08-49.15-40.51-24.52-66.59-4.78-67.72-3.89a6,6,0,0,1-7.48-9.38c.37-.3,9.39-7.43,24.76-10,13.86-2.31,35.92-1.3,62.36,16.67,47.14,32,73.88,20.47,74.14,20.35a6,6,0,1,1,5,10.92Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,88a32,32,0,1,0-32-32A32,32,0,0,0,152,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,40Zm67.31,100.68c-.61.28-7.49,3.28-19.67,3.28-13.85,0-34.55-3.88-60.69-20a169.31,169.31,0,0,1-15.41,32.34,104.29,104.29,0,0,1,31.31,15.81C173.92,186.65,184,207.35,184,232a8,8,0,0,1-16,0c0-41.7-34.69-56.71-54.14-61.85-.55.7-1.12,1.41-1.69,2.1-19.64,23.8-44.25,36.18-71.63,36.18A92.29,92.29,0,0,1,31.2,208,8,8,0,0,1,32.8,192c25.92,2.59,48.47-7.49,67-30,12.49-15.14,21-33.61,25.25-47C86.13,92.34,61.27,111.63,61,111.84A8,8,0,1,1,51,99.36c1.5-1.2,37.22-29,89.51,6.57,45.47,30.91,71.93,20.31,72.18,20.19a8,8,0,1,1,6.63,14.56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,56a24,24,0,1,1-24-24A24,24,0,0,1,176,56Z\"/>";

export const PersonSimpleRun = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleRunProps) => {
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
