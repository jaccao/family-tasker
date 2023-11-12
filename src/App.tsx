import "./App.css";
import Background from "./components/Background";
import TaskSymbol from "./components/TaskSymbol";
import { FaShower } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background faded={true} />
        <TaskSymbol icon={FaShower} />
      </header>
    </div>
  );
}

export default App;
