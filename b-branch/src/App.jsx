import React, { createContext } from "react";
import ChildA from "./components/ChildA";

// create --> createContext();
// provider --> contextProvider();
// consumer --> contextConsumer();

const data = createContext();
const data1 = createContext();
const data2 = createContext();

export default function App() {
  const name = "Aravind";
  const age = 18;
  const gender = "male";

  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <data2.Provider value={gender}>
            <ChildA />
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

// export default App;
export { data, data1, data2 };
