import { Fragment, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const NonInteractiveCanvas = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <Fragment>
      <Particles
        id="tsparticles-2"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fullScreen: { enable: false, zIndex: 0 },
          fpsLimit: 120,
          interactivity: {
            detect_on: "window",
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: false,
                mode: "attract",
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 500,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#1DB954",
            },
            collisions: {
              enable: true,
            },
            line_linked: {
              enable: false,
              distance: 100,
              color: { value: "#1DB954" },
              opacity: 1,
              width: 1,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 400,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </Fragment>
  );
};

export default NonInteractiveCanvas;
