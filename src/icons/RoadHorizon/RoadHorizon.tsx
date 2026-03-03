import { SVGProps } from "react";

export type RoadHorizonVariant = "duotone" | "fill" | "light";

export interface RoadHorizonProps extends SVGProps<SVGSVGElement> {
  variant?: RoadHorizonVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M239,188.08,173.68,72h58A8.17,8.17,0,0,0,240,64.53,8,8,0,0,0,232,56H24.27A8.17,8.17,0,0,0,16,63.47,8,8,0,0,0,24,72H82.32L17,188.08a8,8,0,0,0,1.17,9.43,8.24,8.24,0,0,0,6,2.49H116a4,4,0,0,0,4-4V176.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v20a4,4,0,0,0,4,4h91.77a8.24,8.24,0,0,0,6-2.49A8,8,0,0,0,239,188.08ZM136,140a8,8,0,0,1-16,0V124a8,8,0,0,1,16,0Zm0-52a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z\"/>";
const LIGHT_INNER     = "<path d=\"M234.94,197.23a6,6,0,0,1-8.17-2.29L156.49,70H134V80a6,6,0,0,1-12,0V70H99.51L29.23,194.94a6,6,0,1,1-10.46-5.88L85.74,70H24a6,6,0,0,1,0-12H232a6,6,0,0,1,0,12H170.26l67,119.06A6,6,0,0,1,234.94,197.23ZM128,114a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V120A6,6,0,0,0,128,114Zm0,56a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V176A6,6,0,0,0,128,170Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M235.92,199A8,8,0,0,1,225,195.92L155.32,72H136v8a8,8,0,0,1-16,0V72H100.68L31,195.92A8,8,0,0,1,17,188.08L82.32,72H24a8,8,0,0,1,0-16H232a8,8,0,0,1,0,16H173.68L239,188.08A8,8,0,0,1,235.92,199ZM128,112a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V120A8,8,0,0,0,128,112Zm0,56a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V176A8,8,0,0,0,128,168Z\"/>";
const SECONDARY_PATHS = "<path d=\"M232,192H24L96,64h64Z\"/>";

export const RoadHorizon = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: RoadHorizonProps) => {
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
