import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video autoPlay muted loop id="backgroundvid">
        <source src="movie.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      </header>
    </div>
  );
}

export default App;
