import React, { useState } from "react";

function DecrementCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Count : {count} {alphabet}
      </h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default DecrementCounter;
