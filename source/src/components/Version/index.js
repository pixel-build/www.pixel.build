export default function Version(props) {
  let versionString = props?.version || "v0.4.2";

  return (
    <a
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        padding: "1rem",
        fontWeight: "900",
        textDecoration: "underline dotted",
      }}
      href="https://github.com/pixel-build/www.pixel.build"
      target="_blank"
    >
      {versionString}
    </a>
  );
}
