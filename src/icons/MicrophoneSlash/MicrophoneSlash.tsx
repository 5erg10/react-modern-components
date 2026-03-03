import { SVGProps } from "react";

export type MicrophoneSlashVariant = "duotone" | "fill" | "light";

export interface MicrophoneSlashProps extends SVGProps<SVGSVGElement> {
  variant?: MicrophoneSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M213.38,229.92a8,8,0,0,1-11.3-.54l-30.92-34A78.83,78.83,0,0,1,136,207.59V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64.07,64.07,0,0,0,64,64,63.41,63.41,0,0,0,32.21-8.68l-11.1-12.2A48,48,0,0,1,80,128V95.09L42.08,53.38A8,8,0,0,1,53.92,42.62l160,176A8,8,0,0,1,213.38,229.92Zm-24.19-63.13a7.88,7.88,0,0,0,3.51.82,8,8,0,0,0,7.19-4.49A79.16,79.16,0,0,0,208,128a8,8,0,0,0-16,0,63.32,63.32,0,0,1-6.48,28.09A8,8,0,0,0,189.19,166.79Zm-27.33-29.22A8,8,0,0,0,175.74,133a49.49,49.49,0,0,0,.26-5V64A48,48,0,0,0,84,44.87a8,8,0,0,0,1.41,8.57Z\"/>";
const LIGHT_INNER     = "<path d=\"M212.44,220,52.44,44A6,6,0,0,0,43.56,52L82,94.32V128a46,46,0,0,0,67.56,40.64l13.75,15.12A65.26,65.26,0,0,1,128,194a66.08,66.08,0,0,1-66-66,6,6,0,0,0-12,0,78.09,78.09,0,0,0,72,77.75V240a6,6,0,0,0,12,0V205.77a76.93,76.93,0,0,0,37.48-13L203.56,228a6,6,0,0,0,8.88-8.08ZM128,162a34,34,0,0,1-34-34V107.52l47.12,51.84A33.82,33.82,0,0,1,128,162Zm59.32-5A65.38,65.38,0,0,0,194,128a6,6,0,0,1,12,0,77.33,77.33,0,0,1-7.9,34.25A6,6,0,1,1,187.32,157ZM85.8,45.67A46,46,0,0,1,174,64v64a45.17,45.17,0,0,1-.25,4.81,6,6,0,0,1-6,5.38q-.31,0-.63,0a6,6,0,0,1-5.34-6.59A35.41,35.41,0,0,0,162,128V64A34,34,0,0,0,96.8,50.45a6,6,0,0,1-11-4.78Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.92,218.62l-160-176A8,8,0,0,0,42.08,53.38L80,95.09V128a48,48,0,0,0,69.11,43.12l11.1,12.2A63.41,63.41,0,0,1,128,192a64.07,64.07,0,0,1-64-64,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.59a78.83,78.83,0,0,0,35.16-12.22l30.92,34a8,8,0,1,0,11.84-10.76ZM128,160a32,32,0,0,1-32-32V112.69l41.66,45.82A32,32,0,0,1,128,160Zm57.52-3.91A63.32,63.32,0,0,0,192,128a8,8,0,0,1,16,0,79.16,79.16,0,0,1-8.11,35.12,8,8,0,0,1-7.19,4.49,7.88,7.88,0,0,1-3.51-.82A8,8,0,0,1,185.52,156.09ZM84,44.87A48,48,0,0,1,176,64v64a49.19,49.19,0,0,1-.26,5,8,8,0,0,1-8,7.17,8.13,8.13,0,0,1-.84,0,8,8,0,0,1-7.12-8.79c.11-1.1.17-2.24.17-3.36V64A32,32,0,0,0,98.64,51.25,8,8,0,1,1,84,44.87Z\"/>";
const SECONDARY_PATHS = "<path d=\"M168,64v64a40,40,0,0,1-40,40h0a40,40,0,0,1-40-40V64a40,40,0,0,1,40-40h0A40,40,0,0,1,168,64Z\"/>";

export const MicrophoneSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MicrophoneSlashProps) => {
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
