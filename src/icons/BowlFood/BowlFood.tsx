import { SVGProps } from "react";

export type BowlFoodVariant = "duotone" | "fill" | "light";

export interface BowlFoodProps extends SVGProps<SVGSVGElement> {
  variant?: BowlFoodVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM148.12,104a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Z\"/>";
const LIGHT_INNER     = "<path d=\"M224,106H213.77a86,86,0,0,0-171.54,0H32a6,6,0,0,0-6,6,102.35,102.35,0,0,0,56,91.06V208a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14v-4.94A102.35,102.35,0,0,0,230,112,6,6,0,0,0,224,106ZM174.24,54.29a74.15,74.15,0,0,1,8.15,7.6A85.89,85.89,0,0,0,130.84,106H97.34A74.24,74.24,0,0,1,168,54C170.08,54,172.17,54.11,174.24,54.29ZM190.3,72.14A73.49,73.49,0,0,1,201.74,106H144.48A73.89,73.89,0,0,1,190.3,72.14ZM128,38a73.68,73.68,0,0,1,26.8,5,86.32,86.32,0,0,0-69.94,63H54.26A74.09,74.09,0,0,1,128,38Zm37.5,155.84a6,6,0,0,0-3.5,5.46V208a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2v-8.7a6,6,0,0,0-3.5-5.46A90.35,90.35,0,0,1,38.2,118H217.8A90.35,90.35,0,0,1,165.5,193.84Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23Zm15.91,18.2A71.45,71.45,0,0,1,199.54,104H148.12A71.84,71.84,0,0,1,189.39,74.43ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z\"/>";
const SECONDARY_PATHS = "<path d=\"M224,112a96,96,0,0,1-56,87.3V208a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-8.7A96,96,0,0,1,32,112Z\"/>";

export const BowlFood = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: BowlFoodProps) => {
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
