import { SVGProps } from "react";

export type AddressBookTabsVariant = "duotone" | "fill" | "light";

export interface AddressBookTabsProps extends SVGProps<SVGSVGElement> {
  variant?: AddressBookTabsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,48h24V88H184Zm0,56h24v48H184Zm-38,71.75a8,8,0,0,1-9.74-5.76c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,0,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,151.75,166,8,8,0,0,1,146,175.75ZM208,208H184V168h24v40Zm-80-88a16,16,0,1,1-16-16A16,16,0,0,1,128,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm-18,68h20v52H190Zm20-54V90H190V46h18A2,2,0,0,1,210,48ZM46,208V48a2,2,0,0,1,2-2H178V210H48A2,2,0,0,1,46,208Zm162,2H190V166h20v42A2,2,0,0,1,208,210Zm-58.19-43.49A38,38,0,0,0,131.23,143a30,30,0,1,0-38.45,0A38,38,0,0,0,74.19,166.5a6,6,0,0,0,11.62,3C88.67,158.38,99.93,150,112,150s23.34,8.38,26.19,19.49a6,6,0,0,0,11.62-3ZM94,120a18,18,0,1,1,18,18A18,18,0,0,1,94,120Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-16,72h16v48H192Zm16-16H192V48h16ZM48,48H176V208H48ZM208,208H192V168h16v40Zm-56.25-42a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,72.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM96,120a16,16,0,1,1,16,16A16,16,0,0,1,96,120Z\"/>";
const SECONDARY_PATHS = "<path d=\"M48,40a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H184V40Zm64,104a24,24,0,1,1,24-24A24,24,0,0,1,112,144Z\"/>";

export const AddressBookTabs = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AddressBookTabsProps) => {
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
