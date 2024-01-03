import ProjectList from "../utils";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cardmain">
      {ProjectList.map(({ img, link, linkName, id }) => {
        return <Card img={img} link={link} linkName={linkName} key={id} />;
      })}
    </div>
  );
};
export default Cards;
