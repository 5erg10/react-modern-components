import { SVGProps } from "react";

export type CarProfileVariant = "duotone" | "fill" | "light";

export interface CarProfileProps extends SVGProps<SVGSVGElement> {
  variant?: CarProfileVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M240,112H211.31L168,68.69A15.86,15.86,0,0,0,156.69,64H44.28A16,16,0,0,0,31,71.12L1.34,115.56A8.07,8.07,0,0,0,0,120v48a16,16,0,0,0,16,16H33a32,32,0,0,0,62,0h66a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V128A16,16,0,0,0,240,112ZM44.28,80H156.69l32,32H23ZM64,192a16,16,0,1,1,16-16A16,16,0,0,1,64,192Zm128,0a16,16,0,1,1,16-16A16,16,0,0,1,192,192Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,114H210.49l-43.9-43.9a13.94,13.94,0,0,0-9.9-4.1H44.28a14,14,0,0,0-11.65,6.23L3,116.67A6,6,0,0,0,2,120v48a14,14,0,0,0,14,14H34.6a30,30,0,0,0,58.8,0h69.2a30,30,0,0,0,58.8,0H240a14,14,0,0,0,14-14V128A14,14,0,0,0,240,114ZM42.62,78.89A2,2,0,0,1,44.28,78H156.69a2,2,0,0,1,1.41.59L193.52,114H19.21ZM64,194a18,18,0,1,1,18-18A18,18,0,0,1,64,194Zm128,0a18,18,0,1,1,18-18A18,18,0,0,1,192,194Zm50-26a2,2,0,0,1-2,2H221.4a30,30,0,0,0-58.8,0H93.4a30,30,0,0,0-58.8,0H16a2,2,0,0,1-2-2V126H240a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,112H211.31L168,68.69A15.86,15.86,0,0,0,156.69,64H44.28A16,16,0,0,0,31,71.12L1.34,115.56A8.07,8.07,0,0,0,0,120v48a16,16,0,0,0,16,16H33a32,32,0,0,0,62,0h66a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V128A16,16,0,0,0,240,112ZM44.28,80H156.69l32,32H23ZM64,192a16,16,0,1,1,16-16A16,16,0,0,1,64,192Zm128,0a16,16,0,1,1,16-16A16,16,0,0,1,192,192Zm48-24H223a32,32,0,0,0-62,0H95a32,32,0,0,0-62,0H16V128H240Z\"/>";
const SECONDARY_PATHS = "<path d=\"M88,176a24,24,0,1,1-24-24A24,24,0,0,1,88,176Zm104-24a24,24,0,1,0,24,24A24,24,0,0,0,192,152ZM162.34,74.34A8,8,0,0,0,156.69,72H44.28a8,8,0,0,0-6.66,3.56L8,120H208Z\"/>";

export const CarProfile = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CarProfileProps) => {
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
