import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Time: {time}</h1>
    </div>
  );
}

export default Timer;
