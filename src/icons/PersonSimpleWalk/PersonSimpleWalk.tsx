import { SVGProps } from "react";

export type PersonSimpleWalkVariant = "duotone" | "fill" | "light";

export interface PersonSimpleWalkProps extends SVGProps<SVGSVGElement> {
  variant?: PersonSimpleWalkVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M120,48a32,32,0,1,1,32,32A32,32,0,0,1,120,48Zm88,88c-28.64,0-41.81-13.3-55.75-27.37-3.53-3.57-7.18-7.26-11-10.58-37-32.14-96.22,22.73-98.72,25.08a8,8,0,0,0,10.95,11.66A163.88,163.88,0,0,1,84,113c13.78-7.38,25.39-10.23,34.7-8.58L64.66,228.81a8,8,0,0,0,4.15,10.52A7.84,7.84,0,0,0,72,240a8,8,0,0,0,7.34-4.81l33.59-77.27L144,180.12V232a8,8,0,0,0,16,0V176a8,8,0,0,0-3.35-6.51l-37.2-26.57L132.88,112c2.64,2.44,5.26,5.07,8,7.84C155.05,134.19,172.69,152,208,152a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M152,78a30,30,0,1,0-30-30A30,30,0,0,0,152,78Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,152,30Zm62,114a6,6,0,0,1-6,6c-34.48,0-51.06-16.75-65.7-31.52-3.47-3.51-6.75-6.82-10.15-9.78L117,143.61l38.52,27.51A6,6,0,0,1,158,176v56a6,6,0,0,1-12,0V179.09l-33.92-24.23L77.5,234.39a6,6,0,0,1-11-4.78l55-126.61c-10.18-2.75-23.07,0-38.51,8.29a165.76,165.76,0,0,0-30.92,22,6,6,0,0,1-8.22-8.74,175.4,175.4,0,0,1,33.27-23.77c25.93-14,47.64-14.39,62.77-1.26,3.77,3.27,7.4,6.93,10.9,10.47,13.62,13.75,27.69,28,57.17,28A6,6,0,0,1,214,144Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M152,80a32,32,0,1,0-32-32A32,32,0,0,0,152,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,152,32Zm64,112a8,8,0,0,1-8,8c-35.31,0-52.95-17.81-67.12-32.12-2.74-2.77-5.36-5.4-8-7.84l-13.43,30.88,37.2,26.57A8,8,0,0,1,160,176v56a8,8,0,0,1-16,0V180.12l-31.07-22.2L79.34,235.19A8,8,0,0,1,72,240a7.84,7.84,0,0,1-3.19-.67,8,8,0,0,1-4.15-10.52l54.08-124.37c-9.31-1.65-20.92,1.2-34.7,8.58a163.88,163.88,0,0,0-30.57,21.77,8,8,0,0,1-10.95-11.66c2.5-2.35,61.69-57.22,98.72-25.08,3.83,3.32,7.48,7,11,10.58C166.19,122.7,179.36,136,208,136A8,8,0,0,1,216,144Z\"/>";
const SECONDARY_PATHS = "<path d=\"M176,48a24,24,0,1,1-24-24A24,24,0,0,1,176,48Z\"/>";

export const PersonSimpleWalk = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonSimpleWalkProps) => {
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
