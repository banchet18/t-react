import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ img, link, linkName, key }) => {
  return (
    <div className="wholecard" id={key}>
      <div className="cardwithlink">
        <div className="imgcontainer">
          <img src={img} alt="" className="cardimg" />
        </div>
        <Link to={link}>{linkName}</Link>
      </div>
    </div>
  );
};
export default Card;
