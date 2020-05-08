import React, { useState, useEffect } from "react";
import firebase from "../Firebase";

const Highscores = () => {
  const db = firebase.firestore();

  const [stats, setStats] = useState([]);

  const userRefSorted = db.collection("stats").orderBy("score", "desc");

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
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Highscores</h2>
      </div>
      <div className="highscoreContainer">
        <ol className="highscores">
          {stats.map((stat, index) => (
            <li key={index} style={{ backgroundColor: "#b395c2" }}>
              <span style={{ color: "white" }}>{stat.nickname}</span> :{" "}
              <span style={{ color: "#7842f5" }}>{stat.score}pts</span> |{" "}
              <span style={{ color: "lightgray" }}>{stat.date}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Highscores;
