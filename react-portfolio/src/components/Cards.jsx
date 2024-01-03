import ProjectList from "../utils";
import Card from "./Card";
import "../styles/Card.css";

const Cards = () => {
  return (
    <div className="cardmain">
      {ProjectList.map(({ img, link, linkName, id, git }) => {
        return (
          <Card img={img} link={link} linkName={linkName} key={id} git={git} />
        );
      })}
    </div>
  );
};
export default Cards;
