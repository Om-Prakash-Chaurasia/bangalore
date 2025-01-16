import React from "react";
import ChildB from "./ChildB";

function ChildA({ name }) {
  return (
    <div>
      <h2>My name is {name}</h2>

      <ChildB name={name} />
    </div>
  );
}

export default ChildA;
