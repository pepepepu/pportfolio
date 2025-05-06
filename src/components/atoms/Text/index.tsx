import styled from "styled-components";

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
}

const Text = styled.p<TextProps>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  font-family: ${({ fontFamily }) => fontFamily || "EB Garamond"};
  color: ${({ color }) => color || "inherit"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  line-height: ${({ lineHeight }) => lineHeight || "normal"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "normal"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};

  ${({ textShadow, textShadowColor }) =>
    textShadow &&
    `
    text-shadow: 
      -1px -1px 0 ${textShadowColor || "#000"}, 
      1px -1px 0 ${textShadowColor || "#000"}, 
      -1px 1px 0 ${textShadowColor || "#000"}, 
      1px 1px 0 ${textShadowColor || "#000"};
  `}
`;

export default Text;
