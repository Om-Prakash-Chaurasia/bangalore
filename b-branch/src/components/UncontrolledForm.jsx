import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Name: ${nameRef.current.value}, Email: ${emailRef.current.value}, Password: ${passwordRef.current.value}`
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" ref={nameRef} />
      <br />
      <label>Email:</label>
      <input type="email" ref={emailRef} />
      <br />
      <label>Password:</label>
      <input type="password" ref={passwordRef} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
