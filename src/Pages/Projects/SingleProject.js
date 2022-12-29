const SingleProject = (props) => {
  const projectSectionSide = props.projectSectionSide;
  const projectTitle = props.projectTitle;
  const projectInfo = props.projectInfo;
  const imgSrc = props.imgSrc;
  const projectURL = props.projectURL;
  const projectGithub = props.projectGithub;

  return (
    <div
      className={
        projectSectionSide === "left"
          ? "single-project-container"
          : "single-project-container-reverse"
      }
    >
      <a
        href={projectURL}
        target="_blank"
        className={
          projectSectionSide === "right"
            ? "project-container-right"
            : "project-container-left"
        }
      >
        <img className={"project-img"} src={imgSrc} />
      </a>
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
            <a href={projectURL} target="_blank">
              <button id="try-app-button" className="single-project-button">
                TRY APP
              </button>
            </a>
            <a href={projectGithub} target="_blank">
              <button id="learn-more-button" className="single-project-button">
                LEARN MORE
              </button>
            </a>
          </div>
        </div>
      }
    </div>
  );
};

export default SingleProject;
