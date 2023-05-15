import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="wrapper">
      <div className="column">
        <button className="btn dec" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </div>
      <div className="column">
        <h1>{counter}</h1>
      </div>
      <div className="column" onClick={() => setCounter(counter + 1)}>
        <button className="btn inc">+</button>
      </div>
    </div>
  );
}

export default Counter;
