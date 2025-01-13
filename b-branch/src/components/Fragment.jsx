import React from "react";

function Fragment() {
  return (
    // <div>
    //   <h1> Sum is: {add(2, 5)}</h1>
    // </div>
    // <div>
    //   <h1>Color is blonde</h1> <p>I don't like blond hair</p>
    //   <span>Make it black</span>
    // </div>
    <>
      <h1>Color is blonde</h1> <p>I don't like blond hair</p>
      <span>Make it black</span>
      <br />
      <span>Hi There How are you?</span>
    </>
  );
}

export default Fragment;
