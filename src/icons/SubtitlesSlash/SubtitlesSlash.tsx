import { SVGProps } from "react";

export type SubtitlesSlashVariant = "duotone" | "fill" | "light";

export interface SubtitlesSlashProps extends SVGProps<SVGSVGElement> {
  variant?: SubtitlesSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M53.92,34.62a8,8,0,0,0-11.48-.37,8.23,8.23,0,0,0-.14,11.38L44.46,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H189.92l12.16,13.38a8,8,0,0,0,11.33.51,8.31,8.31,0,0,0,.3-11.51ZM104,128h13.19l14.54,16H104.27A8.18,8.18,0,0,1,96,136.53,8,8,0,0,1,104,128Zm-48,0H72a8,8,0,0,1,8,8.53A8.18,8.18,0,0,1,71.73,144H56.27A8.18,8.18,0,0,1,48,136.53,8,8,0,0,1,56,128Zm96,48H56.27A8.18,8.18,0,0,1,48,168.53,8,8,0,0,1,56,160h90.28l11.9,13.09A8,8,0,0,1,152,176ZM240,64V192a16,16,0,0,1-5.19,11.78,4,4,0,0,1-5.7-.24L175,144h25a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47h-39.3L93.79,54.69a4,4,0,0,1,3-6.69H224A16,16,0,0,1,240,64Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L49,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H190.8l12.76,14a6,6,0,0,0,8.88-8.08ZM32,194a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H59.89l61.82,68H104a6,6,0,0,0,0,12h28.62l18.18,20H56a6,6,0,0,0,0,12H161.71l18.18,20Zm18-58a6,6,0,0,1,6-6H72a6,6,0,0,1,0,12H56A6,6,0,0,1,50,136ZM238,64V194.83a6,6,0,1,1-12,0V64a2,2,0,0,0-2-2H105.79a6,6,0,0,1,0-12H224A14,14,0,0,1,238,64Zm-59.48,78a6,6,0,1,1,0-12H200a6,6,0,0,1,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm165.92,74.62a8,8,0,1,1-11.84,10.76L189.92,208H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H44.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM175.37,192l-14.55-16H56a8,8,0,0,1,0-16h90.28l-14.55-16H104a8,8,0,0,1,0-16h13.19L59,64H32V192ZM200,144a8,8,0,0,0,0-16H178.52a8,8,0,1,0,0,16Zm24-96H105.79a8,8,0,0,0,0,16H224V194.83a8,8,0,1,0,16,0V64A16,16,0,0,0,224,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,64V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z\"/>";

export const SubtitlesSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SubtitlesSlashProps) => {
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
