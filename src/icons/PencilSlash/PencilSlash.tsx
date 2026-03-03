import { SVGProps } from "react";

export type PencilSlashVariant = "duotone" | "fill" | "light";

export interface PencilSlashProps extends SVGProps<SVGSVGElement> {
  variant?: PencilSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38l48.2,53L36.68,152A15.89,15.89,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l50.4-50.39,47.69,52.46a8,8,0,1,0,11.84-10.76Zm47.14,75.64L117,127.74,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188l48.41-48.41,15.89,17.48ZM227.32,96,183,140.34A8,8,0,0,1,171.67,129l14.68-14.68L169.66,97.66,156.31,111A8,8,0,0,1,145,99.69l13.35-13.35h0L141.66,69.66l-12,12a8,8,0,0,1-11.32-11.31L160,28.69a16,16,0,0,1,22.63,0l44.69,44.68A16,16,0,0,1,227.32,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L93.05,98.47,38.1,153.42a13.9,13.9,0,0,0-4.1,9.89V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L154.46,166l49.11,54a6,6,0,0,0,8.88-8.08Zm67.28,91.84L68,179.52,48.48,160l52.65-52.64ZM46,208V174.48L81.52,210H48A2,2,0,0,1,46,208Zm50-.49L76.49,188l51.31-51.31,18.58,20.45ZM225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L119.75,71.77a6,6,0,0,0,8.48,8.49L136,72.48,155.52,92l-9.11,9.1a6,6,0,1,0,8.49,8.49l9.1-9.11L183.52,120l-10.44,10.44a6,6,0,1,0,8.49,8.48l44.34-44.33A14,14,0,0,0,225.91,74.79ZM217.42,86.1,192,111.52,168.25,87.76h0L144.49,64l25.42-25.41a2,2,0,0,1,2.82,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,1,0,42.08,45.38l48.2,53L36.68,152A15.89,15.89,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l50.4-50.39,47.69,52.46a8,8,0,1,0,11.84-10.76Zm63,93.12L68,176.69,51.31,160l49.75-49.74ZM48,179.31,76.69,208H48Zm48,25.38L79.32,188l48.41-48.41,15.89,17.48ZM227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L118.33,70.36a8,8,0,0,0,11.32,11.31L136,75.31,152.69,92,145,99.69A8,8,0,1,0,156.31,111l7.69-7.69L180.69,120l-9,9A8,8,0,0,0,183,140.34L227.32,96A16,16,0,0,0,227.32,73.37ZM192,108.69,147.32,64l24-24L216,84.69Z\"/>";
const SECONDARY_PATHS = "<path d=\"M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z\"/>";

export const PencilSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PencilSlashProps) => {
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
