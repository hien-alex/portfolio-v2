import logo from "./logo.svg";
import "./App.css";
import Canvas from "../src/Pages/Canvas/Canvas.js";
import "../src/Pages/Canvas/Canvas.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas />
      </div>
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <h1>Testing</h1>
        {/* You can render <Route> and <NavTabs /> here */}
      </div>
    </div>
  );
}

export default App;
