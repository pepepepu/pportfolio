import React from "react";
import { Box, ImageBackground, Text } from "../../components";
import { AnimatedTitle } from "../../components/molecules";
import videoBG from "../../assets/videos/videoBG.mp4";

const Home: React.FC = () => {
  return (
    <ImageBackground
      width="100vw"
      height="100vh"
      backgroundVideo={videoBG}
      overlayColor="rgba(0, 0, 0, 0.0)"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="100%"
        height="100%"
        padding="20px"
        justifyContent="center"
        gap="5px"
      >
        <AnimatedTitle text="PPORTFÓLIO" loop={true} />
        <Text
          fontFamily={"EB Garamond"}
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
