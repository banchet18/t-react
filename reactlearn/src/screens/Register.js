const Register = () => {
  const handleRegister = () => {
    console.log("hello World");
  };

  return (
    <form>
      <input type="email" placeholder="Enter Email" />
      <button onClick={handleRegister}>submit</button>
    </form>
  );
};
export default Register;
