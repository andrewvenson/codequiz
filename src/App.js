import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import QuizFrame from "./Components/QuizFrame";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [quiz, setQuiz] = useState(false);
  return (
    <Container>
      {!quiz ? (
        <LandingPage setquiz={setQuiz} />
      ) : (
        <QuizFrame setquiz={setQuiz} />
      )}
    </Container>
  );
}

export default App;
