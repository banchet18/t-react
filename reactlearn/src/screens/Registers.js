import { useState } from "react";

const Registers = () => {
  const [count, setCount] = useState();
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        Count:{count}
        <button onClick={increment}></button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};
export default Registers;
