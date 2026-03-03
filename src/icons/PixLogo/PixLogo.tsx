import { SVGProps } from "react";

export type PixLogoVariant = "duotone" | "fill" | "light";

export interface PixLogoProps extends SVGProps<SVGSVGElement> {
  variant?: PixLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M235.34,139.28l-19.56,19.55A4,4,0,0,1,213,160H171.32l-32-32,32-32H213a4,4,0,0,1,2.82,1.17l19.56,19.55A16,16,0,0,1,235.34,139.28ZM67.05,80H88a8,8,0,0,1,5.65,2.34L128,116.68l34.35-34.34A8,8,0,0,1,168,80H189a4,4,0,0,0,2.83-6.83l-52.5-52.51a16,16,0,0,0-22.56,0L64.22,73.17A4,4,0,0,0,67.05,80ZM189,176H168a8,8,0,0,1-5.65-2.34L128,139.31,93.65,173.66A8,8,0,0,1,88,176h-21a4,4,0,0,0-2.83,6.83l52.5,52.51a16,16,0,0,0,22.56,0l52.5-52.51A4,4,0,0,0,189,176Zm-72.26-48-32-32H43a4,4,0,0,0-2.82,1.17L20.66,116.72a16,16,0,0,0,0,22.56l19.56,19.55A4,4,0,0,0,43,160H84.68Z\"/>";
const LIGHT_INNER     = "<path d=\"M233.91,118.14l-96-96a13.93,13.93,0,0,0-19.72,0l-96,96.05a13.93,13.93,0,0,0,0,19.72l96.05,96a13.93,13.93,0,0,0,19.72,0l96-96a13.93,13.93,0,0,0,0-19.72ZM126.62,30.57a2,2,0,0,1,2.76,0L188.81,90H160a6,6,0,0,0-4.24,1.76L128,119.52,100.24,91.76A6,6,0,0,0,96,90H67.19ZM30,128a1.94,1.94,0,0,1,.57-1.38L55.19,102H93.51l26,26-26,26H55.19L30.57,129.38A1.94,1.94,0,0,1,30,128Zm99.38,97.43a2,2,0,0,1-2.76,0L67.19,166H96a6,6,0,0,0,4.24-1.76L128,136.48l27.76,27.76A6,6,0,0,0,160,166h28.81Zm96.05-96.05L200.81,154H162.49l-26-26,26-26h38.32l24.62,24.62a2,2,0,0,1,0,2.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M235.34,116.72,139.28,20.66a16,16,0,0,0-22.56,0L20.66,116.72a16,16,0,0,0,0,22.56l96.06,96.06a16,16,0,0,0,22.56,0l96.06-96.06A16,16,0,0,0,235.34,116.72ZM128,32,184,88H160a8,8,0,0,0-5.66,2.34L128,116.68,101.66,90.34A8,8,0,0,0,96,88H72ZM56,104H92.68l24,24-24,24H56L32,128Zm72,120L72,168H96a8,8,0,0,0,5.66-2.34L128,139.31l26.34,26.35A8,8,0,0,0,160,168h24Zm72-72H163.32l-24-24,24-24H200l24,24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M229.67,133.62l-96,96a7.94,7.94,0,0,1-11.24,0l-96-96a7.94,7.94,0,0,1,0-11.24l96.05-96a7.94,7.94,0,0,1,11.24,0l96,96.05A7.94,7.94,0,0,1,229.67,133.62Z\"/>";

export const PixLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PixLogoProps) => {
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
