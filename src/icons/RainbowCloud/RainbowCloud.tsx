import { SVGProps } from "react";

export type RainbowCloudVariant = "duotone" | "fill" | "light";

export interface RainbowCloudProps extends SVGProps<SVGSVGElement> {
  variant?: RainbowCloudVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M248,160a48.05,48.05,0,0,1-48,48H152c-17.65,0-32-14.75-32-32.89s14.35-32.89,32-32.89a31,31,0,0,1,3.34.18A48,48,0,0,1,248,160ZM112,72a87.57,87.57,0,0,1,61.35,24.91A8,8,0,0,0,184.5,85.44,104,104,0,0,0,8,160v16a8,8,0,0,0,16,0V160A88.1,88.1,0,0,1,112,72Zm0,32a55.58,55.58,0,0,1,33.13,10.84A8,8,0,1,0,154.6,102,72,72,0,0,0,40,160v16a8,8,0,0,0,16,0V160A56.06,56.06,0,0,1,112,104Zm15.21,26.71a8,8,0,0,0-5.94-9.63A40,40,0,0,0,72,160v16a8,8,0,0,0,16,0V160a24,24,0,0,1,29.57-23.35A8,8,0,0,0,127.21,130.71Z\"/>";
const LIGHT_INNER     = "<path d=\"M200,114a46.18,46.18,0,0,0-43.35,30.59,30,30,0,0,0-4.65-.37c-16.54,0-30,13.86-30,30.89S135.46,206,152,206h48a46,46,0,0,0,0-92Zm0,80H152c-9.93,0-18-8.47-18-18.89s8.07-18.89,18-18.89a17.12,17.12,0,0,1,6.53,1.28,6,6,0,0,0,8.16-4.35A34,34,0,1,1,200,194ZM22,160v16a6,6,0,0,1-12,0V160A102,102,0,0,1,183.11,86.87a6,6,0,1,1-8.37,8.61A90,90,0,0,0,22,160Zm90-58a58.07,58.07,0,0,0-58,58v16a6,6,0,0,1-12,0V160a70,70,0,0,1,111.42-56.43,6,6,0,1,1-7.11,9.66A57.5,57.5,0,0,0,112,102Zm6,32.7a26.59,26.59,0,0,0-6-.7,26,26,0,0,0-26,26v16a6,6,0,0,1-12,0V160a38,38,0,0,1,46.81-37A6,6,0,1,1,118,134.7Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M200,112a48.18,48.18,0,0,0-44.66,30.4,31,31,0,0,0-3.34-.18c-17.65,0-32,14.76-32,32.89S134.35,208,152,208h48a48,48,0,0,0,0-96Zm0,80H152c-8.82,0-16-7.58-16-16.89s7.18-16.89,16-16.89a15,15,0,0,1,5.78,1.14,8,8,0,0,0,10.87-5.81A32,32,0,1,1,200,192ZM24,160v16a8,8,0,0,1-16,0V160A104,104,0,0,1,184.5,85.44a8,8,0,0,1-11.15,11.47A88,88,0,0,0,24,160Zm32,0v16a8,8,0,0,1-16,0V160a72,72,0,0,1,114.6-58,8,8,0,1,1-9.47,12.89A56,56,0,0,0,56,160Zm61.57-23.35A24,24,0,0,0,88,160v16a8,8,0,0,1-16,0V160a40,40,0,0,1,49.27-38.92,8,8,0,1,1-3.7,15.57Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,160a40,40,0,0,1-40,40H152c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73A40,40,0,0,1,240,160Z\"/>";

export const RainbowCloud = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RainbowCloudProps) => {
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
