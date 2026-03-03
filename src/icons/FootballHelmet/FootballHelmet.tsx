import { SVGProps } from "react";

export type FootballHelmetVariant = "duotone" | "fill" | "light";

export interface FootballHelmetProps extends SVGProps<SVGSVGElement> {
  variant?: FootballHelmetVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M216,160H165.8l-7.09-24H216a8,8,0,0,0,8-8v-4A100,100,0,0,0,122.58,24C68.24,24.77,24,69.61,24,124A100,100,0,0,0,67.62,206.6a8,8,0,0,0,4.52,1.4H120a16,16,0,0,0,15.62-19.47,5.44,5.44,0,0,0-.15-.54l-3.56-12h21.93l10.79,36.53A16.1,16.1,0,0,0,180,224h36a16,16,0,0,0,16-16V176A16,16,0,0,0,216,160ZM84,176a12,12,0,1,1,12-12A12,12,0,0,1,84,176Zm43.16-16L120,136h22l7.09,24ZM216,208H180l-9.46-32H216Z\"/>";
const LIGHT_INNER     = "<path d=\"M94,164a10,10,0,1,1-10-10A10,10,0,0,1,94,164Zm136,12v32a14,14,0,0,1-14,14H180a14.1,14.1,0,0,1-13.43-10l-11.22-38h-26.1l4.33,14.56c0,.13.07.27.1.4A14,14,0,0,1,120,206H72.14A6,6,0,0,1,68.75,205,98,98,0,0,1,26,124c0-53.27,43.35-97.22,96.61-98A98,98,0,0,1,222,124v4a6,6,0,0,1-6,6H156l8.27,28H216A14,14,0,0,1,230,176ZM122,191.71l-15.54-52.26c0-.14-.07-.28-.1-.41A14,14,0,0,1,120,122h90a86,86,0,0,0-86-84h-1.24C76,38.66,38,77.22,38,124a86,86,0,0,0,36,70h46a2,2,0,0,0,2-2.29ZM151.79,162l-8.27-28H120a2,2,0,0,0-2,2.29L125.66,162ZM218,176a2,2,0,0,0-2-2H167.85l10.21,34.57A2,2,0,0,0,180,210h36a2,2,0,0,0,2-2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M96,164a12,12,0,1,1-12-12A12,12,0,0,1,96,164Zm136,12v32a16,16,0,0,1-16,16H180a16.1,16.1,0,0,1-15.35-11.47L153.84,176H131.91l3.56,12a5.44,5.44,0,0,1,.15.54A16,16,0,0,1,120,208H72.14a8,8,0,0,1-4.52-1.4A100,100,0,0,1,24,124c0-54.36,44.24-99.2,98.58-100A100,100,0,0,1,224,124v4a8,8,0,0,1-8,8H158.71l7.09,24H216A16,16,0,0,1,232,176ZM120,120h87.91A84,84,0,0,0,122.8,40C77.16,40.64,40,78.31,40,124a84,84,0,0,0,34.67,68H120l-15.45-52a4.77,4.77,0,0,1-.15-.54A16,16,0,0,1,120,120Zm29.11,40L142,136H120l7.14,24ZM216,176H170.52L180,208h36Z\"/>";
const SECONDARY_PATHS = "<path d=\"M112.19,137.74l15.62,52.52A8,8,0,0,1,120,200H72.14A91.91,91.91,0,0,1,32,124c0-50,40.65-91.26,90.69-92A92,92,0,0,1,216,124v4H120A8,8,0,0,0,112.19,137.74Z\"/>";

export const FootballHelmet = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: FootballHelmetProps) => {
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
