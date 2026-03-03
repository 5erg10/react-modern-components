import { SVGProps } from "react";

export type FolderLockVariant = "duotone" | "fill" | "light";

export interface FolderLockProps extends SVGProps<SVGSVGElement> {
  variant?: FolderLockVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216h73.18a8,8,0,0,0,0-16H40V88H216v16a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM40,72V56H92.69l16,16Zm184,88h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Zm-24,0H176v-4a12,12,0,0,1,24,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,162H214v-6a26,26,0,0,0-52,0v6H152a6,6,0,0,0-6,6v40a6,6,0,0,0,6,6h72a6,6,0,0,0,6-6V168A6,6,0,0,0,224,162Zm-50-6a14,14,0,0,1,28,0v6H174Zm44,46H158V174h60ZM216,74H130.49l-27.9-27.9a13.94,13.94,0,0,0-9.9-4.1H40A14,14,0,0,0,26,56V200.62A13.39,13.39,0,0,0,39.38,214h73.18a6,6,0,0,0,0-12H39.38A1.4,1.4,0,0,1,38,200.62V86H216a2,2,0,0,1,2,2v16a6,6,0,0,0,12,0V88A14,14,0,0,0,216,74ZM40,54H92.69a2,2,0,0,1,1.41.59L113.51,74H38V56A2,2,0,0,1,40,54Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,160h-8v-4a28,28,0,0,0-56,0v4h-8a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160Zm-48-4a12,12,0,0,1,24,0v4H176Zm40,44H160V176h56Zm0-128H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216h73.18a8,8,0,0,0,0-16H40V88H216v16a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM92.69,56l16,16H40V56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,168v40H152V168ZM92.69,48H40a8,8,0,0,0-8,8V80h96L98.34,50.34A8,8,0,0,0,92.69,48Z\"/>";

export const FolderLock = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FolderLockProps) => {
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
