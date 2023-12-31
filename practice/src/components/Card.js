const Card = ({ tiltle, email, rollNo }) => {
  return (
    <div>
      <h2>{tiltle}</h2>
      <h2>{email}</h2>
      <h2>{rollNo}</h2>
    </div>
  );
};
export default Card;
