import { SVGProps } from "react";

export type TextHSixVariant = "duotone" | "fill" | "light";

export interface TextHSixProps extends SVGProps<SVGSVGElement> {
  variant?: TextHSixVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M192,152a16,16,0,1,1-16-16A16,16,0,0,1,192,152ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM128,80a8,8,0,0,0-16,0v32H72V80a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V128h40v32a8,8,0,0,0,16,0Zm80,72a32,32,0,0,0-32-32l11.55-20a8,8,0,0,0-13.86-8l-25.4,44-.14.27A32,32,0,1,0,208,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M212,146a34.5,34.5,0,0,0-5.6.47l18.75-31.39a6,6,0,0,0-10.3-6.16l-32.25,54-.22.41A34,34,0,1,0,212,146Zm0,56a22,22,0,1,1,22-22A22,22,0,0,1,212,202ZM150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0Zm96,124a36,36,0,1,1-67.34-17.68c.07-.14.14-.28.22-.42l32.25-54a8,8,0,0,1,13.74,8.2l-16.69,28c.6,0,1.21-.05,1.82-.05A36,36,0,0,1,248,180Zm-16,0a20,20,0,1,0-20,20A20,20,0,0,0,232,180Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,72V192a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56H224A16,16,0,0,1,240,72Z\"/>";

export const TextHSix = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextHSixProps) => {
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
