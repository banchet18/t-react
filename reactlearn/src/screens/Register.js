import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello World");
  };

  console.log(email);
  return (
    <form>
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleRegister}>submit</button>
      </div>
    </form>
  );
};
export default Register;
