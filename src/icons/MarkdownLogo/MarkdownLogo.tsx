import { SVGProps } from "react";

export type MarkdownLogoVariant = "duotone" | "fill" | "light";

export interface MarkdownLogoProps extends SVGProps<SVGSVGElement> {
  variant?: MarkdownLogoVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48ZM128,152a8,8,0,0,1-16,0V123.31L93.66,141.66a8,8,0,0,1-11.32,0L64,123.31V152a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.66L88,124.69l26.34-26.35A8,8,0,0,1,128,104Zm77.66-18.34-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L168,132.69V104a8,8,0,0,1,16,0v28.69l10.34-10.35a8,8,0,0,1,11.32,11.32Z\"/>";
const LIGHT_INNER     = "<path d=\"M232,50H24A14,14,0,0,0,10,64V192a14,14,0,0,0,14,14H232a14,14,0,0,0,14-14V64A14,14,0,0,0,232,50Zm2,142a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H232a2,2,0,0,1,2,2ZM126,104v48a6,6,0,0,1-12,0V118.49L92.24,140.24a6,6,0,0,1-8.48,0L62,118.49V152a6,6,0,0,1-12,0V104a6,6,0,0,1,10.24-4.24L88,127.51l27.76-27.75A6,6,0,0,1,126,104Zm78.24,19.76a6,6,0,0,1,0,8.48l-24,24a6,6,0,0,1-8.48,0l-24-24a6,6,0,1,1,8.48-8.48L170,137.51V104a6,6,0,0,1,12,0v33.51l13.76-13.75A6,6,0,0,1,204.24,123.76Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm0,144H24V64H232V192ZM128,104v48a8,8,0,0,1-16,0V123.31L93.66,141.66a8,8,0,0,1-11.32,0L64,123.31V152a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.66L88,124.69l26.34-26.35A8,8,0,0,1,128,104Zm77.66,18.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L168,132.69V104a8,8,0,0,1,16,0v28.69l10.34-10.35A8,8,0,0,1,205.66,122.34Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,64V192a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H232A8,8,0,0,1,240,64Z\"/>";

export const MarkdownLogo = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: MarkdownLogoProps) => {
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
