import { SVGProps } from "react";

export type SeatVariant = "duotone" | "fill" | "light";

export interface SeatProps extends SVGProps<SVGSVGElement> {
  variant?: SeatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,232a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,232Zm-16-88-64.22,0L112,80l14.19-26.32a1.51,1.51,0,0,0,.11-.22A16,16,0,0,0,119.15,32l-.47-.22L85,17.57A16,16,0,0,0,63.8,24.84l-22.12,44a16.1,16.1,0,0,0,0,14.32l58.11,116A15.93,15.93,0,0,0,114.11,208H208a16,16,0,0,0,16-16V160A16,16,0,0,0,208,144Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,232a6,6,0,0,1-6,6H112a6,6,0,1,1,0-12H216A6,6,0,0,1,222,232Zm0-72v32a14,14,0,0,1-14,14H114.11a13.94,13.94,0,0,1-12.53-7.74l-58.11-116a14.06,14.06,0,0,1,0-12.52l22.12-44a14,14,0,0,1,18.58-6.35l33.74,14.24.34.17a14,14,0,0,1,6.27,18.78l-.09.16L110.18,79.16a2,2,0,0,0,0,1.73l31.78,64a2,2,0,0,0,1.78,1.09H208A14,14,0,0,1,222,160Zm-12,0a2,2,0,0,0-2-2H143.77a13.94,13.94,0,0,1-12.52-7.74l-31.78-64a14,14,0,0,1,0-12.5l.09-.17,14.25-26.42a2,2,0,0,0,.08-1.47,2,2,0,0,0-.89-1.1L79.35,30.37,79,30.21a2,2,0,0,0-.89-.21,2,2,0,0,0-1.79,1.1l-22.12,44a2,2,0,0,0,0,1.78l58.12,116a2,2,0,0,0,1.79,1.11H208a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,232a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,232Zm0-72v32a16,16,0,0,1-16,16H114.11a15.93,15.93,0,0,1-14.32-8.85l-58.11-116a16.1,16.1,0,0,1,0-14.32l22.12-44A16,16,0,0,1,85,17.56l33.69,14.22.47.22a16,16,0,0,1,7.15,21.46,1.51,1.51,0,0,1-.11.22L112,80l31.78,64L208,144A16,16,0,0,1,224,160Zm-16,0H143.77a15.91,15.91,0,0,1-14.31-8.85l-31.79-64a16.07,16.07,0,0,1,0-14.29l.12-.22L112,46.32,78.57,32.21c-.16-.06-.31-.14-.46-.21L56,76,114.1,192H208Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,160v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73L104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208A8,8,0,0,1,216,160Z\"/>";

export const Seat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: SeatProps) => {
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
