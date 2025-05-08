import React from "react";
import { Box, Text } from "../../components";
import { ColorButton, NavigateButton } from "../../components/molecules";
import { useNavigate } from "react-router-dom";

const Projetos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      background={"#3808e9"}
      justifyContent={"space-between"}
      padding="60px 20px"
    >
      <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
        <NavigateButton onClick={() => navigate("/home")} text={"Home"} fontFamily={"Jersey 10"} align={"flex-start"} />

        <Box width={"5%"}>
          <Text fontSize={"2rem"} color={"#FFF"} textShadow>+</Text>
        </Box>

        <NavigateButton
          onClick={() => null}
          text={"Projetos"}
          fontSize={"4rem"}
          textShadowSize={"2px"}
          fontFamily={"Jersey 10"}
          align={"flex-end"}
        />
      </Box>

      <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
        <Text fontSize={"2rem"} color={"#FFF"} textShadow>+</Text>
        <Box width={"70%"} justifyContent={"space-between"} flexDirection={"row"}>
          <ColorButton backgroundColor={"#FF0000"} hoverBackgroundColor={"#ff9900"} onClick={() => null} text={"maMusic"} />
          <ColorButton backgroundColor={"#00d0ff"} hoverBackgroundColor={"#ff00ee"} onClick={() => null} text={"BREEZE"} />
          <ColorButton backgroundColor={"#FFFF00"} hoverBackgroundColor={"#a200ff"} onClick={() => null} text={"TeamAPP"} />
          <ColorButton backgroundColor={"#00FF00"} hoverBackgroundColor={"#0073ff"} onClick={() => null} text={"fann_"} />
        </Box>
        <Text fontSize={"2rem"} color={"#FFF"} textShadow>+</Text>
      </Box>

      <Box width={"90%"} justifyContent={"space-between"} flexDirection={"row"}>
        <NavigateButton onClick={() => null} text={"Quem sou eu"} fontFamily={"Jersey 10"} align={"flex-start"} />

        <Box width={"5%"}>
          <Text fontSize={"2rem"} color={"#FFF"} textShadow>+</Text>
        </Box>

        <NavigateButton onClick={() => null} text={"Contato"} fontFamily={"Jersey 10"} align={"flex-end"} />
      </Box>
    </Box>
  );
};

export default Projetos;
