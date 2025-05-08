import styled, { css } from "styled-components";

type Size = string | number;

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
  boxShadow?: string;
  position?: string;
  zIndex?: number;
  boxWithHover?: boolean;
  hoverBackground?: string;
}

const formatSize = (value?: Size) => {
  if (typeof value === "number") return `${value}px`;
  return value || "auto";
};

const Box = styled.div<BoxProps>`
  width: ${({ width }) => formatSize(width)};
  height: ${({ height }) => formatSize(height)};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({ background }) => background || "transparent"};
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

  transition: background 0.9s ease; // ✅ suaviza a transição

  ${({ boxWithHover, hoverBackground }) =>
    boxWithHover &&
    css`
      &:hover {
        background: ${hoverBackground || "rgba(0, 0, 0, 0.0)"};
      }
    `}
`;

export default Box;
