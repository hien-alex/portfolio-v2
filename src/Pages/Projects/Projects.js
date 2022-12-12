import NonInteractiveCanvas from "../NonInteractiveCanvas/NonInteractiveCanvas";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div id={"projects-container"}>
      <h1 id={"projects-header"}>Projects</h1>
      <div id={"list-of-projects"}>
        <div className={"projects-section-left"}>
          <SingleProject projectSectionSide={"left"} />
        </div>

        <div className={"projects-section-right"}>
          <SingleProject projectSectionSide={"right"} />
        </div>

        <div className={"projects-section-left"}>
          <SingleProject projectSectionSide={"left"} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
