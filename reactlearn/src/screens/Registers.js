import { useState } from "react";

const expensiveCalculator = (num) => {
  console.log("calculating.....");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const Registers = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const Increase = () => {
    setCount((count) => count + 1);
  };

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
