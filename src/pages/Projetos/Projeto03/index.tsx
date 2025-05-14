import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import handShakeBG from "../../../assets/videos/handsBG.mp4";
import tvOverlay from "../../../assets/videos/tvOverlay.mp4";
import { Box, Button, ImageBackground, Text, VideoGlitchTransition, VideoOverlay } from "../../../components";

const Projeto03: React.FC = () => {
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const numberRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = "Toda a descrição da aplicação, utilizadas inclusas e toda a ideia deste projeto estão contidos no link clicável. "

  const handleGoBack = () => {
    setShowGlitch(true);
    setTimeout(() => {
      navigate("/projetos");
    }, 400)
  }

  useEffect(() => {
    if (!numberRef.current) return;
    // Piscar a cada 2 segundos
    gsap.to(numberRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { x: "100%" },
      {
        x: "-100%",
        duration: 10,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <>
      <ImageBackground
        width={"100vw"}
        height={"100vh"}
        backgroundVideo={handShakeBG}
        overlayColor={"rgba(0, 0, 0, 0.1)"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"100%"} height={"100%"} justifyContent={"space-between"} padding={"40px 0px"}>
          <Box width={"90%"}>
            <Text
              fontFamily={"Roboto"}
              fontSize={"7vw"}
              fontWeight={"800"}
              textShadow={"5px 5px 0px rgba(0,0,0,0.8)"}
              color={"#e8e5e5"}
            >
              Team aPP
            </Text>
          </Box>

          <Box width={"90%"}>
            <Text
              fontFamily={"Roboto"}
              fontSize={"1.5vw"}
              fontWeight={"500"}
              textShadow={"2px 2px 0px rgba(0,0,0,0.8)"}
              color={"#e8e5e5"}
            >
              Você e sua equipe em sintonia como nunca foram! Clique no número e saiba mais
            </Text>
            <Button title={"Saiba mais"}>
              <Text
                fontFamily={"Roboto"}
                fontSize={"7vw"}
                fontWeight={"800"}
                textShadow={"5px 5px 0px rgba(0,0,0,0.8)"}
                color={"#e8e5e5"}
                ref={numberRef}
              >
                1-800-2102-2025
              </Text>
            </Button>

            {/* Carrossel de texto */}
            <Box width="70%" overflow="hidden" position="relative">
              <Text
                ref={textRef}
                fontFamily={"Times New Roman"}
                fontSize={"1.2vw"}
                fontWeight={"500"}
                textShadow={"2px 2px 0px rgba(0,0,0,0.8)"}
                color={"#e8e5e5"}
                position="absolute"
              >
                {text}
              </Text>
            </Box>
            <Button padding={"20px 0px 0px 0px"} onClick={() => handleGoBack()}>
              <Text fontFamily={"Times New Roman"} textShadow={"2px 2px 0px rgba(0,0,0,0.8)"} color={"#e8e5e5"}>Voltar</Text>
            </Button>
          </Box>
        </Box>
      </ImageBackground>
      <VideoOverlay videoLink={tvOverlay} opacity={0.15} />
      {showGlitch && <VideoGlitchTransition />}
    </>
  );
};

export default Projeto03;
