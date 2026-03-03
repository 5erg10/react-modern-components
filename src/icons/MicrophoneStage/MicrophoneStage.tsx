import { SVGProps } from "react";

export type MicrophoneStageVariant = "duotone" | "fill" | "light";

export interface MicrophoneStageProps extends SVGProps<SVGSVGElement> {
  variant?: MicrophoneStageVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M115.06,46.36a4,4,0,0,0-6.11.54A71.54,71.54,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a71.54,71.54,0,0,0,41.09-12.93,4,4,0,0,0,.54-6.11Zm2.61,103.28-16,16a8,8,0,1,1-11.31-11.31l16-16a8,8,0,0,1,11.31,11.31Zm109.4-20.56a4,4,0,0,1-6.12.54L126.38,35.05a4,4,0,0,1,.54-6.12A71.93,71.93,0,0,1,227.07,129.08Z\"/>";
const LIGHT_INNER     = "<path d=\"M168,18A69.94,69.94,0,0,0,98.74,98l-70,95.46a13.92,13.92,0,0,0,1.39,18.17l14.3,14.3a13.93,13.93,0,0,0,18.17,1.39l95.46-70A70,70,0,1,0,168,18Zm58,70a57.65,57.65,0,0,1-13,36.52L131.49,43A57.95,57.95,0,0,1,226,88ZM55.5,217.59a2,2,0,0,1-2.6-.2L38.61,203.1a2,2,0,0,1-.2-2.6l64.22-87.56a70.32,70.32,0,0,0,40.44,40.43ZM110,88a57.73,57.73,0,0,1,13-36.52L204.53,133A58,58,0,0,1,110,88Zm-1.75,59.75a6,6,0,0,1,0,8.49l-8,8a6,6,0,1,1-8.49-8.49l8-8A6,6,0,0,1,108.26,147.74Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M168,16A72.07,72.07,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a72,72,0,1,0,0-144Zm56,72a55.72,55.72,0,0,1-11.16,33.52L134.49,43.16A56,56,0,0,1,224,88ZM54.32,216,40,201.68,102.14,117A72.37,72.37,0,0,0,139,153.86ZM112,88a55.67,55.67,0,0,1,11.16-33.51l78.34,78.34A56,56,0,0,1,112,88Zm-2.35,58.34a8,8,0,0,1,0,11.31l-8,8a8,8,0,1,1-11.31-11.31l8-8A8,8,0,0,1,109.67,146.33Z\"/>";
const SECONDARY_PATHS = "<path d=\"M156.5,151,59,222.45a8,8,0,0,1-10.38-.79l-14.3-14.3A8,8,0,0,1,33.55,197L105,99.5l0,0A64,64,0,0,0,156.48,151Z\"/>";

export const MicrophoneStage = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MicrophoneStageProps) => {
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
