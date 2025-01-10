import React from "react";
import "./index.css";
import "./App.css";
import Greetings from "./components/Greetings";
import Welcome from "./components/Welcome";
import IncrementCounter from "./components/IncrementCounter";
import DecrementCounter from "./components/DecrementCounter";

function App() {
  return (
    <div>
      <Welcome name="Robert Drowny Junior" />
      <Greetings timeOfDay="Night" name="Om Prakash" />
      <IncrementCounter />
      <DecrementCounter />
    </div>
  );
}

export default App;
