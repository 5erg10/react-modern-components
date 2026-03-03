import { SVGProps } from "react";

export type StampVariant = "duotone" | "fill" | "light";

export interface StampProps extends SVGProps<SVGSVGElement> {
  variant?: StampVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm-16-96H151.57l15.71-73.29A32,32,0,0,0,136,16H120A32,32,0,0,0,88.72,54.71L104.43,128H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V144A16,16,0,0,0,208,128Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,224a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,224Zm0-80v40a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V144a14,14,0,0,1,14-14h58.9L90.68,54.29A30,30,0,0,1,120,18h16a30,30,0,0,1,29.33,36.29L149.1,130H208A14,14,0,0,1,222,144ZM119.17,130h17.66l16.76-78.23A18,18,0,0,0,136,30H120a18,18,0,0,0-17.6,21.77ZM210,144a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h56.43L88.72,54.71A32,32,0,0,1,120,16h16a32,32,0,0,1,31.29,38.71L151.57,128H208A16,16,0,0,1,224,144ZM120.79,128h14.42l16.43-76.65A16,16,0,0,0,136,32H120a16,16,0,0,0-15.65,19.35ZM208,184V144H48v40H208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M159.46,53l-17.78,83H114.32L96.54,53A24,24,0,0,1,120,24h16A24,24,0,0,1,159.46,53Z\"/>";

export const Stamp = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StampProps) => {
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
