import { useState } from "react";
import { useSelector } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState();
  const value = useSelector((state) => state.value);

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello world");
  };
  console.log(email);

  return (
    <div>
      <h1>{value}</h1>
      <form action="">
        <div>
          <input
            type="email"
            placeholder="enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleRegister}>Submit</button>
          <input
            type="email"
            placeholder="enter the email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleRegister}>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
