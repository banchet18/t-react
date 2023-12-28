const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello World");
  };

  let age = 19;
  let email = "123@gmail.com";
  return (
    <form>
      <div>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button onClick={handleRegister}>submit</button>
      </div>
    </form>
  );
};
export default Register;
