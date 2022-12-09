import NonInteractiveCanvas from "../NonInteractiveCanvas/NonInteractiveCanvas";
import avatar from "../../Assets/user--avatar.svg";

const About = () => {
  return (
    <div id={"about-container"}>
      <NonInteractiveCanvas />
      <div id={"about-contents"}>
        <h1 id={"about-header"}>About</h1>
        <div id={"about-info"}>
          <div id={"about-left"}>
            <img id={"about-avatar"} src={avatar}></img>
            <div>
              Hi I'm Alex! At this moment, I'm looking for entry / junior level
              oppurtunities in software development. I'm a recent graduate of
              BCITs Computer Science program, majoring in Computer Systems
              Technology. Much of my education was composed of software
              development courses such as object oriented programming,
              procedural programming, algorithms, and data structures. In those
              courses, I've gained a thorough understanding of languages such as
              Python, Java, and Javascript. However, I do have some experience
              in webdevelopment and databases, utilizing React, SQL, and R. As
              of now, my main focus is on expanding my abilities to apply
              algorithms and data structures to practical situations. I have
              created small projects utilizing web development with common
              algorithms but programming in Python is what I'm most familiar
              with. At this moment I'm excited to apply what I've learned and to
              find opportunities will teach me what it takes to be a software
              developer!
            </div>
          </div>
          <div id={"about-right"}>
            Hi I'm Alex! At this moment, I'm looking for entry / junior level
            oppurtunities in software development. I'm a recent graduate of
            BCITs Computer Science program, majoring in Computer Systems
            Technology. Much of my education was composed of software
            development courses such as object oriented programming, procedural
            programming, algorithms, and data structures. In those courses, I've
            gained a thorough understanding of languages such as Python, Java,
            and Javascript. However, I do have some experience in webdevelopment
            and databases, utilizing React, SQL, and R. As of now, my main focus
            is on expanding my abilities to apply algorithms and data structures
            to practical situations. I have created small projects utilizing web
            development with common algorithms but programming in Python is what
            I'm most familiar with. At this moment I'm excited to apply what
            I've learned and to find opportunities will teach me what it takes
            to be a software developer!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
