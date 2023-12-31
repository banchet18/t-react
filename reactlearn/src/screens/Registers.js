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
      </div>
    </div>
  );
};
export default Registers;
