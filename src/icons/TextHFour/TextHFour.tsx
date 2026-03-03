import { SVGProps } from "react";

export type TextHFourVariant = "duotone" | "fill" | "light";

export interface TextHFourProps extends SVGProps<SVGSVGElement> {
  variant?: TextHFourVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M164.46,144,184,119.13V144ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM128,80a8,8,0,0,0-16,0v32H72V80a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V128h40v32a8,8,0,0,0,16,0Zm84,72a8,8,0,0,0-8-8h-4V96a8,8,0,0,0-14.29-4.94l-44,56A8,8,0,0,0,148,160h36v16a8,8,0,0,0,16,0V160h4A8,8,0,0,0,212,152Z\"/>";
const LIGHT_INNER     = "<path d=\"M150,56V176a6,6,0,0,1-12,0V122H46v54a6,6,0,0,1-12,0V56a6,6,0,0,1,12,0v54h92V56a6,6,0,0,1,12,0ZM254,184a6,6,0,0,1-6,6H238v18a6,6,0,0,1-12,0V190H176a6,6,0,0,1-4.74-9.68l56-72A6,6,0,0,1,238,112v66h10A6,6,0,0,1,254,184Zm-28-54.51L188.27,178H226Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,56V176a8,8,0,0,1-16,0V124H48v52a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v52h88V56a8,8,0,0,1,16,0ZM256,184a8,8,0,0,1-8,8h-8v16a8,8,0,0,1-16,0V192H176a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,240,112v64h8A8,8,0,0,1,256,184Zm-32-48.68L192.36,176H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,72V192a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56H232A16,16,0,0,1,248,72Z\"/>";

export const TextHFour = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextHFourProps) => {
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
