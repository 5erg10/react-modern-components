import { SVGProps } from "react";

export type BlueprintVariant = "duotone" | "fill" | "light";

export interface BlueprintProps extends SVGProps<SVGSVGElement> {
  variant?: BlueprintVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M136,120h24v16H136ZM240,64V200a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A32,32,0,0,1,48,32H64a8,8,0,0,1,8,8V56H232A8,8,0,0,1,240,64ZM56,48H48A16,16,0,0,0,32,64v84.29A31.82,31.82,0,0,1,48,144h8Zm120,88V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16H104a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,58H70V40a6,6,0,0,0-6-6H48A30,30,0,0,0,18,64V176a30,30,0,0,0,30,30H232a6,6,0,0,0,6-6V64A6,6,0,0,0,232,58ZM30,64A18,18,0,0,1,48,46H58V146H48a29.87,29.87,0,0,0-18,6ZM226,194H48a18,18,0,0,1,0-36H64a6,6,0,0,0,6-6V70H226ZM104,138a6,6,0,0,0,0,12h18v10a6,6,0,0,0,12,0V150h28v10a6,6,0,0,0,12,0V150h18a6,6,0,0,0,0-12H174V118h18a6,6,0,0,0,0-12H174V96a6,6,0,0,0-12,0v10H134V96a6,6,0,0,0-12,0v10H104a6,6,0,0,0,0,12h18v20Zm30-20h28v20H134Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,56H72V40a8,8,0,0,0-8-8H48A32,32,0,0,0,16,64V176a32,32,0,0,0,32,32H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56ZM32,64A16,16,0,0,1,48,48h8v96H48a31.82,31.82,0,0,0-16,4.29ZM224,192H48a16,16,0,0,1,0-32H64a8,8,0,0,0,8-8V72H224ZM104,136a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h24v8a8,8,0,0,0,16,0v-8h16a8,8,0,0,0,0-16H176V120h16a8,8,0,0,0,0-16H176V96a8,8,0,0,0-16,0v8H136V96a8,8,0,0,0-16,0v8H104a8,8,0,0,0,0,16h16v16Zm32-16h24v16H136Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,64V200H48a24,24,0,0,1,0-48H64V64Z\"/>";

export const Blueprint = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BlueprintProps) => {
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
