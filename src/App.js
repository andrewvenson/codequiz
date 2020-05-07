import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import Quiz from "./Components/Quiz";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [quiz, setQuiz] = useState(false);
  return (
    <Container>
      {!quiz ? <LandingPage setquiz={setQuiz} /> : <Quiz setquiz={setQuiz} />}
    </Container>
  );
}

export default App;
