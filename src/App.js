import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LandingPage from "./Components/LandingPage";
import "./App.css";

function App() {
  const [quiz, setQuiz] = useState(false);
  return (
    <Container>
      {!quiz ? <LandingPage /> : console.log("quiz started")}
    </Container>
  );
}

export default App;
