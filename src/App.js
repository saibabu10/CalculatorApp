import React, { useState } from "react";
import './App.css'
const App = () => {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleEqual = () => {
    const calculation = result;
    try {
      const evalResult = eval(calculation);
      setResult(evalResult.toString());
      setHistory([...history, { calculation, result: evalResult }]);
    } catch (error) {
      setResult("Error");
  };
   setResult(eval(result).toString());
  };
  const handleClearHistory = () => {
    setHistory([]); // Clear the calculation history
  };
  return (
    <div className="calculator">
      <input type="text" value={result} className="TextBox" readOnly/>
      <div className="buttons">
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <br></br>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="*" onClick={handleClick}>
          *
        </button>
        <br></br>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <br></br>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        
        <button name="+" onClick={handleClick}>+</button>
        <button name="=" onClick={handleEqual}>
          =
        </button>
        <br></br>
        <button name="C" onClick={handleClear}>
          Clear
          </button>
          <div className="history">
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.calculation} = {item.result}
            </li>
          ))}
        </ul>
      </div>
      <button name="history Clear" onClick={handleClearHistory}>History Clear</button>
      </div>
    </div>
  );
};

export default App;