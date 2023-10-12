import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";
import { FaShower } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Task icon={FaShower} />
      </header>
    </div>
  );
}

export default App;
