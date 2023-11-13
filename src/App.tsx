import "./App.css";
import Background from "./components/Background";
import TaskSymbol from "./components/TaskSymbol";
import { FaShower } from "react-icons/fa";
import { TaskStatus } from "./model/TaskStatus";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background faded={true} />
        <TaskSymbol icon={FaShower} status={TaskStatus.COLLECTED}/>
      </header>
    </div>
  );
}

export default App;
