import { SVGProps } from "react";

export type NutVariant = "duotone" | "fill" | "light";

export interface NutProps extends SVGProps<SVGSVGElement> {
  variant?: NutVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm94.72-94.09-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM218,175.82a2,2,0,0,1-1,1.75l-88,48.18a2,2,0,0,1-1.92,0L39,177.57a2,2,0,0,1-1-1.75V80.18a2,2,0,0,1,1-1.75l88-48.18a2,2,0,0,1,1.92,0l88,48.18a2,2,0,0,1,1,1.75Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,80a48,48,0,1,0,48,48A48.06,48.06,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm95.68-93.85L135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17h0a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,224,40,175.82V80.18L128,32l88,48.17v95.63Z\"/>";
const SECONDARY_PATHS = "<path d=\"M219.84,73.16,131.84,25a8,8,0,0,0-7.68,0l-88,48.18a8,8,0,0,0-4.16,7v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,7.68,0l88-48.18a8,8,0,0,0,4.16-7V80.18A8,8,0,0,0,219.84,73.16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z\"/>";

export const Nut = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NutProps) => {
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
