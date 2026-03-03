import { SVGProps } from "react";

export type CastleTurretVariant = "duotone" | "fill" | "light";

export interface CastleTurretProps extends SVGProps<SVGSVGElement> {
  variant?: CastleTurretVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H180a8,8,0,0,0-8,8V64H148V40a8,8,0,0,0-8-8H116a8,8,0,0,0-8,8V64H84V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM112,168a16,16,0,0,1,32,0v48H112Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,218H198V114.49l11.9-11.91a13.9,13.9,0,0,0,4.1-9.89V48a14,14,0,0,0-14-14H176a6,6,0,0,0-6,6V66H150V40a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6V66H86V40a6,6,0,0,0-6-6H56A14,14,0,0,0,42,48V92.69a13.9,13.9,0,0,0,4.1,9.89L58,114.49V218H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM68.24,107.76,54.58,94.1A2,2,0,0,1,54,92.69V48a2,2,0,0,1,2-2H74V72a6,6,0,0,0,6,6h32a6,6,0,0,0,6-6V46h20V72a6,6,0,0,0,6,6h32a6,6,0,0,0,6-6V46h18a2,2,0,0,1,2,2V92.69a2,2,0,0,1-.58,1.41l-13.66,13.66A6,6,0,0,0,186,112V218H158V168a30,30,0,0,0-60,0v50H70V112A6,6,0,0,0,68.24,107.76ZM146,218H110V168a18,18,0,0,1,36,0Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,216H200V115.31L211.31,104A15.86,15.86,0,0,0,216,92.69V48a16,16,0,0,0-16-16H176a8,8,0,0,0-8,8V64H152V40a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8V64H88V40a8,8,0,0,0-8-8H56A16,16,0,0,0,40,48V92.69A15.86,15.86,0,0,0,44.69,104L56,115.31V216H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM69.66,106.34,56,92.69V48H72V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V48h16V92.69l-13.66,13.65A8,8,0,0,0,184,112V216H160V168a32,32,0,0,0-64,0v48H72V112A8,8,0,0,0,69.66,106.34ZM144,216H112V168a16,16,0,0,1,32,0Z\"/>";
const SECONDARY_PATHS = "<path d=\"M208,48V92.69a8,8,0,0,1-2.34,5.65L192,112V224H152V168a24,24,0,0,0-48,0v56H64V112L50.34,98.34A8,8,0,0,1,48,92.69V48a8,8,0,0,1,8-8H80V72h32V40h32V72h32V40h24A8,8,0,0,1,208,48Z\"/>";

export const CastleTurret = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CastleTurretProps) => {
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
