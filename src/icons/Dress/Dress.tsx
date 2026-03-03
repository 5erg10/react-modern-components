import { SVGProps } from "react";

export type DressVariant = "duotone" | "fill" | "light";

export interface DressProps extends SVGProps<SVGSVGElement> {
  variant?: DressVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M66.26,80.23a15.26,15.26,0,0,1-1.65-12.17,15.54,15.54,0,0,1,2-4.76L88,32.7V8a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,104,8.27V32.42L109.25,39a23.91,23.91,0,0,0,19.13,9,24.67,24.67,0,0,0,18.71-9.43L152,32.42V8a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,168,8.27V32.7l21.42,30.6a15.54,15.54,0,0,1,2,4.76,15.26,15.26,0,0,1-1.65,12.17,1.74,1.74,0,0,0-.11.18l-13.86,21.74A4,4,0,0,1,172.4,104H83.6a4,4,0,0,1-3.37-1.85L66.37,80.41A1.74,1.74,0,0,0,66.26,80.23Zm148.5,129.56a2.52,2.52,0,0,0-.15-.34L173.69,122.3a4,4,0,0,0-3.63-2.3H85.94a4,4,0,0,0-3.63,2.3L41.39,209.45a2.52,2.52,0,0,0-.15.34A16.19,16.19,0,0,0,41.6,223,16,16,0,0,0,56,232H200a16,16,0,0,0,14.39-9A16.19,16.19,0,0,0,214.76,209.79Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.86,210.49a1.08,1.08,0,0,0-.08-.19l-45.94-97.86,21.08-33.1.09-.14a14,14,0,0,0,0-14.4c-.07-.12-.15-.24-.23-.36L166,33.33V8a6,6,0,0,0-12,0V33.12l-5.7,7.12a26,26,0,0,1-40.6,0L102,33.12V8A6,6,0,0,0,90,8V33.33L68.22,64.44c-.08.12-.16.24-.23.36a14,14,0,0,0,0,14.4l.09.14,21.08,33.1L43.22,210.3a1.08,1.08,0,0,0-.08.19A14,14,0,0,0,56,230H200a14,14,0,0,0,12.87-19.51ZM78.26,73a2,2,0,0,1-.05-1.89L96.32,45.23l2,2.51a38,38,0,0,0,59.34,0l2-2.51,18.11,25.86a2,2,0,0,1,0,1.89l-21,33H99.29ZM201.66,217.1a1.93,1.93,0,0,1-1.67.9H56a2,2,0,0,1-1.87-2.72L99.81,118h56.38l45.67,97.28A1.92,1.92,0,0,1,201.66,217.1Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18.11-.18a16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46l.11.18,20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,224H56a8,8,0,0,1-7.35-11.15L96,112,73.14,76.12a8,8,0,0,1,0-8.24L96,35.23,103,44a32,32,0,0,0,50,0l7-8.76,22.86,32.65a8,8,0,0,1,0,8.24L160,112l47.34,100.85A8,8,0,0,1,200,224Z\"/>";

export const Dress = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: DressProps) => {
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
