import React from "react";
import ChildC from "./ChildC";

function ChildB({ name }) {
  return (
    <div>
      <h3>My name is {name}</h3>
      <ChildC name={name} />
    </div>
  );
}

export default ChildB;
