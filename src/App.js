import "./scss/Main.scss";
import NonInteractiveCanvas from "./Pages/NonInteractiveCanvas/NonInteractiveCanvas";
import Landing from "./Pages/Landing/Landing.js";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <div className="test">
        <NonInteractiveCanvas />
      </div>
    </div>
  );
}

export default App;
