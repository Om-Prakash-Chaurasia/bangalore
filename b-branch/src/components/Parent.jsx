import React, { useState } from "react";

function Parent() {
  const name = "Shiva";
  return (
    <div>
      <Child fromParent="Hello from Parent" name={name} />
    </div>
  );
}

function Child({ fromParent, name }) {
  const [ownState, setOwnState] = useState("Child's own state");
  return (
    <div>
      <p>Prop from parent: {fromParent}</p>
      <p>My name is {name}</p>
      <p>Child's own state: {ownState}</p>
      <button onClick={() => setOwnState("Updated Child's State")}>
        Update state
      </button>
    </div>
  );
}

export default Parent;
