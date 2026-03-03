import { SVGProps } from "react";

export type BookmarkVariant = "duotone" | "fill" | "light";

export interface BookmarkProps extends SVGProps<SVGSVGElement> {
  variant?: BookmarkVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z\"/>";
const LIGHT_INNER     = "<path d=\"M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34ZM72,46H184a2,2,0,0,1,2,2V165.18l-54.83-34.27a6,6,0,0,0-6.36,0L70,165.17V48A2,2,0,0,1,72,46Zm59.17,132.91a6,6,0,0,0-6.36,0L70,213.17V179.33l58-36.25,58,36.25v33.84Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z\"/>";
const SECONDARY_PATHS = "<path d=\"M192,176v48l-64-40L64,224V176l64-40Z\"/>";

export const Bookmark = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BookmarkProps) => {
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
