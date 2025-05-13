import React from "react";
import { Box } from "../..";

interface videoLinkProps {
  videoLink?: string;
  opacity?: number;
}

const videoOverlay: React.FC<videoLinkProps> = ({ videoLink, opacity }) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      position="fixed"
      zIndex={9999}
      style={{ pointerEvents: "none", top: 0, left: 0 }}
    >
      <video
        src={videoLink}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: opacity ? opacity : 0.03
        }}
      />
    </Box>
  )
}

export default videoOverlay;