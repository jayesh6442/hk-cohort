/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */

// import { useState } from "react";
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "go to gym",
//       desrcription: "we need to go to gym",
//     },
//     {
//       title: "go to gym",
//       desrcription: "we need to go to gym",
//     },
//     {
//       title: "go to gym",
//       desrcription: "we need to go to gym",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         title: `new todo`,
//         desrcription: "new todo description",
//       },
//     ]);
//   }

//   return (
//     <>
//       <button onClick={addTodo}>Add todo</button>
//       {todos.map((todo, index) => (
//         <Todo key={index} title={todo.title} desrcription={todo.desrcription} />
//       ))}
//     </>
//   );
// }

// function Todo({ title, desrcription }) {
//   return (
//     <div
//       style={{
//         backgroundColor: "lightsalmon",
//         border: " 2px solid black",
//       }}
//     >
//       <h1>{title}</h1>
//       <h3>{desrcription}</h3>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Card from "./components/Card";
import Text from "./components/Text";
function App() {
  return <div></div>;
}

export default App;
