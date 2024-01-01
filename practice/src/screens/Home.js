import Card from "../components/Card";
import data from "../utils";
import { useSelector } from "react-redux";

const Home = () => {
  const value = useSelector((state) => state.value);
  return (
    <div>
      {data.map(({ title, email, rollNo }) => {
        return <Card title={title} email={email} rollNo={rollNo} />;
      })}
    </div>
  );
};
export default Home;
