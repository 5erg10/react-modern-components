import { SVGProps } from "react";

export type AndroidLogoVariant = "duotone" | "fill" | "light";

export interface AndroidLogoProps extends SVGProps<SVGSVGElement> {
  variant?: AndroidLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M207.06,80.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8,8,0,0,0-11.32-11.32l-26,26a111.43,111.43,0,0,0-128.55.19L37.66,42.34A8,8,0,0,0,26.34,53.66L51.4,78.72A113.38,113.38,0,0,0,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM92,160a12,12,0,1,1,12-12A12,12,0,0,1,92,160Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,160Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,148a10,10,0,1,1-10-10A10,10,0,0,1,174,148ZM92,138a10,10,0,1,0,10,10A10,10,0,0,0,92,138Zm146,22v24a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V161.13A111.44,111.44,0,0,1,54.28,78.76L27.76,52.24a6,6,0,1,1,8.48-8.48L63.61,71.12a108.59,108.59,0,0,1,64-21.12H128a109.17,109.17,0,0,1,64.58,20.93l27.18-27.17a6,6,0,0,1,8.48,8.48L201.93,78.55c1.26,1.15,2.5,2.32,3.72,3.53A109.29,109.29,0,0,1,238,160Zm-12,0a98,98,0,0,0-98-98h-.35C73.81,62.19,30,106.66,30,161.13V184a2,2,0,0,0,2,2H224a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,148a12,12,0,1,1-12-12A12,12,0,0,1,176,148ZM92,136a12,12,0,1,0,12,12A12,12,0,0,0,92,136Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V161.13A113.38,113.38,0,0,1,51.4,78.72L26.34,53.66A8,8,0,0,1,37.66,42.34L63.82,68.5a111.4,111.4,0,0,1,128.55-.18l26-26a8,8,0,0,1,11.32,11.32L204.82,78.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,160Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,64.18,32,107.75,32,161.13V184H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,160v24a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V161.13C24,103.65,70.15,56.2,127.63,56A104,104,0,0,1,232,160Z\"/>";

export const AndroidLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AndroidLogoProps) => {
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
