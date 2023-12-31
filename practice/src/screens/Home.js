import Card from "../components/Card";
import data from "../utils";

const Home = () => {
  return (
    <div>
      {data.map(({ title, email, rollNo }) => {
        return <Card title={title} email={email} rollNo={rollNo} />;
      })}
    </div>
  );
};
export default Home;
