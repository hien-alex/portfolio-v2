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
            projectURL={"https://ahien-pathfinder-project.netlify.app/"}
            projectGithub={"https://github.com/hien-alex/pathfinder_visual"}
          />
        </div>

        <div className={"projects-section-right"}>
          <SingleProject
            imgSrc={lexagramIMG}
            projectSectionSide={"right"}
            projectTitle={"Lexagram"}
            projectInfo={
              "Platform for users to post unique photos of their life."
            }
            projectURL={"https://ahien-lexagram.netlify.app/"}
            projectGithub={"https://github.com/hien-alex/Lexagram"}
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
            projectURL={"https://ahien-restaurant-reviews-project.netlify.app/"}
            projectGithub={"https://github.com/hien-alex/MERN-APP"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
