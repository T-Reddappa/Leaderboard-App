// src/components/Leaderboard.js
import React, { useState, useEffect } from "react";
import "./Leaderboard.css";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const dummyScores = useSelector((state) => state.scores);
  const [sortedScores, setSortedScores] = useState([]);

  useEffect(() => {
    const sorted = [...dummyScores].sort((a, b) => {
      const [aMinutes, aSeconds, aMilliseconds] = a.score
        .split(":")
        .map(Number);
      const [bMinutes, bSeconds, bMilliseconds] = b.score
        .split(":")
        .map(Number);
      return (
        aMinutes - bMinutes ||
        aSeconds - bSeconds ||
        aMilliseconds - bMilliseconds
      );
    });
    setSortedScores(sorted);
  }, [dummyScores]);

  return (
    <div className="leaderboard-container">
      <h1>Fastest Ten</h1>
      <div className="list-container">
        {/* <ul>
          <li>Rank Name Scoore</li>
          {sortedScores.map((score, index) => (
            <li key={index} className="profile-bar">
              {index + 1}. {score.username} - {score.score}
            </li>
          ))}
        </ul> */}
        <table>
          <tr className="table-head">
            <th className="rank-column">Rank</th>
            <th className="username-column">Name</th>
            <th className="score-column">Time</th>
          </tr>
          {sortedScores.map((score, index) => {
            return (
              <tr className="score-card">
                <td className="rank-column">{index + 1}</td>
                <td className="username-column">{score.username}</td>
                <td className="score-column">{score.score}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
