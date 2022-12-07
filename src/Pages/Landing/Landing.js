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
          Hello, I'm <span>Alex</span>.
        </div>

        <div id={"header-2"}>I'm a Full Stack Developer.</div>

        <div id={"center"}>
          <button id="view-work-btn">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span id={"button-text"}>View my work</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
