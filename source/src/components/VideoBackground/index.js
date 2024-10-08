export default function VideoBackground(props) {
  let srcArray = props?.srcArray || ["/4198845-hd_1920_1080_25fps.mp4"];
  let src = props?.src || srcArray[Math.floor(Math.random() * srcArray.length)];
  let type = props?.type || "video/mp4";

  return (
    <video
      playsInline
      autoPlay
      muted
      loop
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <source src={src} type={type} />
    </video>
  );
}
