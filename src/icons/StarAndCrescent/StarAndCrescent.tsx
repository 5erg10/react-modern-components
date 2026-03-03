import { SVGProps } from "react";

export type StarAndCrescentVariant = "duotone" | "fill" | "light";

export interface StarAndCrescentProps extends SVGProps<SVGSVGElement> {
  variant?: StarAndCrescentVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M160,206.4a8,8,0,0,1-4.36,7.13A94.93,94.93,0,0,1,112,224a96,96,0,0,1,0-192,94.93,94.93,0,0,1,43.64,10.47,8,8,0,0,1,0,14.25,80,80,0,0,0,0,142.56A8,8,0,0,1,160,206.4Zm91.17-85.75-26.5-11.43-2.31-29.84a8,8,0,0,0-14.14-4.47L189.63,97.42l-27.71-6.85a8,8,0,0,0-8.81,11.82L168.18,128l-15.07,25.61a8,8,0,0,0,8.81,11.82l27.71-6.85,18.59,22.51a8,8,0,0,0,14.14-4.47l2.31-29.84,26.5-11.43a8,8,0,0,0,0-14.7Z\"/>";
const LIGHT_INNER     = "<path d=\"M154.73,201.06a82,82,0,0,1,0-146.12,6,6,0,0,0,0-10.69A93,93,0,0,0,112,34a94,94,0,0,0,0,188,93,93,0,0,0,42.73-10.25,6,6,0,0,0,0-10.69ZM112,210A82,82,0,1,1,138.81,50.47a94,94,0,0,0,0,155.06A81.4,81.4,0,0,1,112,210Zm138.38-87.51-27.61-11.91-2.4-31a6,6,0,0,0-10.61-3.36L190.37,99.67l-28.93-7.16a6,6,0,0,0-6.61,8.87L170.5,128l-15.67,26.62a6,6,0,0,0,6.61,8.87l28.93-7.16,19.39,23.49a6,6,0,0,0,10.61-3.36l2.4-31,27.61-11.91a6,6,0,0,0,0-11Zm-35.69,13.35a6,6,0,0,0-3.61,5l-1.53,19.83-12.33-14.94a6,6,0,0,0-4.63-2.18,5.92,5.92,0,0,0-1.44.18l-18.74,4.63L182.64,131a6,6,0,0,0,0-6.08l-10.23-17.37,18.74,4.63a6,6,0,0,0,6.07-2l12.33-14.94,1.53,19.83a6,6,0,0,0,3.61,5L232.86,128Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M155.64,199.28a80,80,0,0,1,0-142.56,8,8,0,0,0,0-14.25A94.93,94.93,0,0,0,112,32a96,96,0,0,0,0,192,94.93,94.93,0,0,0,43.64-10.47,8,8,0,0,0,0-14.25ZM112,208A80,80,0,1,1,134.4,51.16a96.08,96.08,0,0,0,0,153.68A79.82,79.82,0,0,1,112,208Zm139.17-87.35-26.5-11.43-2.31-29.84a8,8,0,0,0-14.14-4.47L189.63,97.42l-27.71-6.85a8,8,0,0,0-8.81,11.82L168.18,128l-15.07,25.61a8,8,0,0,0,8.81,11.82l27.71-6.85,18.59,22.51a8,8,0,0,0,14.14-4.47l2.31-29.84,26.5-11.43a8,8,0,0,0,0-14.7ZM213.89,134a8,8,0,0,0-4.8,6.73l-1.15,14.89-9.18-11.11a8,8,0,0,0-6.17-2.91,8.4,8.4,0,0,0-1.92.23l-14.12,3.5,7.81-13.27a8,8,0,0,0,0-8.12l-7.81-13.27,14.12,3.5a8,8,0,0,0,8.09-2.68l9.18-11.11,1.15,14.89a8,8,0,0,0,4.8,6.73l13.92,6Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,206.4a88,88,0,1,1,0-156.8,88,88,0,0,0,0,156.8Zm65.06-91.75L214.39,80l-21.8,26.4L160,98.33,177.46,128,160,157.67l32.59-8.07,21.8,26.4,2.67-34.65L248,128Z\"/>";

export const StarAndCrescent = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: StarAndCrescentProps) => {
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
