import { Fragment, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Canvas from "../Canvas/Canvas";

const Landing = () => {
  return (
    <div id={"landing-container"}>
      <Canvas />
      <div id={"landing-contents"}>
        <div id={"header-1"}>
          Hey, I'm <span>Alex</span>.
        </div>

        <div id={"header-2"}>I'm a Full Stack Developer.</div>

        <div id={"view-work-button"}>
          <span>View my work</span>
          <span>----arrow</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
