import { useEffect, useState } from "react";
import { formatStopwatch } from "./helper";
import "./style.css";

function Stopwatch() {
  const [second, setSecond] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isStarted) {
        setSecond(second + 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [isStarted, second]);

  const handleReset = () => {
    setSecond(0);
    setIsStarted(false);
  };

  return (
    <div className="wrapper">
      <div className="top">
        <span>{formatStopwatch(second)}</span>
      </div>
      <div className="bottom">
        <div>
          <button className="btn start" onClick={() => setIsStarted(true)}>
            Start
          </button>
        </div>
        <div>
          <button className="btn stop" onClick={() => setIsStarted(false)}>
            Stop
          </button>
        </div>
        <div>
          <button className="btn reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
