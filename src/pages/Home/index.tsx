import React from "react";
import { Box, Button, ImageBackground, Text } from "../../components";
import { AnimatedTitle } from "../../components/molecules";
import videoBG from "../../assets/videos/videoBG.mp4";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
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
            onClick={() => navigate("/projetos")}
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
  );
};

export default Home;
