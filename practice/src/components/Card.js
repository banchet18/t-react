const Card = ({ title, email, rollNo }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{email}</h3>
      <h4>{rollNo}</h4>
    </div>
  );
};
export default Card;
