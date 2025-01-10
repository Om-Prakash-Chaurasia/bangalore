import React from "react";
import "./index.css";
import "./App.css";
import Greetings from "./components/Greetings";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome name="Robert Drowny Junior" />
      <Greetings timeOfDay="Night" name="Om Prakash" />
    </div>
  );
}

export default App;
