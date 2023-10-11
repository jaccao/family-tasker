import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FaShower } from "react-icons/fa";

function App() {
  const [color, setColor] = useState("#61dafb");
  const [time, setTime] = useState(5 * 60 * 1000);
  useEffect(() => {
    setTimeout(() => time && setTime(time - 1000), 1000);
  }, [time]);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <FaShower
              fontSize={48}
              color={color}
              onClick={() => setColor("red")}
            />
          </div>
          <div
            style={{
              fontFamily: "DigitalDreamBold",
              fontSize: 18,
              color,
            }}
          >
            {new Date(time).toJSON().slice(11, 19)}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
