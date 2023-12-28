const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello World");
  };

  let age = 19;
  let email = "123@gmail.com";
  return (
    <form>
      {age > 18 && email == "123@gmail.com" ? (
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
