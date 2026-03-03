import { SVGProps } from "react";

export type UserSquareVariant = "duotone" | "fill" | "light";

export interface UserSquareProps extends SVGProps<SVGSVGElement> {
  variant?: UserSquareVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208h3.67a80.58,80.58,0,0,1,26.07-38.25q3.08-2.48,6.36-4.62a4,4,0,0,1,4.81.33,59.82,59.82,0,0,0,78.18,0,4,4,0,0,1,4.81-.33q3.28,2.15,6.36,4.62A80.58,80.58,0,0,1,204.33,208H208Z\"/>";
const LIGHT_INNER     = "<path d=\"M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM65.77,210a66.43,66.43,0,0,1,20.77-29.36,66,66,0,0,1,82.92,0A66.43,66.43,0,0,1,190.23,210ZM210,208a2,2,0,0,1-2,2h-5.17a77.85,77.85,0,0,0-49.38-51.71,46,46,0,1,0-50.9,0A77.85,77.85,0,0,0,53.17,210H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM68.67,208A64.45,64.45,0,0,1,87.8,182.2a64,64,0,0,1,80.4,0A64.45,64.45,0,0,1,187.33,208ZM208,208h-3.67a79.87,79.87,0,0,0-46.69-50.29,48,48,0,1,0-59.28,0A79.87,79.87,0,0,0,51.67,208H48V48H208V208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z\"/>";

export const UserSquare = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UserSquareProps) => {
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
