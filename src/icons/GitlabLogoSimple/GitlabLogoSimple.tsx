import { SVGProps } from "react";

export type GitlabLogoSimpleVariant = "duotone" | "fill" | "light";

export interface GitlabLogoSimpleProps extends SVGProps<SVGSVGElement> {
  variant?: GitlabLogoSimpleVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208.14,178.06l-73.27,51.76a11.91,11.91,0,0,1-13.74,0L47.86,178.06a57.19,57.19,0,0,1-22-61L45.75,41a11.94,11.94,0,0,1,22.79-1.11L86.22,88h83.56l17.68-48.13A11.94,11.94,0,0,1,210.25,41l19.9,76.12A57.19,57.19,0,0,1,208.14,178.06Z\"/>";
const LIGHT_INNER     = "<path d=\"M228.21,117.61,208.32,41.49a9.94,9.94,0,0,0-19-.93L171.17,90H84.83L66.66,40.56a9.94,9.94,0,0,0-19,.93L27.79,117.61A55.18,55.18,0,0,0,49,176.42l73.27,51.77a9.94,9.94,0,0,0,11.44,0L207,176.42A55.18,55.18,0,0,0,228.21,117.61Zm-28.15,49L128,217.53,55.94,166.62a43.12,43.12,0,0,1-16.54-46L57.65,50.82,75,98.07A6,6,0,0,0,80.64,102h94.72A6,6,0,0,0,181,98.07l17.36-47.25,18.25,69.82A43.12,43.12,0,0,1,200.06,166.62Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1ZM198.91,165,128,215.09,57.09,165a41.1,41.1,0,0,1-15.75-43.84L58,57.5,73.13,98.76A8,8,0,0,0,80.64,104h94.72a8,8,0,0,0,7.51-5.24L198,57.5l16.63,63.65A41.1,41.1,0,0,1,198.91,165Z\"/>";
const SECONDARY_PATHS = "<path d=\"M203.52,171.52l-73.26,51.76a3.91,3.91,0,0,1-4.52,0L52.48,171.52a49,49,0,0,1-18.87-52.4L53.5,43A3.93,3.93,0,0,1,61,42.62L80.65,96h94.7L195,42.62a3.93,3.93,0,0,1,7.53.38l19.89,76.12A49,49,0,0,1,203.52,171.52Z\"/>";

export const GitlabLogoSimple = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: GitlabLogoSimpleProps) => {
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
