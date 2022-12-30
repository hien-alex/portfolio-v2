import "./scss/Main.scss";
import Landing from "./Pages/Landing/Landing.js";
import Navbar from "./Pages/Navbar/Navbar";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import NonInteractiveCanvas from "./Pages/NonInteractiveCanvas/NonInteractiveCanvas";

function App() {
  return (
    <div className="App">
      <NonInteractiveCanvas />
      <Landing />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
