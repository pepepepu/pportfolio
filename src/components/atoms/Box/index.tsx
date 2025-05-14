import styled, { css } from "styled-components";

type Size = string | number;
type GradientType = "linear" | "radial";

type GradientBackground = {
  type?: GradientType;
  direction?: string;
  colors: string[];
};

interface BoxProps {
  width?: Size;
  height?: Size;
  padding?: string;
  margin?: string;
  background?: string;
  borderRadius?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  color?: string;
  border?: string;
  overflow?: string;
  boxShadow?: string;
  position?: string;
  zIndex?: number;
  boxWithHover?: boolean;
  hoverBackground?: string;
  gradientBackground?: GradientBackground;

  parallelogram?: boolean;
  skewAngle?: number; // em graus
}

const formatSize = (value?: Size) => {
  if (typeof value === "number") return `${value}px`;
  return value || "auto";
};

const generateBoxGradient = (gradient?: GradientBackground) => {
  if (!gradient || !gradient.colors?.length) return undefined;
  const type = gradient.type || "linear";
  const direction = gradient.direction || (type === "radial" ? "circle at center" : "to right");
  const colors = gradient.colors.join(", ");
  return `${type}-gradient(${direction}, ${colors})`;
};


const Box = styled.div<BoxProps>`
  width: ${({ width }) => formatSize(width)};
  height: ${({ height }) => formatSize(height)};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({ gradientBackground, background }) =>
    generateBoxGradient(gradientBackground) || background || "transparent"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  gap: ${({ gap }) => gap || "0"};
  color: ${({ color }) => color || "inherit"};
  border: ${({ border }) => border || "none"};
  box-shadow: ${({ boxShadow }) => boxShadow || "none"};
  position: ${({ position }) => position || "relative"};
  overflow: ${({ overflow }) => overflow || "hidden"};
  transition: background 0.9s ease;

  ${({ boxWithHover, hoverBackground }) =>
    boxWithHover &&
    css`
      &:hover {
        background: ${hoverBackground || "rgba(0, 0, 0, 0.0)"};
      }
    `}

  ${({ parallelogram, skewAngle }) =>
    parallelogram &&
    css`
      transform: skewX(${skewAngle ?? 20}deg);
    `}
`;

export default Box;
