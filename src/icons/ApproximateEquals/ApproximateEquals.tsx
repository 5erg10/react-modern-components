import { SVGProps } from "react";

export type ApproximateEqualsVariant = "duotone" | "fill" | "light";

export interface ApproximateEqualsProps extends SVGProps<SVGSVGElement> {
  variant?: ApproximateEqualsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM197.2,160.87c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31a8,8,0,1,1-10.4-12.16c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,0,1,10.4,12.16Zm0-56c-13.07,11.18-24.9,15.1-35.64,15.1-14.26,0-26.62-6.92-37.47-13-18.41-10.31-32.95-18.45-54.89.31A8,8,0,0,1,58.8,95.13c30.42-26,54.09-12.76,73.11-2.11,18.41,10.31,33,18.45,54.89-.31a8,8,0,1,1,10.4,12.16Z\"/>";
const LIGHT_INNER     = "<path d=\"M220.62,154.57a6,6,0,0,1-.79,8.45c-16.87,14-32,19-45.75,19-18.19,0-34.13-8.66-48.94-16.71-26-14.12-48.44-26.31-81.31,1A6,6,0,1,1,36.17,157c39.13-32.46,68.65-16.42,94.69-2.27s48.44,26.31,81.31-1A6,6,0,0,1,220.62,154.57ZM43.83,102.22c32.87-27.27,55.32-15.08,81.31-1,14.81,8,30.75,16.71,48.94,16.71,13.79,0,28.88-5,45.75-19a6,6,0,0,0-7.66-9.24c-32.87,27.27-55.32,15.08-81.31,1S75.3,60.52,36.17,93a6,6,0,0,0,7.66,9.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M222.16,153.26a8,8,0,0,1-1,11.25c-17.36,14.38-32.86,19.49-47,19.49-18.58,0-34.82-8.81-49.93-17-25.35-13.75-47.24-25.63-79.07.74a8,8,0,1,1-10.22-12.3c40.17-33.27,70.32-16.92,96.93-2.48,25.35,13.75,47.24,25.62,79.07-.75A8,8,0,0,1,222.16,153.26Zm-177-49.46c31.83-26.37,53.72-14.5,79.07-.75,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.49a8,8,0,1,0-10.22-12.3c-31.83,26.37-53.72,14.49-79.07.74-26.61-14.43-56.76-30.79-96.93,2.48A8,8,0,0,0,45.11,103.8Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z\"/>";

export const ApproximateEquals = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ApproximateEqualsProps) => {
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
