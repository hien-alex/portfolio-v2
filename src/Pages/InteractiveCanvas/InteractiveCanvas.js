import { Fragment, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const InteractiveCanvas = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <Particles
      id="tsparticles-1"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        backgroundMode: { enable: true },
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
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 450,
              duration: 0.4,
            },
            connect: {
              radius: 150,
              distance: 150,
              opacity: 1,
            },
            grab: {
              distance: 200,
            },
          },
        },
        particles: {
          color: {
            value: "#06c739",
          },
          collisions: {
            enable: true,
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: { value: "#06c739" },
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
            value: 2,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default InteractiveCanvas;
