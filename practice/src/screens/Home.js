import Card from "../components/Card";
import { incrementByAmount } from "../store/Reducer";
import data from "../utils";
import { useSelector } from "react-redux";
import store from "../store/Store";
import { Link } from "react-router-dom";

const Home = () => {
  const value = useSelector((state) => state.value);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          store.dispatch(incrementByAmount(5));
          console.log("update state");
        }}
      >
        add to value
      </button>
      <div>
        {data.map(({ title, email, rollNo }) => {
          return <Card title={title} email={email} rollNo={rollNo} />;
        })}
      </div>
      <Link to="./register">
        <button>to register</button>
      </Link>
    </div>
  );
};
export default Home;
