import { SVGProps } from "react";

export type QueueVariant = "duotone" | "fill" | "light";

export interface QueueProps extends SVGProps<SVGSVGElement> {
  variant?: QueueVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM64,72H192a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm40,112H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm92.44,22.66-48,32A8,8,0,0,1,144,192a8,8,0,0,1-8-8V120a8,8,0,0,1,12.44-6.66l48,32a8,8,0,0,1,0,13.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm102,58H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm0,64H40a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm110-26a6,6,0,0,1-2.82,5.09l-64,40A6,6,0,0,1,170,200V120a6,6,0,0,1,9.18-5.09l64,40A6,6,0,0,1,246,160Zm-17.32,0L182,130.83v58.34Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm112-24a8,8,0,0,1-3.76,6.78l-64,40A8,8,0,0,1,168,200V120a8,8,0,0,1,12.24-6.78l64,40A8,8,0,0,1,248,160Zm-23.09,0L184,134.43v51.14Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,160l-64,40V120Z\"/>";

export const Queue = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: QueueProps) => {
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
