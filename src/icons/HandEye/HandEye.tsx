import { SVGProps } from "react";

export type HandEyeVariant = "duotone" | "fill" | "light";

export interface HandEyeProps extends SVGProps<SVGSVGElement> {
  variant?: HandEyeVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm72-76v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V104a16,16,0,0,1,32,0Zm-36.42,74.21c-.7-1.4-17.5-34.21-51.58-34.21s-50.88,32.81-51.58,34.21a4,4,0,0,0,0,3.58c.7,1.4,17.5,34.21,51.58,34.21s50.88-32.81,51.58-34.21A4,4,0,0,0,179.58,178.21Z\"/>";
const LIGHT_INNER     = "<path d=\"M138,168a10,10,0,1,1-10-10A10,10,0,0,1,138,168Zm76-52v36a86,86,0,0,1-172,0V76A26,26,0,0,1,82,54.11V44a26,26,0,0,1,51.41-5.51A26,26,0,0,1,174,60V94.11A26,26,0,0,1,214,116Zm-12,0a14,14,0,0,0-28,0v4a6,6,0,0,1-12,0V60a14,14,0,0,0-28,0v44a6,6,0,0,1-12,0V44a14,14,0,0,0-28,0v68a6,6,0,0,1-12,0V76a14,14,0,0,0-28,0v76a74,74,0,0,0,148,0Zm-20.63,49.32a6,6,0,0,1,0,5.36C180.65,172.12,163.3,206,128,206s-52.65-33.88-53.37-35.32a6,6,0,0,1,0-5.36C75.35,163.88,92.7,130,128,130S180.65,163.88,181.37,165.32ZM169.08,168c-4.46-7.12-18.41-26-41.08-26s-36.65,18.85-41.08,26c4.46,7.13,18.41,26,41.08,26S164.65,175.15,169.08,168Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v36a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v60a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v60a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Zm-60,16a12,12,0,1,1-12-12A12,12,0,0,1,140,168Zm-12-40c-36.52,0-54.41,34.94-55.16,36.42a8,8,0,0,0,0,7.16C73.59,173.06,91.48,208,128,208s54.41-34.94,55.16-36.42a8,8,0,0,0,0-7.16C182.41,162.94,164.52,128,128,128Zm0,64c-20.63,0-33.8-16.52-38.7-24,4.9-7.48,18.07-24,38.7-24s33.81,16.53,38.7,24C161.8,175.48,148.63,192,128,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M188,96a20,20,0,0,0-20,20V60a20,20,0,0,0-40,0V44a20,20,0,0,0-40,0V76a20,20,0,0,0-40,0v76a80,80,0,0,0,160,0V116A20,20,0,0,0,188,96ZM128,200c-32,0-48-32-48-32s16-32,48-32,48,32,48,32S160,200,128,200Z\"/>";

export const HandEye = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HandEyeProps) => {
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
