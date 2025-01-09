import React from "react";
import "./index.css";
import "./App.css";
import Greetings from "./components/Greetings";
import { Hello, Goodbye } from "./components/Greetings";

function App() {
  return (
    <div>
      App
      <Greetings />
      <Hello />
      <Goodbye />
    </div>
  );
}

export default App;
