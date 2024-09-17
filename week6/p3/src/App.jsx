/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
function App() {
  const [todos, settodos] = useState({});
  // async function getData() {
  //   const res = await fetch("https://sum-server.100xdevs.com/todos");
  //   const data = await res.json();
  //   console.log(data.todos);
  // }
  // getData();

  // useEffect(() => {
  //   setInterval(() => {
  //     fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
  //       const data = await res.json();
  //       settodos(data.todos);
  //     });
  //   }, 10000);
  // }, []);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=1").then(async (res) => {
      const data = await res.json();
      console.log(data);
      settodos(data.todo);
    });
  }, []);
  return (
    <>
      {todos.map((todo, index) => (
        <Todo title={todo.title} description={todo.description} key={index} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}
export default App;
