const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello World");
  };

  let age = 12;
  return (
    <form>
      {age > 18 ? (
        <div>
          <input type="email" placeholder="Enter Email" />
          <button onClick={handleRegister}>submit</button>
        </div>
      ) : (
        <h1>You are a kid</h1>
      )}
    </form>
  );
};
export default Register;
