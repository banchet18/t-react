import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello World");
  };

  return (
    <form>
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" placeholder="Enter Password" />
        <button onClick={handleRegister}>submit</button>
      </div>
    </form>
  );
};
export default Register;
