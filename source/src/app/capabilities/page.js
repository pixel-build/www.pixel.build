import "./page.css";

export default () => {
  return (
    <main className="space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 max-w-screen-md">
      <p>
        <b className="pixelbuild">PixelBuildOS</b> Capabilities
      </p>

      <p className="text-justify">
        We're currently in the process of building out our capabilities, but we
        have a few things we're getting really good at. Click{" "}
        <a href="https://md.pixel.build/capabilities-draft">here</a> to read our
        draft capabilities document.
      </p>
    </main>
  );
};
