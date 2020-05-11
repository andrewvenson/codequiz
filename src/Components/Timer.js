import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // decrements timer by 1 on each interval
    const interval = setInterval(() => {
      if (timer === 70) {
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
    <p
      style={{ display: "flex", justifyContent: "flex-end", marginTop: "5px" }}
    >
      <span
        style={{
          backgroundColor: "lightgray",
          padding: "3px",
          borderRadius: "5px",
          boxShadow: "0px 0px 4px gray",
          fontWeight: "bold",
          color: "#4f4f4f",
        }}
      >
        {timer} sec
      </span>
    </p>
  );
};

export default Timer;
