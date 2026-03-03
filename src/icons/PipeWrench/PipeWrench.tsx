import { SVGProps } from "react";

export type PipeWrenchVariant = "duotone" | "fill" | "light";

export interface PipeWrenchProps extends SVGProps<SVGSVGElement> {
  variant?: PipeWrenchVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M220.28,55l-.17-.17-44.9-42.28a16,16,0,0,0-22.5.08L108.17,56.87l-1.54-1.56A25,25,0,0,0,71.27,90.58l1.46,1.48L52.69,112a16,16,0,0,0,0,22.63l12.68,12.68a16,16,0,0,0,22.59,0l19.93-19.65L120,140h0l0,0L55.31,205.37a25,25,0,1,0,35.34,35.29l88.67-89.35a16,16,0,0,0,0-22.6L143.63,92.66,156.56,80l.1.09L194,115.4a16,16,0,0,0,22.53-.09l3.71-3.71a40,40,0,0,0,0-56.57ZM76.69,136,64,123.33l20-19.88,12.69,12.86ZM209,100.28,205.25,104a1.21,1.21,0,0,0-.16-.16L167.69,68.5a16.05,16.05,0,0,0-22.39.12L132.37,81.29,119.43,68.23,164,24l.17.16,44.88,42.26a24,24,0,0,1-.08,33.86Z\"/>";
const LIGHT_INNER     = "<path d=\"M218.87,56.44a1.59,1.59,0,0,1-.13-.13L173.83,14a14,14,0,0,0-19.71.06l-46,45.62-3-3A23,23,0,0,0,72.7,89.18l2.85,2.89L54.1,113.41a14,14,0,0,0,0,19.8L66.79,145.9a14,14,0,0,0,19.76,0l21.35-21.05,13.51,13.7a2,2,0,0,1,0,2.83l0,0L56.73,206.79a23,23,0,1,0,32.5,32.47L177.9,149.9a14,14,0,0,0,0-19.78L140.79,92.64l14.35-14.06a2,2,0,0,1,2.82,0l.07.07L195.42,114a14,14,0,0,0,19.74-.07l3.71-3.72a38,38,0,0,0,0-53.74Zm-140.77,81a2,2,0,0,1-2.83,0L62.58,124.73a2,2,0,0,1-.58-1.42,2,2,0,0,1,.57-1.4L84,100.62l15.5,15.72Zm91.3,4L80.73,230.79a11,11,0,1,1-15.49-15.54l64.67-65.37a14,14,0,0,0,0-19.75L81.21,80.73a11,11,0,0,1,15.5-15.54l72.7,73.39A2,2,0,0,1,169.4,141.43Zm41-39.73-3.71,3.71a2,2,0,0,1-2.83,0l-.12-.12L166.31,70a14,14,0,0,0-19.61.1L132.35,84.12,116.6,68.22l46-45.64a2,2,0,0,1,2.84,0l.12.13L210.45,65a26,26,0,0,1-.07,36.71Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M220.28,55l-.17-.17-44.9-42.28a16,16,0,0,0-22.5.08L108.17,56.87l-1.54-1.56A25,25,0,0,0,71.27,90.58l1.46,1.48L52.69,112a16,16,0,0,0,0,22.63l12.68,12.68a16,16,0,0,0,22.59,0l19.93-19.65L120,140h0l0,0L55.31,205.37a25,25,0,1,0,35.34,35.29l88.67-89.35a16,16,0,0,0,0-22.6L143.63,92.66,156.56,80l.1.09L194,115.4a16,16,0,0,0,22.53-.09l3.71-3.71a40,40,0,0,0,0-56.57ZM76.69,136,64,123.33l20-19.88,12.69,12.86Zm2.62,93.37a9,9,0,1,1-12.65-12.71l64.67-65.37a16,16,0,0,0,0-22.57L82.63,79.31A9,9,0,0,1,95.29,66.6L168,140ZM209,100.28,205.25,104a1.21,1.21,0,0,0-.16-.16L167.69,68.5a16.05,16.05,0,0,0-22.39.12L132.37,81.29,119.43,68.23,164,24l.17.16,44.88,42.26a24,24,0,0,1-.08,33.86Z\"/>";
const SECONDARY_PATHS = "<path d=\"M173.66,145.66,85,235a17,17,0,0,1-24-24l64.69-65.37a8,8,0,0,0,0-11.32L77,85a17,17,0,0,1,0-24h0a17,17,0,0,1,24,0l72.69,73.37A8,8,0,0,1,173.66,145.66Z\"/>";

export const PipeWrench = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PipeWrenchProps) => {
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
