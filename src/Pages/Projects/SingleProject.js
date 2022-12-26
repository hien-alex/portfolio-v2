const SingleProject = (props) => {
  const projectSectionSide = props.projectSectionSide;
  const projectTitle = props.projectTitle;
  const projectInfo = props.projectInfo;
  const imgSrc = props.imgSrc;

  return (
    <div
      className={
        projectSectionSide === "left"
          ? "single-project-container"
          : "single-project-container-reverse"
      }
    >
      <div
        className={
          projectSectionSide === "right"
            ? "project-container-right"
            : "project-container-left"
        }
      >
        <img className={"project-img"} src={imgSrc} />
      </div>
      {
        <div
          className={
            projectSectionSide === "left"
              ? "project-info-right"
              : "project-info-left"
          }
        >
          <h1>{projectTitle}</h1>
          <div className="single-project-info">{projectInfo}</div>
          <div className="single-project-buttons-container">
            <button className="single-project-button">TRY APP</button>
            <button className="single-project-button">LEARN MORE</button>
          </div>
        </div>
      }
    </div>
  );
};

export default SingleProject;
