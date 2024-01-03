import "../styles/Main.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatar from "../assets/avatar.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="hero">
        <h1>Hi, My Name is Chetan Banjara</h1>
        <p>A software developer with a passion for learning and creating.</p>
        <div>
          <a href="https://www.linkedin.com/feed/" target="blank">
            <FaLinkedin />
          </a>
          <a href="" target="blank">
            <MdEmail />
          </a>
        </div>
      </div>
      <div className="heroimg">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
};
export default Main;
