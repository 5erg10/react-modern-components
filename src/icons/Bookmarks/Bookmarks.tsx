import { SVGProps } from "react";

export type BookmarksVariant = "duotone" | "fill" | "light";

export interface BookmarksProps extends SVGProps<SVGSVGElement> {
  variant?: BookmarksVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24Zm0,152.46L176,165V72a16,16,0,0,0-16-16H96V40h96Z\"/>";
const LIGHT_INNER     = "<path d=\"M192,26H96A14,14,0,0,0,82,40V58H64A14,14,0,0,0,50,72V224a6,6,0,0,0,9.49,4.88L112,191.37l52.52,37.51A6,6,0,0,0,174,224V180.8l22.51,16.08A6,6,0,0,0,206,192V40A14,14,0,0,0,192,26ZM162,212.34l-46.52-33.22a6,6,0,0,0-7,0L62,212.34V72a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2Zm32-32-20-14.28V72a14,14,0,0,0-14-14H94V40a2,2,0,0,1,2-2h96a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M192,24H96A16,16,0,0,0,80,40V56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V184.69l19.35,13.82A8,8,0,0,0,208,192V40A16,16,0,0,0,192,24ZM160,208.46l-43.36-31a8,8,0,0,0-9.3,0L64,208.45V72h96Zm32-32L176,165V72a16,16,0,0,0-16-16H96V40h96Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,40V192l-32-22.85V72a8,8,0,0,0-8-8H88V40a8,8,0,0,1,8-8h96A8,8,0,0,1,200,40Z\"/>";

export const Bookmarks = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BookmarksProps) => {
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
