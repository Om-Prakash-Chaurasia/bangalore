// import React from "react";
// import { data, data1, data2 } from "../App";

// function ChildC() {
//   return (
//     <div>
//       <data.Consumer>
//         {(name) => {
//           return (
//             <data1.Consumer>
//               {(age) => {
//                 return (
//                   <data2.Consumer>
//                     {(gender) => {
//                       return (
//                         <h1>
//                           My name is {name} and I am {age} and I am a {gender}
//                         </h1>
//                       );
//                     }}
//                   </data2.Consumer>
//                 );
//               }}
//             </data1.Consumer>
//           );
//         }}
//       </data.Consumer>
//     </div>
//   );
// }

// export default ChildC;

// useCotext Hook :-

import React, { useContext } from "react";
import { data, data1, data2 } from "../App";

function ChildC() {
  const name = useContext(data);
  const age = useContext(data1);
  const gender = useContext(data2);

  return (
    <div>
      <h1>
        My name is {name} and I am a {gender}. I am {age} years old
      </h1>
    </div>
  );
}

export default ChildC;
