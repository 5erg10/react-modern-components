import { SVGProps } from "react";

export type BalloonVariant = "duotone" | "fill" | "light";

export interface BalloonProps extends SVGProps<SVGSVGElement> {
  variant?: BalloonVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,16a88.1,88.1,0,0,0-88,88c0,23.43,9.4,49.42,25.13,69.5,12.08,15.41,26.5,26,41.91,31.09L96.65,228.85A8,8,0,0,0,104,240h48a8,8,0,0,0,7.35-11.15L149,204.59c15.4-5.07,29.83-15.68,41.91-31.09C206.6,153.42,216,127.43,216,104A88.1,88.1,0,0,0,128,16Zm49.32,87.89A8.52,8.52,0,0,1,176,104a8,8,0,0,1-7.88-6.68,41.29,41.29,0,0,0-33.43-33.43,8,8,0,1,1,2.64-15.78,57.5,57.5,0,0,1,46.57,46.57A8,8,0,0,1,177.32,103.89Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,18a86.1,86.1,0,0,0-86,86c0,23,9.24,48.52,24.71,68.27,12.37,15.79,27.23,26.42,43.05,31.07l-11.27,26.3A6,6,0,0,0,104,238h48a6,6,0,0,0,5.51-8.36l-11.27-26.3c15.82-4.65,30.68-15.28,43-31.07C204.76,152.52,214,127,214,104A86.1,86.1,0,0,0,128,18ZM112.17,204l.58.14a2.05,2.05,0,0,1-.58-.14Zm30.73,22H113.1l8.7-20.31a62.15,62.15,0,0,0,12.4,0ZM128,194c-33.52,0-74-40.15-74-90a74,74,0,0,1,148,0C202,153.85,161.52,194,128,194Zm49-92.08a6.74,6.74,0,0,1-1,.08,6,6,0,0,1-5.91-5A43.29,43.29,0,0,0,135,61.92a6,6,0,1,1,2-11.84A55.48,55.48,0,0,1,181.92,95,6,6,0,0,1,177,101.92Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M128,16a88.1,88.1,0,0,0-88,88c0,23.43,9.4,49.42,25.13,69.5,12.08,15.41,26.5,26,41.91,31.09L96.65,228.85A8,8,0,0,0,104,240h48a8,8,0,0,0,7.35-11.15L149,204.59c15.4-5.07,29.83-15.68,41.91-31.09C206.6,153.42,216,127.43,216,104A88.1,88.1,0,0,0,128,16Zm11.87,208H116.13l6.94-16.19c1.64.12,3.28.19,4.93.19s3.29-.07,4.93-.19Zm38.4-60.37C163.94,181.93,146.09,192,128,192s-35.94-10.07-50.27-28.37C64.12,146.27,56,124,56,104a72,72,0,0,1,144,0C200,124,191.88,146.27,178.27,163.63Zm-1-59.74A8.52,8.52,0,0,1,176,104a8,8,0,0,1-7.88-6.68,41.29,41.29,0,0,0-33.43-33.43,8,8,0,1,1,2.64-15.78,57.5,57.5,0,0,1,46.57,46.57A8,8,0,0,1,177.32,103.89Z\"/>";
const SECONDARY_PATHS = "<path d=\"M137.89,199.13h0L152,232H104l14.09-32.87h0C78.59,192.18,48,144.83,48,104a80,80,0,0,1,160,0C208,144.83,177.41,192.18,137.89,199.13Z\"/>";

export const Balloon = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BalloonProps) => {
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
