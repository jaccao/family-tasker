import "./App.css";

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
