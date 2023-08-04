import { useState } from "react";
import "./index.css";

function App() {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  let [background, setBackground] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  let updateBackground = () => {
    setBackground([randomColor(), randomColor(), randomColor()]);
  };

  setInterval(updateBackground, 1000);

  return (
    <div
      className="App"
      style={{
        backgroundColor: `rgb(${background[0]}, ${background[1]}, ${background[2]})`,
      }}
    ></div>
  );
}

export default App;
