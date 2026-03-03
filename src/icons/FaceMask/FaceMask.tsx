import { SVGProps } from "react";

export type FaceMaskVariant = "duotone" | "fill" | "light";

export interface FaceMaskProps extends SVGProps<SVGSVGElement> {
  variant?: FaceMaskVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,72h-.85a16,16,0,0,0-9.68-10L133.47,33a16.06,16.06,0,0,0-10.94,0l-80,29.09a16,16,0,0,0-9.68,10H32A32,32,0,0,0,0,104v24a32,32,0,0,0,32,32h5.19c7.19,15.8,21.79,29.43,43.23,40.16a191.16,191.16,0,0,0,46.15,15.71,7.93,7.93,0,0,0,2.86,0,191.16,191.16,0,0,0,46.15-15.71c21.44-10.73,36-24.36,43.23-40.16H224a32,32,0,0,0,32-32V104A32,32,0,0,0,224,72ZM32,144a16,16,0,0,1-16-16V104A16,16,0,0,1,32,88v48a58.74,58.74,0,0,0,.55,8Zm136,0H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm72,16a16,16,0,0,1-16,16h-.55a58.74,58.74,0,0,0,.55-8V88a16,16,0,0,1,16,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M174,104a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,104Zm-6,26H88a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Zm86-26v24a30,30,0,0,1-30,30h-6.5c-6.81,15.88-21.28,29.6-42.82,40.37a189,189,0,0,1-45.61,15.53,5.77,5.77,0,0,1-2.14,0,189,189,0,0,1-45.61-15.53C59.78,187.6,45.31,173.88,38.5,158H32A30,30,0,0,1,2,128V104A30,30,0,0,1,32,74h2.35a14,14,0,0,1,8.87-10.07l80-29.09a14,14,0,0,1,9.56,0l80,29.09A14,14,0,0,1,221.65,74H224A30,30,0,0,1,254,104ZM34.89,146A57,57,0,0,1,34,136V86H32a18,18,0,0,0-18,18v24a18,18,0,0,0,18,18ZM210,136V77.09a2,2,0,0,0-1.32-1.88l-80-29.09a2,2,0,0,0-1.36,0l-80,29.09A2,2,0,0,0,46,77.09V136c0,20.7,13.61,38,40.46,51.52A180.79,180.79,0,0,0,128,201.88a181,181,0,0,0,41.54-14.36C196.39,174,210,156.7,210,136Zm32-32a18,18,0,0,0-18-18h-2v50a57,57,0,0,1-.89,10H224a18,18,0,0,0,18-18Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M176,104a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,104Zm-8,24H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm88-24v24a32,32,0,0,1-32,32h-5.19c-7.19,15.8-21.79,29.43-43.23,40.16a191.16,191.16,0,0,1-46.15,15.71,7.93,7.93,0,0,1-2.86,0,191.16,191.16,0,0,1-46.15-15.71C59,189.43,44.38,175.8,37.19,160H32A32,32,0,0,1,0,128V104A32,32,0,0,1,32,72h.85a16,16,0,0,1,9.68-10l80-29.09a16.06,16.06,0,0,1,10.94,0l80,29.09a16,16,0,0,1,9.68,10H224A32,32,0,0,1,256,104ZM32.55,144a58.74,58.74,0,0,1-.55-8V88a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16ZM208,136V77.09L128,48,48,77.09V136c0,45,69.09,61.52,80,63.84C138.89,197.52,208,181,208,136Zm32-32a16,16,0,0,0-16-16v48a58.74,58.74,0,0,1-.55,8H224a16,16,0,0,0,16-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,77.09V136c0,56-88,72-88,72s-88-16-88-72V77.09a8,8,0,0,1,5.27-7.52l80-29.09a8,8,0,0,1,5.46,0l80,29.09A8,8,0,0,1,216,77.09Z\"/>";

export const FaceMask = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FaceMaskProps) => {
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
