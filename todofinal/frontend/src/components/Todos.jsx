/* eslint-disable react/prop-types */
function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h3>{todo.title}</h3>
            <h3>{todo.description}</h3>
            <button>
              {todos.completed == true ? "completed" : "mark as done"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
