import styled from "styled-components";
import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string | number;
  height?: string | number;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  color?: string;
  fontSize?: string;
  placeholderColor?: string;
}

const formatSize = (value?: string | number) => {
  if (typeof value === "number") return `${value}px`;
  return value || "auto";
};

const StyledInput = styled.input<TextInputProps>`
  width: ${({ width }) => formatSize(width)};
  height: ${({ height }) => formatSize(height)};
  padding: ${({ padding }) => padding || "10px"};
  margin: ${({ margin }) => margin || "0"};
  border: ${({ border }) => border || "1px solid #ccc"};
  border-radius: ${({ borderRadius }) => borderRadius || "6px"};
  background: ${({ background }) => background || "#fff"};
  color: ${({ color }) => color || "#000"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  outline: none;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "#aaa"};
  }
`;

const TextInput: React.FC<TextInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default TextInput;
