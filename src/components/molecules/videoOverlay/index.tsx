import React from "react";
import { Box } from "../..";

interface videoLinkProps {
  videoLink?: string;
}

const videoOverlay: React.FC<videoLinkProps> = ({ videoLink }) => {
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
          opacity: 0.03
        }}
      />
    </Box>
  )
}

export default videoOverlay;