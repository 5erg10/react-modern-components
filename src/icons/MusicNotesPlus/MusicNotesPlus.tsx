import { SVGProps } from "react";

export type MusicNotesPlusVariant = "duotone" | "fill" | "light";

export interface MusicNotesPlusProps extends SVGProps<SVGSVGElement> {
  variant?: MusicNotesPlusVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,48a8,8,0,0,1-8,8H208V72a8,8,0,0,1-16,0V56H176a8,8,0,0,1,0-16h16V24a8,8,0,0,1,16,0V40h16A8,8,0,0,1,232,48ZM160.6,77.86l-6.76-6.76A32.85,32.85,0,0,1,144,49.33a31.87,31.87,0,0,1,1.67-11.66,4,4,0,0,0-4.76-5.14L78.06,48.25A8,8,0,0,0,72,56V166.1A36,36,0,1,0,52.42,232C72.25,231.77,88,215.13,88,195.3V102.25l70.74-17.69A4,4,0,0,0,160.6,77.86Zm50.11,24.31a31.91,31.91,0,0,1-7.14,1.63,4,4,0,0,0-3.57,4V134.1A36,36,0,1,0,180.42,200c19.83-.23,35.58-16.86,35.58-36.7V106A4,4,0,0,0,210.71,102.17Z\"/>";
const LIGHT_INNER     = "<path d=\"M230,48a6,6,0,0,1-6,6H206V72a6,6,0,0,1-12,0V54H176a6,6,0,0,1,0-12h18V24a6,6,0,0,1,12,0V42h18A6,6,0,0,1,230,48Zm-16,64v52a34.06,34.06,0,1,1-12-25.89V112a6,6,0,0,1,12,0Zm-12,52a22,22,0,1,0-22,22A22,22,0,0,0,202,164ZM86,108.68V196a34.06,34.06,0,1,1-12-25.89V56a6,6,0,0,1,4.54-5.82l56-14a6,6,0,1,1,2.92,11.64L86,60.68V96.32l72.54-18.14a6,6,0,1,1,2.92,11.64ZM74,196a22,22,0,1,0-22,22A22,22,0,0,0,74,196Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,48a8,8,0,0,1-8,8H208V72a8,8,0,0,1-16,0V56H176a8,8,0,0,1,0-16h16V24a8,8,0,0,1,16,0V40h16A8,8,0,0,1,232,48Zm-16,64v52a36,36,0,1,1-16-29.92V112a8,8,0,0,1,16,0Zm-16,52a20,20,0,1,0-20,20A20,20,0,0,0,200,164ZM88,110.25V196a36,36,0,1,1-16-29.92V56a8,8,0,0,1,6.06-7.76l56-14a8,8,0,0,1,3.88,15.52L88,62.25v31.5l70.06-17.51a8,8,0,0,1,3.88,15.52ZM72,196a20,20,0,1,0-20,20A20,20,0,0,0,72,196Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,164a28,28,0,1,1-28-28A28,28,0,0,1,208,164ZM52,168a28,28,0,1,0,28,28A28,28,0,0,0,52,168Z\"/>";

export const MusicNotesPlus = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MusicNotesPlusProps) => {
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
