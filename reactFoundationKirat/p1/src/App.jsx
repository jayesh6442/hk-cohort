import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setCount((count) => (count += 1));
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setName(name ? "" : "sarvaiya");
        }}
      >
        change
      </button>
    </>
  );
}

export default App;
