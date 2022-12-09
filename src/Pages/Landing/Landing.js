import InteractiveCanvas from "../InteractiveCanvas/InteractiveCanvas";
import { Link } from "react-scroll";

const Landing = () => {
  return (
    <div id={"landing-container"}>
      <InteractiveCanvas />
      <div id={"landing-contents"}>
        <div id={"header-1"}>
          Hello, I'm <span>Alex</span>.
        </div>

        <div id={"header-2"}>I'm a Full Stack Developer.</div>

        <div id={"center"}>
          <Link
            activeClass="active"
            to="tsparticles-2"
            smooth={true}
            duration={430}
          >
            <button id="view-work-btn">
              <svg
                width="180px"
                height="60px"
                viewBox="0 0 180 60"
                class="border"
              >
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="bg-line"
                />
                <polyline
                  points="179,1 179,59 1,59 1,1 179,1"
                  class="hl-line"
                />
              </svg>
              <span id={"button-text"}>View my work </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
