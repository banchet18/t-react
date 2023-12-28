const Usercard = ({ name, collegeName, rollNo }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{collegeName}</p>
      <p>{rollNo}</p>
    </div>
  );
};
export default Usercard;
