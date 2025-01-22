// import React, { createContext } from "react";
// import ChildA from "./components/ChildA";

// // create --> createContext();
// // provider --> contextProvider();
// // consumer --> contextConsumer();

// const data = createContext();
// const data1 = createContext();
// const data2 = createContext();

// export default function App() {
//   const name = "Aravind";
//   const age = 18;
//   const gender = "male";

//   return (
//     <div>
//       <data.Provider value={name}>
//         <data1.Provider value={age}>
//           <data2.Provider value={gender}>
//             <ChildA />
//           </data2.Provider>
//         </data1.Provider>
//       </data.Provider>
//     </div>
//   );
// }

// // export default App;
// export { data, data1, data2 };

// useMemo Hook :-
// import React, { useMemo, useState } from "react";

// function App() {
//   const [add, setAdd] = useState(0);
//   const [minus, setMinus] = useState(100);
//   const [divide, setDivide] = useState(200);

//   const multiplication = useMemo(function multiply() {
//     console.log("*******************");
//   }, []);

//   function division() {
//     console.log("++++++++++++++++++++");
//   }

//   return (
//     <div>
//       <h1>Learning useMemo Hook</h1>
//       {multiplication}
//       <br />
//       {division()}
//       <br />
//       <button onClick={() => setAdd(add + 1)}>Add</button>
//       <span>{add}</span>
//       <br />
//       <button onClick={() => setMinus(minus - 1)}>Minus</button>
//       <span>{minus}</span>
//       <br />
//       <button onClick={() => setDivide(divide / 2)}>Divide</button>
//       <span>{divide}</span>
//     </div>
//   );
// }

// export default App;

// useCallback Hook :-

import React, { useState, useCallback } from "react";
import ChildA from "./components/ChildA";

function App() {
  const [add, setAdd] = useState(0);

  const Learning = useCallback(() => {
    // some opearations
  }, []);

  return (
    <div>
      <h1>Learning useCallback</h1>
      <ChildA Learning={Learning} />
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
    </div>
  );
}

export default App;
