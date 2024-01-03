import "../styles/Card.css";

const Card = ({ img, link, linkName, key }) => {
  return (
    <div className="wholecard" id={key}>
      <div className="cardwithlink">
        <div className="imgcontainer">
          <img src={img} alt="" className="cardimg" />
        </div>
        <a href={link} target="blank">
          <p className="linkName">{linkName}</p>
        </a>
      </div>
    </div>
  );
};
export default Card;
