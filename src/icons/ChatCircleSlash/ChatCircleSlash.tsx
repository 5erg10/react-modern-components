import { SVGProps } from "react";

export type ChatCircleSlashVariant = "duotone" | "fill" | "light";

export interface ChatCircleSlashProps extends SVGProps<SVGSVGElement> {
  variant?: ChatCircleSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.92,210.62a8,8,0,1,1-11.84,10.76l-10.26-11.29a104,104,0,0,1-112.7,9.73L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104.06,104.06,0,0,1,52.33,56.66L42.08,45.38A8,8,0,1,1,53.92,34.62ZM128,24a103.39,103.39,0,0,0-40.33,8.11,8,8,0,0,0-2.81,12.75l121.8,134a8,8,0,0,0,13-1.59A104,104,0,0,0,128,24Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L55.07,56.7a102,102,0,0,0-16.72,120L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,0,0,192,207.37L203.56,220a6,6,0,0,0,8.88-8.08ZM128,218a90,90,0,0,1-45.06-12.08,6,6,0,0,0-4.91-.5L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,0,1,63.16,65.6L184,198.47A89.74,89.74,0,0,1,128,218Zm102-90a102.25,102.25,0,0,1-12.14,48.31,6,6,0,0,1-5.29,3.15,6,6,0,0,1-5.28-8.84A90.05,90.05,0,0,0,93.1,45,6,6,0,0,1,88.45,34,102.06,102.06,0,0,1,230,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L52.33,56.66A104.06,104.06,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35a104,104,0,0,0,112.7-9.73l10.26,11.29a8,8,0,1,0,11.84-10.76ZM128,216a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.66L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,0,1,63.14,68.54L181,198.23A87.77,87.77,0,0,1,128,216Zm104-88a104.15,104.15,0,0,1-12.38,49.25,8,8,0,0,1-14.09-7.58A88,88,0,0,0,93.88,46.86a8,8,0,0,1-6.21-14.75A104.06,104.06,0,0,1,232,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z\"/>";

export const ChatCircleSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChatCircleSlashProps) => {
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
