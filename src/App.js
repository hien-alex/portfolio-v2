import "./scss/Main.scss";
import Landing from "./Pages/Landing/Landing.js";
import Navbar from "./Pages/Navbar/Navbar";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
