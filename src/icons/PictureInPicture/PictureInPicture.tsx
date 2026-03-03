import { SVGProps } from "react";

export type PictureInPictureVariant = "duotone" | "fill" | "light";

export interface PictureInPictureProps extends SVGProps<SVGSVGElement> {
  variant?: PictureInPictureVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Zm0,144H136V128h80v64Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM38,192V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v58H136a6,6,0,0,0-6,6v66H40A2,2,0,0,1,38,192Zm178,2H142V134h76v58A2,2,0,0,1,216,194Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H136a8,8,0,0,0-8,8v64H40ZM216,192H144V136h72v56Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,64v64H136v72H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z\"/>";

export const PictureInPicture = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: PictureInPictureProps) => {
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
