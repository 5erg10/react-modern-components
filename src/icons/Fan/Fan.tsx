import { SVGProps } from "react";

export type FanVariant = "duotone" | "fill" | "light";

export interface FanProps extends SVGProps<SVGSVGElement> {
  variant?: FanVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135ZM130.44,147.85a20,20,0,1,1,17.41-22.29A20,20,0,0,1,130.44,147.85Z\"/>";
const LIGHT_INNER     = "<path d=\"M231.06,135.52a58,58,0,0,0-88-33.42c-.69-.41-1.41-.8-2.14-1.15l16.86-67.32a6,6,0,0,0-2.58-6.51A58,58,0,1,0,98,127.86V128c0,.77,0,1.54.1,2.3L31.37,149.36A6,6,0,0,0,27,154.85,58,58,0,1,0,142.88,154c.7-.4,1.39-.83,2.06-1.29L194.81,201a6,6,0,0,0,6.94,1,58,58,0,0,0,29.31-66.51ZM110,128a18,18,0,1,1,18,18A18,18,0,0,1,110,128ZM78,76a46,46,0,0,1,67.08-40.9L129.32,98q-.66,0-1.32,0a30,30,0,0,0-27.33,17.66A45.84,45.84,0,0,1,78,76Zm30,121.3a46,46,0,0,1-69-37.64l62.39-17.82A30,30,0,0,0,128,158a29.29,29.29,0,0,0,3-.15A45.85,45.85,0,0,1,108,197.3Zm106.9-23.76a45.91,45.91,0,0,1-15,15.7l-46.63-45.12a29.91,29.91,0,0,0-.93-33.62,46,46,0,0,1,62.52,63Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M233,135a60,60,0,0,0-89.62-35.45l16.39-65.44a8,8,0,0,0-3.45-8.68A60,60,0,1,0,95.69,128.91L30.82,147.44a8,8,0,0,0-5.8,7.32,60,60,0,0,0,44.42,60.66,60.52,60.52,0,0,0,15.62,2.07,60.07,60.07,0,0,0,59.88-62l48.48,46.92a8,8,0,0,0,9.25,1.35A60,60,0,0,0,233,135Zm-121-7a16,16,0,1,1,16,16A16,16,0,0,1,112,128ZM80,76a44,44,0,0,1,62.75-39.82L127.77,96A32,32,0,0,0,99.85,112.8,43.85,43.85,0,0,1,80,76Zm27,119.57a44,44,0,0,1-65.86-34.43l59.31-16.94A32,32,0,0,0,128,160l.91,0A43.82,43.82,0,0,1,107,195.57Zm106.17-23a43.92,43.92,0,0,1-13,14.14l-44.32-42.89a31.91,31.91,0,0,0-.59-32.57,44,44,0,0,1,57.91,61.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M136.5,150.45A52,52,0,1,1,33,155.13l71.91-20.54h0A24,24,0,0,0,128,152a23.75,23.75,0,0,0,8.5-1.56Zm-32.19-26.31h0a24,24,0,0,1,29.52-19.42h0L152,32.17a52,52,0,1,0-47.69,92ZM201,105.5a52,52,0,0,0-57.84,3.91h0a24,24,0,0,1,2.06,35.26h0l53.74,52a52,52,0,0,0,2-91.2Z\"/>";

export const Fan = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FanProps) => {
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
