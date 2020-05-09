import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Question from "./Questions";
import Timer from "./Timer";
import firebase from "../Firebase";
const Quiz = (props) => {
  const db = firebase.firestore();

  const quizRef = db.collection("quiz");
  const statRef = db.collection("stats");

  const [codequiz, setCodeQuiz] = useState([]);
  const [quizcounter, setquizCounter] = useState({
    counter: 0,
    display: "none",
    answer: "",
  });
  const [points, setPoints] = useState({
    quizpoints: 0,
    streak: 0,
    nickname: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // checks if answer is correct | will add points to if correct
  const checkData = (answer) => {
    if (answer === codequiz[quizcounter.counter].answer.true) {
      if (points.streak >= 1) {
        setPoints({
          ...points,
          quizpoints: points.quizpoints * 2,
          streak: points.streak + 1,
        });
      } else {
        setPoints({
          ...points,
          quizpoints: points.quizpoints + 10,
          streak: points.streak + 1,
        });
      }

      setquizCounter({
        ...quizcounter,
        counter: quizcounter.counter + 1,
        display: "block",
        answer: "You got this Correct",
      });
    } else {
      setPoints({
        ...points,
        quizpoints: points.quizpoints,
        streak: 0,
      });
      setquizCounter({
        ...quizcounter,
        counter: quizcounter.counter + 1,
        display: "block",
        answer: "You got this Incorrect",
      });
    }

    hideData();
  };

  // saves highscore with nickname and sends back to homescreen
  const save = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    // const hours = date.getHours();
    // const minutes = date.getMinutes();

    statRef.doc().set({
      nickname: points.nickname,
      score: points.quizpoints,
      date: `${month}-${day}-${year}`,
    });
    props.setquiz(false);
  };

  // setTimeout on displaying status of answer
  const hideData = () => {
    setTimeout(() => {
      setquizCounter({
        ...quizcounter,
        display: "none",
        counter: quizcounter.counter + 1,
      });
    }, 500);
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
        <Timer handleshow={handleShow} />
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
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Final Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Wooo, you got {points.quizpoints} points!{" "}
            <form>
              <input
                style={{ padding: "5px", borderRadius: "10px" }}
                placeholder="Enter your nickname"
                onChange={(e) =>
                  setPoints({ ...points, nickname: e.target.value })
                }
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                borderRadius: "5px",
                padding: "10px",
                color: "white",
                backgroundColor: "purple",
                borderColor: "purple",
                boxShadow: "2px 3px 4px gray",
                cursor: "pointer",
              }}
              onClick={save}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Quiz;
