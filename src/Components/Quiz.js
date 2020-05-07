import React, { useState, useEffect } from "react";
import Question from "./Questions";
import Timer from "./Timer";
import firebase from "../Firebase";
const Quiz = (props) => {
  const db = firebase.firestore();

  const quizRef = db.collection("quiz");

  const [codequiz, setCodeQuiz] = useState([]);

  const [quizcounter, setquizCounter] = useState(0);

  useEffect(() => {
    quizRef
      .get()
      .then((snapshot) => {
        const quiz = [];
        snapshot.forEach((doc) => {
          quiz.push(doc.data());
        });
        setCodeQuiz(quiz);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  }, []);

  const checkData = (answer) => {
    console.log(answer);
    if (answer === codequiz[quizcounter].answer.true) {
      console.log("you got it mane");
    } else {
      console.log("ahhh you got this incorrect");
    }
  };

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
        <h2 style={{ textShadow: "2px 2px 2px gray" }}>codequiz</h2>
        <Timer setquiz={props.setquiz} />
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <Question
          question={
            codequiz[quizcounter] ? codequiz[quizcounter].question : `...`
          }
        />

        {codequiz[quizcounter] &&
          codequiz[quizcounter].answer.all.map((answer, index) => (
            <div key={index}>
              <button
                style={{
                  borderRadius: "5px",
                  padding: "10px",
                  color: "white",
                  backgroundColor: "purple",
                  borderColor: "purple",
                  boxShadow: "2px 3px 4px gray",
                  cursor: "pointer",
                  margin: "10px 0px 10px 0px",
                }}
                onClick={() => checkData(answer)}
              >
                {answer}
              </button>
            </div>
          ))}
        <br />
      </div>
    </div>
  );
};

export default Quiz;
