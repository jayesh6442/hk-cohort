/* eslint-disable react/prop-types */
// import { useState } from "react";

import { useState } from "react";

// /* eslint-disable react/prop-types */
// function App() {
//   const [value, setValue] = useState("");
//   function chageValue() {
//     setValue(value ? "" : "jayesh");
//   }
//   return (
//     <div>
//       <Header title="jayesh" />
//       <Header title="jayesh 2" />
//       <button onClick={chageValue}>change</button>
//       <Header title={value} />
//     </div>
//   );
// }

// function Header({ title }) {
//   console.log("re rendered");
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   );
// }
// export default App;

// this code minimize the number of the re-render in the code
function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="sarvaiya" />
      <Header title="sarvaiya" />
      <Header title="sarvaiya" />
      <Header title="sarvaiya" />
      <Header title="sarvaiya" />
      <Header title="sarvaiya" />
      <Header title="sarvaiya" />
    </>
  );
}
function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("");

  function ChangeValue() {
    setFirstTitle(firstTitle ? "" : "jayesh");
  }
  return (
    <>
      <button onClick={ChangeValue}>change</button>
      <Header title={firstTitle} />
    </>
  );
}

function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
