import { SVGProps } from "react";

export type CrownCrossVariant = "duotone" | "fill" | "light";

export interface CrownCrossProps extends SVGProps<SVGSVGElement> {
  variant?: CrownCrossVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M128,83.22a53.86,53.86,0,0,0-8-10.06V40H104a8,8,0,0,1,0-16h16V8a8,8,0,0,1,16,0V24h16a8,8,0,0,1,0,16H136V73.16A53.86,53.86,0,0,0,128,83.22ZM180,56c-17.74,0-33.21,6.48-44,17.16V176a8,8,0,0,1-16,0V73.16C109.21,62.48,93.74,56,76,56a60.07,60.07,0,0,0-60,60c0,29.86,14.54,48.85,26.73,59.52A90.48,90.48,0,0,0,64,189.34V208a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V189.34a90.48,90.48,0,0,0,21.27-13.82C225.46,164.85,240,145.86,240,116A60.07,60.07,0,0,0,180,56Z\"/>";
const LIGHT_INNER     = "<path d=\"M180,58c-19.15,0-35.57,7.79-46,20.32V38h18a6,6,0,0,0,0-12H134V8a6,6,0,0,0-12,0V26H104a6,6,0,0,0,0,12h18V78.32C111.57,65.79,95.15,58,76,58a58.07,58.07,0,0,0-58,58c0,29.11,14.17,47.62,26.05,58a87.74,87.74,0,0,0,22,14V208a14,14,0,0,0,14,14h96a14,14,0,0,0,14-14V188.05A87.74,87.74,0,0,0,212,174c11.88-10.39,26.05-28.9,26.05-58A58.07,58.07,0,0,0,180,58Zm2.1,120.31A6,6,0,0,0,178,184v24a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V184a6,6,0,0,0-4.1-5.69C73.46,178.16,30,163.13,30,116A46.06,46.06,0,0,1,76,70c26.65,0,46,17.66,46,42v64a6,6,0,0,0,12,0V112c0-24.34,19.35-42,46-42a46.06,46.06,0,0,1,46,46C226,162.9,183.88,177.71,182.1,178.31Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M180,56c-17.74,0-33.21,6.48-44,17.16V40h16a8,8,0,0,0,0-16H136V8a8,8,0,0,0-16,0V24H104a8,8,0,0,0,0,16h16V73.16C109.21,62.48,93.74,56,76,56a60.07,60.07,0,0,0-60,60c0,29.86,14.54,48.85,26.73,59.52A90.48,90.48,0,0,0,64,189.34V208a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V189.34a90.48,90.48,0,0,0,21.27-13.82C225.46,164.85,240,145.86,240,116A60.07,60.07,0,0,0,180,56Zm1.47,120.41A8,8,0,0,0,176,184v24H80V184a8,8,0,0,0-5.47-7.59C74.1,176.27,32,161.7,32,116A44.05,44.05,0,0,1,76,72c25.5,0,44,16.82,44,40v64a8,8,0,0,0,16,0V112c0-23.18,18.5-40,44-40a44.05,44.05,0,0,1,44,44C224,161.4,183.18,175.83,181.47,176.41Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,116c0,52-48,68-48,68v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V184s-48-16-48-68A52,52,0,0,1,76,64c28.72,0,52,19.28,52,48,0-28.72,23.28-48,52-48A52,52,0,0,1,232,116Z\"/>";

export const CrownCross = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CrownCrossProps) => {
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
