import React from "react";
// import { Container } from "react-bootstrap";
import Question from "./Questions";
import Timer from "./Timer";
const Quiz = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            borderRadius: "5px",
            padding: "10px",
            color: "white",
            backgroundColor: "purple",
            borderColor: "purple",
            boxShadow: "2px 3px 4px gray",
            cursor: "pointer",
          }}
          //   setquiz to false and show highscores
          onClick={() => props.setquiz(false)}
        >
          View high scores
        </button>
        <h2>This is the quiz mane</h2>
        <Timer />
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <Question question="Man you better know this easy javascript question" />
      </div>
    </div>
  );
};

export default Quiz;
