import { Fragment, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Canvas.css";

const Canvas = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Fragment>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
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
                mode: ["connect"],
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 300,
                duration: 0.4,
              },
              connect: {
                radius: 150,
                distance: 200,
                opacity: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#00FFFF",
            },
            collisions: {
              enable: true,
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: { value: "#FFFFFF" },
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
                area: 1000,
              },
              value: 125,
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
      <h1 id="K">???E</h1>
    </Fragment>
  );
};

export default Canvas;
