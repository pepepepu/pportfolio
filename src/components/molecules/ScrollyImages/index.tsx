// src/components/ScrollyImages.tsx
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

import image01 from "../../../assets/images/randompics/img-01.jpg";
import image02 from "../../../assets/images/randompics/img-02.jpg";
import image03 from "../../../assets/images/randompics/img-03.jpg";
import image04 from "../../../assets/images/randompics/img-04.jpg";
import image05 from "../../../assets/images/randompics/img-05.jpg";
import image06 from "../../../assets/images/randompics/img-06.jpg";
import image07 from "../../../assets/images/randompics/img-07.jpg";
import image08 from "../../../assets/images/randompics/img-08.jpg";

// Mock para gerar 20 imagens — você pode substituir por suas reais
const baseImages = [
  image01, image02, image03, image04, image05, image06, image07, image08,
];
const imageSources = Array.from({ length: 20 }).map((_, i) => ({
  src: baseImages[i % baseImages.length],
  speed: 0.8 + (i % 5) * 0.1,
}));

// Áreas de grid para até 20 imagens
const getGridArea = (index: number): string => {
  const areas = [
    "1 / 1 / 6 / 8", "3 / 12 / 8 / 20", "9 / 5 / 13 / 15", "14 / 1 / 18 / 8",
    "16 / 12 / 20 / 19", "20 / 2 / 25 / 9", "22 / 11 / 24 / 20", "26 / 5 / 30 / 15",
    "2 / 2 / 6 / 6", "5 / 14 / 10 / 19", "12 / 3 / 17 / 8", "17 / 14 / 21 / 19",
    "22 / 6 / 26 / 11", "27 / 13 / 30 / 18", "8 / 1 / 12 / 5", "13 / 17 / 17 / 20",
    "18 / 5 / 22 / 10", "23 / 14 / 27 / 19", "5 / 6 / 10 / 10", "10 / 10 / 14 / 14",
  ];
  return areas[index - 1] || "auto";
};

// Styled-components para o layout
const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1; // atrás do título, acima do fundo
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const ImagesGrid = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 150vh;
  display: grid;
  grid-template-columns: repeat(20, 2%);
  grid-template-rows: repeat(30, 3%);
  justify-content: center;
  justify-items: center;
  align-items: center;
  opacity: 0; // inicia invisível
`;

const ScrollyImages: React.FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skewSetter = gsap.quickTo("img", "skewY");
    const clamp = gsap.utils.clamp(-20, 20);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      speed: 3,
      effects: true,
      onUpdate: (self) => skewSetter(clamp(self.getVelocity() / -50)),
      onStop: () => skewSetter(0),
    });

    // Fade in das imagens ao iniciar scroll
    gsap.to(imagesRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: imagesRef.current,
        start: "top bottom", // aparece só quando começa o scroll
        end: "top 30%",
        scrub: true,
      },
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <Wrapper>
      <Content>
        <ImagesGrid ref={imagesRef}>
          {imageSources.map((img, i) => (
            <img
              key={i}
              src={img.src}
              data-speed={img.speed}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                gridArea: getGridArea(i + 1),
              }}
            />
          ))}
        </ImagesGrid>
      </Content>
    </Wrapper>
  );
};

export default ScrollyImages;
