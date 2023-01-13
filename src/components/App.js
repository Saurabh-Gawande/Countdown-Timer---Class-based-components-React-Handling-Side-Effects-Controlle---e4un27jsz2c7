import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  
    const [input, setInput] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);
  
    useEffect(() => {
      let intervalId;
      if (timeLeft > 0) {
        intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
      return () => clearInterval(intervalId);
    }, [timeLeft]);

    const handleKeyDown = event => {
      if (event.keyCode === 13) {
        const inputValue = parseInt(input);
        if (!isNaN(inputValue) && inputValue > 0) {
          setTimeLeft(inputValue);
        } else {
          setTimeLeft(0);
        }
      }
    };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} onChange={event => setInput(event.target.value)}/> sec.
        </h1>
      </div>
      <div id="current-time">{timeLeft}</div>
    </div>
  )
}


export default App;
