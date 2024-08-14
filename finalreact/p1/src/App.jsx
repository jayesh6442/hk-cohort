import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          if (count < 100) {
            setCount((count) => (count += 1));
          }
        }}
      >
        change
      </button>
      <br />

      <button
        onClick={() => {
          if (count > 0) {
            setCount((count) => (count -= 1));
          }
        }}
      >
        minus
      </button>
      <br />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
