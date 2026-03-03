import { SVGProps } from "react";

export type WallVariant = "duotone" | "fill" | "light";

export interface WallProps extends SVGProps<SVGSVGElement> {
  variant?: WallVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,56V88a4,4,0,0,1-4,4H136V52a4,4,0,0,1,4-4h84A8,8,0,0,1,232,56Zm-4,52H184v44h44a4,4,0,0,0,4-4V112A4,4,0,0,0,228,108ZM88,152h80V108H88Zm-60,0H72V108H28a4,4,0,0,0-4,4v36A4,4,0,0,0,28,152Zm200,16H136v36a4,4,0,0,0,4,4h84a8,8,0,0,0,8-8V172A4,4,0,0,0,228,168ZM28,92h92V52a4,4,0,0,0-4-4H32a8,8,0,0,0-8,8V88A4,4,0,0,0,28,92Zm-4,80v28a8,8,0,0,0,8,8h84a4,4,0,0,0,4-4V168H28A4,4,0,0,0,24,172Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,50H32a6,6,0,0,0-6,6V200a6,6,0,0,0,6,6H224a6,6,0,0,0,6-6V56A6,6,0,0,0,224,50ZM86,146V110h84v36Zm-48,0V110H74v36Zm144-36h36v36H182Zm36-12H134V62h84ZM122,62V98H38V62ZM38,158h84v36H38Zm96,36V158h84v36Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M128,104H32V56h96Zm48,0v48H128v48h96V104Z\"/>";

export const Wall = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: WallProps) => {
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
