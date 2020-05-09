import React, { useState } from "react";
import Timer from "./Timer";
import Quiz from "./Quiz";
import firebase from "../Firebase";
import { Modal, Button } from "react-bootstrap";

const QuizFrame = (props) => {
  const db = firebase.firestore();
  const statRef = db.collection("stats");

  //   nickname and point states
  const [quizentry, setQuizEntry] = useState({
    nickname: "",
    points: 0,
  });

  //   state to for setting and checking timer status
  const [timerstatus, setTimerStatus] = useState(true);

  // boostrap modal states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // saves highscore with nickname and sends back to homescreen
  const save = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    statRef.doc().set({
      nickname: quizentry.nickname,
      score: quizentry.points,
      date: `${month}-${day}-${year}`,
    });
    props.setquiz(false);
  };

  return (
    <>
      <Timer
        setquiz={props.setquiz}
        handleshow={handleShow}
        settimerstatus={setTimerStatus}
      />
      <Quiz
        setquiz={props.setquiz}
        setquizpoints={setQuizEntry}
        quizentry={quizentry}
        timerstatus={timerstatus}
      />
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Final Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Wooo, you got {quizentry.points} points!{" "}
            <form>
              <input
                style={{ padding: "5px", borderRadius: "10px" }}
                placeholder="Enter your nickname"
                onChange={(e) =>
                  setQuizEntry({ ...quizentry, nickname: e.target.value })
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
    </>
  );
};

export default QuizFrame;
