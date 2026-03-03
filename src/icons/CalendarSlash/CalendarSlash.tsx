import { SVGProps } from "react";

export type CalendarSlashVariant = "duotone" | "fill" | "light";

export interface CalendarSlashProps extends SVGProps<SVGSVGElement> {
  variant?: CalendarSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,48V187.57a4,4,0,0,1-7,2.7L116.8,80H208V48H184v8a8,8,0,0,1-8.52,8A8.18,8.18,0,0,1,168,55.73V48H87.71l-8.46-9.31a4,4,0,0,1,3-6.69H168V24a8,8,0,0,1,8.52-8A8.18,8.18,0,0,1,184,24.27V32h24A16,16,0,0,1,224,48ZM213.92,210.62A8,8,0,0,1,208,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32a8,8,0,0,1,5.93,2.62ZM73.55,80,48,51.89V80Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,48,34,14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a6,6,0,0,0,4.44-10ZM46.26,47,78.07,82H46V48A2.06,2.06,0,0,1,46.26,47ZM48,210a2,2,0,0,1-2-2V94H89L194.44,210ZM222,48V177.23a6,6,0,1,1-12,0V94H134.88a6,6,0,0,1,0-12H210V48a2,2,0,0,0-2-2H182V56a6,6,0,0,1-12,0V46H91.25a6,6,0,0,1,0-12H170V24a6,6,0,0,1,12,0V34h26A14,14,0,0,1,222,48Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.92,34.62A8,8,0,0,0,48,32,16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a8,8,0,0,0,5.92-13.38ZM73.55,80H48V51.88ZM48,208V96H88.1L189.92,208ZM224,48V177.23a8,8,0,1,1-16,0V96H134.88a8,8,0,0,1,0-16H208V48H184v8a8,8,0,0,1-16,0V48H91.25a8,8,0,0,1,0-16H168V24a8,8,0,0,1,16,0v8h24A16,16,0,0,1,224,48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z\"/>";

export const CalendarSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CalendarSlashProps) => {
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
