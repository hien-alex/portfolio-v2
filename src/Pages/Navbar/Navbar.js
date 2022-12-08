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
          <a href="#tsparticles-2">Home</a>
        </Link>
        <li class={"nav-item"}>
          <a href="">About</a>
        </li>
        <li class={"nav-item"}>
          <a href="">Projects</a>
        </li>
        <li class={"nav-item"}>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
