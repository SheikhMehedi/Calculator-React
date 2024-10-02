import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
    } else if (value === "DEL") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="buttons">
        <button className="span-two" onClick={() => handleClick("C")}>C</button>
        <button className="span-two" onClick={() => handleClick("DEL")}>DEL</button>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
};

export default App;
