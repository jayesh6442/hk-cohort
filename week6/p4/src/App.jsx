import { useState } from "react";
/* eslint-disable react/prop-types */
function App() {
  const [todos, setTodoarr] = useState([]);
  function addTodo() {
    setTodoarr([
      ...todos,
      {
        title: "random",
        description: "random",
      },
    ]);
  }
  return (
    <>
      <button
        className="border-black border-4 px-2 py-2 rounded-md bg-red-600 text-white"
        onClick={addTodo}
      >
        get random
      </button>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            count={index}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </>
  );
}

function Todo({ title, description, count }) {
  return (
    <div className="border-4 w-fit border-black px-3 py-3 ">
      <h1>{title}</h1>
      <h1>{description}</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
