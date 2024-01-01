import { incrementByAmount } from "../store/Reduce";
import Card from "../components/Card";
import store from "../store/Store";
import data from "../utils";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const value = useSelector((state) => state.value);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          store.dispatch(incrementByAmount(5));
          console.log("state updated");
        }}
      >
        add by 5
      </button>
      <div>
        {data.map(({ title, email, rollNo }) => {
          return <Card title={title} email={email} rollNo={rollNo} />;
        })}
      </div>
      <Link to="/register">
        <button>to Register</button>
      </Link>
    </div>
  );
};
export default Home;
