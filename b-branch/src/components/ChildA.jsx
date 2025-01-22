// import React from "react";
// import ChildB from "./ChildB";

// function ChildA() {
//   return (
//     <div>
//       <ChildB />
//     </div>
//   );
// }

// export default ChildA;

import { memo } from "react";
import React from "react";

function ChildA({ Learning }) {
  console.log("ChildA component");

  return <div>ChildA</div>;
}

export default memo(ChildA);
