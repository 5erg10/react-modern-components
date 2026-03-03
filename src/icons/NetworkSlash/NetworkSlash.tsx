import { SVGProps } from "react";

export type NetworkSlashVariant = "duotone" | "fill" | "light";

export interface NetworkSlashProps extends SVGProps<SVGSVGElement> {
  variant?: NetworkSlashVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M98.08,59.41A8,8,0,0,1,96,54V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16H127.61a8,8,0,0,1-5.92-2.62ZM53.92,34.62A8,8,0,1,0,42.08,45.38L102.64,112H24a8,8,0,0,0,0,16H56v32H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H72V128h45.19l84.89,93.38a8,8,0,1,0,11.84-10.76ZM232,112H164a8,8,0,0,0,0,16h20v22.83a8,8,0,1,0,16,0V128h32a8,8,0,0,0,0-16Z\"/>";
const LIGHT_INNER     = "<path d=\"M98,54V40a14,14,0,0,1,14-14h32a14,14,0,0,1,14,14V72a14,14,0,0,1-14,14H127.61a6,6,0,0,1,0-12H144a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H112a2,2,0,0,0-2,2V54a6,6,0,0,1-12,0ZM212.44,212a6,6,0,0,1-8.88,8.08l-85.49-94H70v36H80a14,14,0,0,1,14,14v32a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V176a14,14,0,0,1,14-14H58V126H24a6,6,0,0,1,0-12h83.16L43.56,44A6,6,0,0,1,52.44,36ZM80,174H48a2,2,0,0,0-2,2v32a2,2,0,0,0,2,2H80a2,2,0,0,0,2-2V176A2,2,0,0,0,80,174Zm152-60H164a6,6,0,0,0,0,12h22v24.83a6,6,0,1,0,12,0V126h34a6,6,0,0,0,0-12Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,54V40a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V72a16,16,0,0,1-16,16H127.61a8,8,0,0,1,0-16H144V40H112V54a8,8,0,0,1-16,0ZM213.92,210.62a8,8,0,1,1-11.84,10.76L117.19,128H72v32h8a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16h8V128H24a8,8,0,0,1,0-16h78.64L42.08,45.38A8,8,0,1,1,53.92,34.62ZM80,176H48v32H80Zm152-64H164a8,8,0,0,0,0,16h20v22.83a8,8,0,1,0,16,0V128h32a8,8,0,0,0,0-16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M88,176v32a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V176a8,8,0,0,1,8-8H80A8,8,0,0,1,88,176ZM144,32H112a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V40A8,8,0,0,0,144,32Z\"/>";

export const NetworkSlash = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: NetworkSlashProps) => {
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
