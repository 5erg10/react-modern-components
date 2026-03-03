import { SVGProps } from "react";

export type BoneVariant = "duotone" | "fill" | "light";

export interface BoneProps extends SVGProps<SVGSVGElement> {
  variant?: BoneVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z\"/>";
const LIGHT_INNER     = "<path d=\"M230.14,62.17A33.88,33.88,0,0,0,206,50a34,34,0,1,0-62.81,20,2,2,0,0,1-.23,2.54L72.56,143a2.06,2.06,0,0,1-2.55.23A34,34,0,1,0,50,206a34,34,0,1,0,62.81-20,2,2,0,0,1,.23-2.54l70.4-70.4a2,2,0,0,1,2.54-.23,34,34,0,0,0,44.15-50.65ZM220.6,98.48a22,22,0,0,1-28.24,4.17,14,14,0,0,0-17.4,1.92L104.57,175a14,14,0,0,0-1.92,17.4,22,22,0,1,1-40.41,8.26,6,6,0,0,0-5.93-6.93,7.28,7.28,0,0,0-.93.07,22,22,0,1,1,8.26-40.41A14,14,0,0,0,81,151.43L151.43,81a14,14,0,0,0,1.92-17.4,22,22,0,1,1,40.41-8.26,6,6,0,0,0,6.86,6.86,22,22,0,0,1,20,36.24Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M231.67,60.89a35.82,35.82,0,0,0-23.82-12.74,36,36,0,1,0-66.37,22.92.25.25,0,0,1,0,.08L71.17,141.51s0,0-.1,0a36,36,0,1,0-22.92,66.37,36,36,0,1,0,66.37-22.92.54.54,0,0,1,0-.08l70.35-70.36s0,0,.1,0a36,36,0,0,0,46.74-53.63ZM219.1,97.16a20,20,0,0,1-25.67,3.8,16,16,0,0,0-19.88,2.19l-70.4,70.4A16,16,0,0,0,101,193.43a20,20,0,1,1-36.75,7.5,8,8,0,0,0-7.91-9.24,8.5,8.5,0,0,0-1.23.1A20,20,0,1,1,62.57,155a16,16,0,0,0,19.88-2.19l70.4-70.4A16,16,0,0,0,155,62.57a20,20,0,1,1,36.75-7.5,8,8,0,0,0,9.14,9.14,20,20,0,0,1,18.17,33Z\"/>";
const SECONDARY_PATHS = "<path d=\"M225.09,102.44a28,28,0,0,1-35.92,5.3,8,8,0,0,0-10,1.07l-70.38,70.38a8,8,0,0,0-1.07,10,28,28,0,1,1-51.42,10.51,28,28,0,1,1,10.51-51.42,8,8,0,0,0,10-1.07l70.38-70.38a8,8,0,0,0,1.07-10,28,28,0,1,1,51.42-10.51,28,28,0,0,1,25.41,46.12Z\"/>";

export const Bone = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BoneProps) => {
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
