import React from "react";

const LandingPage = () => {
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
      <button
        style={{
          borderRadius: "5px",
          padding: "10px",
          color: "white",
          backgroundColor: "purple",
          borderColor: "purple",
          boxShadow: "2px 3px 4px gray",
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default LandingPage;
