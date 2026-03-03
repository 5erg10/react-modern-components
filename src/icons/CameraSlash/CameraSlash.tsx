import { SVGProps } from "react";

export type CameraSlashVariant = "duotone" | "fill" | "light";

export interface CameraSlashProps extends SVGProps<SVGSVGElement> {
  variant?: CameraSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,80V192a24.52,24.52,0,0,1-.45,4.65,4,4,0,0,1-6.9,2L86,46.08a4,4,0,0,1-.37-4.91l3.74-5.61A8,8,0,0,1,96,32h64a8,8,0,0,1,6.66,3.56L180.28,56H208A24,24,0,0,1,232,80ZM213.92,210.62a8,8,0,1,1-11.84,10.76L197.19,216H48a24,24,0,0,1-24-24V80A24,24,0,0,1,48,56h3.73L42.08,45.38A8,8,0,1,1,53.92,34.62ZM148,161.92l-47.88-52.68A36,36,0,0,0,148,161.92Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L56.25,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H198.07l5.49,6a6,6,0,0,0,8.88-8.08Zm53.06,76.2,40.11,44.13A29.67,29.67,0,0,1,128,162a30,30,0,0,1-22.5-49.84ZM48,202a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H67.16l30.23,33.25a42,42,0,0,0,56.33,62L187.16,202ZM230,80V186a6,6,0,0,1-12,0V80a10,10,0,0,0-10-10H176a6,6,0,0,1-5-2.67L156.78,46H99.21l-.23.34a6,6,0,0,1-10-6.65l2-3A6,6,0,0,1,96,34h64a6,6,0,0,1,5,2.67L179.21,58H208A22,22,0,0,1,230,80Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H197.19l4.89,5.38a8,8,0,1,0,11.84-10.76Zm51.66,80.61,37,40.69A27.71,27.71,0,0,1,128,160a28,28,0,0,1-22.42-44.77ZM48,200a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H66.28l28.41,31.26A44,44,0,0,0,128,176a44.21,44.21,0,0,0,25.44-8.12L182.64,200ZM232,80V186a8,8,0,0,1-16,0V80a8,8,0,0,0-8-8H176a8,8,0,0,1-6.65-3.56L155.71,48H100.24a8,8,0,0,1-12.91-9.42l2-3A8,8,0,0,1,96,32h64a8,8,0,0,1,6.66,3.56L180.28,56H208A24,24,0,0,1,232,80Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z\"/>";

export const CameraSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CameraSlashProps) => {
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
