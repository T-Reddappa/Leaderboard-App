import React, { useState } from "react";
import { addScore } from "../../redux/actions";
import { useDispatch } from "react-redux";

import "./AddScorePopup.css";

const AddScorePopup = () => {
  const [username, setUsername] = useState("");
  const [time, setTime] = useState({
    minutes: "",
    seconds: "",
    milliseconds: "",
  });

  const dispatch = useDispatch();

  const handleTimeInput = (e) => {
    if (e.target.name === "minutes") {
      setTime({ ...time, minutes: e.target.value });
    } else if (e.target.name === "seconds") {
      setTime({ ...time, seconds: e.target.value });
    } else if (e.target.name === "milliseconds") {
      setTime({ ...time, milliseconds: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = `${time.minutes}: ${time.seconds}: ${time.milliseconds}`;
    console.log({ username: username, score: score });
    dispatch(addScore({ username: username, score: score }));
    setUsername("");
    setTime({ minutes: "", seconds: "", milliseconds: "" });
  };

  return (
    <div className="popup-container">
      <h2>Add Score</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Score
          <div className="time-inputs">
            <input
              type="text"
              name="minutes"
              placeholder="MM"
              value={time.minutes}
              maxLength="2"
              pattern="\d*"
              required
              onChange={handleTimeInput}
            />
            <input
              type="text"
              className="seconds-input"
              name="seconds"
              placeholder="SS"
              value={time.seconds}
              maxLength="2"
              pattern="\d*"
              required
              onChange={handleTimeInput}
            />
            <input
              type="text"
              className="milliseconds-input"
              name="milliseconds"
              placeholder="MS"
              value={time.milliseconds}
              maxLength="3"
              pattern="\d*"
              required
              onChange={handleTimeInput}
            />
          </div>
        </label>
        <button type="submit">Add Score</button>
      </form>
    </div>
  );
};

export default AddScorePopup;
