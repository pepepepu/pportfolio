import videoGlitch from "../../../assets/videos/tvGlitch.mp4";

const VideoGlitchTransition = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      <video
        src={videoGlitch}
        autoPlay
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default VideoGlitchTransition;
