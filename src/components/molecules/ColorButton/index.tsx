import React from "react";
import { Box, Text, Button } from "../..";

interface ColorButtonProps {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  text?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ColorButton: React.FC<ColorButtonProps> = ({ backgroundColor, hoverBackgroundColor, text, onClick }) => {
  return (
    <Button background={"transparent"} hoverBackground={"transparent"}>
      <Box flexDirection={"column"} gap="10px">
        <Box
          width={110} height={110}
          borderRadius={"100px"}
          background={backgroundColor}
          hoverBackground={hoverBackgroundColor}
          boxWithHover
          border={"1px black solid"}
          onClick={onClick}
        />
        <Text
          fontFamily={"Jersey 10"}
          color={"#EFEFEF"}
          fontSize={"1.5rem"}
          textShadow
        >
          {text}
        </Text>
      </Box>
    </Button>
  )
}

export default ColorButton;