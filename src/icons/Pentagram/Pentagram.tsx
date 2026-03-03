import { SVGProps } from "react";

export type PentagramVariant = "duotone" | "fill" | "light";

export interface PentagramProps extends SVGProps<SVGSVGElement> {
  variant?: PentagramVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M60.18,129.52a4,4,0,0,1-6.15,2L22.66,109a15.78,15.78,0,0,1-5.82-18A16.33,16.33,0,0,1,32.43,80H70.74a4,4,0,0,1,3.81,5.24Zm-7,73.48A15.75,15.75,0,0,0,59,220.88a15.74,15.74,0,0,0,18.77,0l32.05-23.06a4,4,0,0,0,0-6.5L71.38,163.72a4,4,0,0,0-6.14,2ZM143.23,19.26a15.93,15.93,0,0,0-30.45-.05L100,58.76A4,4,0,0,0,103.76,64h48.48a4,4,0,0,0,3.81-5.23ZM160,80H96a4,4,0,0,0-3.8,2.77L73,141.77a4,4,0,0,0,1.47,4.48l51.17,36.82a4,4,0,0,0,4.68,0l51.17-36.82a4,4,0,0,0,1.47-4.48l-19.15-59A4,4,0,0,0,160,80Zm79.13,11a16.33,16.33,0,0,0-15.59-11H185.26a4,4,0,0,0-3.81,5.24l14.37,44.29a4,4,0,0,0,6.14,2l31.41-22.6A15.75,15.75,0,0,0,239.16,91Zm-54.55,72.75-38.4,27.63a4,4,0,0,0,0,6.5l32,23A16,16,0,0,0,202.85,203l-12.09-37.27A4,4,0,0,0,184.61,163.72Z\"/>";
const LIGHT_INNER     = "<path d=\"M237.29,91.67A13.8,13.8,0,0,0,224,82H161.48L141.33,19.87a13.93,13.93,0,0,0-26.64-.05L94.51,82H32a14,14,0,0,0-8.21,25.35l50.65,36.44L55.05,203.63a13.78,13.78,0,0,0,5.09,15.64,13.77,13.77,0,0,0,16.43,0l51.43-37,51.41,37A14,14,0,0,0,201,203.63l-19.42-59.85,50.67-36.46A13.79,13.79,0,0,0,237.29,91.67ZM126.11,23.49a1.94,1.94,0,0,1,3.79,0l19,58.46H107.13ZM30.85,97.61a1.86,1.86,0,0,1-.73-2.23A1.88,1.88,0,0,1,32,94H90.62l-12.26,37.8Zm38.69,112a2,2,0,0,1-3.08-2.24h0l18.23-56.2,33,23.77Zm19-70.42L103.24,94h49.52l14.65,45.16L128,167.51Zm100.95,68.18a2,2,0,0,1-3.1,2.22L138.27,174.9l33-23.77ZM225.17,97.59l-47.53,34.2L165.38,94H224a1.86,1.86,0,0,1,1.9,1.39A1.83,1.83,0,0,1,225.17,97.59Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M239.2,91.06A15.76,15.76,0,0,0,224,80h-61l-19.7-60.74a15.94,15.94,0,0,0-30.46-.05L93.06,80H32a16,16,0,0,0-9.38,29l49.47,35.59L53.14,203A15.77,15.77,0,0,0,59,220.91a15.77,15.77,0,0,0,18.78,0L128,184.77l50.24,36.14A16,16,0,0,0,202.86,203l-19-58.46,49.5-35.62A15.76,15.76,0,0,0,239.2,91.06ZM128,24.15,146.12,80H109.88ZM32,96H87.87L77.3,128.58ZM68.36,208h0l17.39-53.59,28.55,20.54Zm22.57-69.57L104.69,96h46.62l13.76,42.39L128,165.06ZM187.64,208l0,0-45.91-33,28.55-20.54Zm-8.94-79.38L168.13,96H224Z\"/>";
const SECONDARY_PATHS = "<path d=\"M228.69,102.47l-54.21,39,20.77,64a8,8,0,0,1-12.31,8.95L128,174.91,73.06,214.44a8,8,0,0,1-12.31-8.95l20.77-64-54.21-39A8,8,0,0,1,32,88H98.87l21.52-66.32a7.94,7.94,0,0,1,15.22,0L157.13,88H224A8,8,0,0,1,228.69,102.47Z\"/>";

export const Pentagram = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PentagramProps) => {
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
