import { useEffect, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useEffect();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("hello world");
  };

  console.log(email);

  return (
    <form>
      <div>
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleRegister}>Submit</button>
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleRegister}>Submit</button>
      </div>
    </form>
  );
};
export default Register;
