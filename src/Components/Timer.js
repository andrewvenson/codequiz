import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(75);

  useEffect(() => {
    // decrements timer by 1 on each interval
    const interval = setInterval(() => {
      if (timer === 60) {
        props.settimerstatus(false);
        props.handleshow();
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    // clears interval after each render
    return () => clearInterval(interval);
  });

  return (
    <p style={{ display: "flex", justifyContent: "flex-end" }}>
      {timer} <span>sec</span>
    </p>
  );
};

export default Timer;
