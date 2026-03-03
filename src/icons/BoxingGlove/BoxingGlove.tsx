import { SVGProps } from "react";

export type BoxingGloveVariant = "duotone" | "fill" | "light";

export interface BoxingGloveProps extends SVGProps<SVGSVGElement> {
  variant?: BoxingGloveVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M168,16H120A56,56,0,0,0,64,72v31.73A8.17,8.17,0,0,1,56.53,112,8,8,0,0,1,48,104V78.7a4,4,0,0,0-5.63-3.65A32,32,0,0,0,24,104v29.19a16.14,16.14,0,0,0,3.5,10q.3.36.63.69L64,179.34V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V177.12l15.38-53.84a16,16,0,0,0,.62-4.4V72A56,56,0,0,0,168,16Zm3.58,168.84a8,8,0,0,1-7.16,14.32L136,184.94l-28.42,14.22a8,8,0,1,1-7.16-14.32L118.11,176l-17.69-8.84a8,8,0,1,1,7.16-14.32L136,167.06l28.42-14.22a8,8,0,1,1,7.16,14.32L153.89,176Z\"/>";
const LIGHT_INNER     = "<path d=\"M168,18H120A54.06,54.06,0,0,0,66,72v2H56a30,30,0,0,0-30,30v29.19a14,14,0,0,0,3.07,8.75,5.66,5.66,0,0,0,.47.52l36.46,36V216a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V176.84l15.46-54.11a13.93,13.93,0,0,0,.54-3.85V72A54.06,54.06,0,0,0,168,18Zm42,100.88a2,2,0,0,1-.08.55l-15.69,54.92A6.14,6.14,0,0,0,194,176v40a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V176a6,6,0,0,0-1.78-4.27L38.3,134.25a2,2,0,0,1-.3-1.06V104A18,18,0,0,1,56,86H66v18a6,6,0,0,0,12,0V72a42,42,0,0,1,42-42h48a42,42,0,0,1,42,42Zm-39.32,46.49L149.42,176l21.26,10.63a6,6,0,0,1-5.36,10.74L136,182.71l-29.32,14.66a6,6,0,0,1-5.36-10.74L122.58,176l-21.26-10.63a6,6,0,0,1,5.36-10.74L136,169.29l29.32-14.66a6,6,0,1,1,5.36,10.74Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M168,16H120A56.06,56.06,0,0,0,64,72H56a32,32,0,0,0-32,32v29.19a16.14,16.14,0,0,0,3.5,10q.3.36.63.69L64,179.34V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V177.12l15.38-53.84a16,16,0,0,0,.62-4.4V72A56.06,56.06,0,0,0,168,16Zm40,102.88L192.31,173.8A7.85,7.85,0,0,0,192,176v40H80V176a8,8,0,0,0-2.38-5.69L40,133.12V104A16,16,0,0,1,56,88h8v16a8,8,0,0,0,16,0V72a40,40,0,0,1,40-40h48a40,40,0,0,1,40,40Zm-36.42,48.28L153.89,176l17.69,8.84a8,8,0,0,1-7.16,14.32L136,184.94l-28.42,14.22a8,8,0,1,1-7.16-14.32L118.11,176l-17.69-8.84a8,8,0,1,1,7.16-14.32L136,167.06l28.42-14.22a8,8,0,1,1,7.16,14.32Z\"/>";
const SECONDARY_PATHS = "<path d=\"M216,72v46.88a7.85,7.85,0,0,1-.31,2.2L200,176v40a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V176L33.75,138.19a8,8,0,0,1-1.75-5V104A24,24,0,0,1,56,80H72V72a48,48,0,0,1,48-48h48A48,48,0,0,1,216,72Z\"/>";

export const BoxingGlove = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BoxingGloveProps) => {
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
