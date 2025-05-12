import React from "react";
import { Box, Text, Button } from "../..";

interface NavigateButtonProps {
  color?: string;
  fontSize?: string;
  text?: string;
  textShadowSize?: string; onClick?:
  React.MouseEventHandler<HTMLButtonElement>;
  align?: string;
  emptyButton?: boolean;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
  color,
  fontSize,
  text,
  onClick,
  textShadowSize,
  align,
  emptyButton,
}) => {
  return (
    <Button
      background={"transparent"}
      hoverBackground={"transparent"}
      padding={"0px"}
      width={"15%"}
      onClick={onClick} // ✅ AQUI está a correção
    >
      <Box width={"100%"} alignItems={align}>
        <Text
          fontFamily={"VCR OSD Mono"}
          color={color ?? "#EFEFEF"}
          fontSize={fontSize ?? "1.2rem"}
          textShadow
          textShadowSize={textShadowSize}
          emptyButton={emptyButton ?? true}
        >
          {text}
        </Text>
      </Box>
    </Button>
  );
};


export default NavigateButton;