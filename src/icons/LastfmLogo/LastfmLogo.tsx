import { SVGProps } from "react";

export type LastfmLogoVariant = "duotone" | "fill" | "light";

export interface LastfmLogoProps extends SVGProps<SVGSVGElement> {
  variant?: LastfmLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,184H172.61a40.09,40.09,0,0,1-36.42-23.45l-23-50.48A24,24,0,0,0,91.39,96H80a24,24,0,0,0-24,24v24a24,24,0,0,0,24,24h8a23.92,23.92,0,0,0,18.74-9,8,8,0,1,1,12.48,10A39.83,39.83,0,0,1,88,184H80a40,40,0,0,1-40-40V120A40,40,0,0,1,80,80H91.39a40.09,40.09,0,0,1,36.42,23.45l22.95,50.48A24,24,0,0,0,172.61,168H184a16,16,0,0,0,0-32h-8a28,28,0,0,1,0-56h12a20,20,0,0,1,20,20,8,8,0,0,1-16,0,4,4,0,0,0-4-4H176a12,12,0,0,0,0,24h8a32,32,0,0,1,0,64Z\"/>";
const LIGHT_INNER     = "<path d=\"M246,160a38,38,0,0,1-38,38H190.57a54.21,54.21,0,0,1-48.94-31.16l-30.14-64.6A42.14,42.14,0,0,0,73.43,78H64a42,42,0,0,0-42,42v24a42,42,0,0,0,42,42h8a34,34,0,0,0,31.17-20.4,6,6,0,0,1,11,4.8A46,46,0,0,1,72,198H64a54.06,54.06,0,0,1-54-54V120A54.06,54.06,0,0,1,64,66h9.43a54.21,54.21,0,0,1,48.94,31.16l30.14,64.6A42.14,42.14,0,0,0,190.57,186H208a26,26,0,0,0,0-52H188a34,34,0,0,1,0-68h20a30,30,0,0,1,30,30,6,6,0,0,1-12,0,18,18,0,0,0-18-18H188a22,22,0,0,0,0,44h20A38,38,0,0,1,246,160Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,160a40,40,0,0,1-40,40H190.57a56.22,56.22,0,0,1-50.75-32.32l-30.14-64.6A40.15,40.15,0,0,0,73.43,80H64a40,40,0,0,0-40,40v24a40,40,0,0,0,40,40h8a32,32,0,0,0,29.34-19.2A8,8,0,1,1,116,171.2,48,48,0,0,1,72,200H64A56.06,56.06,0,0,1,8,144V120A56.06,56.06,0,0,1,64,64h9.43a56.22,56.22,0,0,1,50.75,32.32l30.14,64.6A40.15,40.15,0,0,0,190.57,184H208a24,24,0,0,0,0-48H188a36,36,0,0,1,0-72h20a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H188a20,20,0,0,0,0,40h20A40,40,0,0,1,248,160Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,160a32,32,0,0,1-32,32H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72H208a24,24,0,0,1,24,24Z\"/>";

export const LastfmLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: LastfmLogoProps) => {
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
