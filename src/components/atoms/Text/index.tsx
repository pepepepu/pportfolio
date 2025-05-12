import styled, { css } from "styled-components";

type GradientText = {
  direction?: string;
  colors: string[];
};

interface TextProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
  maxWidth?: string;
  fontFamily?: string;
  textShadow?: boolean | string;
  textShadowColor?: string;
  textShadowSize?: string;
  emptyButton?: boolean;
  gradientText?: GradientText;
  gradientTextShadow?: boolean | string;
}

const generateTextGradient = (gradientText?: GradientText) => {
  if (!gradientText || !gradientText.colors?.length) return null;
  const direction = gradientText.direction || "to right";
  const colors = gradientText.colors.join(", ");
  return `linear-gradient(${direction}, ${colors})`;
};

const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-family: ${({ fontFamily }) =>
    fontFamily ? `"${fontFamily}"` : '"EB Garamond"'};
  color: ${({ color, gradientText }) =>
    gradientText ? "transparent" : color || "inherit"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  line-height: ${({ lineHeight }) => lineHeight || "normal"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "normal"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  position: relative;
  display: inline-block;
  cursor: ${({ emptyButton }) => (emptyButton ? "pointer" : "default")};

  ${({ textShadow, textShadowColor, textShadowSize }) => {
    if (typeof textShadow === "string") {
      return `text-shadow: ${textShadow};`;
    }

    if (textShadow) {
      const size = textShadowSize || "1px";
      const color = textShadowColor || "#000";
      return `
      text-shadow: 
        -${size} -${size} 0 ${color}, 
        ${size} -${size} 0 ${color}, 
        -${size} ${size} 0 ${color}, 
        ${size} ${size} 0 ${color};
    `;
    }

    return "";
  }}

  ${({ emptyButton, color }) =>
    emptyButton &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: ${color || "inherit"};
        transition: width 0.3s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    `}

    ${({ gradientText, gradientTextShadow }) => {
    if (!gradientText) return "";

    const gradient = generateTextGradient(gradientText);
    const shadow =
      typeof gradientTextShadow === "string"
        ? `filter: drop-shadow(${gradientTextShadow});`
        : gradientTextShadow
        ? `filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5));`
        : "";

    return css`
      background: ${gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      ${shadow}
    `;
  }}
`;

export default Text;
