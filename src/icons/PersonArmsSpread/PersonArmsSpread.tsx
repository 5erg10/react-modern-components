import { SVGProps } from "react";

export type PersonArmsSpreadVariant = "duotone" | "fill" | "light";

export interface PersonArmsSpreadProps extends SVGProps<SVGSVGElement> {
  variant?: PersonArmsSpreadVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM227.6,92.57A15.7,15.7,0,0,0,212,80H44a16,16,0,0,0-6.7,30.53l.06,0,53.89,23.73-21.92,83.3a16,16,0,0,0,7.9,20.91A15.83,15.83,0,0,0,84,240a16,16,0,0,0,14.44-9.06L128,180l29.58,51a16,16,0,0,0,29.07-13.35l-21.92-83.3,54-23.76A15.7,15.7,0,0,0,227.6,92.57Z\"/>";
const LIGHT_INNER     = "<path d=\"M128,70A30,30,0,1,0,98,40,30,30,0,0,0,128,70Zm0-48a18,18,0,1,1-18,18A18,18,0,0,1,128,22ZM229.55,88.14A17.66,17.66,0,0,0,212,74H44a18,18,0,0,0-7.55,34.34l.1,0,52.32,23-21.44,81.5A18,18,0,0,0,84,238a18.07,18.07,0,0,0,16.19-10.14L128,180l27.81,47.91a18,18,0,0,0,32.73-14.94l-21.44-81.5,52.32-23,.1,0A17.66,17.66,0,0,0,229.55,88.14Zm-15,9.29-56.95,25.08a6,6,0,0,0-3.39,7l22.87,86.93a7.66,7.66,0,0,0,.37,1,6,6,0,0,1-10.88,5.07,4.3,4.3,0,0,0-.24-.48L133.19,165a6,6,0,0,0-10.38,0L89.69,222.05c-.09.16-.17.31-.25.48a6,6,0,0,1-8,2.9,6,6,0,0,1-2.9-8,7.66,7.66,0,0,0,.37-1l22.87-86.93a6,6,0,0,0-3.39-7L41.47,97.43A6,6,0,0,1,44,86H212a6,6,0,0,1,2.56,11.43Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56ZM231.5,87.71A19.62,19.62,0,0,0,212,72H44a20,20,0,0,0-8.38,38.16l.13.06,50.75,22.35-21,79.72A20,20,0,0,0,102,228.82l26-44.88,26,44.88a20,20,0,0,0,36.4-16.53l-21-79.72,50.75-22.35.13-.06A19.63,19.63,0,0,0,231.5,87.71Zm-17.8,7.9-56.93,25.07a8,8,0,0,0-4.51,9.36L175.13,217a7,7,0,0,0,.49,1.35,4,4,0,1,1-7.25,3.38c-.11-.22-.22-.43-.34-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.06c-.12.2-.23.41-.34.63a4,4,0,1,1-7.25-3.38,7,7,0,0,0,.49-1.35L103.74,130a8,8,0,0,0-4.51-9.36L42.3,95.61A4,4,0,0,1,44,88H212a4,4,0,0,1,1.73,7.61Z\"/>";
const SECONDARY_PATHS = "<path d=\"M104,40a24,24,0,1,1,24,24A24,24,0,0,1,104,40ZM212,80H44c-12.87,0-16.71,17.5-5,22.9L96,128,73.13,214.93a12,12,0,0,0,21.75,10.14L128,168l33.12,57.07a12,12,0,0,0,21.75-10.14L160,128l57-25.1C228.69,97.5,224.85,80,212,80Z\"/>";

export const PersonArmsSpread = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PersonArmsSpreadProps) => {
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
