import { SVGProps } from "react";

export type TextTSlashVariant = "duotone" | "fill" | "light";

export interface TextTSlashProps extends SVGProps<SVGSVGElement> {
  variant?: TextTSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,72h48a8,8,0,0,1,8,8V96a8,8,0,0,1-16,0V88H128a8,8,0,0,1,0-16Zm61.27,126a8,8,0,0,1-11.29-.75l-42-48V176h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V131L88,94.43V96a8,8,0,0,1-16,0V80a8.13,8.13,0,0,1,.63-3.13L66,69.27A8,8,0,0,1,78,58.73l112,128A8,8,0,0,1,189.27,198Z\"/>";
const LIGHT_INNER     = "<path d=\"M212,220.44a6,6,0,0,1-8.48-.4L134,143.52V194h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V130.32l-60-66V88a6,6,0,0,1-12,0V56a6,6,0,0,1,1.19-3.57L43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44ZM105.79,62H122V80.43a6,6,0,0,0,12,0V62h60V88a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H105.79a6,6,0,0,0,0,12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M213.38,221.92a8,8,0,0,1-11.3-.54L136,148.69V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V131.09L64,69.49V88a8,8,0,0,1-16,0V56a8,8,0,0,1,.72-3.31l-6.64-7.31A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM105.79,64H120V80.43a8,8,0,0,0,16,0V64h56V88a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H105.79a8,8,0,0,0,0,16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M200,56V200H72a16,16,0,0,1-16-16V56Z\"/>";

export const TextTSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextTSlashProps) => {
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
