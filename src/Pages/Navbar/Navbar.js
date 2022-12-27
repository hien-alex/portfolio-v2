import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id={"navbar"}>
      <ul id={"nav-list-container"}>
        <Link
          class={"nav-item"}
          activeClass="active"
          to="landing-container"
          smooth={true}
          duration={300}
        >
          <a href="landing-container">Home</a>
        </Link>
        <Link
          class={"nav-item"}
          activeClass="active"
          to="about-container"
          smooth={true}
          duration={300}
        >
          <a href="about-container">About</a>
        </Link>
        <Link
          class={"nav-item"}
          activeClass="active"
          to="projects-container"
          smooth={true}
          duration={300}
        >
          <a href="projects-header">Projects</a>
        </Link>
        <Link
          class={"nav-item"}
          activeClass="active"
          to="footer-container"
          smooth={true}
          duration={300}
        >
          <a href="footer-container">Contact</a>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
