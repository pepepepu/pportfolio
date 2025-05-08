import styled, { css } from "styled-components";

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
  textShadow?: boolean;
  textShadowColor?: string;
  textShadowSize?: string;
  emptyButton?: boolean;
}

const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-family: ${({ fontFamily }) => (fontFamily ? `"${fontFamily}"` : '"EB Garamond"')};
  color: ${({ color }) => color || "inherit"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  line-height: ${({ lineHeight }) => lineHeight || "normal"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "normal"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  position: relative;
  display: inline-block;
  cursor: ${({ emptyButton }) => (emptyButton ? "pointer" : "default")};

  ${({ textShadow, textShadowColor, textShadowSize }) =>
    textShadow &&
    `
    text-shadow: 
      -${textShadowSize || "1px"} -${textShadowSize || "1px"} 0 ${textShadowColor || "#000"}, 
      ${textShadowSize || "1px"} -${textShadowSize || "1px"} 0 ${textShadowColor || "#000"}, 
      -${textShadowSize || "1px"} ${textShadowSize || "1px"} 0 ${textShadowColor || "#000"}, 
      ${textShadowSize || "1px"} ${textShadowSize || "1px"} 0 ${textShadowColor || "#000"};
  `}

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
`;

export default Text;
