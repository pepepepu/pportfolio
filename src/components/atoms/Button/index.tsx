import styled from "styled-components";
import React from "react";

type Size = string | number;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: Size;
  height?: Size;
  background?: string;
  color?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  hoverBackground?: string;
  hoverColor?: string;
  transition?: string;
  cursor?: string;
  children?: React.ReactNode;
}

const formatSize = (value?: Size) => {
  if (typeof value === "number") return `${value}px`;
  return value || "auto";
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => formatSize(width)};
  height: ${({ height }) => formatSize(height)};
  background: ${({ background }) => background || "#333"};
  color: ${({ color }) => color || "#fff"};
  padding: ${({ padding }) => padding || "10px 20px"};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "6px"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  transition: ${({ transition }) => transition || "background 0.3s ease"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${({ hoverBackground }) => hoverBackground || "#555"};
    color: ${({ hoverColor }) => hoverColor || "#fff"};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
