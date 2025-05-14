import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import weatherBG from "../../../assets/videos/weatherBG.mp4";
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

  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        gradientBackground={{
          type: "linear",
          direction: "to bottom",
          colors: ["#26262b", "#1E1E1E"]
        }}
        padding="60px 20px"
      >
        <Text fontFamily={"Cinzel Decorative"} fontSize="2rem" fontWeight="900" color="#efef">no idea</Text>
      </Box>
      <VideoOverlay videoLink={tvOverlay} opacity={0.1} />
      {showGlitch && <VideoGlitchTransition />}
    </>
  );
};

export default Projeto03;
