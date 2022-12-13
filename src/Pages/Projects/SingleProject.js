import pathfinderIMG from "../../Assets/Images/Pathfinder.png";

const SingleProject = (props) => {
  const projectSectionSide = props.projectSectionSide;
  return (
    <div
      className={
        projectSectionSide === "right"
          ? "project-container-right"
          : "project-container-left"
      }
    >
      <img className={"project-img"} src={pathfinderIMG} />
    </div>
  );
};

export default SingleProject;
