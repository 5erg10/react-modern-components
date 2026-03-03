import { SVGProps } from "react";

export type UserSwitchVariant = "duotone" | "fill" | "light";

export interface UserSwitchProps extends SVGProps<SVGSVGElement> {
  variant?: UserSwitchVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M84,120a44,44,0,1,1,44,44A44,44,0,0,1,84,120Zm126.16,57.18a8.21,8.21,0,0,0-10.86,2.41,87.42,87.42,0,0,1-5.52,6.85A79.76,79.76,0,0,0,172,165.1a4,4,0,0,0-4.84.32,59.8,59.8,0,0,1-78.26,0A4,4,0,0,0,84,165.1a79.71,79.71,0,0,0-21.79,21.31A87.66,87.66,0,0,1,40.37,136h15.4a8.2,8.2,0,0,0,6.69-3.28,8,8,0,0,0-.8-10.38l-24-24a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0-.8,10.38A8.2,8.2,0,0,0,8.23,136H24.3a104,104,0,0,0,188.18,52.67A8,8,0,0,0,210.16,177.18Zm45.23-52.24A8,8,0,0,0,248,120H231.7A104,104,0,0,0,43.52,67.33a8,8,0,0,0,13,9.34A88,88,0,0,1,215.63,120H200a8,8,0,0,0-5.66,13.66l24,24a8,8,0,0,0,11.32,0l24-24A8,8,0,0,0,255.39,124.94Z\"/>";
const LIGHT_INNER     = "<path d=\"M252.24,132.24l-24,24a6,6,0,0,1-8.48,0l-24-24a6,6,0,1,1,8.48-8.48L218,137.51V128A90,90,0,0,0,54.87,75.5a6,6,0,1,1-9.74-7A102,102,0,0,1,230,128v9.51l13.76-13.75a6,6,0,1,1,8.48,8.48ZM210.85,187.5A102,102,0,0,1,26,128v-9.51L12.24,132.24a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0l24,24a6,6,0,1,1-8.48,8.48L38,118.49V128a89.65,89.65,0,0,0,24.49,61.64,77.53,77.53,0,0,1,40-31.38,46,46,0,1,1,51,0,77.49,77.49,0,0,1,40,31.41,89.35,89.35,0,0,0,7.58-9.17,6,6,0,1,1,9.74,7ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Zm0,64a90.24,90.24,0,0,0,56.57-20,66,66,0,0,0-113.13,0A89.58,89.58,0,0,0,128,218Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M253.66,133.66l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L216,132.69V128A88,88,0,0,0,56.49,76.67a8,8,0,0,1-13-9.34A104,104,0,0,1,232,128v4.69l10.34-10.35a8,8,0,0,1,11.32,11.32Zm-41.18,55A104,104,0,0,1,24,128v-4.69L13.66,133.66A8,8,0,0,1,2.34,122.34l24-24a8,8,0,0,1,11.32,0l24,24a8,8,0,0,1-11.32,11.32L40,123.31V128a87.62,87.62,0,0,0,22.24,58.41A79.66,79.66,0,0,1,98.3,157.66a48,48,0,1,1,59.4,0,79.59,79.59,0,0,1,36.08,28.78,89.68,89.68,0,0,0,5.71-7.11,8,8,0,0,1,13,9.34ZM128,152a32,32,0,1,0-32-32A32,32,0,0,0,128,152Zm0,64a88.2,88.2,0,0,0,53.92-18.49,64,64,0,0,0-107.84,0A87.57,87.57,0,0,0,128,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z\"/>";

export const UserSwitch = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: UserSwitchProps) => {
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
