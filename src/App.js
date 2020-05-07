import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Code Quiz Challenge</h1>
      <div className="descriptContainer">
        <p style={{ width: "500px" }}>
          Try to answer as many multiple choices questions as you can before the
          time runs out. Your score doubles on each correct answer. If you
          answer incorrectly you receive no points and correct answer afterwards
          goes back to default till next streak is hit. Let's learn some
          Javascript.
        </p>
      </div>
    </div>
  );
}

export default App;
