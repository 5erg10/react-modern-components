import { SVGProps } from "react";

export type StarOfDavidVariant = "duotone" | "fill" | "light";

export interface StarOfDavidProps extends SVGProps<SVGSVGElement> {
  variant?: StarOfDavidVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm-18.42,0-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M198.91,128l30.3-53A6,6,0,0,0,224,66H163.49L133.21,13a6,6,0,0,0-10.42,0L92.5,66H32a6,6,0,0,0-5.21,9l30.28,53L26.79,181A6,6,0,0,0,32,190H92.5l30.29,53a6,6,0,0,0,10.42,0l30.28-53H224a6,6,0,0,0,5.21-9Zm14.75-50L192,115.91,170.34,78Zm-28.57,50-28.56,50-57.07,0L70.9,128,99.46,78l57.07,0ZM128,28.09,149.67,66H106.32ZM42.34,78h43.3L64,115.91Zm0,99.92L64,140.09,85.64,178ZM128,227.91,106.32,190h43.35ZM170.34,178,192,140.09,213.66,178Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm9-48L192,111.88,173.79,80Zm-27.42,48-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0ZM128,32.12,146.22,64H109.77ZM45.78,80H82.19L64,111.88Zm0,95.92L64,144.12,82.19,176ZM128,223.88,109.77,192h36.45ZM173.79,176,192,144.12,210.21,176Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,128l32,56H160l-32,56L96,184H32l32-56L32,72H96l32-56,32,56h64Z\"/>";

export const StarOfDavid = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StarOfDavidProps) => {
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
