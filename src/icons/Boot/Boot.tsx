import { SVGProps } from "react";

export type BootVariant = "duotone" | "fill" | "light";

export interface BootProps extends SVGProps<SVGSVGElement> {
  variant?: BootVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,112H112.27a8.17,8.17,0,0,1-8.25-7.47A8,8,0,0,1,112,96h44a4,4,0,0,0,4-4V84a4,4,0,0,0-4-4H112.27A8.17,8.17,0,0,1,104,72.53,8,8,0,0,1,112,64h44a4,4,0,0,0,4-4V56a16,16,0,0,0-16-16H32.22a8.23,8.23,0,0,0-5.08,1.64,8,8,0,0,0-2.61,9.22c11.06,28.84,8.76,83.71-.22,114.93A8,8,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56,56,0,0,0,192,112Zm40,88H205.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,114H158V56a14,14,0,0,0-14-14H32a6,6,0,0,0-5.6,8.15c9,23.44,11.13,76.92-.17,116.19A6.21,6.21,0,0,0,26,168v32a14,14,0,0,0,14,14H66.11a14,14,0,0,0,6.26-1.48L85,206.21a2,2,0,0,1,.9-.21h16.22a2,2,0,0,1,.9.21l12.62,6.31a14,14,0,0,0,6.26,1.48h28.22a14,14,0,0,0,6.26-1.48L169,206.21a2,2,0,0,1,.9-.21h16.22a2,2,0,0,1,.9.21l12.62,6.31a14,14,0,0,0,6.26,1.48H232a14,14,0,0,0,14-14V168A54.06,54.06,0,0,0,192,114ZM40.27,54H144a2,2,0,0,1,2,2V82H112a6,6,0,0,0,0,12h34v20H112a6,6,0,0,0,0,12h80a42.05,42.05,0,0,1,41.56,36H39.75C47.11,130.44,48.71,84.31,40.27,54ZM234,200a2,2,0,0,1-2,2H205.89a2,2,0,0,1-.9-.21l-12.62-6.31a14,14,0,0,0-6.26-1.48H169.89a14,14,0,0,0-6.26,1.48L151,201.79a2,2,0,0,1-.9.21H121.89a2,2,0,0,1-.9-.21l-12.62-6.31a14,14,0,0,0-6.26-1.48H85.89a14,14,0,0,0-6.26,1.48L67,201.79a2,2,0,0,1-.9.21H40a2,2,0,0,1-2-2V174H234Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,112H160V56a16,16,0,0,0-16-16H32a8,8,0,0,0-7.47,10.86c11.06,28.84,8.76,83.71-.22,114.93A8.25,8.25,0,0,0,24,168v32a16,16,0,0,0,16,16H66.11a16,16,0,0,0,7.16-1.69L85.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69h28.22a16,16,0,0,0,7.16-1.69L169.89,208h16.22l12.62,6.31a16,16,0,0,0,7.16,1.69H232a16,16,0,0,0,16-16V168A56.06,56.06,0,0,0,192,112ZM144,56V80H112a8,8,0,0,0,0,16h32v16H112a8,8,0,0,0,0,16h80a40.07,40.07,0,0,1,39.2,32H42.25c6.74-30.84,8.16-74.17.61-104Zm61.89,144-12.62-6.31a16,16,0,0,0-7.16-1.69H169.89a16,16,0,0,0-7.16,1.69L150.11,200H121.89l-12.62-6.31a16,16,0,0,0-7.16-1.69H85.89a16,16,0,0,0-7.16,1.69L66.11,200H40V176H232v24Z\"/>";
const SECONDARY_PATHS = "<path d=\"M32,168c9.22-32.06,12-88.65,0-120H144a8,8,0,0,1,8,8v64h40a48,48,0,0,1,48,48Z\"/>";

export const Boot = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BootProps) => {
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
