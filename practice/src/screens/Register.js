import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello world");
  };
  console.log(email);

  return (
    <div>
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
