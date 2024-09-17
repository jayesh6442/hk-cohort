import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-red-400 px-3 py-4">
        <button
          onClick={() => {
            setCount((count) => (count += 1));
          }}
        >
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
