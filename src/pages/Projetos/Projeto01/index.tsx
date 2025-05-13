import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import ad01 from "../../../assets/images/ads/ad01.png";
import logo from "../../../assets/images/icons/maMusic-logo.png";
import tvOverlay from "../../../assets/videos/tvOverlay.mp4";
import { Box, Button, Image, Indicator, Text, TextCarrousel, VideoGlitchTransition, VideoOverlay } from "../../../components";
import { useNavigate } from "react-router-dom";

const Projeto01: React.FC = () => {
  const navigate = useNavigate();
  const anuncioRef = useRef<HTMLImageElement>(null);
  const [showGlitch, setShowGlitch] = useState(false);

  const options = [
    { text: "GitHub", onClick: () => null },
    { text: "Acessar Site", onClick: () => null },
    { text: "Tecnologias Utilizadas", onClick: () => null },
    { text: "Propósito", onClick: () => null },
    {
      text: "Voltar", onClick: () => {
        setShowGlitch(true);
        setTimeout(() => {
          navigate(-1);
        }, 400); // mesmo tempo que a animação de glitch
      },
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const optionsRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setSelectedIndex((prev) => (prev + 1) % options.length);
      } else if (e.key === "ArrowUp") {
        setSelectedIndex((prev) => (prev - 1 + options.length) % options.length);
      } else if (e.key === "Enter") {
        optionsRefs.current[selectedIndex]?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, options.length]);

  useEffect(() => {
    if (!anuncioRef.current) return;

    // Inclinação fixa
    gsap.set(anuncioRef.current, {
      rotation: -10,
      transformOrigin: "center center"
    });

    // Piscar a cada 2 segundos
    gsap.to(anuncioRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);



  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        gradientBackground={{
          type: "linear",
          direction: "to bottom",
          colors: ["#0c0642", "#b59ebd"]
        }}
        justifyContent={"space-between"}
        padding="60px 20px"
      >
        <Box width={"80%"} height={"80%"} flexDirection={"row"} justifyContent={"space-between"}>
          <Box width={"58%"} height={"100%"} justifyContent={"flex-start"} gap={"30px"}>
            <Box width={"100%"} height={"25%"} flexDirection={"row"} justifyContent={"flex-start"} gap={"30px"}>
              <Image ref={anuncioRef} src={logo} height={"70%"} />
              <Text
                fontSize={"3.2vw"}
                fontWeight={"800"}
                gradientText={{
                  direction: "to bottom",
                  colors: ["#e2e2e2", "#77797b", "#e2e2e2"]
                }}
                gradientTextShadow="5px 5px 0px rgba(0,0,0,0.8)"
              >
                maMUSIC
              </Text>
            </Box>
            <Box width={"80%"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={"20px"}>
              {options.map((opt, index) => (
                <Button
                  background={"transparent"}
                  hoverBackground={"transparent"}
                  padding={"0px"}
                  onClick={opt.onClick}
                  key={opt.text}
                  ref={(el) => {
                    optionsRefs.current[index] = el;
                  }}
                >
                  <Text
                    fontFamily={"Roboto"}
                    fontSize={index === selectedIndex ? "3vw" : "2.5vw"}
                    color={"#e5e5e5"}
                    textShadow={"3px 3px 0px rgba(0,0,0,0.8)"}
                    fitText
                    minFontSize={"2.2vw"}
                    maxFontSize={"3vw"}
                    textAlign={"left"}
                  >
                    <Indicator className={index === selectedIndex ? "visible" : ""}>&gt;</Indicator>
                    {opt.text}
                  </Text>
                </Button>
              ))}
            </Box>
          </Box>

          <Box width={"40%"} height={"80%"} gap={"20px"}>
            <Image ref={anuncioRef} src={ad01} width={"90%"} />
            <Box width={"80%"}>
              <Text fontFamily={"Roboto"} color={"#e0e000"} textShadow={"3px 3px 0px rgba(0,0,0,0.8)"}>
                * Utilize os botões do teclado para navegar
              </Text>
            </Box>
          </Box>
        </Box>
        <TextCarrousel />
      </Box>
      <VideoOverlay videoLink={tvOverlay} />
      {showGlitch && <VideoGlitchTransition />}
    </>
  );
};

export default Projeto01;
