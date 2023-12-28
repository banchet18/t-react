const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello World");
  };

  return (
    <form>
      <div>
        <input type="email" placeholder="Enter Email" />
        <button onClick={handleRegister}>submit</button>
      </div>
    </form>
  );
};
export default Register;
