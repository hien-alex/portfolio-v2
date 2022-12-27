import linkedin from "../../Assets/Images/linkedin.png";
import gitIcon from "../../Assets/Images/github.png";
import upArrow from "../../Assets/Images/upArrow.svg";

const Footer = () => {
  return (
    <div id={"footer-container"}>
      <div id={"footer-content-container"}>
        <a href="#landing-container">
          <img id={"footer-up-arrow"} src={upArrow}></img>
        </a>
        <div id={"footer-icons-container"}>
          <a href="https://github.com/hien-alex" target={"_blank"}>
            <img className="footer-icon" src={gitIcon}></img>
          </a>
          <a
            href="https://www.linkedin.com/in/alex-hien-496939213/"
            target={"_blank"}
          >
            <img className="footer-icon" src={linkedin}></img>
          </a>
        </div>
        <div id={"footer-copyright"}>Alex Hien @2022</div>
      </div>
    </div>
  );
};

export default Footer;
