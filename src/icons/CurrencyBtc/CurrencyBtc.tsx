import { SVGProps } from "react";

export type CurrencyBtcVariant = "duotone" | "fill" | "light";

export interface CurrencyBtcProps extends SVGProps<SVGSVGElement> {
  variant?: CurrencyBtcVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M176,152a16,16,0,0,1-16,16H112V136h48A16,16,0,0,1,176,152Zm64-24A104,104,0,1,1,136,24,104.11,104.11,0,0,1,240,128Zm-48,24a32,32,0,0,0-15.51-27.42A32,32,0,0,0,160,73V64a8,8,0,0,0-16,0v8H128V64a8,8,0,0,0-16,0v8H96a8,8,0,0,0,0,16v80a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h16v8a8,8,0,0,0,16,0v-8A32,32,0,0,0,192,152Zm-24-48a16,16,0,0,0-16-16H112v32h40A16,16,0,0,0,168,104Z\"/>";
const LIGHT_INNER     = "<path d=\"M174.69,116.41A42,42,0,0,0,150,42.05V24a6,6,0,0,0-12,0V42H118V24a6,6,0,0,0-12,0V42H72a6,6,0,0,0,0,12H82V194H72a6,6,0,0,0,0,12h34v18a6,6,0,0,0,12,0V206h20v18a6,6,0,0,0,12,0V206h10a46,46,0,0,0,14.69-89.59ZM178,84a30,30,0,0,1-30,30H94V54h54A30,30,0,0,1,178,84ZM160,194H94V126h66a34,34,0,0,1,0,68Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M178.48,115.7A44,44,0,0,0,152,40.19V24a8,8,0,0,0-16,0V40H120V24a8,8,0,0,0-16,0V40H72a8,8,0,0,0,0,16h8V192H72a8,8,0,0,0,0,16h32v16a8,8,0,0,0,16,0V208h16v16a8,8,0,0,0,16,0V208h8a48,48,0,0,0,18.48-92.3ZM96,56h52a28,28,0,0,1,0,56H96Zm64,136H96V128h64a32,32,0,0,1,0,64Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,160a40,40,0,0,1-40,40H88V48h60a36,36,0,0,1,0,72h12A40,40,0,0,1,200,160Z\"/>";

export const CurrencyBtc = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CurrencyBtcProps) => {
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
