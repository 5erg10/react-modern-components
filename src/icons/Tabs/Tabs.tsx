import { SVGProps } from "react";

export type TabsVariant = "duotone" | "fill" | "light";

export interface TabsProps extends SVGProps<SVGSVGElement> {
  variant?: TabsVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M256,168a8,8,0,0,1-8,8H8A8,8,0,0,1,.37,165.6L22.63,91.4A15.89,15.89,0,0,1,38,80h84.1a15.89,15.89,0,0,1,15.32,11.4L158,160h15.3L150.79,85.15A4,4,0,0,1,154.62,80h15.43a16,16,0,0,1,15.32,11.4L206,160h15.3L198.79,85.15A4,4,0,0,1,202.62,80h15.43a16,16,0,0,1,15.32,11.4l22.26,74.18A8.11,8.11,0,0,1,256,168Z\"/>";
const LIGHT_INNER     = "<path d=\"M253.75,166.28h0v0l0,0L231.46,92a13.91,13.91,0,0,0-13.41-10H208a6,6,0,0,0,0,12h10.05A2,2,0,0,1,220,95.42l20,66.58H204.46l-21-70a13.91,13.91,0,0,0-13.41-10H160a6,6,0,0,0,0,12h10.05A2,2,0,0,1,172,95.42l20,66.58H156.46l-21-70a13.91,13.91,0,0,0-13.41-10H38A13.91,13.91,0,0,0,24.54,92L2.28,166.2l0,.05v0l0,.15a2.79,2.79,0,0,0-.1.39.11.11,0,0,0,0,.05A6,6,0,0,0,8,174H248a6,6,0,0,0,5.75-7.72ZM36,95.42A2,2,0,0,1,38,94h84.1A2,2,0,0,1,124,95.43l20,66.57H16.06Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M255.66,165.7h0v0a.24.24,0,0,0,0-.08L233.37,91.4A15.89,15.89,0,0,0,218.05,80H208a8,8,0,0,0,0,16h10.05l19.2,64H206L185.37,91.4A15.89,15.89,0,0,0,170.05,80H160a8,8,0,0,0,0,16h10.05l19.2,64H158L137.37,91.4A15.89,15.89,0,0,0,122.05,80H38A15.89,15.89,0,0,0,22.63,91.4L.37,165.6l0,.05v0s0,.05,0,.08A8.1,8.1,0,0,0,0,168a8,8,0,0,0,8,8H248a8,8,0,0,0,7.66-10.3ZM38,96h84.1l19.2,64H18.75Z\"/>";
const SECONDARY_PATHS = "<path d=\"M152,168H8L30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7Z\"/>";

export const Tabs = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: TabsProps) => {
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
