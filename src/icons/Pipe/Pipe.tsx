import { SVGProps } from "react";

export type PipeVariant = "duotone" | "fill" | "light";

export interface PipeProps extends SVGProps<SVGSVGElement> {
  variant?: PipeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,104H208V56h24a8,8,0,0,0,0-16H205.83A16,16,0,0,0,192,32H176a16,16,0,0,0-13.83,8H144A104.11,104.11,0,0,0,40,144v18.16A16,16,0,0,0,32,176v16a16,16,0,0,0,8,13.84V232a8,8,0,0,0,16,0V208h48v24a8,8,0,0,0,16,0V205.84A16,16,0,0,0,128,192V176a16,16,0,0,0-8-13.84V144a24,24,0,0,1,24-24h18.17A16,16,0,0,0,176,128h16a16,16,0,0,0,13.83-8H232a8,8,0,0,0,0-16ZM112,192H48V176h64Zm64-80V48h16v63.8c0,.07,0,.13,0,.2Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,106H206V54h26a6,6,0,0,0,0-12H204.63A14,14,0,0,0,192,34H176a14,14,0,0,0-12.63,8H144A102.12,102.12,0,0,0,42,144v19.37A14,14,0,0,0,34,176v16a14,14,0,0,0,8,12.63V232a6,6,0,0,0,12,0V206h52v26a6,6,0,0,0,12,0V204.63A14,14,0,0,0,126,192V176a14,14,0,0,0-8-12.63V144a26,26,0,0,1,26-26h19.37A14,14,0,0,0,176,126h16a14,14,0,0,0,12.63-8H232a6,6,0,0,0,0-12ZM112,174a2,2,0,0,1,2,2v16a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2Zm-6-30v18H54V144a90.1,90.1,0,0,1,90-90h18v52H144A38,38,0,0,0,106,144Zm86-30H176a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2v64A2,2,0,0,1,192,114Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,104H208V56h24a8,8,0,0,0,0-16H205.83A16,16,0,0,0,192,32H176a16,16,0,0,0-13.83,8H144A104.11,104.11,0,0,0,40,144v18.16A16,16,0,0,0,32,176v16a16,16,0,0,0,8,13.84V232a8,8,0,0,0,16,0V208h48v24a8,8,0,0,0,16,0V205.84A16,16,0,0,0,128,192V176a16,16,0,0,0-8-13.84V144a24,24,0,0,1,24-24h18.17A16,16,0,0,0,176,128h16a16,16,0,0,0,13.83-8H232a8,8,0,0,0,0-16ZM112,176v16H48V176Zm-8-32v16H56V144a88.1,88.1,0,0,1,88-88h16v48H144A40,40,0,0,0,104,144Zm72-32V48h16v63.8c0,.07,0,.13,0,.2Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,48v64H144a32,32,0,0,0-32,32v24H48V144a96,96,0,0,1,96-96Z\"/>";

export const Pipe = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PipeProps) => {
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
