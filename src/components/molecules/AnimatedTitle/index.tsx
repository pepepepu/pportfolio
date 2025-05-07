import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";

const getRandomImage = () => {
  const number = String(Math.floor(Math.random() * 20) + 1).padStart(2, "0");
  return `/src/assets/images/randompics/img-${number}.jpg`;
};

interface AnimatedTitleProps {
  text: string;
  fontSize?: string;
  color?: string;
  fontFamily?: string;
  loop?: boolean; // 🔄 nova prop
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  fontSize = "9rem",
  color = "#dcd7d7",
  fontFamily = "Cormorant SC",
  loop = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef(loop); // para manter valor em ciclos do useEffect

  useEffect(() => {
    loopRef.current = loop;

    const startAnimation = () => {
      if (!containerRef.current) return;

      const spans = containerRef.current.querySelectorAll("span[data-char]");

      spans.forEach((span) => {
        const textEl = span.querySelector(".char-text") as HTMLElement;
        const imgEl = span.querySelector(".char-img") as HTMLImageElement;

        if (textEl && imgEl) {
          gsap.set(textEl, { opacity: 0 });
          gsap.set(imgEl, { opacity: 0 });
        }
      });

      spans.forEach((span, i) => {
        const textEl = span.querySelector(".char-text") as HTMLElement;
        const imgEl = span.querySelector(".char-img") as HTMLImageElement;

        if (!textEl || !imgEl) return;

        const showRandomImages = (count: number, onComplete: () => void) => {
          let shown = 0;
          const showNext = () => {
            imgEl.src = getRandomImage();
            gsap.to(imgEl, {
              opacity: 1,
              duration: 0.1,
              onComplete: () => {
                gsap.to(imgEl, {
                  opacity: 0,
                  duration: 0.1,
                  delay: 0.1,
                  onComplete: () => {
                    shown++;
                    if (shown < count) {
                      showNext();
                    } else {
                      onComplete();
                    }
                  },
                });
              },
            });
          };
          showNext();
        };

        // Delay para efeito cascata
        gsap.delayedCall(i * 0.1, () => {
          showRandomImages(3, () => {
            gsap.to(textEl, { opacity: 1, duration: 0.3 });
          });
        });
      });

      // Se for loop, reinicia após a última animação
      if (loopRef.current) {
        const totalDelay = spans.length * 0.1 + 3 * 0.3 + 0.5;
        gsap.delayedCall(totalDelay, () => {
          startAnimation();
        });
      }
    };

    startAnimation();
  }, [text, loop]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const span = e.currentTarget;
    const textEl = span.querySelector(".char-text") as HTMLElement;
    const imgEl = span.querySelector(".char-img") as HTMLImageElement;

    if (imgEl && textEl) {
      imgEl.src = getRandomImage();
      gsap.to(textEl, { opacity: 0, duration: 0.1, ease: "power2.out" });
      gsap.to(imgEl, { opacity: 1, duration: 0.1, ease: "power2.out" });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const span = e.currentTarget;
    const textEl = span.querySelector(".char-text") as HTMLElement;
    const imgEl = span.querySelector(".char-img") as HTMLElement;

    if (imgEl && textEl) {
      gsap.to(imgEl, { opacity: 0, duration: 0.1, ease: "power2.out" });
      gsap.to(textEl, { opacity: 1, duration: 0.1, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily,
        fontWeight: 400,
        fontSize,
        color,
        display: "flex",
        lineHeight: 1,
      }}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          data-char
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
            margin: 0,
            padding: 0
          }}
        >
          <span
            className="char-text"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: "inline-block",
              opacity: 1,
              transition: "opacity 0.1s ease",
              textShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
            }}
          >
            {char}
          </span>
          <img
            className="char-img"
            src=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "1em",
              objectFit: "cover",
              opacity: 0,
              transition: "opacity 0.1s ease",
            }}
          />
          <span style={{ visibility: "hidden" }}>{char}</span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
