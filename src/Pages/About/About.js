import avatar from "../../Assets/Images/user--avatar.svg";
import cssIcon from "../../Assets/Images/css.png";
import expressIcon from "../../Assets/Images/express.png";
import gitIcon from "../../Assets/Images/git.png";
import htmlIcon from "../../Assets/Images/html.png";
import javascriptIcon from "../../Assets/Images/javascript.png";
import mongoDBIcon from "../../Assets/Images/mongodb.png";
import mySQLIcon from "../../Assets/Images/mysql.png";
import nodeIcon from "../../Assets/Images/node.png";
import reactIcon from "../../Assets/Images/react.png";
import sassIcon from "../../Assets/Images/sass.png";

const About = () => {
  return (
    <div id={"about-container"}>
      <div id={"about-contents"}>
        <h1 id={"about-header"}>About</h1>
        <div id={"about-info"}>
          <div id={"about-intro"}>
            <img id={"about-avatar"} src={avatar}></img>
            <div>
              Hi I'm Alex! At this moment, I'm looking for entry / junior level
              oppurtunities in software development. I'm a recent graduate of
              BCITs Computer Science program, majoring in Computer Systems
              Technology. Much of my education was composed of software
              development courses such as object oriented programming,
              procedural programming, algorithms, and data structures. In those
              courses, I've gained a thorough understanding of languages such as
              Python, Java, and Javascript.
            </div>
          </div>
          <div id={"about-skills"}>
            <div className="skills-column">
              <div className="skill-container">
                <img className="skill-icon-container" src={cssIcon}></img>
                <div className="skill-name">CSS</div>
              </div>
              <div className="skill-container">
                <img className="skill-icon-container" src={expressIcon}></img>
                <div className="skill-name">EXPRESS.JS</div>
              </div>
              <div className="skill-container">
                <img className="skill-icon-container" src={gitIcon}></img>
                <div className="skill-name">GIT</div>
              </div>
            </div>

            <div className="skills-column">
              <div className="skill-container">
                <img className="skill-icon-container" src={htmlIcon}></img>
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill-container">
                <img
                  className="skill-icon-container"
                  src={javascriptIcon}
                ></img>
                <div className="skill-name">JAVASCRIPT</div>
              </div>
              <div className="skill-container">
                <img className="skill-icon-container" src={mongoDBIcon}></img>
                <div className="skill-name">MONGODB</div>
              </div>
              <div className="skill-container">
                <img className="skill-icon-container" src={mySQLIcon}></img>
                <div className="skill-name">MYSQL</div>
              </div>
            </div>

            <div className="skills-column">
              <div className="skill-container">
                <img className="skill-icon-container" src={nodeIcon}></img>
                <div className="skill-name">NODE.JS</div>
              </div>
              <div className="skill-container">
                <img className="skill-icon-container" src={reactIcon}></img>
                <div className="skill-name">REACT</div>
              </div>
              <div className="skill-container">
                <img className="skill-icon-container" src={sassIcon}></img>
                <div className="skill-name">SASS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
