import { SVGProps } from "react";

export type AddressBookVariant = "duotone" | "fill" | "light";

export interface AddressBookProps extends SVGProps<SVGSVGElement> {
  variant?: AddressBookVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M160,112a24,24,0,1,1-24-24A24,24,0,0,1,160,112Zm64-72V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V192H32a8,8,0,0,1,0-16H48V136H32a8,8,0,0,1,0-16H48V80H32a8,8,0,0,1,0-16H48V40A16,16,0,0,1,64,24H208A16,16,0,0,1,224,40ZM190.4,163.2A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6Z\"/>";
const LIGHT_INNER     = "<path d=\"M159.11,142.13a38,38,0,1,0-46.22,0A65.75,65.75,0,0,0,83.2,164.4a6,6,0,0,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.2A65.75,65.75,0,0,0,159.11,142.13ZM110,112a26,26,0,1,1,26,26A26,26,0,0,1,110,112Zm98-86H64A14,14,0,0,0,50,40V66H32a6,6,0,0,0,0,12H50v44H32a6,6,0,0,0,0,12H50v44H32a6,6,0,0,0,0,12H50v26a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V40A14,14,0,0,0,208,26Zm2,190a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M83.19,174.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,163,141.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,81.6,163.2,8,8,0,0,0,83.19,174.4ZM112,112a24,24,0,1,1,24,24A24,24,0,0,1,112,112Zm96-88H64A16,16,0,0,0,48,40V64H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v40H32a8,8,0,0,0,0,16H48v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V40A16,16,0,0,0,208,24Zm0,192H64V40H208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V40A8,8,0,0,0,208,32ZM136,144a32,32,0,1,1,32-32A32,32,0,0,1,136,144Z\"/>";

export const AddressBook = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: AddressBookProps) => {
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
