import "../styles/Card.css";

const Card = ({ img, link, linkName, key }) => {
  return (
    <div className="wholecard" id={key}>
      <a href={link} target="blank">
        <div className="cardwithlink">
          <div className="imgcontainer">
            <img src={img} alt="" className="cardimg" />
          </div>
          <p className="linkName">{linkName}</p>
        </div>
      </a>
    </div>
  );
};
export default Card;
