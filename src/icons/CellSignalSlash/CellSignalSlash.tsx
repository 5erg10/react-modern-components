import { SVGProps } from "react";

export type CellSignalSlashVariant = "duotone" | "fill" | "light";

export interface CellSignalSlashProps extends SVGProps<SVGSVGElement> {
  variant?: CellSignalSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.38,221.92a8,8,0,0,1-11.3-.54l-5.51-6.06A16.11,16.11,0,0,1,192,216H32a16,16,0,0,1-15.06-10.59,16.4,16.4,0,0,1,4.07-17l79.13-79.12L42.26,45.62a8.22,8.22,0,0,1,.14-11.38,8,8,0,0,1,11.48.37l160,176A8,8,0,0,1,213.38,221.92ZM201,172.66a4,4,0,0,0,7-2.69V40a16,16,0,0,0-27.32-11.32l-55.21,55.2a4,4,0,0,0-.13,5.52Z\"/>";
const LIGHT_INNER     = "<path d=\"M86,152v48a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM40,186a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-8A6,6,0,0,0,40,186Zm172.44,26L52.44,36A6,6,0,0,0,43.56,44L114,121.52V200a6,6,0,0,0,12,0V134.72l28,30.8V200a6,6,0,0,0,12,0V178.72L203.56,220a6,6,0,0,0,8.88-8.08ZM160,121.63a6,6,0,0,0,6-6V72a6,6,0,0,0-12,0v43.63A6,6,0,0,0,160,121.63Zm40,44a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0V159.63A6,6,0,0,0,200,165.63Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.92,210.62l-160-176A8,8,0,1,0,42.07,45.38l58.07,63.86L20.69,188.68A16,16,0,0,0,32,216H192a16.13,16.13,0,0,0,4.56-.68l5.52,6.06a8,8,0,1,0,11.84-10.76ZM32,200l78.9-78.89L182.64,200ZM128.18,92.51a8,8,0,0,1,0-11.31l52.51-52.5A16,16,0,0,1,208,40V159.63a8,8,0,0,1-16,0V40L139.5,92.51A8,8,0,0,1,128.18,92.51Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,40V200a8,8,0,0,1-8,8H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z\"/>";

export const CellSignalSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CellSignalSlashProps) => {
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
