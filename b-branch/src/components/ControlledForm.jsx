// import React, { useState } from "react";

// function ControlledForm() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [lastName, setLastName] = useState("");

//   function handleChange(e) {
//     console.log(e.target.name);
//     if (e.target.name == "firstName") {
//       const capsName = e.target.value.toUpperCase();
//       setName(capsName);
//     } else if (e.target.name == "lastName") {
//       const lastName = e.target.value.toUpperCase();
//       setLastName(lastName);
//     } else {
//       const pswd = e.target.value.toUpperCase();
//       setPassword(pswd);
//     }
//   }

//   //   function handleFirstName(e) {
//   //     console.log(e.target.value);
//   //     setPassw;
//   //     ord(e.target.value);
//   //   }

//   //   function handleLastName(e) {
//   //     console.log(e.target.value);
//   //     const capsFirstName = e.target.value.toUpperCase();
//   //     setPassword(capsFirstName);
//   //   }

//   //   function handlePassword(e) {
//   //     console.log(e.target.value);
//   //     setPassword(e.target.value.toUpperCase());
//   //   }

//   return (
//     <>
//       <form>
//         <label>First name : </label>
//         <br />
//         <input
//           type="text"
//           name="firstName"
//           onChange={handleChange}
//           value={name}
//         />
//         <br />
//         <label>Last name : </label>
//         <br />
//         <input
//           type="text"
//           name="lastName"
//           onChange={handleChange}
//           value={name}
//         />
//         <br />
//         <label>Password : </label>
//         <br />
//         <input
//           type="text"
//           name="password"
//           onChange={handleChange}
//           value={password}
//         />
//       </form>
//     </>
//   );
// }

// export default ControlledForm;

import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
