import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "../../components";
import {
  ColorButton,
  NavigateButton,
  VideoGlitchTransition,
} from "../../components/molecules";

const Projetos: React.FC = () => {
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);

  const buttons = [
    {
      text: "maMusic",
      channelText: "[C01]",
      onClick: () => {
        setShowGlitch(true);
        setTimeout(() => {
          navigate("projeto01");
        }, 400); // mesmo tempo que a animação de glitch
      },
      background: "#FF0000",
      hover: "#ff9900",
    },
    {
      text: "BREEZE",
      channelText: "[C02]",
      onClick: () => {
        setShowGlitch(true);
        setTimeout(() => {
          navigate("projeto02");
        }, 400); // mesmo tempo que a animação de glitch
      },
      background: "#00d0ff",
      hover: "#ff00ee",
    },
    {
      text: "TeamAPP",
      channelText: "[C03]",
      onClick: () => null,
      background: "#FFFF00",
      hover: "#a200ff",
    },
    {
      text: "fann_",
      channelText: "[C04]",
      onClick: () => null,
      background: "#00FF00",
      hover: "#0073ff",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % buttons.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (prev) => (prev - 1 + buttons.length) % buttons.length
        );
      } else if (e.key === "Enter") {
        buttonRefs.current[selectedIndex]?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, buttons.length]);

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      background={"#3808e9"}
      justifyContent={"space-between"}
      padding="60px 20px"
    >
      <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
        <NavigateButton
          onClick={() => navigate("/home")}
          text={"HOME"}
          align={"flex-start"}
        />

        <Box>
          <Text fontSize={"1rem"} color={"#FFF"} fontFamily={"VCR OSD Mono"} textShadow>
            Utilize os botões de navegação para interagir
          </Text>
        </Box>

        <NavigateButton
          onClick={() => null}
          text={"PROJETOS"}
          fontSize={"35px"}
          align={"flex-end"}
        />
      </Box>

      <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
        <Text fontSize={"2rem"} color={"#FFF"} textShadow>
          +
        </Text>
        <Box
          width={"70%"}
          justifyContent={"space-between"}
          flexDirection={"row"}
        >
          {buttons.map((btn, index) => (
            <ColorButton
              key={btn.text}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              backgroundColor={btn.background}
              hoverBackgroundColor={btn.hover}
              onClick={btn.onClick}
              text={btn.text}
              channelText={btn.channelText}
              isSelected={index === selectedIndex}
            />
          ))}
        </Box>
        <Text fontSize={"2rem"} color={"#FFF"} textShadow>
          +
        </Text>
      </Box>

      <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
        <NavigateButton
          onClick={() => null}
          text={"QUEM SOU EU"}
          align={"flex-start"}
        />

        <Box width={"5%"}>
          <Text fontSize={"2rem"} color={"#FFF"} textShadow>
            +
          </Text>
        </Box>

        <NavigateButton
          onClick={() => null}
          text={"CONTATO"}
          align={"flex-end"}
        />
      </Box>
      {showGlitch && <VideoGlitchTransition />}
    </Box>
  );
};

export default Projetos;
