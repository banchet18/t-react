import { useEffect, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState(13);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("hello world");
  };

  useEffect(() => {
    console.log("age", age);
  }, [age]);

  const Increase = (e) => {
    e.preventDefault();
    setAge(age + 1);
  };

  return (
    <form>
      {age > 18 ? (
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Submit</button>
        </div>
      ) : (
        <h1>you are not 18</h1>
      )}
      <button onClick={Increase}>Increase</button>
    </form>
  );
};
export default Register;
