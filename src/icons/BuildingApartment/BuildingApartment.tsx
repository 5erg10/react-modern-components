import { SVGProps } from "react";

export type BuildingApartmentVariant = "duotone" | "fill" | "light";

export interface BuildingApartmentProps extends SVGProps<SVGSVGElement> {
  variant?: BuildingApartmentVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,176H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm64,64H112V168h32Zm-8-64H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm56,96H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,210H230V72a6,6,0,0,0-6-6H182V40a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6V98H32a6,6,0,0,0-6,6V210H16a6,6,0,0,0,0,12H240a6,6,0,0,0,0-12ZM38,110H80a6,6,0,0,0,6-6V46h84V72a6,6,0,0,0,6,6h42V210H150V168a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6v42H38ZM138,210H118V174h20ZM114,72a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,72Zm0,32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,104Zm56,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,104ZM86,136a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H80A6,6,0,0,1,86,136Zm0,32a6,6,0,0,1-6,6H64a6,6,0,0,1,0-12H80A6,6,0,0,1,86,168Zm28-32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,136Zm56,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,136Zm0,32a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,168Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,112H80a8,8,0,0,0,8-8V48h80V72a8,8,0,0,0,8,8h40V208H152V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40H40Zm96,96H120V176h16ZM112,72a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,72Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,104Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,104ZM88,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,136Zm0,32a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H80A8,8,0,0,1,88,168Zm24-32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H120A8,8,0,0,1,112,136Zm56,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,72V216H144V168H112v48H32V104H80V40h96V72Z\"/>";

export const BuildingApartment = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BuildingApartmentProps) => {
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
