import React, { useRef } from "react";
import { Box, Text } from "../../components";
import cores from "../../styles/cores";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        x: 200,
        rotation: 360,
        duration: 2,
      });
    }
  }, []);

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      background={cores.destaque}
    >
      <Text ref={textRef}>Teste</Text>
    </Box>
  );
};

export default Home;
