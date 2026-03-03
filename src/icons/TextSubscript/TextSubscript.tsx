import { SVGProps } from "react";

export type TextSubscriptVariant = "duotone" | "fill" | "light";

export interface TextSubscriptProps extends SVGProps<SVGSVGElement> {
  variant?: TextSubscriptVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM126.55,147.41a8,8,0,1,1-13.1,9.18L92,126,70.55,156.59a8,8,0,1,1-13.1-9.18L82.23,112,57.45,76.59a8,8,0,0,1,13.1-9.18L92,98.05l21.45-30.64a8,8,0,0,1,13.1,9.18L101.77,112ZM192,192H152a8,8,0,0,1-6.4-12.8l36-48a12,12,0,1,0-19.15-14.46,13.06,13.06,0,0,0-2.58,4.81,8,8,0,1,1-15.68-3.18,28.17,28.17,0,1,1,50.2,22.44L168,176h24a8,8,0,0,1,0,16Z\"/>";
const LIGHT_INNER     = "<path d=\"M246,208a6,6,0,0,1-6,6H192a6,6,0,0,1-4.8-9.6l43.17-57.56A18,18,0,1,0,199,130a6,6,0,1,1-11.31-4A30,30,0,1,1,240,154.06L204,202h36A6,6,0,0,1,246,208ZM147.93,51.47a6,6,0,0,0-8.46.6L92,106.84,44.53,52.07a6,6,0,1,0-9.06,7.86L84.06,116,35.47,172.07a6,6,0,1,0,9.06,7.86L92,125.16l47.47,54.77a6,6,0,0,0,9.06-7.86L99.94,116l48.59-56.07A6,6,0,0,0,147.93,51.47Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M248,208a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32.18,32.18,0,0,1,4.63-8.59,32,32,0,0,1,51.11,38.52L208,200h32A8,8,0,0,1,248,208ZM149.24,50a8,8,0,0,0-11.29.81L92,103.78l-45.95-53A8,8,0,0,0,34,61.24L81.41,116,34,170.76a8,8,0,0,0,12.1,10.48l46-53,45.95,53a8,8,0,1,0,12.1-10.48L102.59,116l47.46-54.76A8,8,0,0,0,149.24,50Z\"/>";
const SECONDARY_PATHS = "<path d=\"M240,72V208H56a16,16,0,0,1-16-16V56H224A16,16,0,0,1,240,72Z\"/>";

export const TextSubscript = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TextSubscriptProps) => {
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
