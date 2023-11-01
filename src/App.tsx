import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";
import { FaShower } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video autoPlay muted loop id="backgroundvid">
        <source src="movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </header>
    </div>
  );
}

export default App;
