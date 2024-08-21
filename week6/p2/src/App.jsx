/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      desrcription: "we need to go to gym",
    },
    {
      title: "go to gym",
      desrcription: "we need to go to gym",
    },
    {
      title: "go to gym",
      desrcription: "we need to go to gym",
    },
  ]);
  return (
    <>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} desrcription={todo.desrcription} />
      ))}
    </>
  );
}


function Todo({ title, desrcription }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{desrcription}</h3>
    </div>
  );
}

export default App;
