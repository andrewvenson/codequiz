import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(75);

  useEffect(() => {
    // decrements timer by 1 on each interval
    const interval = setInterval(() => {
      setTimer(timer - 1);
      if (timer === 0) {
        props.setquiz(false);
      }
    }, 1000);

    // clears interval after each render
    return () => clearInterval(interval);
  });

  return (
    <p>
      {timer} <span>sec</span>
    </p>
  );
};

export default Timer;
