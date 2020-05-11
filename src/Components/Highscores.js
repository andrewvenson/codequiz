import React, { useState, useEffect } from "react";
import firebase from "../Firebase";

const Highscores = (props) => {
  const db = firebase.firestore();

  const [stats, setStats] = useState([]);

  let userRefSorted = db.collection("stats").orderBy("score", "desc").limit(10);

  if (props.allscores) {
    userRefSorted = db.collection("stats").orderBy("score", "desc");
  } else {
    db.collection("stats").orderBy("score", "desc").limit(10);
  }

  // hook for component life cycle
  useEffect(() => {
    userRefSorted
      .get()
      .then((snapshot) => {
        // set this as an array
        const items = [];
        snapshot.forEach((doc) => {
          // push each object of data to items array
          items.push(doc.data());
        });
        // set our gotdata state to new array of objects
        setStats(items);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.allscores]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>{props.allscores ? `All scores` : `Highscores`}</h2>
      </div>
      <div className="highscoreContainer">
        <ol className="highscores" style={{ marginBottom: "0px" }}>
          {stats.map((stat, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#b395c2",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "white" }}>{stat.nickname}</span>
                <span style={{ color: "black" }}>:</span>
                <span style={{ color: "#7842f5" }}>{stat.score}pts </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            borderRadius: "5px",
            padding: "10px",
            color: "white",
            backgroundColor: "purple",
            borderColor: "purple",
            boxShadow: "2px 3px 4px gray",
            cursor: "pointer",
            marginBottom: "12px",
          }}
          onClick={() =>
            props.allscores
              ? props.setallscores(false)
              : props.setallscores(true)
          }
        >
          {props.allscores ? `Show Highscores` : `Show All Scores`}
        </button>
      </div>
    </div>
  );
};

export default Highscores;
