import React, { useState, useEffect } from "react";
import Question from "./Questions";
import Timer from "./Timer";
import firebase from "../Firebase";
const Quiz = (props) => {
  const db = firebase.firestore();

  const quizRef = db.collection("quiz");

  const [codequiz, setCodeQuiz] = useState([]);

  const [quizcounter, setquizCounter] = useState({
    counter: 0,
    display: "none",
    answer: "",
  });

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

  //   checks if answer is correct | will add points to if correct
  const checkData = (answer) => {
    if (answer === codequiz[quizcounter.counter].answer.true) {
      console.log("yayy you got it right");
      setquizCounter({
        ...quizcounter,
        counter: quizcounter.counter + 1,
        display: "block",
        answer: "You got this Correct",
      });
    } else {
      setquizCounter({
        ...quizcounter,
        counter: quizcounter.counter + 1,
        display: "block",
        answer: "You got this Incorrect",
      });
    }

    hideData();
  };

  //   setTimeout on displaying status of answer
  //  why do I have to change quicounter.counter again | only way I was able to get the answer status to dissappear without reverting to next question
  const hideData = () => {
    setTimeout(() => {
      setquizCounter({
        ...quizcounter,
        display: "none",
        counter: quizcounter.counter + 1,
      });
    }, 1500);
  };

  const displayAnswer = {
    display: quizcounter.display,
    textDecoration: "underline",
    color: "lightgray",
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
            codequiz[quizcounter.counter]
              ? codequiz[quizcounter.counter].question
              : `...`
          }
        />

        {codequiz[quizcounter.counter] &&
          codequiz[quizcounter.counter].answer.all.map((answer, index) => (
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
        <h3 style={displayAnswer}>{quizcounter.answer}</h3>
      </div>
    </div>
  );
};

export default Quiz;
