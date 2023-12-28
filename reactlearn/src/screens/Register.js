const Register = () => {
  // const handleRegister = (event) => {
  //   event.preventDefault();
  //   console.log("hello World");
  // };

  return (
    <form>
      <input type="email" placeholder="Enter Email" />
      <button
        onClick={(event) => {
          event.preventDefault();
          console.log("hello world");
        }}
      >
        submit
      </button>
    </form>
  );
};
export default Register;
