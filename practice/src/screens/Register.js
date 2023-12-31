import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState();

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello world");
  };

  return (
    <div>
      <form action="">
        <input type="email" placeholde="enter the email" value={email} />
        <button onClick={handleRegister}>Submit</button>
      </form>
    </div>
  );
};
export default Register;
