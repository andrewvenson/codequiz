import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LandingPage from "./Components/LandingPage";
import Quiz from "./Components/Quiz";
import "./App.css";

function App() {
  const [quiz, setQuiz] = useState(false);
  return (
    <Container>
      {!quiz ? <LandingPage setquiz={setQuiz} /> : <Quiz />}
    </Container>
  );
}

export default App;
