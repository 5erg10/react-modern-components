import { SVGProps } from "react";

export type BugBeetleVariant = "duotone" | "fill" | "light";

export interface BugBeetleProps extends SVGProps<SVGSVGElement> {
  variant?: BugBeetleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,120H208V104h16a8,8,0,0,1,0,16ZM32,104a8,8,0,0,0,0,16H48V104Zm176,56c0,2.7-.14,5.37-.4,8H224a8,8,0,0,1,0,16H204.32a80,80,0,0,1-152.64,0H32a8,8,0,0,1,0-16H48.4c-.26-2.63-.4-5.3-.4-8v-8H32a8,8,0,0,1,0-16H48V120H208v16h16a8,8,0,0,1,0,16H208Zm-72-16a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0ZM69.84,57.15A79.76,79.76,0,0,0,48.4,104H207.6a79.76,79.76,0,0,0-21.44-46.85l19.5-19.49a8,8,0,0,0-11.32-11.32l-20.29,20.3a79.74,79.74,0,0,0-92.1,0L61.66,26.34A8,8,0,0,0,50.34,37.66Z\"/>";
const LIGHT_INNER     = "<path d=\"M206,150h18a6,6,0,0,0,0-12H206V118h18a6,6,0,0,0,0-12H205.75a77.81,77.81,0,0,0-22.38-48.88l20.87-20.88a6,6,0,1,0-8.48-8.48L174.27,49.25a77.8,77.8,0,0,0-92.53,0L60.24,27.76a6,6,0,0,0-8.48,8.48L72.64,57.12A77.76,77.76,0,0,0,50.25,106H32a6,6,0,0,0,0,12H50v20H32a6,6,0,0,0,0,12H50v10a78.6,78.6,0,0,0,.66,10H32a6,6,0,0,0,0,12H53.18a78,78,0,0,0,149.64,0H224a6,6,0,0,0,0-12H205.34a78.6,78.6,0,0,0,.66-10ZM128,46a66.07,66.07,0,0,1,65.71,60H62.29A66.07,66.07,0,0,1,128,46Zm6,179.71V144a6,6,0,0,0-12,0v81.71A66.07,66.07,0,0,1,62,160V118H194v42A66.07,66.07,0,0,1,134,225.71Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M208,152h16a8,8,0,0,0,0-16H208V120h16a8,8,0,0,0,0-16H207.6a79.76,79.76,0,0,0-21.44-46.85l19.5-19.49a8,8,0,0,0-11.32-11.32l-20.29,20.3a79.74,79.74,0,0,0-92.1,0L61.66,26.34A8,8,0,0,0,50.34,37.66l19.5,19.49A79.76,79.76,0,0,0,48.4,104H32a8,8,0,0,0,0,16H48v16H32a8,8,0,0,0,0,16H48v8c0,2.7.14,5.37.4,8H32a8,8,0,0,0,0,16H51.68a80,80,0,0,0,152.64,0H224a8,8,0,0,0,0-16H207.6c.26-2.63.4-5.3.4-8ZM128,48a64.07,64.07,0,0,1,63.48,56h-127A64.07,64.07,0,0,1,128,48Zm8,175.48V144a8,8,0,0,0-16,0v79.48A64.07,64.07,0,0,1,64,160V120H192v40A64.07,64.07,0,0,1,136,223.48Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,112v48a72,72,0,0,1-72,72h0a72,72,0,0,1-72-72V112Z\"/>";

export const BugBeetle = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BugBeetleProps) => {
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
