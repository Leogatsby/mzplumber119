import "./MainVideo.scss";

const MAIN_VIDEO_CONFIG = {
  video: "/assets/main.mp4",
  fallbackImage: "/background.jpg",
  title: "하수구 · 싱크대 · 변기막힘 · 누수탐지 / 설비 · 공사",
  description: "보이지 않는 문제까지 정확히 진단합니다"
} as const;

export default function MainVideo() {
  const handleVideoError = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    const video = e.currentTarget;
    console.error("Video error:", {
      error: video.error?.message,
      networkState: video.networkState,
      readyState: video.readyState,
      src: video.src
    });
  };
  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
  };

  return (
    <header className="MainVideoSection">
      <video
        className="MainVideoSection_Video-backgroundZ0"
        autoPlay
        loop
        muted
        playsInline
        onError={handleVideoError}
        onLoadedData={handleVideoLoad}
      >
        <source src={MAIN_VIDEO_CONFIG.video} type="video/mp4" />
      </video>
      <div className="MainVideoSection_OverLayDiv-layerZ1" />

      <div className="MainVideoSection_TextContainer-layerZ2">
        <div className="TextContainer_TextBox">
          <h1 className="TextBox_Title">{MAIN_VIDEO_CONFIG.title}</h1>
          <h2 className="TextBox_Descripiton">
            {MAIN_VIDEO_CONFIG.description}
          </h2>
        </div>
      </div>
    </header>
  );
}
