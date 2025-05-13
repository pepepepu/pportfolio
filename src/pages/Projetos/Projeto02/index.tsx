import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import backButtom from "../../../assets/images/icons/back_button.png";
import card01 from "../../../assets/images/icons/card01.png";
import card02 from "../../../assets/images/icons/card02.png";
import card03 from "../../../assets/images/icons/card03.png";
import videoBG from "../../../assets/videos/rainBg.mp4";
import tvOverlay from "../../../assets/videos/tvOverlay.mp4";
import { Box, Button, Image, ImageBackground, Text, VideoGlitchTransition, VideoOverlay } from "../../../components";

const Projeto02: React.FC = () => {
  const navigate = useNavigate();
  const backButton = useRef<HTMLImageElement>(null);
  const downloadRef = useRef<HTMLParagraphElement>(null);
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    if (!downloadRef.current) return;
    // Piscar a cada 2 segundos
    gsap.to(downloadRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  useEffect(() => {
    if (!backButton.current) return;

    // Inclinação fixa
    gsap.set(backButton.current, {
      rotation: -10,
      transformOrigin: "center center"
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
          colors: ["#1C1D6D", "#1E1E1E"]
        }}
        padding="60px 20px"
      >
        <Box width={"90%"} height={"90%"} justifyContent={"space-between"}>

          <Box width={"100%"} height={"70%"} flexDirection={"row"} justifyContent={"space-between"}>
            <Box width={"50%"} height={"100%"}>
              <ImageBackground
                width={"100%"}
                height={"100%"}
                backgroundVideo={videoBG}
                overlayColor={"rgba(0, 0, 0, 0.0)"}
                justifyContent={"center"}
                alignItems={"center"}
              />
            </Box>
            <Box width={"47%"} height={"100%"} justifyContent={"flex-start"}>
              < Text
                fontFamily={"Roboto"}
                fontSize={"7vw"}
                color={"#EDDC84"}
                textShadow={"3px 3px 0px rgba(0,0,0,0.8)"}
                fitText
                minFontSize={"2.2vw"}
                maxFontSize={"7vw"}
              >
                BREEZE!
              </Text>

              <Box width={"100%"} gap={"25px"}>
                <Box width={"40%"} justifyContent={"space-between"} flexDirection={"row"}>
                  <Image src={card01} width={"31%"} />
                  <Image src={card02} width={"31%"} />
                  <Image src={card03} width={"31%"} />
                </Box>

                <Text
                  fontFamily={"Times New Roman"}
                  textAlign={"left"}
                  fontWeight={"600"}
                  fontSize={"1.5vw"}
                  color={"#dfdddd"}
                  textShadow={"2px 2px 0px rgba(0,0,0,0.8)"}
                  fitText
                  minFontSize={"1.1vw"}
                  maxFontSize={"1.5vw"}
                >
                  Você precisa controlar o uso do seu ar condicionado para evitar gastos? Não se preocupe! Utilize o App Breeze e se livre de todos os problemas
                </Text>

                <Text
                  fontFamily={"Times New Roman"}
                  fontWeight={"600"}
                  fontSize={"3.5vw"}
                  color={"#dfdddd"}
                  textShadow={"2px 2px 0px rgba(0,0,0,0.8)"}
                  fitText
                  minFontSize={"2.1vw"}
                  maxFontSize={"3.5vw"}
                  ref={downloadRef}
                >
                  BAIXE AGORA!
                </Text>
              </Box>
            </Box>
          </Box>
          <Box width={"100%"} height={"28%"} flexDirection={"row"} justifyContent={"space-between"} gap={"25px"}>
            <Text
              fontFamily={"Times New Roman"}
              fontSize={"8vw"}
              fitText
              minFontSize={"5vw"}
              maxFontSize={"8vw"}
              textShadow={"2px 2px 0px rgba(0,0,0,0.8)"}
              color={"#EDDC84"}
            >
              www.breeze.ar.com.br
            </Text>

            <Button
              height={"100%"}
              width={"15%"}
              onClick={() => {
                setShowGlitch(true);
                setTimeout(() => {
                  navigate("/projetos");
                }, 400)
              }}
            >
              <Image src={backButtom} width={"90%"} ref={backButton} />
            </Button>
          </Box>
        </Box>

      </Box >
      <VideoOverlay videoLink={tvOverlay} opacity={0.1} />
      {showGlitch && <VideoGlitchTransition />}
    </>
  );
};

export default Projeto02;
