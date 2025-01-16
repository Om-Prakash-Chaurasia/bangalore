import React from "react";
import ChildA from "./components/ChildA";

function App() {
  const name = "Shiva";
  const age = 25;

  return (
    <div>
      <h1>
        My name is {name} and I am {age} years old.
      </h1>
      <ChildA name={name} />
    </div>
  );
}

export default App;
