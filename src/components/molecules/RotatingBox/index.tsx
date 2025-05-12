import styled, { keyframes } from "styled-components";
import { Box } from "../../atoms";

// Define a animação de rotação
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Box que gira apenas se a prop `isSelected` for true
const RotatingBox = styled(Box) <{ isSelected?: boolean }>`
  animation: ${({ isSelected }) =>
    isSelected ? `${rotate} 5s linear infinite` : "none"};
  transition: transform 0.3s ease;
`;

export default RotatingBox;