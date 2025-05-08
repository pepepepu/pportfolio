// components/ImageBackground.tsx
import styled from "styled-components";
import React from "react";

type Size = string | number;

interface ImageBackgroundProps {
  width?: Size;
  height?: Size;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  color?: string;
  border?: string;
  boxShadow?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlayColor?: string;
  children?: React.ReactNode;
  backgroundPosition?: string;
  style?: React.CSSProperties;
}

const formatSize = (value?: Size) => {
  if (typeof value === "number") return `${value}px`;
  return value || "auto";
};

const Container = styled.div<
  Omit<ImageBackgroundProps, "backgroundImage" | "backgroundVideo" | "children">
>`
  position: relative;
  width: ${({ width }) => formatSize(width)};
  height: ${({ height }) => formatSize(height)};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  gap: ${({ gap }) => gap || "0"};
  color: ${({ color }) => color || "inherit"};
  border: ${({ border }) => border || "none"};
  box-shadow: ${({ boxShadow }) => boxShadow || "none"};
  overflow: hidden;
`;

const BackgroundMedia = styled.div<{ image?: string; position?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: ${({ position }) => position || "center"};
  z-index: 0;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
`;

const Overlay = styled.div<{ overlayColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ overlayColor }) => overlayColor || "rgba(0,0,0,0.3)"};
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const ImageBackground: React.FC<ImageBackgroundProps> = ({
  backgroundImage,
  backgroundVideo,
  overlayColor,
  children,
  ...styleProps
}) => {
  return (
    <Container {...styleProps}>
      {backgroundImage && <BackgroundMedia image={backgroundImage} />}
      {backgroundVideo && (
        <BackgroundVideo autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
      )}
      {(backgroundImage || backgroundVideo) && (
        <Overlay overlayColor={overlayColor} />
      )}
      <Content>{children}</Content>
    </Container>
  );
};

export default ImageBackground;
