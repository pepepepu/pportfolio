import styled from "styled-components";

export const Indicator = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  margin-right: 10px;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;
