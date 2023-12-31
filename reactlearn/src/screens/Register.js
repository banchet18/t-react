//note useEffect hook - it render on screen render
import { useEffect, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState(13);

  useEffect(() => {}, []);

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("hello World");
  };

  const increaseAge = (e) => {
    e.preventDefault();
    setAge(age + 1);
  };

  return (
    <form>
      <button onClick={increaseAge}>Increase</button>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>submit</button>
      </div>
    </form>
  );
};
export default Register;
