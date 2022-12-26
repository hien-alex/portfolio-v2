import NonInteractiveCanvas from "../NonInteractiveCanvas/NonInteractiveCanvas";
import SingleProject from "./SingleProject";
import pathfinderIMG from "../../Assets/Images/Pathfinder.png";
import lexagramIMG from "../../Assets/Images/Lexagram.png";

const Projects = () => {
  return (
    <div id={"projects-container"}>
      <h1 id={"projects-header"}>Projects</h1>
      <div id={"list-of-projects"}>
        <div className={"projects-section-left"}>
          <SingleProject
            imgSrc={pathfinderIMG}
            projectSectionSide={"left"}
            projectTitle={"React Visual Pathfinder"}
            projectInfo={
              "Visualization of graph traversals utilizing different search algorithms."
            }
          />
        </div>

        <div className={"projects-section-right"}>
          <SingleProject
            imgSrc={lexagramIMG}
            projectSectionSide={"right"}
            projectTitle={"React Visual Pathfinder"}
            projectInfo={
              "Visualization of graph traversals utilizing different search algorithms."
            }
          />
        </div>

        <div className={"projects-section-left"}>
          <SingleProject
            imgSrc={lexagramIMG}
            projectSectionSide={"left"}
            projectTitle={"React Visual Pathfinder"}
            projectInfo={
              "Visualization of graph traversals utilizing different search algorithms."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
