import { SVGProps } from "react";

export type ChatTeardropSlashVariant = "duotone" | "fill" | "light";

export interface ChatTeardropSlashProps extends SVGProps<SVGSVGElement> {
  variant?: ChatTeardropSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.92,210.62a8,8,0,1,1-11.84,10.76l-13.57-14.92A99.4,99.4,0,0,1,132,224H48a16,16,0,0,1-16-16V124A99.54,99.54,0,0,1,55.29,59.92L42.08,45.38a8,8,0,0,1,.72-11.46,8.22,8.22,0,0,1,11.34.95Zm-5.57-29.91a4,4,0,0,0,6.24-.4A100,100,0,0,0,83.78,36.42a4,4,0,0,0-1,6.18Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44l14.37,15.8A97.42,97.42,0,0,0,34,124v84a14,14,0,0,0,14,14h84a98.24,98.24,0,0,0,56.82-18.18L203.56,220a6,6,0,0,0,8.88-8.08ZM132,210H48a2,2,0,0,1-2-2V124A85.46,85.46,0,0,1,66.08,68.8L180.7,194.88A84.91,84.91,0,0,1,132,210Zm98-86a97.86,97.86,0,0,1-14.06,50.61,6,6,0,0,1-5.15,2.9,6,6,0,0,1-5.12-9.1,86,86,0,0,0-110.88-122,6,6,0,1,1-5.2-10.81A97.09,97.09,0,0,1,132,26,98.11,98.11,0,0,1,230,124Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38l13.18,14.5A99.39,99.39,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100.33,100.33,0,0,0,56.53-17.53l13.55,14.91a8,8,0,1,0,11.84-10.76ZM132,208H48V124A83.46,83.46,0,0,1,66.15,71.85L177.66,194.51A83,83,0,0,1,132,208Zm100-84a99.87,99.87,0,0,1-14.35,51.65,8,8,0,0,1-13.7-8.28A84,84,0,0,0,95.66,48.25a8,8,0,0,1-6.94-14.42A100,100,0,0,1,232,124Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,124h0a92,92,0,0,1-92,92H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0A92,92,0,0,1,224,124Z\"/>";

export const ChatTeardropSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ChatTeardropSlashProps) => {
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
