import React from "react";
import { Box, ImageBackground, Text } from "../../components";
import { AnimatedTitle } from "../../components/molecules";

const Home: React.FC = () => {

  return (
    <ImageBackground
      width="100vw"
      height="100vh"
      backgroundImage="/src/assets/images/field-bg.jpg"
      overlayColor="rgba(0, 0, 0, 0)"
    >
      <Box
        width="100%"
        height="100%"
        padding="20px"
        justifyContent="center"
        gap="5px"
      >
        <AnimatedTitle text="PPORTFÓLIO" />
        <Text
          fontFamily={"Cormorant SC"}
          fontSize={"1.5rem"}
          fontWeight="500"
          color={"#dcd7d7"}
        >
          carregando...
        </Text>
      </Box>
    </ImageBackground>
  );
};

export default Home;
