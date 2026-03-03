import { SVGProps } from "react";

export type EngineVariant = "duotone" | "fill" | "light";

export interface EngineProps extends SVGProps<SVGSVGElement> {
  variant?: EngineVariant;
  primaryColor?: string;
  secondaryColor?: string;
}

const FILL_INNER      = "<path d=\"M256,120v48a16,16,0,0,1-16,16H227.31L192,219.31A15.86,15.86,0,0,1,180.69,224H103.31A15.86,15.86,0,0,1,92,219.31L52.69,180A15.86,15.86,0,0,1,48,168.69V148H24v24a8,8,0,0,1-16,0V108a8,8,0,0,1,16,0v24H48V80A16,16,0,0,1,64,64h60V40H100a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16H140V64h40.69A15.86,15.86,0,0,1,192,68.69L227.31,104H240A16,16,0,0,1,256,120Z\"/>";
const LIGHT_INNER     = "<path d=\"M240,106H226.49L190.58,70.1a13.9,13.9,0,0,0-9.89-4.1H138V38h26a6,6,0,0,0,0-12H100a6,6,0,0,0,0,12h26V66H64A14,14,0,0,0,50,80v54H22V108a6,6,0,0,0-12,0v64a6,6,0,0,0,12,0V146H50v22.69a13.9,13.9,0,0,0,4.1,9.89L93.42,217.9a13.9,13.9,0,0,0,9.89,4.1h77.38a13.9,13.9,0,0,0,9.89-4.1L226.49,182H240a14,14,0,0,0,14-14V120A14,14,0,0,0,240,106Zm2,62a2,2,0,0,1-2,2H224a6,6,0,0,0-4.24,1.76L182.1,209.42a2,2,0,0,1-1.41.58H103.31a2,2,0,0,1-1.41-.58L62.58,170.1a2,2,0,0,1-.58-1.41V80a2,2,0,0,1,2-2H180.69a2,2,0,0,1,1.41.58l37.66,37.66A6,6,0,0,0,224,118h16a2,2,0,0,1,2,2Z\"/>";
const PRIMARY_PATHS   = "<path d=\"M240,104H227.31L192,68.69A15.86,15.86,0,0,0,180.69,64H140V40h24a8,8,0,0,0,0-16H100a8,8,0,0,0,0,16h24V64H64A16,16,0,0,0,48,80v52H24V108a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0V148H48v20.69A15.86,15.86,0,0,0,52.69,180L92,219.31A15.86,15.86,0,0,0,103.31,224h77.38A15.86,15.86,0,0,0,192,219.31L227.31,184H240a16,16,0,0,0,16-16V120A16,16,0,0,0,240,104Zm0,64H224a8,8,0,0,0-5.66,2.34L180.69,208H103.31L64,168.69V80H180.69l37.65,37.66A8,8,0,0,0,224,120h16Z\"/>";
const SECONDARY_PATHS = "<path d=\"M248,120v48a8,8,0,0,1-8,8H224l-37.66,37.66a8,8,0,0,1-5.65,2.34H103.31a8,8,0,0,1-5.65-2.34L58.34,174.34A8,8,0,0,1,56,168.69V80a8,8,0,0,1,8-8H180.69a8,8,0,0,1,5.65,2.34L224,112h16A8,8,0,0,1,248,120Z\"/>";

export const Engine = ({
  variant = "duotone",
  primaryColor = "currentColor",
  secondaryColor,
  style,
  ...props
}: EngineProps) => {
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
