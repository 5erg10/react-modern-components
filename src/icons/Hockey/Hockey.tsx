import { SVGProps } from "react";

export type HockeyVariant = "duotone" | "fill" | "light";

export interface HockeyProps extends SVGProps<SVGSVGElement> {
  variant?: HockeyVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M149.9,122.82l68-80a8,8,0,0,1,12.2,10.36l-68,80a8,8,0,1,1-12.2-10.36ZM240,168v32a16,16,0,0,1-16,16H171.7a16,16,0,0,1-12.19-5.64L25.9,53.18h0A8,8,0,0,1,38.1,42.82L130.9,152H224A16,16,0,0,1,240,168Zm-16,0H208v32h16ZM115.3,183.06a4,4,0,0,1,0,5.18L96.49,210.36A16,16,0,0,1,84.3,216H32a16,16,0,0,1-16-16V168a16,16,0,0,1,16-16H87.05a4,4,0,0,1,3,1.41ZM48,168H32v32H48Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,154H130L36.57,44.12a6,6,0,1,0-9.14,7.77L161,209.07A14,14,0,0,0,171.7,214H224a14,14,0,0,0,14-14V168A14,14,0,0,0,224,154Zm-53.82,47.3-30-35.3H194v36H171.7A2,2,0,0,1,170.18,201.3ZM226,200a2,2,0,0,1-2,2H206V166h18a2,2,0,0,1,2,2ZM110.89,181.08a6,6,0,0,0-8.46.68L85.82,201.3a2,2,0,0,1-1.52.7H62V166H85.2a6,6,0,0,0,0-12H32a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H84.3A14,14,0,0,0,95,209.07l16.6-19.54A6,6,0,0,0,110.89,181.08ZM30,200V168a2,2,0,0,1,2-2H50v36H32A2,2,0,0,1,30,200Zm121.43-75.88,68-80a6,6,0,1,1,9.14,7.77l-68,80a6,6,0,0,1-9.14-7.77Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,152H130.9L38.1,42.82A8,8,0,0,0,25.9,53.18L159.51,210.36A16,16,0,0,0,171.7,216H224a16,16,0,0,0,16-16V168A16,16,0,0,0,224,152Zm-79.5,16H192v32H171.7ZM224,200H208V168h16ZM112.18,179.55a8,8,0,0,0-11.27.92L84.3,200H64V168H85.2a8,8,0,0,0,0-16H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H84.3a16,16,0,0,0,12.19-5.64l16.61-19.53A8,8,0,0,0,112.18,179.55ZM32,168H48v32H32Zm117.9-45.18,68-80a8,8,0,0,1,12.2,10.36l-68,80a8,8,0,1,1-12.2-10.36Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,160v48H171.7a8,8,0,0,1-6.1-2.82l-38-44.7L90.4,205.12A8,8,0,0,1,84.25,208H56V160H200Z\"/>";

export const Hockey = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: HockeyProps) => {
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
