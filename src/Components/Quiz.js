import React from "react";
import Question from "./Questions";
const Quiz = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>This is the quiz mane</h2>
        <hr style={{ width: "30%" }} />
        <Question question="Man you better know this easy javascript question" />
      </div>
    </div>
  );
};

export default Quiz;
