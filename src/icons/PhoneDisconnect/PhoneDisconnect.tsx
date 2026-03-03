import { SVGProps } from "react";

export type PhoneDisconnectVariant = "duotone" | "fill" | "light";

export interface PhoneDisconnectProps extends SVGProps<SVGSVGElement> {
  variant?: PhoneDisconnectVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M236.28,161.84a16,16,0,0,1-18.38,5.06l-49-17.39-.29-.11a16,16,0,0,1-9.72-11.59l-6.21-29.75h0a76.52,76.52,0,0,0-49.68.11l-5.9,29.52a16,16,0,0,1-9.75,11.73l-.29.11-49,17.37A15.8,15.8,0,0,1,32.35,168a16,16,0,0,1-12.63-6.14c-17.23-22.22-15.3-51.71,4.69-71.71,56.15-56.17,151-56.17,207.18,0h0C251.58,110.13,253.51,139.62,236.28,161.84ZM216,192H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M230.19,91.55h0c-55.39-55.4-149-55.4-204.38,0C6.56,110.82,4.7,139.22,21.29,160.61A14,14,0,0,0,37.39,165l49-17.38.22-.09a13.93,13.93,0,0,0,8.53-10.25l5.9-29.52a1.93,1.93,0,0,1,1.21-1.47,78.53,78.53,0,0,1,51.18-.11,1.93,1.93,0,0,1,1.22,1.45l6.21,29.75a14,14,0,0,0,8.5,10.14l.23.08,49,17.4a14,14,0,0,0,16.1-4.42C251.3,139.22,249.44,110.82,230.19,91.55Zm-5,61.71a2,2,0,0,1-2.29.58l-.22-.09-49-17.38A2,2,0,0,1,172.6,135l-6.22-29.74a14,14,0,0,0-9.06-10.35,90.53,90.53,0,0,0-59,.13,14,14,0,0,0-9,10.45L83.37,135a2,2,0,0,1-1.15,1.44L33.28,153.75l-.22.09a2,2,0,0,1-2.29-.58c-13-16.74-11.56-38.12,3.53-53.22,25.39-25.4,59.55-38.1,93.7-38.1s68.31,12.7,93.7,38.1C236.79,115.14,238.21,136.52,225.23,153.26ZM222,200a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,200Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231.59,90.13h0C175.44,34,80.56,34,24.41,90.13c-20,20-21.92,49.49-4.69,71.71A16,16,0,0,0,32.35,168a15.8,15.8,0,0,0,5.75-1.08l49-17.37.29-.11a16,16,0,0,0,9.75-11.73l5.9-29.52a76.52,76.52,0,0,1,49.68-.11h0l6.21,29.75a16,16,0,0,0,9.72,11.59l.29.11,49,17.39a16,16,0,0,0,18.38-5.06C253.51,139.62,251.58,110.13,231.59,90.13ZM223.67,152l-.3-.12-48.82-17.33-6.21-29.74A16,16,0,0,0,158,93a92.56,92.56,0,0,0-60.34.13,16,16,0,0,0-10.32,12l-5.9,29.51L32.63,151.86c-.1,0-.17.13-.27.17-12.33-15.91-11-36.23,3.36-50.58,25-25,58.65-37.53,92.28-37.53s67.27,12.51,92.28,37.53C234.61,115.8,236,136.12,223.67,152Zm.32,48a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,200Z\"/>";
const SECONDARY_PATHS = "<path d=\"M230,157a8,8,0,0,1-9.26,2.47L171.58,142a8,8,0,0,1-4.86-5.8l-6.21-29.74a7.94,7.94,0,0,0-5.14-5.9,84.39,84.39,0,0,0-55.1.13,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,142L35.29,159.42A8,8,0,0,1,26,157c-14.6-18.83-13.26-43.83,4-61.12,53.11-53.11,142.77-53.11,195.88,0C243.23,113.12,244.57,138.12,230,157Z\"/>";

export const PhoneDisconnect = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PhoneDisconnectProps) => {
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
