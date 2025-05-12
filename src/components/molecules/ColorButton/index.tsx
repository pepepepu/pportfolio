import React from "react";
import { Box, Text, Button } from "../..";

interface ColorButtonProps {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  text?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  isSelected?: boolean;
}

// Usando forwardRef para expor a referência ao elemento de clique
const ColorButton = React.forwardRef<HTMLDivElement, ColorButtonProps>(
  ({ backgroundColor, hoverBackgroundColor, text, onClick, isSelected }, ref) => {
    return (
      <Button background={"transparent"} hoverBackground="transparent">
        <Box flexDirection="column" gap="10px">
          <Box
            ref={ref}
            width={110}
            height={110}
            borderRadius="100px"
            background={backgroundColor}
            hoverBackground={hoverBackgroundColor}
            boxWithHover
            border={"1px solid black"} // destaque visual
            onClick={onClick}
          />
          <Text
            fontFamily={"VCR OSD Mono"}
            color="#EFEFEF"
            fontSize="1.3rem"
            textShadow
          >
            {text}
          </Text>
        </Box>
      </Button>
    );
  }
);

export default ColorButton;
