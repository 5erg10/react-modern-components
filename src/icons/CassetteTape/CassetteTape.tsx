import { SVGProps } from "react";

export type CassetteTapeVariant = "duotone" | "fill" | "light";

export interface CassetteTapeProps extends SVGProps<SVGSVGElement> {
  variant?: CassetteTapeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M156.3,96a31.92,31.92,0,0,0,0,32H99.7a31.92,31.92,0,0,0,0-32ZM72,96a16,16,0,1,0,16,16A16,16,0,0,0,72,96ZM240,64V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H224A16,16,0,0,1,240,64ZM186,192l-15.6-20.8A8,8,0,0,0,164,168H92a8,8,0,0,0-6.4,3.2L70,192Zm30-80a32,32,0,0,0-32-32H72a32,32,0,0,0,0,64H184A32,32,0,0,0,216,112ZM184,96a16,16,0,1,0,16,16A16,16,0,0,0,184,96Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50ZM76,194l15-20h74l15,20Zm150-2a2,2,0,0,1-2,2H195l-22.2-29.6A6,6,0,0,0,168,162H88a6,6,0,0,0-4.8,2.4L61,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM176,82H80a30,30,0,0,0,0,60h96a30,30,0,0,0,0-60ZM152,94a29.92,29.92,0,0,0,0,36H104a29.92,29.92,0,0,0,0-36ZM62,112a18,18,0,1,1,18,18A18,18,0,0,1,62,112Zm114,18a18,18,0,1,1,18-18A18,18,0,0,1,176,130Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM80,192l12-16h72l12,16Zm144,0H196l-21.6-28.8A8,8,0,0,0,168,160H88a8,8,0,0,0-6.4,3.2L60,192H32V64H224V192ZM176,80H80a32,32,0,0,0,0,64h96a32,32,0,0,0,0-64ZM148.3,96a31.92,31.92,0,0,0,0,32H107.7a31.92,31.92,0,0,0,0-32ZM64,112a16,16,0,1,1,16,16A16,16,0,0,1,64,112Zm112,16a16,16,0,1,1,16-16A16,16,0,0,1,176,128Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,168l24,32H64l24-32Zm8-80a24,24,0,1,0,24,24A24,24,0,0,0,176,88Zm-72,24a24,24,0,1,0-24,24A24,24,0,0,0,104,112Z\"/>";

export const CassetteTape = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CassetteTapeProps) => {
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
