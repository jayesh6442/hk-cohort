/* eslint-disable react/prop-types */
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "todo one",
      description: "todo one",
      completed: false,
    },
    {
      title: "todo two",
      description: "todo two",
      completed: false,
    },
  ]);

  // Function to toggle the completion status of a todo
  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          onToggle={() => toggleCompletion(index)}
        />
      ))}

      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              title: "new todo",
              description: "new todo",
              completed: false, // Set initial status to false
            },
          ]);
        }}
      >
        get random todo
      </button>
    </div>
  );
}

function Todo({ title, description, completed, onToggle }) {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <button onClick={onToggle}>{completed ? "completed" : "mark!"}</button>
    </div>
  );
}

export default App;
