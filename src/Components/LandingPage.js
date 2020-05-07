import React from "react";
import Highscores from "./Highscores";

const LandingPage = (props) => {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Code Quiz Challenge</h1>
      </div>
      <div className="descriptContainer">
        <p style={{ width: "500px" }}>
          Try to answer as many multiple choices questions as you can before the
          time runs out. Your score doubles on each correct answer. If you
          answer incorrectly you receive no points and correct answer afterwards
          goes back to default till next streak is hit. Let's learn some
          Javascript.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => props.setquiz(true)}
          className="startQuiz"
          style={{
            borderRadius: "5px",
            padding: "10px",
            color: "white",
            backgroundColor: "purple",
            borderColor: "purple",
            boxShadow: "2px 3px 4px gray",
            cursor: "pointer",
          }}
        >
          Start Quiz
        </button>
      </div>

      <hr style={{ color: "gray", width: "50%", marginTop: "25px" }} />
      <Highscores />
    </div>
  );
};

export default LandingPage;
