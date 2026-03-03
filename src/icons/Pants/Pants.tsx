import { SVGProps } from "react";

export type PantsVariant = "duotone" | "fill" | "light";

export interface PantsProps extends SVGProps<SVGSVGElement> {
  variant?: PantsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M53.44,43.5,54.12,38A16,16,0,0,1,70,24H186a16,16,0,0,1,15.88,14l.68,5.49a4,4,0,0,1-4,4.5H57.41A4,4,0,0,1,53.44,43.5ZM169,64a32.06,32.06,0,0,0,31,24h3.59a4,4,0,0,0,4-4.5l-2-16a4,4,0,0,0-4-3.5ZM52.41,88H56A32.06,32.06,0,0,0,87,64H54.41a4,4,0,0,0-4,3.5l-2,16A4,4,0,0,0,52.41,88ZM223.88,214,210.56,107.5a4,4,0,0,0-4-3.5H200a48.07,48.07,0,0,1-47.32-40H136v39.73a8.18,8.18,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V64H103.32A48.07,48.07,0,0,1,56,104H49.41a4,4,0,0,0-4,3.5L32.12,214a16,16,0,0,0,6.71,15.09A16.56,16.56,0,0,0,48.39,232h40.3a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232h40.3a16.54,16.54,0,0,0,9.56-2.89A16,16,0,0,0,223.88,214Z\"/>";
const LIGHT_INNER     = "<path d=\"M221.89,214.26l-22-176A14,14,0,0,0,186,26H70A14,14,0,0,0,56.11,38.26l-22,176A14,14,0,0,0,48,230H88.69a14,14,0,0,0,13.57-10.56L128,120l25.73,99.44A14,14,0,0,0,167.31,230H208a14,14,0,0,0,13.89-15.74ZM195.22,97.66A34.07,34.07,0,0,1,166.54,70h25.23ZM70,38H186a2,2,0,0,1,2,1.75L190.27,58H65.73L68,39.75A2,2,0,0,1,70,38ZM64.23,70H89.46A34.07,34.07,0,0,1,60.78,97.66Zm26.4,146.49A2,2,0,0,1,88.69,218H48a2,2,0,0,1-2-2.25L59.25,109.87A46.07,46.07,0,0,0,101.6,70H122V95.24Zm118.87.83a2,2,0,0,1-1.5.68H167.31a2,2,0,0,1-1.95-1.56L134,95.24V70h20.4a46.07,46.07,0,0,0,42.35,39.87L210,215.75A2,2,0,0,1,209.5,217.32Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M223.88,214l-22-176A16,16,0,0,0,186,24H70A16,16,0,0,0,54.12,38l-22,176A16,16,0,0,0,48,232H88.69a16,16,0,0,0,15.51-12.06l23.8-92,23.79,91.94A16,16,0,0,0,167.31,232H208a16,16,0,0,0,15.88-18ZM192.9,95.2A32.13,32.13,0,0,1,169,72h21ZM186,40l2,16H68l2-16ZM66,72H87A32.13,32.13,0,0,1,63.1,95.2ZM88.69,216H48L61,111.73A48.08,48.08,0,0,0,103.32,72H120V95Zm78.6-.06L136,95V72h16.68A48.08,48.08,0,0,0,195,111.73L208,216Z\"/>";
const SECONDARY_PATHS = "<path d=\"M202.05,104c-.68,0-1.36,0-2.05,0a40,40,0,0,1-40-40H96a40,40,0,0,1-40,40c-.69,0-1.37,0-2,0L62.06,39A8,8,0,0,1,70,32H186a8,8,0,0,1,7.94,7Z\"/>";

export const Pants = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PantsProps) => {
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
