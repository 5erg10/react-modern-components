import { SVGProps } from "react";

export type PhoneSlashVariant = "duotone" | "fill" | "light";

export interface PhoneSlashProps extends SVGProps<SVGSVGElement> {
  variant?: PhoneSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M236.28,177.85a16,16,0,0,1-18.38,5.07l-24.76-19a3.43,3.43,0,0,1-.53-.48L109.18,71.62a4,4,0,0,1,2.55-6.68c43-4.62,87.74,9.12,119.86,41.24h0C251.58,126.17,253.51,155.64,236.28,177.85ZM53.93,34.62A8,8,0,1,0,42.09,45.38L69.71,75.77a142,142,0,0,0-45.3,30.41c-20,20-21.92,49.46-4.69,71.67a16,16,0,0,0,18.38,5.07l49-17.37.29-.11a16,16,0,0,0,9.75-11.72l5.9-29.51a73.64,73.64,0,0,1,8.57-2.39l90.5,99.56a8,8,0,1,0,11.84-10.76Z\"/>";
const LIGHT_INNER     = "<path d=\"M52.44,36A6,6,0,0,0,43.56,44L73.08,76.51a139.32,139.32,0,0,0-47.27,31.08c-19.25,19.26-21.11,47.65-4.52,69A14,14,0,0,0,37.39,181l49-17.37.22-.09a13.93,13.93,0,0,0,8.53-10.25l5.9-29.51a2,2,0,0,1,1.21-1.47,80.07,80.07,0,0,1,10-2.75L203.56,220a6,6,0,0,0,8.88-8.08ZM98.29,111a14,14,0,0,0-9,10.45L83.37,151a2,2,0,0,1-1.15,1.43L33.28,169.77l-.22.08a2,2,0,0,1-2.29-.58c-13-16.73-11.56-38.11,3.53-53.19A127.91,127.91,0,0,1,81.75,86l21.34,23.48C101.47,110,99.87,110.47,98.29,111Zm136.42,65.61a14,14,0,0,1-16.1,4.41l-9.28-3.29a6,6,0,1,1,4-11.31l9.38,3.33.22.08a2,2,0,0,0,2.29-.58c13-16.73,11.56-38.11-3.53-53.19C195.64,90,158.86,76.2,120.83,78.19a6,6,0,1,1-.63-12c41.44-2.15,81.52,12.93,110,41.39C249.44,126.85,251.3,155.24,234.71,176.63Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M53.93,34.62A8,8,0,1,0,42.09,45.38L69.68,75.74a141.26,141.26,0,0,0-45.27,30.44c-20,20-21.92,49.46-4.69,71.67a16,16,0,0,0,18.38,5.07l49-17.37.29-.11a16,16,0,0,0,9.75-11.72l5.9-29.51a75.89,75.89,0,0,1,8.56-2.4l90.51,99.57a8,8,0,1,0,11.84-10.76Zm43.7,74.52a16,16,0,0,0-10.32,11.94l-5.9,29.5-48.78,17.3c-.1,0-.17.13-.27.17-12.33-15.9-11-36.22,3.36-50.56a125.79,125.79,0,0,1,45.47-29.1l18.3,20.14C98.87,108.73,98.25,108.92,97.63,109.14Zm138.65,68.71a16,16,0,0,1-18.38,5.07l-9.25-3.28A8,8,0,0,1,214,164.56l9.37,3.32.3.12c12.3-15.85,11-36.17-3.39-50.51-25.66-25.66-61.88-39.27-99.35-37.31a8,8,0,1,1-.83-16c42-2.19,82.63,13.1,111.49,42C251.58,126.17,253.51,155.64,236.28,177.85Z\"/>";
const SECONDARY_PATHS = "<path d=\"M230,173a8,8,0,0,1-9.26,2.47L171.58,158a8,8,0,0,1-4.86-5.8l-6.21-29.74a7.94,7.94,0,0,0-5.14-5.9,84.39,84.39,0,0,0-55.1.13,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,158L35.29,175.42A8,8,0,0,1,26,173c-14.6-18.83-13.26-43.83,4-61.12,53.11-53.11,142.77-53.11,195.88,0C243.23,129.12,244.57,154.12,230,173Z\"/>";

export const PhoneSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PhoneSlashProps) => {
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
