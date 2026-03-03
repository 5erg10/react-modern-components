import { SVGProps } from "react";

export type CowboyHatVariant = "duotone" | "fill" | "light";

export interface CowboyHatProps extends SVGProps<SVGSVGElement> {
  variant?: CowboyHatVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,120a8,8,0,0,0-6.78,3.76A179.9,179.9,0,0,1,195.41,143l-1.63-8.57v0L178.32,53.07a16,16,0,0,0-25.72-9.55l-.13.1L128,64,103.53,43.62l-.13-.1a16,16,0,0,0-25.72,9.53L62.23,134.38v0L60.59,143a179.27,179.27,0,0,1-13.81-19.25A8,8,0,0,0,40,120a40,40,0,0,0,0,80H216a40,40,0,0,0,0-80ZM76.68,144H179.31l2.54,13.35a113.28,113.28,0,0,1-27.35,19C139.1,183.77,128.06,184,128,184c-.33,0-25.49-.4-53.86-26.6Z\"/>";
const LIGHT_INNER     = "<path d=\"M216,122a6,6,0,0,0-5.09,2.82,176.66,176.66,0,0,1-16.69,22.65l-17.87-94a14,14,0,0,0-22.5-8.35l-.1.08L129.22,65.59a2,2,0,0,1-2.44,0L102.25,45.16l-.1-.08a14,14,0,0,0-22.5,8.34L61.77,147.49a178.33,178.33,0,0,1-16.68-22.67A6,6,0,0,0,40,122a38,38,0,0,0,0,76H216a38,38,0,0,0,0-76ZM91.44,55.65a2,2,0,0,1,3.18-1.22l24.54,20.43.09.08a13.93,13.93,0,0,0,17.5,0l.09-.08,24.54-20.43a2,2,0,0,1,3.18,1.23L178.69,130H77.31ZM40,186a26,26,0,0,1-3.17-51.81C54.5,161.44,73.53,177.05,89.62,186Zm88,0c-.34,0-26.71-.41-56-27.91L75,142H181L184,158.05a115.79,115.79,0,0,1-28.89,20.19C139.38,185.81,128.08,186,128,186Zm88,0H166.38c16.09-8.95,35.12-24.56,52.79-51.81A26,26,0,0,1,216,186Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M216,120a8,8,0,0,0-6.78,3.76A179.9,179.9,0,0,1,195.41,143L178.32,53.07a16,16,0,0,0-25.72-9.55l-.13.1L128,64,103.53,43.62l-.13-.1a16,16,0,0,0-25.72,9.53L60.59,143a179.27,179.27,0,0,1-13.81-19.25A8,8,0,0,0,40,120a40,40,0,0,0,0,80H216a40,40,0,0,0,0-80ZM93.41,56,117.88,76.4l.12.1a15.92,15.92,0,0,0,20,0l.12-.1L162.59,56l13.68,72H79.73ZM40,184a24,24,0,0,1-4.14-47.64C51.28,159.83,67.73,174.65,82.4,184Zm88,0c-.33,0-25.49-.4-53.86-26.6L76.68,144H179.31l2.54,13.35a113.28,113.28,0,0,1-27.35,19C139.1,183.77,128.06,184,128,184Zm88,0H173.6c14.67-9.35,31.12-24.17,46.54-47.64A24,24,0,0,1,216,184Z\"/>";
const SECONDARY_PATHS = "<path d=\"M190.53,160.18C158.13,192,128,192,128,192s-30.13,0-62.53-31.82L70.06,136H185.94Z\"/>";

export const CowboyHat = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: CowboyHatProps) => {
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
