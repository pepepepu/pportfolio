import React, { useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";
import tvOverlay from "../../../assets/videos/tvOverlay.mp4";
import { Box, Button, Indicator, Text, TextCarrousel, VideoOverlay } from "../../../components";
import gsap from "gsap";

const Projeto01: React.FC = () => {
  const anuncioRef = useRef<HTMLDivElement>(null);

  const options = [
    { text: "GitHub", onClick: () => null },
    { text: "Acessar Site", onClick: () => null },
    { text: "Tecnologias Utilizadas", onClick: () => null },
    { text: "Propósito", onClick: () => null }
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
      rotation: 10,
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
              <Box
                width={100}
                height={100}
                borderRadius={"100px"}
                gradientBackground={{
                  type: "radial",
                  direction: "circle at center",
                  colors: ["#a7a9ba", "#484e59"]
                }}
              >
                <FaMusic size={45} color="#000" />
              </Box>
              <Text
                fontSize={"4rem"}
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
            <Box width={"90%"} height={"75%"} alignItems={"flex-start"} justifyContent={"flex-start"} gap={"20px"}>
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
                    fontSize={index === selectedIndex ? "3.5rem" : "3rem"}
                    color={"#e5e5e5"}
                    textShadow={"3px 3px 0px rgba(0,0,0,0.8)"}
                  >
                    <Indicator className={index === selectedIndex ? "visible" : ""}>&gt;</Indicator>
                    {opt.text}
                  </Text>
                </Button>
              ))}
            </Box>
          </Box>
          <Box width={"40%"} height={"90%"} justifyContent={"flex-start"} alignItems={"flex-end"}>
            <Box
              ref={anuncioRef}
              width={350}
              borderRadius={'1000px'}
              height={350}
              background={"#c10303ca"}
              border={"10px groove #bfb307"}
              padding={"30px"}
              justifyContent={"space-evenly"}
            >
              <Box gap={"5px"}>
                <Text fontFamily={"Times New Roman"} fontSize={"1.8rem"} color="#e6d705"> Projeto feito por</Text>
                <Text fontFamily={"Georgia"} fontWeight={"800"} fontSize={"5rem"} color="#e6d705"> PP</Text>
              </Box>
              <Box gap={"5px"}>
                <Text fontFamily={"Times New Roman"} textAlign={"center"} fontSize={"1rem"} color="#e6d705"> Adiquira já o seu projetinho também</Text>
                <Text fontFamily={"Times New Roman"} textAlign={"center"} fontWeight={"800"} fontSize={"0.8rem"} color="#e6d705"> envie email para spedrobreno.2012@hotmail.com</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <TextCarrousel />
      </Box>
      <VideoOverlay videoLink={tvOverlay} />
    </>
  );
};

export default Projeto01;
