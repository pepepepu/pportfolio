import React, { useRef, useState } from "react";
import { Box, Button, ImageBackground, Text } from "../../components";
import { AnimatedTitle } from "../../components/molecules";
import videoBG from "../../assets/videos/videoBG.mp4";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<HTMLButtonElement>(null);

  const [zoomProps, setZoomProps] = useState<{ x: number; y: number; scale: number } | null>(null);
  const [whiteout, setWhiteout] = useState(false); // inicia o fade branco
  const [showTransition, setShowTransition] = useState(false); // controla exibição da transição de cor


  const handleZoomToProjetos = () => {
    const container = containerRef.current;
    const projetos = projetosRef.current;

    if (container && projetos) {
      const containerRect = container.getBoundingClientRect();
      const projetosRect = projetos.getBoundingClientRect();

      const targetX = projetosRect.left + projetosRect.width / 2;
      const targetY = projetosRect.top + projetosRect.height / 2;
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      const offsetX = targetX - centerX;
      const offsetY = targetY - centerY;
      const scale = 10; // Experimente de 8 a 12

      document.body.style.overflow = "hidden";
      setZoomProps({ x: offsetX, y: offsetY, scale });

      setTimeout(() => {
        setWhiteout(true);
      }, 200); // após zoom

      setTimeout(() => {
        setShowTransition(true); // mostra transição colorida
      }, 1300); // após fade branco

      setTimeout(() => {
        document.body.style.overflow = "";
        navigate("/projetos");
      }, 2100);
    }
  };


  return (
    <motion.div
      ref={containerRef}
      animate={
        zoomProps
          ? {
            scale: zoomProps.scale,
            x: -zoomProps.x * zoomProps.scale,
            y: -zoomProps.y * zoomProps.scale,
            transition: { duration: 1, ease: "easeInOut" },
          }
          : { scale: 1, x: 0, y: 0 }
      }
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: whiteout ? "#ffffff" : "transparent",
        willChange: "transform",
        transformPerspective: "1000px", // <- adiciona suavização 3D
      }}
    >
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
          padding={"50px 20px 100px 20px"}
          justifyContent={"space-between"}
          gap={"5px"}
        >
          <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
            <Button background={"transparent"} hoverBackground={"transparent"}>
              <Text fontSize={"1.2rem"} color={"#393434"} fontWeight={"600"} />
            </Button>
            <Button
              ref={projetosRef}
              onClick={handleZoomToProjetos}
              background={"transparent"}
              hoverBackground={"transparent"}
              padding={"0px"}
            >
              <Text fontSize={"1.2rem"} color={"#dbdbd7"} fontWeight={"600"} emptyButton >
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
      <AnimatePresence>
        {whiteout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "#dbdbd7",
              zIndex: 1000,
            }}
          />
        )}

        {showTransition && (
          <motion.div
            initial={{ backgroundColor: "#dbdbd7" }}
            animate={{ backgroundColor: "#3808e9" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 1001,
              overflow: "hidden",
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
