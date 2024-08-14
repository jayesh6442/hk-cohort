/* eslint-disable no-unused-vars */
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  async function getTodos() {
    const res = await fetch("http://localhost:3000/todos");
    const jsondata = await res.json();
    setTodos(jsondata.todos);
  }
  // getTodos();
  return (
    <>
      <CreateTodo />
      <Todos todos={[]} />
    </>
  );
}

export default App;
