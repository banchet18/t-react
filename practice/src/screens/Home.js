import Card from "../components/Card";

import data from "../utils";

const Home = () => {
  return (
    <div>
      <div>
        {data.map(({ title, email, rollNo }) => {
          return <Card title={title} email={email} rollNo={rollNo} />;
        })}
      </div>
    </div>
  );
};
export default Home;
