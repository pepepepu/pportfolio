import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Box, Text, VideoGlitchTransition } from "../../components";
import { useNavigate } from "react-router-dom";

const StartScreen: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);

  setTimeout(() => {
    setShowGlitch(true);
    setTimeout(() => {
      navigate("/home");
    }, 900)
  }, 15000)

  const fonts = [
    "Cormorant SC",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Verdana",
    "Futura",
    "Monaco",
    "Lucida Console",
    "Cinzel Decorative",
    "Jersey 10",
    "VCR OSD Mono",
  ];

  useEffect(() => {
    if (!textRef.current) return;

    let i = 0;

    const animateFont = () => {
      gsap.to(textRef.current!, {
        fontFamily: fonts[i % fonts.length],
        duration: 0.18,
        ease: "power2.inOut",
        onComplete: () => {
          i++;
          setTimeout(animateFont, 10);
        },
      });
    };

    animateFont();
  }, []);

  return (
    <Box width={"100vw"} height={"100vh"} background={"#3004cf"}>
      <Text
        ref={textRef}
        color={"#ffff00"}
        fontWeight={"600"}
        fontSize={"1.2rem"}
      >
        carregando
      </Text>
      {showGlitch && <VideoGlitchTransition />}
    </Box>
  );
};

export default StartScreen;
