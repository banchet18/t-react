import { useState } from "react";

const Registers = () => {
  const [count, setcount] = useState(0);
  const [todos, setTodos] = useState([]);

  const Increase = () => {};

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {}
      </div>
      <hr />
      <div>
        Count : {count}
        <button onClick={Increase}>Increase</button>
        <h2>expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};
export default Registers;
