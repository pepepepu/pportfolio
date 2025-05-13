import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Box, Text } from "../..";

const TextCarrousel = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const textos = [
    "O maMusic é o seu mais novo portal para saber o que anda acontecendo nas suas plataformas de música favoritas.",
    "Acompanhe os lançamentos, playlists e artistas em alta.",
    "Tudo isso com uma interface moderna e fácil de usar!",
    "Mesmo que a daqui não seja :)"
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const contentWidth = marquee.scrollWidth / 2;

    gsap.to(marquee, {
      x: `-=${contentWidth}`, // Move o tamanho de *uma* cópia
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth)
      }
    });
  }, []);

  return (
    <Box
      width="90%"
      height="18%"
      parallelogram
      skewAngle={-15}
      gradientBackground={{
        type: "linear",
        direction: "to bottom",
        colors: ["#484e59", "#a7a9ba", "#484e59"]
      }}
      boxShadow="7px 7px 0px rgb(0, 0, 0)"
      padding="0px 20px"
      overflow="hidden"
    >
      <Box
        as="div"
        ref={marqueeRef}
        style={{
          display: "flex",
          whiteSpace: "nowrap"
        }}
        flexDirection={"row"}
      >
        {/* Conteúdo duplicado para criar o loop visual */}
        {[...textos, ...textos].map((text, index) => (
          <Text
            key={index}
            fontSize="1.8vw"
            fontWeight="600"
            color="#fff"
            textShadow="2px 2px 0px rgba(0,0,0,0.8)"
            style={{ marginRight: "60px", flexShrink: 0 }}
          >
            {text}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default TextCarrousel;
