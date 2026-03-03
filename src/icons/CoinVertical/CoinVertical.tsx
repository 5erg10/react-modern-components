import { SVGProps } from "react";

export type CoinVerticalVariant = "duotone" | "fill" | "light";

export interface CoinVerticalProps extends SVGProps<SVGSVGElement> {
  variant?: CoinVerticalVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M198.51,56.09C186.44,35.4,169.92,24,152,24H104C86.08,24,69.56,35.4,57.49,56.09,46.21,75.42,40,101,40,128s6.21,52.58,17.49,71.91C69.56,220.6,86.08,232,104,232h48c17.92,0,34.44-11.4,46.51-32.09C209.79,180.58,216,155,216,128S209.79,75.42,198.51,56.09ZM199.79,120h-32a152.78,152.78,0,0,0-9.68-48H188.7C194.82,85.38,198.86,102,199.79,120Zm-20.6-64H150.46a83.13,83.13,0,0,0-12-16H152C162,40,171.4,46,179.19,56ZM152,216H138.49a83.13,83.13,0,0,0,12-16h28.73C171.4,210,162,216,152,216Zm36.7-32H158.12a152.78,152.78,0,0,0,9.68-48h32C198.86,154,194.82,170.62,188.7,184Z\"/>";
const LIGHT_INNER     = "<path d=\"M196.78,57.09C185.08,37,169.18,26,152,26H104C86.82,26,70.92,37,59.22,57.09,48.12,76.13,42,101.31,42,128s6.12,51.87,17.22,70.91C70.92,219,86.82,230,104,230h48c17.18,0,33.08-11,44.78-31.09,11.1-19,17.22-44.22,17.22-70.91S207.88,76.13,196.78,57.09Zm5.1,64.91h-36c-.65-18.84-4.37-36.73-10.74-52H190C197.06,84.74,201.16,102.77,201.88,122ZM152,38c11.31,0,22.22,7.06,31.14,20H149.28l-.5-.91A76.8,76.8,0,0,0,133.49,38ZM69.58,192.86C59.54,175.63,54,152.6,54,128s5.54-47.63,15.58-64.86C79,46.93,91.26,38,104,38s25,8.93,34.42,25.14C148.46,80.37,154,103.4,154,128s-5.54,47.63-15.58,64.86C129,209.07,116.74,218,104,218S79,209.07,69.58,192.86ZM152,218H133.49a76.8,76.8,0,0,0,15.29-19.09l.5-.91h33.86C174.22,210.94,163.31,218,152,218Zm38-32H155.14c6.37-15.27,10.09-33.16,10.74-52h36C201.16,153.23,197.06,171.26,190,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M198.51,56.09C186.44,35.4,169.92,24,152,24H104C86.08,24,69.56,35.4,57.49,56.09,46.21,75.42,40,101,40,128s6.21,52.58,17.49,71.91C69.56,220.6,86.08,232,104,232h48c17.92,0,34.44-11.4,46.51-32.09C209.79,180.58,216,155,216,128S209.79,75.42,198.51,56.09ZM199.79,120h-32a152.78,152.78,0,0,0-9.68-48H188.7C194.82,85.38,198.86,102,199.79,120Zm-20.6-64H150.46a83.13,83.13,0,0,0-12-16H152C162,40,171.4,46,179.19,56ZM56,128c0-47.7,22-88,48-88s48,40.3,48,88-22,88-48,88S56,175.7,56,128Zm96,88H138.49a83.13,83.13,0,0,0,12-16h28.73C171.4,210,162,216,152,216Zm36.7-32H158.12a152.78,152.78,0,0,0,9.68-48h32C198.86,154,194.82,170.62,188.7,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M160,128c0,53-25.07,96-56,96s-56-43-56-96,25.07-96,56-96S160,75,160,128Z\"/>";

export const CoinVertical = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CoinVerticalProps) => {
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
