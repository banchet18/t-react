import "../styles/Card.css";

const Card = ({ img, link, linkName, key, git }) => {
  return (
    <div className="wholecard" id={key}>
      <div className="cardwithlink">
        <div className="imgcontainer">
          <img src={img} alt="" className="cardimg" />
        </div>
        <div className="linkdemogit">
          <a href={link} target="blank">
            <p className="linkName">{linkName}</p>
          </a>
          <a href={git} target="blank">
            <p className="linkName">git</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
