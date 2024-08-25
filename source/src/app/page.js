import "./page.css";

export default function Home() {
  return (
    <main className="space-y-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 max-w-screen-md">
      <p>
        Welcome to <b className="pixelbuild">PixelBuildOS</b>!
      </p>

      <p className="text-justify">
        This is a work-in-progress operating system built for pixel.build, an{" "}
        <a href="https://github.com/zuedev/pixel.build">open-source</a> prop
        design studio by <a href="https://zue.dev">zuedev</a> that specializes
        in building bespoke parts and premium gaming replicas.
      </p>

      <p className="text-justify">
        The goal of this site is to provide a unique experience for users to
        view and interact with the products and services we offer by providing a
        virtual desktop environment that is both fun and functional to use.
      </p>

      <p className="text-justify">
        In the meantime, feel free to shoot us an email via{" "}
        <a href="mailto:hello@pixel.build">hello@pixel.build</a> if you have any
        questions or inquiries.
      </p>
    </main>
  );
}
