import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import videoBG from "../../assets/videos/videoBG.mp4";
import { Box, Button, ImageBackground, Text } from "../../components";
import { AnimatedTitle, VideoGlitchTransition } from "../../components/molecules";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showGlitch, setShowGlitch] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [showNoSignal, setShowNoSignal] = useState(false);

  const handleProjetosClick = () => {
    // 0s → GLITCH ON
    setShowGlitch(true);

    // 0.5s → GLITCH OFF
    setTimeout(() => {
      setShowGlitch(false);

      // 1.5s → GLITCH ON
      setTimeout(() => {
        setShowGlitch(true);

        // 2.0s → GLITCH OFF
        setTimeout(() => {
          setShowGlitch(false);

          // 3.0s → GLITCH ON
          setTimeout(() => {
            setShowGlitch(true);

            // 6.0s → GLITCH OFF + tela azul ON
            setTimeout(() => {
              setShowGlitch(false);
              setShowTransition(true);
              setShowNoSignal(true); // Mostra o texto "NO SIGNAL"

              // 1.4s → Esconde "NO SIGNAL"
              setTimeout(() => {
                setShowNoSignal(false);
              }, 1400);

              // 3s depois da tela azul (ou seja, aos 9s) → navega
              setTimeout(() => {
                navigate("/projetos");
              }, 3000);
            }, 3000); // glitch dura 3s (de 3s até 6s)

          }, 1000); // espera até 3s total

        }, 500); // glitch dura 0.5s

      }, 1000); // espera até 1.5s

    }, 500); // glitch dura 0.5s
  };

  return (
    <>
      <ImageBackground
        width={"100vw"}
        height={"100vh"}
        backgroundVideo={videoBG}
        overlayColor={"rgba(0, 0, 0, 0.0)"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={"100%"}
          height={"100%"}
          padding={"60px 20px"}
          justifyContent={"space-between"}
          gap={"5px"}
        >
          <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
            <Button background={"transparent"} hoverBackground={"transparent"}>
              <Text fontSize={"1.2rem"} color={"#393434"} fontWeight={"600"} />
            </Button>
            <Button
              background={"transparent"}
              hoverBackground={"transparent"}
              onClick={handleProjetosClick}
              padding={"0px"}
            >
              <Text fontSize={"1.2rem"} color={"#dbdbd7"} fontWeight={"600"} emptyButton>
                Projetos
              </Text>
            </Button>
          </Box>

          <AnimatedTitle text={"PPORTFÓLIO"} loop />

          <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
            <Button background={"transparent"} hoverBackground={"transparent"} padding={"0px"}>
              <Text fontSize={"1.2rem"} color={"#dbdbd7"} fontWeight={"600"} emptyButton>
                Quem sou eu
              </Text>
            </Button>
            <Button background={"transparent"} hoverBackground={"transparent"} padding={"0px"}>
              <Text fontSize={"1.2rem"} color={"#dbdbd7"} fontWeight={"600"} emptyButton>
                Contato
              </Text>
            </Button>
          </Box>
        </Box>
      </ImageBackground>

      {/* DIV DO GLITCH */}
      {showGlitch && (
        <VideoGlitchTransition />
      )}

      {/* DIV DE TRANSIÇÃO COM FUNDO #3808e9 */}
      {showTransition && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#3808e9",
            zIndex: 9999,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingTop: "70px",
            paddingRight: "70px",
          }}
        >
          {showNoSignal && (
            <Text
              fontFamily={"Jersey 10"}
              fontSize={"3rem"}
              color={"#FFF"}
              textShadowSize={"2px"}
              textShadow
            >
              NO SIGNAL
            </Text>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
