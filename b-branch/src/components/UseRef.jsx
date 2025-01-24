import React, { useState, useRef } from "react";

function UseRef() {
  const [name, setName] = useState("Om Prakash");
  const refElement = useRef();
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }

  function handleChange(e) {
    refElement.current.style.color = "red";
    refElement.current.value = "Chaurasia";
  }

  return (
    <div>
      <h1>Learning useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleChange}>Reset</button>
    </div>
  );
}

export default UseRef;
