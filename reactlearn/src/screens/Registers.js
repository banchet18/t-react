const Registers = () => {
  return (
    <div>
      <div>
        <h2>My Todos</h2>
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
