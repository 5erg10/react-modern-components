import { SVGProps } from "react";

export type SteeringWheelVariant = "duotone" | "fill" | "light";

export interface SteeringWheelProps extends SVGProps<SVGSVGElement> {
  variant?: SteeringWheelVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM49.63,168H90.45l17,45.58A88.35,88.35,0,0,1,49.63,168ZM128,156a16,16,0,1,1,16-16A16,16,0,0,1,128,156Zm20.46,57.59L165.55,168h40.82A88.34,88.34,0,0,1,148.46,213.59ZM128,96a136.38,136.38,0,0,0-88,32.33V128a88,88,0,0,1,176,0v.33A136.38,136.38,0,0,0,128,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM46.43,166h44a2,2,0,0,1,1.87,1.3l18.33,49A90.3,90.3,0,0,1,46.43,166Zm98.87,50.32,18.37-49a2,2,0,0,1,1.88-1.3h44A90.29,90.29,0,0,1,145.3,216.32ZM214.17,154H165.55a14,14,0,0,0-13.11,9.09l-20.55,54.82c-1.29.06-2.59.09-3.89.09s-2.63,0-3.94-.09l-20.5-54.81A14.06,14.06,0,0,0,90.45,154H41.83c-.65-2.17-1.23-4.37-1.72-6.61a122,122,0,0,1,175.78,0C215.4,149.63,214.82,151.83,214.17,154ZM128,98a134.38,134.38,0,0,0-89.88,34.64C38,131.1,38,129.56,38,128a90,90,0,0,1,180,0c0,1.56,0,3.1-.12,4.64A134.38,134.38,0,0,0,128,98Zm10,42a10,10,0,1,1-10-10A10,10,0,0,1,138,140Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,152a12,12,0,1,1,12-12A12,12,0,0,1,128,152Zm104-24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128ZM40,128v.33a135.93,135.93,0,0,1,176,0V128a88,88,0,0,0-176,0Zm67.5,85.58L90.45,168H49.63A88.35,88.35,0,0,0,107.5,213.58ZM128,216c.83,0,1.66,0,2.49,0l20.07-53.57a16.07,16.07,0,0,1,15-10.39h47.12c.38-1.31.72-2.64,1-4a120,120,0,0,0-171.4,0c.31,1.34.65,2.67,1,4H90.45a16.08,16.08,0,0,1,15,10.4l20,53.56C126.31,216,127.15,216,128,216Zm78.37-48H165.55l-17.09,45.59A88.34,88.34,0,0,0,206.37,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M222.4,145.55A96.6,96.6,0,0,1,218.54,160h-53a8,8,0,0,0-7.5,5.19l-21.9,58.47c-2.69.22-5.41.34-8.15.34s-5.5-.12-8.2-.35L97.94,165.2a8,8,0,0,0-7.49-5.2h-53a96.6,96.6,0,0,1-3.86-14.45,128,128,0,0,1,188.8,0Z\"/>";

export const SteeringWheel = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SteeringWheelProps) => {
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
