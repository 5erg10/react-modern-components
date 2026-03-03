import { SVGProps } from "react";

export type ListNumbersVariant = "duotone" | "fill" | "light";

export interface ListNumbersProps extends SVGProps<SVGSVGElement> {
  variant?: ListNumbersVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM56.84,75.58a8,8,0,0,1,3.58-10.74l16-8A8,8,0,0,1,88,64v48a8,8,0,0,1-16,0V76.94l-4.42,2.22A8,8,0,0,1,56.84,75.58ZM92,180a8,8,0,0,1,0,16H68a8,8,0,0,1-6.4-12.8l21.67-28.89A3.92,3.92,0,0,0,84,152a4,4,0,0,0-7.77-1.33,8,8,0,0,1-15.09-5.34,20,20,0,1,1,35,18.53L84,180Zm100,4H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm0-48H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm0-48H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M222,128a6,6,0,0,1-6,6H104a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM104,70H216a6,6,0,0,0,0-12H104a6,6,0,0,0,0,12ZM216,186H104a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM42.68,53.37,50,49.71V104a6,6,0,0,0,12,0V40a6,6,0,0,0-8.68-5.37l-16,8a6,6,0,0,0,5.36,10.74ZM72,202H52l21.48-28.74A21.5,21.5,0,0,0,77.79,157,21.75,21.75,0,0,0,69,142.38a22.86,22.86,0,0,0-31.35,4.31,22.18,22.18,0,0,0-3.28,5.92,6,6,0,0,0,11.28,4.11,9.87,9.87,0,0,1,1.48-2.67,10.78,10.78,0,0,1,14.78-2,9.89,9.89,0,0,1,4,6.61,9.64,9.64,0,0,1-2,7.28l-.06.09L35.2,204.41A6,6,0,0,0,40,214H72a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,128a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM104,72H216a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16ZM216,184H104a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM43.58,55.16,48,52.94V104a8,8,0,0,0,16,0V40a8,8,0,0,0-11.58-7.16l-16,8a8,8,0,0,0,7.16,14.32ZM79.77,156.72a23.73,23.73,0,0,0-9.6-15.95,24.86,24.86,0,0,0-34.11,4.7,23.63,23.63,0,0,0-3.57,6.46,8,8,0,1,0,15,5.47,7.84,7.84,0,0,1,1.18-2.13,8.76,8.76,0,0,1,12-1.59A7.91,7.91,0,0,1,63.93,159a7.64,7.64,0,0,1-1.57,5.78,1,1,0,0,0-.08.11L33.59,203.21A8,8,0,0,0,40,216H72a8,8,0,0,0,0-16H56l19.08-25.53A23.47,23.47,0,0,0,79.77,156.72Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,64V192H104V64Z\"/>";

export const ListNumbers = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: ListNumbersProps) => {
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
