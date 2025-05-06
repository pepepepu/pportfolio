import styled from "styled-components";
import { motion } from "framer-motion";

type Size = string | number;

interface MotionBoxProps {
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
}

const formatSize = (value?: Size) => {
  if (typeof value === "number") return `${value}px`;
  return value || "auto";
};

const MotionBox = styled(motion.div)<MotionBoxProps>`
  width: ${({ width }) => formatSize(width)};
  height: ${({ height }) => formatSize(height)};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  background: ${({ background }) => background || "transparent"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  display: ${({ display }) => display || "block"};
  justify-content: ${({ justifyContent }) => justifyContent || "initial"};
  align-items: ${({ alignItems }) => alignItems || "initial"};
  flex-direction: ${({ flexDirection }) => flexDirection || "initial"};
  gap: ${({ gap }) => gap || "0"};
  color: ${({ color }) => color || "inherit"};
  border: ${({ border }) => border || "none"};
  box-shadow: ${({ boxShadow }) => boxShadow || "none"};
`;

export default MotionBox;
