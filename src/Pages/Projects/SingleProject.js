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
      <h1>HENRLHNJE</h1>
    </div>
  );
};

export default SingleProject;
