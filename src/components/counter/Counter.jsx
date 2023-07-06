import React, { useState } from "react";
import "./counter.style.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const onIncrementHandler = () => {
    setCounter(counter + 1);
  };
  const onDecrementHandler = () => {
    setCounter(counter - 1);
  };
  const onResetHandler = () => {
    setCounter(0);
  };
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <div className="counter_handler">
        <button className="increment" onClick={onIncrementHandler}>
          +
        </button>
        <button onClick={onDecrementHandler}>-</button>
        <button onClick={onResetHandler}>reset</button>
      </div>
    </div>
  );
}

export default Counter;
