import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Box, Text } from "../../components";

const StartScreen: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const fonts = [
    "Cormorant SC",
    "Courier New",
    "Georgia",
    "Pinyon Script",
    "Times New Roman",
    "Verdana",
    "Pinyon Script",
    "Futura",
    "Monaco",
    "Lucida Console",
    "Cinzel Decorative",
    "Pinyon Script",
  ];

  useEffect(() => {
    if (!textRef.current) return;

    let i = 0;

    const animateFont = () => {
      gsap.to(textRef.current!, {
        fontFamily: fonts[i % fonts.length],
        duration: 0.1,
        ease: "power2.inOut",
        onComplete: () => {
          i++;
          setTimeout(animateFont, 10); // espera antes da próxima troca
        },
      });
    };

    animateFont(); // inicia animação
  }, []);

  return (
    <Box width="100%" height="100%" padding="20px" gap="5px">
      <Text
        ref={textRef}
        color={"#ffff00"}
        fontWeight={"700"}
        fontSize={"1.2rem"}
      >
        i want 2 be here
      </Text>
    </Box>
  );
};

export default StartScreen;
