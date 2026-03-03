import { SVGProps } from "react";

export type EjectVariant = "duotone" | "fill" | "light";

export interface EjectProps extends SVGProps<SVGSVGElement> {
  variant?: EjectVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M33.31,126.24a15.59,15.59,0,0,1,3.1-17.12h0l73.73-77.51a24.76,24.76,0,0,1,35.72,0l73.73,77.51a15.59,15.59,0,0,1,3.1,17.12A16.18,16.18,0,0,1,207.76,136H48.24A16.18,16.18,0,0,1,33.31,126.24ZM208,152H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V168A16,16,0,0,0,208,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,154H48a14,14,0,0,0-14,14v24a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V168A14,14,0,0,0,208,154Zm2,38a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V168a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM48.24,134H207.76a14.19,14.19,0,0,0,13.1-8.55,13.61,13.61,0,0,0-2.72-15L144.41,33a22.76,22.76,0,0,0-32.82,0L37.86,110.5a13.61,13.61,0,0,0-2.72,15A14.19,14.19,0,0,0,48.24,134Zm-1.69-15.23,73.73-77.51a10.77,10.77,0,0,1,15.44,0l73.73,77.51a1.67,1.67,0,0,1,.38,2,2.11,2.11,0,0,1-2.07,1.27H48.24a2.11,2.11,0,0,1-2.07-1.27A1.67,1.67,0,0,1,46.55,118.77Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,152H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V168A16,16,0,0,0,208,152Zm0,40H48V168H208ZM48.24,136H207.76a16.18,16.18,0,0,0,14.93-9.76,15.59,15.59,0,0,0-3.1-17.12L145.86,31.61a24.76,24.76,0,0,0-35.72,0L36.41,109.12h0a15.59,15.59,0,0,0-3.1,17.12A16.18,16.18,0,0,0,48.24,136Zm73.49-93.36a8.77,8.77,0,0,1,12.54,0L207.85,120H48.14Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,168v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H208A8,8,0,0,1,216,168ZM48.23,128H207.77c7.16,0,10.89-8.27,6-13.37l-73.74-77.5a16.76,16.76,0,0,0-24.14,0l-73.74,77.5C37.34,119.73,41.07,128,48.23,128Z\"/>";

export const Eject = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EjectProps) => {
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
