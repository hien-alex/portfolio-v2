import "./scss/Main.scss";
import Landing from "./Pages/Landing/Landing.js";
import Navbar from "./Pages/Navbar/Navbar";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
